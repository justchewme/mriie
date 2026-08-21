/**
 * Mriie PADL — customer-contact pipe heartbeat.
 *
 * Runs three times a day and proves, end to end, that a customer can still
 * reach Justin and still pay. The visible signal is a Telegram message to
 * PadelBot carrying the full check summary — if it lands, the pipe flows.
 *
 * Why it exists: in Aug 2026 the site's WhatsApp number wasn't registered on
 * WhatsApp, so every "chat with us" link dead-ended silently for days. Nothing
 * in the stack noticed, because nothing was checking.
 *
 *   node scripts/pipe-heartbeat.mjs
 *
 * Scheduled by ~/Library/LaunchAgents/com.justin.mriie-pipe.plist (09:00,
 * 13:00, 17:00 WIB). Falls back to an ntfy push + email only when the Telegram
 * message itself cannot be delivered.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = process.env.SITE || 'https://mriie.com'

// .env.local holds NTFY_TOPIC and RESEND_API_KEY; it is gitignored.
for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)="?([^"]*)"?$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
}

const loadLib = async (file) => {
  const src = fs.readFileSync(path.join(ROOT, 'lib', file), 'utf8')
  return import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`)
}
const { SHOP } = await loadLib('config.js')
const { products, buySlug } = await loadLib('products.js')

const results = []
const check = async (name, fn) => {
  try {
    const detail = await fn()
    results.push({ name, ok: true, detail })
  } catch (err) {
    results.push({ name, ok: false, detail: err.message })
  }
}

const PAGES = ['', 'checkout', 'contact', 'faq', 'shipping', 'returns', 'terms', 'wholesale', 'id', 'es']

await check('WhatsApp number on every page', async () => {
  const wrong = []
  for (const p of PAGES) {
    const html = await (await fetch(`${SITE}/${p}`)).text()
    const nums = [...new Set([...html.matchAll(/wa\.me\/(\d+)/g)].map((m) => m[1]))]
    // The wholesale form uses a second number, so only flag unexpected ones.
    const bad = nums.filter((n) => n !== SHOP.whatsapp && n !== SHOP.wholesaleWhatsapp)
    if (bad.length) wrong.push(`/${p}: ${bad.join(', ')}`)
  }
  if (wrong.length) throw new Error(`unexpected numbers — ${wrong.join(' | ')}`)
  return `${SHOP.whatsapp} across ${PAGES.length} pages`
})

await check('Direct buy link', async () => {
  const p = products[0]
  const slug = buySlug(p.id, p.variants[0].id)
  const r = await fetch(`${SITE}/buy/${slug}`, { redirect: 'manual' })
  const to = r.headers.get('location') || ''
  if (!to.includes('checkout.stripe.com')) throw new Error(`/buy/${slug} → ${r.status} ${to.slice(0, 40)}`)
  return `/buy/${slug} → Stripe`
})

await check('Bag checkout', async () => {
  const p = products[0]
  const r = await fetch(`${SITE}/api/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [{ productId: p.id, variantId: p.variants[0].id, qty: 1 }],
      delivery: 'pickup',
      customer: { name: 'pipe heartbeat' },
      locale: 'en',
    }),
  })
  const data = await r.json()
  if (!data.url) throw new Error(data.error || `HTTP ${r.status}`)
  return 'Stripe session created'
})

const failures = results.filter((r) => !r.ok)
const stamp = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Jakarta' })
const summary = [
  `${failures.length ? '🔴 PIPE PROBLEM' : '🟢 All clear'} — ${stamp} WIB`,
  '',
  ...results.map((r) => `${r.ok ? '✅' : '❌'} ${r.name}: ${r.detail}`),
  '',
  failures.length
    ? 'Customers may not be able to reach you or pay. Check mriie.com.'
    : 'Customers can reach you and pay. This message proves the contact pipe works.',
].join('\n')

console.log(summary)

// The Telegram message goes through the live enquiry API on purpose — that is
// the exact path a customer's message takes, so delivery proves the real route.
let telegramOk = false
try {
  const r = await fetch(`${SITE}/api/enquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Pipe heartbeat',
      contact: 'automated check',
      message: summary,
      test: true,
    }),
  })
  telegramOk = r.ok
  if (!r.ok) console.error('enquiry API:', r.status, await r.text())
} catch (err) {
  console.error('enquiry API failed:', err.message)
}

// Only shout on a real problem — a healthy run is already visible in Telegram.
const shouldAlert = failures.length > 0 || !telegramOk
if (shouldAlert) {
  const title = telegramOk ? 'Mriie pipe problem' : 'Mriie: Telegram contact pipe is DOWN'
  if (process.env.NTFY_TOPIC) {
    await fetch('https://ntfy.sh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic: process.env.NTFY_TOPIC,
        title,
        message: summary,
        priority: 5,
        tags: ['rotating_light'],
      }),
    }).catch((e) => console.error('ntfy failed:', e.message))
  }
  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Mriie Watchdog <onboarding@resend.dev>',
        to: [process.env.ORDER_NOTIFY_EMAIL || 'justchewme@gmail.com'],
        subject: title,
        text: summary,
      }),
    }).catch((e) => console.error('resend failed:', e.message))
  }
}

process.exit(failures.length ? 1 : 0)
