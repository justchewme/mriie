// Mriie PADL — Stripe webhook: emails an order alert when a checkout is paid.
// Stripe signs the raw body, so bodyParser must stay off.
import Stripe from 'stripe'

export const config = { api: { bodyParser: false } }

const readRawBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, RESEND_API_KEY } = process.env
  if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET) return res.status(503).end()

  const stripe = new Stripe(STRIPE_SECRET_KEY)
  let event
  try {
    event = stripe.webhooks.constructEvent(
      await readRawBody(req),
      req.headers['stripe-signature'],
      STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    try {
      const { data: lineItems } = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
      const m = session.metadata || {}
      const ship = session.shipping_details || session.customer_details
      const addr = ship?.address
      const lines = [
        `NEW ORDER — ${session.currency.toUpperCase()} ${(session.amount_total / 100).toFixed(2)}${session.livemode ? '' : ' [TEST MODE]'}`,
        '',
        ...lineItems.map((li) => `• ${li.quantity} × ${li.description} — ${(li.amount_total / 100).toFixed(2)}`),
        '',
        `Delivery: ${m.delivery === 'dhl' ? 'DHL Express' : 'Self-collection Bali'}`,
        `Name: ${m.name || ship?.name || '-'}`,
        `WhatsApp: ${m.whatsapp || session.customer_details?.phone || '-'}`,
        `Email: ${session.customer_details?.email || '-'}`,
        addr && `Address: ${[addr.line1, addr.line2, addr.city, addr.postal_code, addr.country].filter(Boolean).join(', ')}`,
        m.notes && `Notes: ${m.notes}`,
        '',
        `Stripe: https://dashboard.stripe.com/${session.livemode ? '' : 'test/'}payments/${session.payment_intent}`,
      ].filter(Boolean)

      // Phone push first — it is the alert Justin actually sees in seconds.
      if (process.env.NTFY_TOPIC) {
        try {
          await fetch('https://ntfy.sh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              topic: process.env.NTFY_TOPIC,
              title: `New Mriie order — ${session.currency.toUpperCase()} ${(session.amount_total / 100).toFixed(2)}${session.livemode ? '' : ' [TEST]'}`,
              message: lines.slice(2).join('\n'),
              tags: ['shopping_bags'],
              priority: 4,
              click: `https://dashboard.stripe.com/${session.livemode ? '' : 'test/'}payments/${session.payment_intent}`,
            }),
          })
        } catch (err) {
          console.error('Push alert failed:', err.message)
        }
      }

      if (RESEND_API_KEY) {
        const resp = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'Mriie PADL Orders <onboarding@resend.dev>',
            to: [process.env.ORDER_NOTIFY_EMAIL || 'justchewme@gmail.com'],
            subject: `🛍 Mriie order ${session.currency.toUpperCase()} ${(session.amount_total / 100).toFixed(2)} — ${m.name || 'customer'}${session.livemode ? '' : ' [TEST]'}`,
            text: lines.join('\n'),
          }),
        })
        if (!resp.ok) console.error('Resend error:', resp.status, await resp.text())
      }
    } catch (err) {
      // Never fail the webhook for a notification problem — Stripe would retry forever.
      console.error('Order alert failed:', err.message)
    }
  }

  return res.status(200).json({ received: true })
}
