// Mriie PADL — small in-memory rate limiter.
//
// Every public endpoint here costs something real when abused: /api/enquiry
// pushes to Justin's Telegram; keep the flood rate low.
// Checkout Sessions. Without a limit, one script can flood any of them.
//
// Caveat worth knowing: serverless instances don't share memory, so the real
// ceiling is (limit x warm instances), not (limit). That still turns a trivial
// flood into an expensive one. Move to Vercel KV / Upstash if abuse is ever
// seen in the wild.

const buckets = new Map()
const MAX_KEYS = 10_000 // hard cap so a spoofed-IP flood can't exhaust memory

export const clientIp = (req) => {
  const fwd = req.headers['x-forwarded-for']
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim()
  return req.socket?.remoteAddress || 'unknown'
}

/**
 * Fixed-window limiter. Returns { ok, retryAfter } — retryAfter in seconds.
 */
export function rateLimit(req, { name, limit, windowMs }) {
  const now = Date.now()
  const key = `${name}:${clientIp(req)}`
  const entry = buckets.get(key)

  if (!entry || now >= entry.resetAt) {
    if (buckets.size >= MAX_KEYS) {
      for (const [k, v] of buckets) if (now >= v.resetAt) buckets.delete(k)
      if (buckets.size >= MAX_KEYS) buckets.clear()
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfter: 0 }
  }

  entry.count += 1
  if (entry.count > limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }
  return { ok: true, retryAfter: 0 }
}

/** Sends the 429 for you. Returns true when the request should stop. */
export function limited(req, res, opts) {
  const { ok, retryAfter } = rateLimit(req, opts)
  if (ok) return false
  res.setHeader('Retry-After', String(retryAfter))
  res.status(429).json({ error: 'Too many requests — please wait a moment and try again.' })
  return true
}
