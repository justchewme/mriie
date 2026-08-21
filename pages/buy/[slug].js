// Mriie PADL — shareable direct-buy links: /buy/<product>-<colourway>
//
// These replace Stripe's hosted Payment Links, which always force Adaptive
// Pricing (a converted local price carrying a 2–4% conversion fee). Going
// through our own Checkout Session lets us keep every buyer in USD, and it
// keeps the shareable URL stable even when a price changes.
import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { products, buySlug } from '@/lib/products'
import {
  ADAPTIVE_PRICING, bothDeliveryOptions, lineItem, originOf,
} from '@/lib/stripe-checkout'

/** Match by full slug rather than splitting on '-', since ids contain hyphens. */
const findBySlug = (slug) => {
  for (const product of products) {
    for (const variant of product.variants) {
      if (buySlug(product.id, variant.id) === slug) return { product, variant }
    }
  }
  return null
}

export async function getServerSideProps({ params, req }) {
  const match = findBySlug(params.slug)
  if (!match) return { notFound: true }
  if (!process.env.STRIPE_SECRET_KEY) return { props: { failed: true } }

  const { product, variant } = match
  const origin = originOf(req)

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      adaptive_pricing: ADAPTIVE_PRICING,
      // Quantity is adjustable in Stripe — a shared link has no basket behind it.
      line_items: [lineItem(product, variant, 1, origin, { adjustable: true })],
      ...bothDeliveryOptions(),
      phone_number_collection: { enabled: true },
      metadata: { productId: product.id, variantId: variant.id, source: 'buy_link' },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    })
    return { redirect: { destination: session.url, permanent: false } }
  } catch (err) {
    console.error('Direct buy link failed:', err.message)
    return { props: { failed: true } }
  }
}

// Only rendered when Stripe could not start — a shared link should never
// dead-end, so it offers the WhatsApp route instead.
export default function Buy() {
  return (
    <Layout title="Checkout unavailable">
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>One moment</Label>
        <H size={32}>We couldn&apos;t open the payment page</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '20px 0 32px' }}>
          Nothing has been charged. Message us on WhatsApp and we&apos;ll take your
          order directly, or try again from the shop.
        </Body>
        <a
          href={waLink('Hello Mriie PADL! I tried to buy from your website.')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
            padding: '16px 30px', fontFamily: 'Inter, sans-serif', fontSize: 12,
            letterSpacing: '0.16em', textTransform: 'uppercase',
          }}
        >
          Chat on WhatsApp
        </a>
        <Body size={13} color="rgba(20,17,15,0.55)" style={{ marginTop: 28 }}>
          <Link href="/" style={{ color: C.terra }}>Back to the shop</Link> · {SHOP.email}
        </Body>
      </div>
    </Layout>
  )
}
