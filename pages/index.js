import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '@/components/Layout'
import { productLd, ld } from '@/lib/seo'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { products, buySlug } from '@/lib/products'
import { SHOP, waLink } from '@/lib/config'
import { useT, localizeProduct } from '@/lib/i18n'
import { useCart } from '@/components/CartContext'


function QtyStepper({ value, onChange }) {
  const btn = {
    width: 40, height: 44, border: `1px solid rgba(20,17,15,0.25)`, background: 'transparent',
    fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 300, color: C.ink, cursor: 'pointer',
  }
  return (
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      <button style={btn} onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity">−</button>
      <div
        style={{
          minWidth: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderTop: `1px solid rgba(20,17,15,0.25)`, borderBottom: `1px solid rgba(20,17,15,0.25)`,
          fontFamily: 'Inter, sans-serif', fontSize: 14,
        }}
      >
        {value}
      </div>
      <button style={btn} onClick={() => onChange(value + 1)} aria-label="Increase quantity">+</button>
    </div>
  )
}

function ProductCard({ product: baseProduct }) {
  const { addItem, inCartFor } = useCart()
  const { t, locale } = useT()
  const product = localizeProduct(baseProduct, locale)
  const inCart = inCartFor(product.id)
  const [qty, setLocalQty] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const [added, setAdded] = useState(false)

  // Direct Stripe Payment Link for this exact colourway — a one-item express
  // lane beside the bag. Quantity is adjustable on the Stripe page.
  const buyNow = `/buy/${buySlug(product.id, variant.id)}`

  const add = () => {
    addItem(product.id, variant.id, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', background: C.coconut, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={variant.id}
          src={variant.image}
          alt={`${product.name} — ${variant.name}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute', left: 12, bottom: 12,
            background: 'rgba(244,239,230,0.92)', padding: '6px 12px',
            fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.ink,
          }}
        >
          {variant.name}
        </div>
      </div>

      {/* Colour swatches */}
      <div style={{ display: 'flex', gap: 8, padding: '14px 24px 0', flexWrap: 'wrap' }}>
        {product.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariant(v)}
            aria-label={v.name}
            title={v.name}
            style={{
              width: 46, height: 46, padding: 0, cursor: 'pointer', overflow: 'hidden',
              border: v.id === variant.id ? `2px solid ${C.ink}` : `1px solid rgba(20,17,15,0.18)`,
              background: 'transparent',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.image}
              alt={v.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>
        ))}
      </div>

      <div style={{ padding: '18px 24px 28px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div>
          <H size={26}>{product.name}</H>
          <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 6, letterSpacing: '0.04em' }}>
            {product.tagline}
          </Body>
        </div>
        <Body size={13} color="rgba(20,17,15,0.75)">
          {product.description}
        </Body>
        {product.specs && (
          <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {product.specs.map((s) => (
              <li key={s} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 12, lineHeight: 1.5, color: 'rgba(20,17,15,0.6)' }}>
                {s}
              </li>
            ))}
          </ul>
        )}
        <Body size={11} color="rgba(20,17,15,0.5)" style={{ letterSpacing: '0.04em' }}>
          {t(SHOP.leadNote)}
        </Body>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 400, color: C.terra }}>
            {SHOP.currency}{product.price}
          </div>
          <Body size={11} color="rgba(20,17,15,0.5)">{t('Colour:')} {variant.name}</Body>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
          <QtyStepper value={qty} onChange={setLocalQty} />
          <button
            onClick={add}
            style={{
              flex: 1, background: added ? C.ocean : C.ink, color: C.bone, border: 'none',
              fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.16em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'background .25s',
            }}
          >
            {added ? t('Added ✓') : t('Add to bag')}
          </button>
        </div>
        <a
          href={buyNow}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: C.terra, textDecoration: 'none',
            borderBottom: `1px solid ${C.terra}`, alignSelf: 'flex-start', paddingBottom: 2,
          }}
        >
          {t('Or buy this colour now')} &rarr;
        </a>
        {inCart > 0 && (
          <Body size={11} color="rgba(20,17,15,0.5)">{inCart} {t('in your bag')}</Body>
        )}
      </div>
    </div>
  )
}

export default function Shop() {
  const { count, subtotal } = useCart()
  const { t } = useT()

  return (
    <Layout>
      <Head>
        {products.map((p) => (
          <script key={p.id} type="application/ld+json" dangerouslySetInnerHTML={ld(productLd(p))} />
        ))}
      </Head>
      {/* Intro strip */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 20px 36px', textAlign: 'center' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Handmade in Bali · Ships Worldwide')}</Label>
        <H size={44}>Keep it cool. Play it hot.</H>
        <Body size={14} color="rgba(20,17,15,0.6)" style={{ maxWidth: 520, margin: '18px auto 0' }}>
          {t('Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.')}
        </Body>
      </section>

      {/* Products */}
      <section
        style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 20px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      {/* Story + proof */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 20px 0', textAlign: 'center' }}>
        <MotifDivider motif="frangipani" />
        <Label color={C.terra} style={{ marginTop: 44, marginBottom: 16 }}>{t('From a Bali workshop')}</Label>
        <H size={30}>{t('Stitched in the village')}</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ maxWidth: 540, margin: '18px auto 0' }}>
          {t('Every cover, bag and towel is cut and sewn by hand by our artisans in Bali — over 10,000 pieces so far, shipped to players in six countries. Soon you can visit us too: our {area} shop on {street} is opening soon.', { area: SHOP.store.area, street: SHOP.store.street })}
        </Body>
        <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 22, letterSpacing: '0.06em' }}>
          {t('Stocked at City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam')}
        </Body>
        <Body size={12} style={{ marginTop: 12 }}>
          <Link href="/padel-bali" style={{ color: C.terra }}>
            {t('New to the island? Our guide to padel in Bali →')}
          </Link>
        </Body>
        <Body size={12} style={{ marginTop: 8 }}>
          <Link href="/wholesale" style={{ color: C.terra }}>
            {t('Buying for a store or club? Wholesale tiers →')}
          </Link>
        </Body>
      </section>

      {/* Instagram gallery */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 20px 0', textAlign: 'center' }}>
        <a
          href={SHOP.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: C.ink, textDecoration: 'none',
          }}
        >
          {t('Follow us — @{ig} ↗', { ig: SHOP.instagram })}
        </a>
        <div
          style={{
            marginTop: 24, display: 'grid', gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          }}
        >
          {['/shop/collection.jpg', '/shop/bag-riviera-stripe-2.jpg', '/shop/crossbody.jpg', '/shop/cover-noir-stripe-2.jpg', '/shop/towel-2.jpg'].map((src) => (
            <a key={src} href={SHOP.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', aspectRatio: '1 / 1', overflow: 'hidden', background: C.coconut }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Mriie PADL on Instagram — @${SHOP.instagram}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </a>
          ))}
        </div>
      </section>

      {/* How it works / FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 20px 0' }}>
        <MotifDivider motif="frangipani" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 44 }}>
          <div>
            <Label color={C.terra}>{t('Ordering')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('Add your pieces and pay securely by card — checkout is handled by Stripe. Prefer to chat? Order via WhatsApp and pay by bank transfer instead. No account needed either way.')}
            </Body>
          </div>
          <div>
            <Label color={C.terra}>{t('Delivery')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('DHL Express worldwide at a flat {currency}{fee}, typically 5–10 business days. In Bali? Self-collection is free.', { currency: SHOP.currency, fee: SHOP.deliveryFee })}
            </Body>
          </div>
          <div>
            <Label color={C.terra}>{t('More prints')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('Every piece is handmade in 20+ signature prints — the swatches are just the start.')}{' '}
              <a
                href={waLink('Hello Mriie PADL! Can I see more prints?')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.terra }}
              >
                {t('Ask us on WhatsApp')}
              </a>{' '}
              {t('to see them all.')}
            </Body>
          </div>
        </div>
      </section>

      {/* Sticky cart bar */}
      {count > 0 && (
        <div
          style={{
            position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 55,
            background: C.ink, padding: '0 20px',
          }}
        >
          <Link
            href="/checkout"
            style={{
              maxWidth: 1200, margin: '0 auto', padding: '18px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: C.bone, textDecoration: 'none',
              fontFamily: 'Inter, sans-serif', fontSize: 13, letterSpacing: '0.1em',
            }}
          >
            <span>{count} {count > 1 ? t('items') : t('item')} · {SHOP.currency}{subtotal}</span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 12 }}>
              {t('Checkout →')}
            </span>
          </Link>
        </div>
      )}
    </Layout>
  )
}
