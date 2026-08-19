// Mriie PADL — creates a Stripe Checkout session.
// Prices always come from lib/products.js, never from the client.
import Stripe from 'stripe'
import { products, getVariant } from '@/lib/products'
import { SHOP } from '@/lib/config'

const ALLOWED_SHIPPING_COUNTRIES = [
  'AE', 'AT', 'AU', 'BE', 'BG', 'BH', 'CA', 'CH', 'CY', 'CZ', 'DE', 'DK',
  'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HK', 'HR', 'HU', 'ID', 'IE', 'IT',
  'JP', 'KR', 'KW', 'LT', 'LU', 'LV', 'MT', 'MY', 'NL', 'NO', 'NZ', 'OM',
  'PH', 'PL', 'PT', 'QA', 'RO', 'SA', 'SE', 'SG', 'SI', 'SK', 'TH', 'TR',
  'TW', 'US', 'VN',
]

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(503).json({ error: 'Card payments are not live yet — please order via WhatsApp.' })
  }

  const { items, delivery, customer = {}, locale } = req.body || {}
  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'Your bag is empty.' })
  if (delivery !== 'pickup' && delivery !== 'dhl') return res.status(400).json({ error: 'Please choose a delivery option.' })

  const host = req.headers.host
  const proto = host && host.startsWith('localhost') ? 'http' : 'https'
  const origin = `${proto}://${host}`

  const line_items = []
  for (const line of items) {
    const product = products.find((p) => p.id === line.productId)
    const qty = Math.floor(Number(line.qty))
    if (!product || !Number.isFinite(qty) || qty < 1 || qty > 99) {
      return res.status(400).json({ error: 'Something in your bag is no longer available — please refresh and try again.' })
    }
    const variant = getVariant(product, line.variantId)
    line_items.push({
      quantity: qty,
      price_data: {
        currency: 'usd',
        unit_amount: product.price * 100,
        product_data: {
          name: `${product.name} — ${variant.name}`,
          images: [`${origin}${variant.image}`],
        },
      },
    })
  }

  const meta = (v) => (v || '').toString().slice(0, 450)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: ['en', 'es', 'id'].includes(locale) ? locale : 'auto',
      line_items,
      phone_number_collection: { enabled: true },
      customer_email: (customer.email || '').trim() || undefined,
      ...(delivery === 'dhl'
        ? {
            shipping_address_collection: { allowed_countries: ALLOWED_SHIPPING_COUNTRIES },
            shipping_options: [
              {
                shipping_rate_data: {
                  display_name: 'DHL Express — worldwide',
                  type: 'fixed_amount',
                  fixed_amount: { amount: SHOP.deliveryFee * 100, currency: 'usd' },
                },
              },
            ],
          }
        : {
            shipping_options: [
              {
                shipping_rate_data: {
                  display_name: 'Self-collection — Bali',
                  type: 'fixed_amount',
                  fixed_amount: { amount: 0, currency: 'usd' },
                },
              },
            ],
          }),
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
