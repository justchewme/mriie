// Mriie PADL — creates a Stripe Checkout session for the bag.
// Prices always come from lib/products.js, never from the client.
import Stripe from 'stripe'
import { products, getVariant } from '@/lib/products'
import { ALLOWED_SHIPPING_COUNTRIES } from '@/lib/shipping'
import { limited } from '@/lib/rate-limit'
import {
  ADAPTIVE_PRICING, PICKUP_OPTION, dhlOption, lineItem, originOf,
} from '@/lib/stripe-checkout'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  // Every call creates a live Stripe Checkout Session.
  if (limited(req, res, { name: 'checkout', limit: 20, windowMs: 10 * 60 * 1000 })) return
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(503).json({ error: 'Card payments are not live yet — please order via WhatsApp.' })
  }

  const { items, delivery, customer = {}, locale } = req.body || {}
  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'Your bag is empty.' })
  if (delivery !== 'pickup' && delivery !== 'dhl') return res.status(400).json({ error: 'Please choose a delivery option.' })

  const origin = originOf(req)

  const line_items = []
  for (const line of items) {
    const product = products.find((p) => p.id === line.productId)
    const qty = Math.floor(Number(line.qty))
    if (!product || !Number.isFinite(qty) || qty < 1 || qty > 99) {
      return res.status(400).json({ error: 'Something in your bag is no longer available — please refresh and try again.' })
    }
    line_items.push(lineItem(product, getVariant(product, line.variantId), qty, origin))
  }

  const meta = (v) => (v || '').toString().slice(0, 450)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      adaptive_pricing: ADAPTIVE_PRICING,
      locale: ['en', 'es', 'id'].includes(locale) ? locale : 'auto',
      line_items,
      phone_number_collection: { enabled: true },
      customer_email: (customer.email || '').trim() || undefined,
      ...(delivery === 'dhl'
        ? {
            shipping_address_collection: { allowed_countries: ALLOWED_SHIPPING_COUNTRIES },
            shipping_options: [dhlOption()],
          }
        : { shipping_options: [PICKUP_OPTION] }),
      metadata: {
        name: meta(customer.name),
        whatsapp: meta(customer.whatsapp),
        notes: meta(customer.notes),
        delivery,
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    })
    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err.message)
    return res.status(500).json({ error: 'Could not start the card payment — please try again or order via WhatsApp.' })
  }
}
