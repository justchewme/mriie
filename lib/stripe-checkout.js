// Mriie PADL — shared Stripe Checkout building blocks.
//
// Both buy paths (the bag at /checkout and the direct /buy/<slug> links) go
// through here, so a price or delivery change can never apply to one and not
// the other. Prices always come from lib/products.js — never from the client.
import { SHOP } from './config'
import { ALLOWED_SHIPPING_COUNTRIES, DELIVERY } from './shipping'
import { SITE } from './seo'

export const CURRENCY = 'usd'

// Adaptive Pricing would show the buyer a converted local price carrying
// Stripe's 2–4% conversion fee. Justin sells in USD only, so it stays off.
// Note: this is only possible on Checkout Sessions — Stripe forces Adaptive
// Pricing on for hosted Payment Links, which is why we don't use those.
export const ADAPTIVE_PRICING = { enabled: false }

export const lineItem = (product, variant, qty, origin, { adjustable = false } = {}) => ({
  quantity: qty,
  ...(adjustable ? { adjustable_quantity: { enabled: true, minimum: 1, maximum: 99 } } : {}),
  price_data: {
    currency: CURRENCY,
    unit_amount: product.price * 100,
    product_data: {
      name: `${product.name} — ${variant.name}`,
      images: [`${origin}${variant.image}`],
    },
  },
})

const rate = (display_name, amount) => ({
  shipping_rate_data: {
    display_name,
    type: 'fixed_amount',
    fixed_amount: { amount, currency: CURRENCY },
  },
})

export const PICKUP_OPTION = rate(DELIVERY.pickup, 0)
export const dhlOption = () => rate(DELIVERY.dhl, SHOP.deliveryFee * 100)

// Direct links don't know the buyer's choice up front, so they offer both and
// let Stripe collect it. Shipping options require address collection.
export const bothDeliveryOptions = () => ({
  shipping_address_collection: { allowed_countries: ALLOWED_SHIPPING_COUNTRIES },
  shipping_options: [PICKUP_OPTION, dhlOption()],
})

// NEVER derive this from req.headers.host in production. That header is
// attacker-controlled, and it decides the success_url Stripe redirects the
// buyer to after paying — a spoofed Host turns a real payment into a handoff
// to a phishing page. Pin it to the canonical site instead.
export const originOf = (req) => {
  if (process.env.NODE_ENV === 'production') return SITE.url
  return `http://${req.headers.host || 'localhost:3000'}`
}
