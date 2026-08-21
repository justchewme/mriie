// Mriie PADL — shared Stripe Checkout building blocks.
//
// Both buy paths (the bag at /checkout and the direct /buy/<slug> links) go
// through here, so a price or delivery change can never apply to one and not
// the other. Prices always come from lib/products.js — never from the client.
import { ALLOWED_SHIPPING_COUNTRIES, DELIVERY, SHIPPING_REGIONS } from './shipping'
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

// One rate per region + method, priced from lib/shipping.js.
export const shipOption = (region, method) => {
  const tier = region[method]
  const name = method === 'express' ? 'Express DHL' : 'Standard EMS, tracked'
  return rate(`${name} — ${region.label} (${tier.days} business days)`, tier.fee * 100)
}

// Direct links don't know the buyer's destination up front, so they offer the
// regional Standard (EMS) rates and let the buyer pick. Stripe caps a session
// at 5 shipping options, so USA/Canada and Europe are merged at the higher
// fee; buyers who want Express use the normal checkout instead.
export const bothDeliveryOptions = () => {
  const by = Object.fromEntries(SHIPPING_REGIONS.map((r) => [r.id, r]))
  const options = [
    PICKUP_OPTION,
    shipOption(by.sea, 'standard'),
    shipOption(by.apac, 'standard'),
    shipOption(by.gulf, 'standard'),
    rate(`Standard EMS, tracked — Europe, UK & Americas (6–12 business days)`, by.eu.standard.fee * 100),
  ]
  return {
    shipping_address_collection: { allowed_countries: ALLOWED_SHIPPING_COUNTRIES },
    shipping_options: options,
  }
}

// NEVER derive this from req.headers.host in production. That header is
// attacker-controlled, and it decides the success_url Stripe redirects the
// buyer to after paying — a spoofed Host turns a real payment into a handoff
// to a phishing page. Pin it to the canonical site instead.
export const originOf = (req) => {
  if (process.env.NODE_ENV === 'production') return SITE.url
  return `http://${req.headers.host || 'localhost:3000'}`
}
