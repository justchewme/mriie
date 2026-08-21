/**
 * Mriie PADL — sync Stripe Payment Links with the shop.
 *
 * One shareable link per product colourway, priced from lib/products.js so the
 * site and Stripe can never drift. Safe to re-run: it reuses anything that
 * already matches and only rebuilds what changed. Writes lib/payment-links.js.
 *
 *   STRIPE_SECRET_KEY=sk_live_... node scripts/sync-payment-links.mjs
 *
 * Payment Links cannot be deleted, only deactivated — so a price change
 * deactivates the old link and mints a new URL. Reshare after a price change.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Stripe from 'stripe'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://mriie.com'
const CURRENCY = 'usd'
const TAG = 'mriie_key' // our idempotency handle on every Stripe object

// lib/*.js is ESM inside a CommonJS package, so node cannot import it directly.
// Both files are dependency-free data modules — loading the source as a data:
// URL gives us the real exports without duplicating the product list here.
const loadLib = async (file) => {
  const src = fs.readFileSync(path.join(ROOT, 'lib', file), 'utf8')
  return import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`)
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const { products } = await loadLib('products.js')
const { SHOP } = await loadLib('config.js')
const { ALLOWED_SHIPPING_COUNTRIES, DELIVERY } = await loadLib('shipping.js')

const log = (...a) => console.log(...a)

/** Find one object of a kind by our own tag, scanning all pages. */
async function findByKey(resource, key, extra = {}) {
  for await (const obj of resource.list({ limit: 100, ...extra })) {
    if (obj.metadata?.[TAG] === key) return obj
  }
  return null
}

/** Shipping rates are shared by every link, so make them once. */
async function ensureShippingRate(key, displayName, amountCents) {
  const found = await findByKey(stripe.shippingRates, key, { active: true })
  if (found && found.fixed_amount.amount === amountCents && found.display_name === displayName) {
    log(`  shipping rate ${key}: reuse ${found.id}`)
    return found
  }
  if (found) {
    await stripe.shippingRates.update(found.id, { active: false })
    log(`  shipping rate ${key}: changed — deactivated ${found.id}`)
  }
  const rate = await stripe.shippingRates.create({
    display_name: displayName,
    type: 'fixed_amount',
    fixed_amount: { amount: amountCents, currency: CURRENCY },
    metadata: { [TAG]: key },
  })
  log(`  shipping rate ${key}: created ${rate.id}`)
  return rate
}

async function ensureProduct(key, name, imageUrl, description) {
  const found = await findByKey(stripe.products, key, { active: true })
  if (found) {
    const patch = {}
    if (found.name !== name) patch.name = name
    if ((found.images?.[0] || null) !== imageUrl) patch.images = [imageUrl]
    if (found.description !== description) patch.description = description
    if (Object.keys(patch).length) {
      log(`  product ${key}: updating ${Object.keys(patch).join(', ')}`)
      return stripe.products.update(found.id, patch)
    }
    return found
  }
  const product = await stripe.products.create({
    name,
    description,
    images: [imageUrl],
    metadata: { [TAG]: key },
  })
  log(`  product ${key}: created ${product.id}`)
  return product
}

/** Returns { price, changed } — changed means the link must be rebuilt. */
async function ensurePrice(key, product, amountCents) {
  const prices = await stripe.prices.list({ product: product.id, active: true, limit: 100 })
  const match = prices.data.find((p) => p.unit_amount === amountCents && p.currency === CURRENCY)
  if (match) return { price: match, changed: false }

  for (const stale of prices.data) await stripe.prices.update(stale.id, { active: false })
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: amountCents,
    currency: CURRENCY,
    metadata: { [TAG]: key },
  })
  log(`  price ${key}: created ${price.id} (${amountCents / 100} ${CURRENCY.toUpperCase()})`)
  return { price, changed: true }
}

async function ensureLink(key, price, shippingRates, meta) {
  const found = await findByKey(stripe.paymentLinks, key, { active: true })
  if (found) {
    const items = await stripe.paymentLinks.listLineItems(found.id, { limit: 1 })
    if (items.data[0]?.price?.id === price.id) {
      log(`  link ${key}: reuse ${found.url}`)
      return found
    }
    await stripe.paymentLinks.update(found.id, { active: false })
    log(`  link ${key}: price changed — deactivated ${found.id}`)
  }
  const link = await stripe.paymentLinks.create({
    line_items: [
      { price: price.id, quantity: 1, adjustable_quantity: { enabled: true, minimum: 1, maximum: 99 } },
    ],
    // Both delivery choices on every link so the buyer picks in Stripe.
    shipping_address_collection: { allowed_countries: ALLOWED_SHIPPING_COUNTRIES },
    shipping_options: shippingRates.map((r) => ({ shipping_rate: r.id })),
    phone_number_collection: { enabled: true },
    billing_address_collection: 'auto',
    after_completion: {
      type: 'redirect',
      redirect: { url: `${SITE}/success?session_id={CHECKOUT_SESSION_ID}` },
    },
    metadata: { [TAG]: key, ...meta },
  })
  log(`  link ${key}: created ${link.url}`)
  return link
}

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is required.')
  process.exit(1)
}
log(`Syncing payment links (${process.env.STRIPE_SECRET_KEY.startsWith('sk_live') ? 'LIVE' : 'TEST'} mode)\n`)

log('Shipping rates')
const shippingRates = [
  await ensureShippingRate('ship:pickup', DELIVERY.pickup, 0),
  await ensureShippingRate('ship:dhl', DELIVERY.dhl, SHOP.deliveryFee * 100),
]

const map = {}
for (const product of products) {
  log(`\n${product.name} — ${SHOP.currency}${product.price}`)
  for (const variant of product.variants) {
    const key = `${product.id}:${variant.id}`
    const stripeProduct = await ensureProduct(
      key,
      `${product.name} — ${variant.name}`,
      `${SITE}${variant.image}`,
      product.tagline
    )
    const { price } = await ensurePrice(key, stripeProduct, product.price * 100)
    const link = await ensureLink(key, price, shippingRates, {
      productId: product.id,
      variantId: variant.id,
      source: 'payment_link',
    })
    map[key] = link.url
  }
}

const out = `// AUTO-GENERATED by scripts/sync-payment-links.mjs — do not edit by hand.
// One live Stripe Payment Link per colourway. Re-run the script after any
// price, product or colourway change, then commit the result.

export const paymentLinks = ${JSON.stringify(map, null, 2)}

export const linkFor = (productId, variantId) =>
  paymentLinks[\`\${productId}:\${variantId}\`] || null
`
fs.writeFileSync(path.join(ROOT, 'lib', 'payment-links.js'), out)
log(`\nWrote lib/payment-links.js — ${Object.keys(map).length} links.`)
