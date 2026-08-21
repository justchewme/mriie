// Mriie PADL — WhatsApp-tap notifier.
//
// Justin's WhatsApp lives on a different phone from Telegram, so every tap on
// a wa.me link fires a Telegram ping too — he knows a chat is (probably)
// incoming before the other phone buzzes. A tap is not a sent message: the
// visitor may close WhatsApp without sending, so the ping says "tapped".
import { limited } from '@/lib/rate-limit'

export const config = { api: { bodyParser: { sizeLimit: '4kb' } } }

const esc = (s) => (s || '').toString().slice(0, 200)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  // Taps are cheap to spam — keep the ceiling low; dropping extras is fine.
  if (limited(req, res, { name: 'wa-click', limit: 8, windowMs: 10 * 60 * 1000 })) return

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return res.status(204).end()

  const { page, text } = req.body || {}
  const msg = [
    '💬 <b>WhatsApp tapped on mriie.com</b>',
    page && `Page: ${esc(page)}`,
    text && `Prefill: “${esc(text)}”`,
    '<i>Tap only — they may or may not press send.</i>',
  ].filter(Boolean).join('\n')

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg, parse_mode: 'HTML', disable_notification: false }),
    })
  } catch {
    // Notification is best-effort; never block the visitor's tap on it.
  }
  return res.status(204).end()
}
