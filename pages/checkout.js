import Link from 'next/link'
import { useState } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { useT, localizeProduct } from '@/lib/i18n'
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
  const { items, count, subtotal, setQty, clear, loaded } = useCart()
  const { t, locale } = useT()
  const [delivery, setDelivery] = useState(null) // 'pickup' | 'dhl'
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', address: '', city: '', country: '', postal: '', notes: '' })
  const [error, setError] = useState('')
  const [placed, setPlaced] = useState(false)
  const [paying, setPaying] = useState(false)

  const stripeEnabled = process.env.NEXT_PUBLIC_STRIPE_ENABLED === '1'

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const deliveryFee = delivery === 'dhl' ? SHOP.deliveryFee : 0
  const total = subtotal + deliveryFee

  // Card checkout skips the address check — Stripe collects the delivery address itself.
  const validate = (requireAddress) => {
    if (!delivery) { setError(t('Please choose delivery or self-collection.')); return false }
    if (!form.name.trim()) { setError(t('Please tell us your name.')); return false }
    if (!form.whatsapp.trim()) { setError(t('Please add your WhatsApp number so we can confirm your order.')); return false }
    if (requireAddress && delivery === 'dhl' && (!form.address.trim() || !form.country.trim())) {
      setError(t('Please fill in your delivery address and country.')); return false
    }
    setError('')
    return true
  }

  const payByCard = async () => {
    if (!validate(false)) return
    setPaying(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ productId: i.id, variantId: i.variant.id, qty: i.qty })),
          delivery,
          locale,
          customer: { name: form.name, whatsapp: form.whatsapp, email: form.email, notes: form.notes },
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || t('Could not start the card payment — please try again or order via WhatsApp.'))
      window.location.href = data.url
    } catch (e) {
      setError(e.message || t('Could not start the card payment — please try again or order via WhatsApp.'))
      setPaying(false)
    }
  }

  const placeOrder = () => {
    if (!validate(true)) return

    const lines = items.map(
      (i) => `• ${i.name} — ${i.variant.name} ×${i.qty} — ${SHOP.currency}${i.price * i.qty}`
    )
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
          <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Almost there')}</Label>
          <H size={36}>{t('Press send in WhatsApp')}</H>
          <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '20px 0 32px' }}>
            {t('Your order is waiting in your WhatsApp chat — just press send. We’ll reply shortly to confirm your colours, stock and payment (bank transfer or card).')}
          </Body>
          <Body size={13} color="rgba(20,17,15,0.55)" style={{ marginBottom: 36 }}>
            {t('WhatsApp didn’t open?')}{' '}
            <a href={waLink('Hello Mriie PADL! I just tried to place an order.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
              {t('Tap here to chat with us')}
            </a>{' '}
            {t('or email')} {SHOP.email}.
          </Body>
          <button
            onClick={() => { clear(); }}
            style={{
              background: 'transparent', border: `1px solid rgba(20,17,15,0.3)`, color: C.ink,
              padding: '14px 26px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            {t('Done — clear my bag')}
          </button>
        </div>
      </Layout>
    )
  }

  if (count === 0) {
    return (
      <Layout title="Your bag">
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
          <H size={34}>{t('Your bag is empty')}</H>
          <Body size={14} color="rgba(20,17,15,0.6)" style={{ margin: '18px 0 30px' }}>
            {t('Add a cover, bag or towel and come back here to check out.')}
          </Body>
          <Link
            href="/"
            style={{
              display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
              padding: '16px 30px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}
          >
            {t('Back to the shop')}
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
          <H size={30} style={{ marginBottom: 24 }}>{t('Your bag')}</H>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {items.map((i) => (
              <div key={i.key} style={{ display: 'flex', gap: 16, background: '#fff', padding: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={i.variant.image} alt={`${i.name} — ${i.variant.name}`} style={{ width: 84, height: 105, objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                    <Body size={14} weight={500}>{localizeProduct(i, locale).name}</Body>
                    <span style={{ fontFamily: '"Fraunces", serif', fontSize: 16, color: C.terra }}>
                      {SHOP.currency}{i.price * i.qty}
                    </span>
                  </div>
                  <Body size={12} color="rgba(20,17,15,0.55)">{t('Colour:')} {i.variant.name}</Body>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid rgba(20,17,15,0.2)` }}>
                      <button onClick={() => setQty(i.key, i.qty - 1)} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 15 }}>−</button>
                      <span style={{ minWidth: 30, textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>{i.qty}</span>
                      <button onClick={() => setQty(i.key, i.qty + 1)} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 15 }}>+</button>
                    </div>
                    <button
                      onClick={() => setQty(i.key, 0)}
                      style={{
                        border: 'none', background: 'transparent', cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'rgba(20,17,15,0.45)',
                      }}
                    >
                      {t('Remove')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ marginTop: 26, borderTop: `1px solid rgba(20,17,15,0.15)`, paddingTop: 18, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ opacity: 0.65 }}>{t('Subtotal')}</span>
              <span>{SHOP.currency}{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ opacity: 0.65 }}>{t('Delivery')}</span>
              <span>
                {delivery === null ? t('Choose below') : delivery === 'dhl' ? `${SHOP.currency}${SHOP.deliveryFee}` : t('Free')}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: '"Fraunces", serif', fontSize: 22, color: C.ink }}>
              <span>{t('Total')}</span>
              <span style={{ color: C.terra }}>{SHOP.currency}{total}</span>
            </div>
          </div>
        </div>

        {/* Delivery + details */}
        <div>
          <H size={30} style={{ marginBottom: 24 }}>{t('Delivery')}</H>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {radioCard('pickup', t('Self-collection — Bali'), t('We share the pickup point with you on WhatsApp'), t('Free'))}
            {radioCard('dhl', t('DHL Express — worldwide'), t('Tracked door-to-door, typically 5–10 business days'), `${SHOP.currency}${SHOP.deliveryFee}`)}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
            <Field label={t('Name')} required placeholder={t('Your name')} value={form.name} onChange={set('name')} />
            <Field label={t('WhatsApp number')} required placeholder="+971 50 123 4567" value={form.whatsapp} onChange={set('whatsapp')} />
            <Field label={t('Email')} placeholder={t('you@email.com (optional)')} value={form.email} onChange={set('email')} />
            {delivery === 'dhl' && (
              <>
                <Field label={t('Address')} required placeholder={t('Street address')} value={form.address} onChange={set('address')} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <Field label={t('City')} placeholder={t('City')} value={form.city} onChange={set('city')} />
                  <Field label={t('Postal code')} placeholder={t('Postal code')} value={form.postal} onChange={set('postal')} />
                </div>
                <Field label={t('Country')} required placeholder={t('Country')} value={form.country} onChange={set('country')} />
              </>
            )}
            <Field label={t('Notes')} textarea placeholder={t('Anything else — other prints, gift wrapping, questions…')} value={form.notes} onChange={set('notes')} />
          </div>

          {error && (
            <Body size={13} color={C.terra} style={{ marginTop: 16 }}>{error}</Body>
          )}

          {stripeEnabled && (
            <button
              onClick={payByCard}
              disabled={paying}
              style={{
                width: '100%', marginTop: 22, background: C.ink, color: C.bone, border: 'none',
                padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                cursor: paying ? 'wait' : 'pointer', opacity: paying ? 0.6 : 1,
              }}
            >
              {paying ? t('Opening secure payment…') : t('Pay by card — {currency}{total}', { currency: SHOP.currency, total })}
            </button>
          )}
          <button
            onClick={placeOrder}
            style={{
              width: '100%', marginTop: stripeEnabled ? 12 : 22,
              background: stripeEnabled ? 'transparent' : C.ink,
              color: stripeEnabled ? C.ink : C.bone,
              border: stripeEnabled ? `1px solid rgba(20,17,15,0.3)` : 'none',
              padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13,
              letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            {stripeEnabled ? t('Or order via WhatsApp') : t('Place order via WhatsApp')}
          </button>
          <Body size={12} color="rgba(20,17,15,0.5)" style={{ marginTop: 12, textAlign: 'center' }}>
            {stripeEnabled
              ? t('Card payments are processed securely by Stripe. Prefer to chat first? Order via WhatsApp and we confirm everything there.')
              : 'Your order opens in WhatsApp — we confirm stock, colours and payment there. Nothing is charged on this page.'}
          </Body>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 14 }}>
            {['Visa', 'Mastercard', 'Amex', 'Secured by Stripe'].map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(20,17,15,0.5)',
                  border: '1px solid rgba(20,17,15,0.2)', padding: '5px 10px',
                }}
              >
                {m}
              </span>
            ))}
          </div>
          <Body size={11} color="rgba(20,17,15,0.45)" style={{ marginTop: 12, textAlign: 'center' }}>
            <Link href="/shipping" style={{ color: 'inherit' }}>{t('Shipping & Delivery')}</Link>
            {' · '}
            <Link href="/returns" style={{ color: 'inherit' }}>{t('Returns')}</Link>
            {' · '}
            <Link href="/terms" style={{ color: 'inherit' }}>{t('Terms & Privacy')}</Link>
          </Body>
        </div>
      </div>
    </Layout>
  )
}
