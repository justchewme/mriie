// Shared product card — used on the shop grid and the per-product SEO pages.
import Link from 'next/link'
import { useState } from 'react'
import { C, H, Body } from '@/components/MriieShared'
import { SHOP } from '@/lib/config'
import { buySlug } from '@/lib/products'
import { useT, localizeProduct } from '@/lib/i18n'
import { useCart } from '@/components/CartContext'
import { useCurrency } from '@/components/CurrencyContext'

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

export default function ProductCard({ product: baseProduct, detailLink = true }) {
  const { addItem, inCartFor } = useCart()
  const { t, locale } = useT()
  const { currency, format } = useCurrency()
  const product = localizeProduct(baseProduct, locale)
  const inCart = inCartFor(product.id)
  const [qty, setLocalQty] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const [added, setAdded] = useState(false)
  // Grid cards start collapsed; the /product pages (detailLink=false) show
  // everything. Collapsed content stays in the DOM (display:none) so the
  // static HTML keeps the copy for search engines.
  const [expanded, setExpanded] = useState(!detailLink)

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
          {detailLink ? (
            <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <H size={26}>{product.name}</H>
            </Link>
          ) : (
            <H size={26}>{product.name}</H>
          )}
          <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 6, letterSpacing: '0.04em' }}>
            {product.tagline}
          </Body>
        </div>
        <div style={{ display: expanded ? 'flex' : 'none', flexDirection: 'column', gap: 14 }}>
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
        </div>
        {detailLink && (
          <button
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            style={{
              alignSelf: 'flex-start', background: 'transparent', border: 'none', padding: 0,
              fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(20,17,15,0.55)', cursor: 'pointer',
            }}
          >
            {expanded ? `${t('Fewer details')} ▴` : `${t('More details')} ▾`}
          </button>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 400, color: C.terra }}>
              {format(product.price)}
            </div>
            {currency !== 'USD' && (
              <Body size={10} color="rgba(20,17,15,0.45)">{t('Billed in USD')} — {SHOP.currency}{product.price}</Body>
            )}
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
        <Body size={10} color="rgba(20,17,15,0.45)" style={{ letterSpacing: '0.06em' }}>
          🔒 {t('Secure checkout by Stripe')} · {t('{n}-month workmanship guarantee', { n: SHOP.warrantyMonths })}
        </Body>
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
