import Link from 'next/link'
import { useState } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { products, PRINTS } from '@/lib/products'
import { SHOP } from '@/lib/config'
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

function ProductCard({ product }) {
  const { cart, setQty } = useCart()
  const inCart = cart[product.id]?.qty || 0
  const [qty, setLocalQty] = useState(1)
  const [pref, setPref] = useState(PRINTS[0])
  const [added, setAdded] = useState(false)

  const add = () => {
    setQty(product.id, inCart + qty, pref)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', background: C.coconut }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ padding: '26px 24px 28px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div>
          <H size={26}>{product.name}</H>
          <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 6, letterSpacing: '0.04em' }}>
            {product.tagline}
          </Body>
        </div>
        <Body size={13} color="rgba(20,17,15,0.75)">
          {product.description}
        </Body>
        <div
          style={{
            fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 400,
            color: C.terra, marginTop: 'auto',
          }}
        >
          {SHOP.currency}{product.price}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.5)' }}>
            Print preference
          </label>
          <select
            value={pref}
            onChange={(e) => setPref(e.target.value)}
            style={{
              appearance: 'none', WebkitAppearance: 'none',
              border: `1px solid rgba(20,17,15,0.25)`, background: 'transparent',
              padding: '12px 14px', fontFamily: 'Inter, sans-serif', fontSize: 13, color: C.ink,
              borderRadius: 0,
            }}
          >
            {PRINTS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
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
            {added ? 'Added ✓' : 'Add to bag'}
          </button>
        </div>
        {inCart > 0 && (
          <Body size={11} color="rgba(20,17,15,0.5)">{inCart} in your bag</Body>
        )}
      </div>
    </div>
  )
}

export default function Shop() {
  const { count, subtotal } = useCart()

  return (
    <Layout>
      {/* Intro strip */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 20px 36px', textAlign: 'center' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>Handmade in Bali · Ships Worldwide</Label>
        <H size={44}>Keep it cool. Play it hot.</H>
        <Body size={14} color="rgba(20,17,15,0.6)" style={{ maxWidth: 520, margin: '18px auto 0' }}>
          Thermal covers, court bags and linen towels in signature prints —
          each piece handmade by our artisans in Bali.
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

      {/* How it works / FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 20px 0' }}>
        <MotifDivider motif="frangipani" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 44 }}>
          <div>
            <Label color={C.terra}>Ordering</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              Add your pieces and check out — your order opens in WhatsApp, where we confirm
              stock, prints and payment (bank transfer or card). No account needed.
            </Body>
          </div>
          <div>
            <Label color={C.terra}>Delivery</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              DHL Express worldwide at a flat {SHOP.currency}{SHOP.deliveryFee}, typically 5–10 business days.
              In Bali? Self-collection is free.
            </Body>
          </div>
          <div>
            <Label color={C.terra}>Prints</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              Every piece is handmade in 20+ signature prints. Pick a colour direction now,
              or choose your exact print with us on WhatsApp.
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
            <span>{count} item{count > 1 ? 's' : ''} · {SHOP.currency}{subtotal}</span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 12 }}>
              Checkout →
            </span>
          </Link>
        </div>
      )}
    </Layout>
  )
}
