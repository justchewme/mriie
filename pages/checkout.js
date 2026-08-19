import Link from 'next/link'
import { useState } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { PRINTS } from '@/lib/products'
import { SHOP, waLink } from '@/lib/config'
import { useCart } from '@/components/CartContext'

const inputStyle = {
  width: '100%', border: `1px solid rgba(20,17,15,0.25)`, background: '#fff',
  padding: '13px 14px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.ink,
  borderRadius: 0, outline: 'none',
}

function Field({ label, required, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.5)' }}>
        {label}{required && <span style={{ color: C.terra }}> *</span>}
      </label>
      {props.textarea ? (
        <textarea {...props} style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} />
      ) : (
        <input {...props} style={inputStyle} />
      )}
    </div>
  )
}

export default function Checkout() {
  const { items, count, subtotal, setQty, setPref, clear, loaded } = useCart()
  const [delivery, setDelivery] = useState(null) // 'pickup' | 'dhl'
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', address: '', city: '', country: '', postal: '', notes: '' })
  const [error, setError] = useState('')
  const [placed, setPlaced] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const deliveryFee = delivery === 'dhl' ? SHOP.deliveryFee : 0
  const total = subtotal + deliveryFee

  const placeOrder = () => {
    if (!delivery) return setError('Please choose delivery or self-collection.')
    if (!form.name.trim()) return setError('Please tell us your name.')
    if (!form.whatsapp.trim()) return setError('Please add your WhatsApp number so we can confirm your order.')
    if (delivery === 'dhl' && (!form.address.trim() || !form.country.trim()))
      return setError('Please fill in your delivery address and country.')
    setError('')

    const lines = items.map((i) => {
      const pref = i.pref && i.pref !== PRINTS[0] ? ` (${i.pref})` : ''
      return `• ${i.name} ×${i.qty}${pref} — ${SHOP.currency}${i.price * i.qty}`
    })
    const msg = [
      'Hello Mriie PADL! I would like to order:',
      '',
      ...lines,
      '',
      `Subtotal: ${SHOP.currency}${subtotal}`,
      delivery === 'dhl'
        ? `Delivery: DHL Express — ${SHOP.currency}${SHOP.deliveryFee}`
        : 'Delivery: Self-collection in Bali — free',
      `Total: ${SHOP.currency}${total}`,
      '',
      `Name: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      form.email && `Email: ${form.email}`,
      delivery === 'dhl' &&
        `Address: ${[form.address, form.city, form.postal, form.country].filter(Boolean).join(', ')}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n')

    window.open(waLink(msg), '_blank')
    setPlaced(true)
  }

  if (!loaded) return <Layout title="Checkout"><div style={{ minHeight: '50vh' }} /></Layout>

  if (placed) {
    return (
      <Layout title="Order sent">
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
          <Label color={C.terra} style={{ marginBottom: 18 }}>Almost there</Label>
          <H size={36}>Press send in WhatsApp</H>
          <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '20px 0 32px' }}>
            Your order is waiting in your WhatsApp chat — just press send.
            We&apos;ll reply shortly to confirm your prints, stock and payment
            (bank transfer or card).
          </Body>
          <Body size={13} color="rgba(20,17,15,0.55)" style={{ marginBottom: 36 }}>
            WhatsApp didn&apos;t open?{' '}
            <a href={waLink('Hello Mriie PADL! I just tried to place an order.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
              Tap here to chat with us
            </a>{' '}
            or email {SHOP.email}.
          </Body>
          <button
            onClick={() => { clear(); }}
            style={{
              background: 'transparent', border: `1px solid rgba(20,17,15,0.3)`, color: C.ink,
              padding: '14px 26px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Done — clear my bag
          </button>
        </div>
      </Layout>
    )
  }

  if (count === 0) {
    return (
      <Layout title="Your bag">
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
          <H size={34}>Your bag is empty</H>
          <Body size={14} color="rgba(20,17,15,0.6)" style={{ margin: '18px 0 30px' }}>
            Add a cover, bag or towel and come back here to check out.
          </Body>
          <Link
            href="/"
            style={{
              display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
              padding: '16px 30px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}
          >
            Back to the shop
          </Link>
        </div>
      </Layout>
    )
  }

  const radioCard = (value, title, sub, price) => (
    <button
      onClick={() => setDelivery(value)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14,
        width: '100%', textAlign: 'left', cursor: 'pointer',
        background: delivery === value ? '#fff' : 'transparent',
        border: `1px solid ${delivery === value ? C.ink : 'rgba(20,17,15,0.25)'}`,
        padding: '16px 18px',
      }}
    >
      <span>
        <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: C.ink }}>{title}</span>
        <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 12, color: 'rgba(20,17,15,0.55)', marginTop: 4 }}>{sub}</span>
      </span>
      <span style={{ fontFamily: '"Fraunces", serif', fontSize: 18, color: C.terra, whiteSpace: 'nowrap' }}>{price}</span>
    </button>
  )

  return (
    <Layout title="Checkout">
      <div
        style={{
          maxWidth: 1040, margin: '0 auto', padding: '44px 20px 40px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40,
        }}
      >
        {/* Bag */}
        <div>
          <H size={30} style={{ marginBottom: 24 }}>Your bag</H>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {items.map((i) => (
              <div key={i.id} style={{ display: 'flex', gap: 16, background: '#fff', padding: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={i.image} alt={i.name} style={{ width: 84, height: 105, objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                    <Body size={14} weight={500}>{i.name}</Body>
                    <span style={{ fontFamily: '"Fraunces", serif', fontSize: 16, color: C.terra }}>
                      {SHOP.currency}{i.price * i.qty}
                    </span>
                  </div>
                  <select
                    value={i.pref}
                    onChange={(e) => setPref(i.id, e.target.value)}
                    style={{
                      appearance: 'none', WebkitAppearance: 'none', maxWidth: 220,
                      border: `1px solid rgba(20,17,15,0.2)`, background: 'transparent',
                      padding: '7px 10px', fontFamily: 'Inter, sans-serif', fontSize: 12, color: C.ink, borderRadius: 0,
                    }}
                  >
                    {PRINTS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid rgba(20,17,15,0.2)` }}>
                      <button onClick={() => setQty(i.id, i.qty - 1)} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 15 }}>−</button>
                      <span style={{ minWidth: 30, textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 15 }}>+</button>
                    </div>
                    <button
                      onClick={() => setQty(i.id, 0)}
                      style={{
                        border: 'none', background: 'transparent', cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'rgba(20,17,15,0.45)',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ marginTop: 26, borderTop: `1px solid rgba(20,17,15,0.15)`, paddingTop: 18, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ opacity: 0.65 }}>Subtotal</span>
              <span>{SHOP.currency}{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ opacity: 0.65 }}>Delivery</span>
              <span>
                {delivery === null ? 'Choose below' : delivery === 'dhl' ? `${SHOP.currency}${SHOP.deliveryFee}` : 'Free'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: '"Fraunces", serif', fontSize: 22, color: C.ink }}>
              <span>Total</span>
              <span style={{ color: C.terra }}>{SHOP.currency}{total}</span>
            </div>
          </div>
        </div>

        {/* Delivery + details */}
        <div>
          <H size={30} style={{ marginBottom: 24 }}>Delivery</H>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {radioCard('pickup', 'Self-collection — Bali', 'We share the pickup point with you on WhatsApp', 'Free')}
            {radioCard('dhl', 'DHL Express — worldwide', 'Tracked door-to-door, typically 5–10 business days', `${SHOP.currency}${SHOP.deliveryFee}`)}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
            <Field label="Name" required placeholder="Your name" value={form.name} onChange={set('name')} />
            <Field label="WhatsApp number" required placeholder="+971 50 123 4567" value={form.whatsapp} onChange={set('whatsapp')} />
            <Field label="Email" placeholder="you@email.com (optional)" value={form.email} onChange={set('email')} />
            {delivery === 'dhl' && (
              <>
                <Field label="Address" required placeholder="Street address" value={form.address} onChange={set('address')} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <Field label="City" placeholder="City" value={form.city} onChange={set('city')} />
                  <Field label="Postal code" placeholder="Postal code" value={form.postal} onChange={set('postal')} />
                </div>
                <Field label="Country" required placeholder="Country" value={form.country} onChange={set('country')} />
              </>
            )}
            <Field label="Notes" textarea placeholder="Anything else — favourite colours, gift wrapping, questions…" value={form.notes} onChange={set('notes')} />
          </div>

          {error && (
            <Body size={13} color={C.terra} style={{ marginTop: 16 }}>{error}</Body>
          )}

          <button
            onClick={placeOrder}
            style={{
              width: '100%', marginTop: 22, background: C.ink, color: C.bone, border: 'none',
              padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13,
              letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Place order via WhatsApp
          </button>
          <Body size={12} color="rgba(20,17,15,0.5)" style={{ marginTop: 12, textAlign: 'center' }}>
            Your order opens in WhatsApp — we confirm stock, prints and payment there.
            Nothing is charged on this page.
          </Body>
        </div>
      </div>
    </Layout>
  )
}
