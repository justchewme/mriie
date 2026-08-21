// Mriie PADL — backup enquiry form → Telegram (PadelBot).
//
// WhatsApp click-to-chat silently dead-ends if the number isn't registered,
// which is exactly what happened in Aug 2026. This route is the path that
// doesn't depend on the customer having WhatsApp at all: the message lands in
// Justin's Telegram within a second.
const TELEGRAM_API = 'https://api.telegram.org'
const MAX = { name: 80, contact: 80, message: 1500, product: 80 }

const clean = (v, max) => (v || '').toString().trim().slice(0, max)

// Telegram's MarkdownV2 is fussy; plain text with HTML escaping is safer.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, contact, message, product, website, test } = req.body || {}

  // Honeypot: real people never fill a field they cannot see.
  if (website) return res.status(200).json({ ok: true })

  const fields = {
    name: clean(name, MAX.name),
    contact: clean(contact, MAX.contact),
    message: clean(message, MAX.message),
    product: clean(product, MAX.product),
  }
  if (!fields.name || !fields.contact || !fields.message) {
    return res.status(400).json({ error: 'Please fill in your name, contact and message.' })
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Enquiry received but Telegram is not configured')
    return res.status(503).json({ error: 'Our message service is down — please email us instead.' })
  }

  const text = [
    test ? '🩺 <b>PIPE TEST</b> — automated check, no customer' : '📩 <b>New enquiry from mriie.com</b>',
    '',
    `<b>Name:</b> ${esc(fields.name)}`,
    `<b>Contact:</b> ${esc(fields.contact)}`,
    fields.product && `<b>Product:</b> ${esc(fields.product)}`,
    '',
    esc(fields.message),
  ].filter(Boolean).join('\n')

  try {
    const r = await fetch(`${TELEGRAM_API}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })
    if (!r.ok) {
      console.error('Telegram send failed:', r.status, await r.text())
      return res.status(502).json({ error: 'We could not deliver your message — please email us instead.' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Enquiry failed:', err.message)
    return res.status(502).json({ error: 'We could not deliver your message — please email us instead.' })
  }
}
