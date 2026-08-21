import { useState } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { SHOP, wholesaleWaLink } from '@/lib/config'
import { useT } from '@/lib/i18n'

// Wholesale pricing is shared privately via the catalogue — never publish it here.
const WHOLESALE = [
  { id: 'cover', name: 'Thermal Padel Cover', rrp: 105, image: '/shop/covers.jpg' },
  { id: 'bag', name: 'Thermal Padel Bag', rrp: 160, image: '/shop/bag-emerald-weave.jpg' },
  { id: 'towel', name: 'Linen Sport Towel', rrp: 60, image: '/shop/towel.jpg' },
]

// 16px inputs — anything smaller makes iOS Safari zoom the page on focus.
const inputStyle = {
  width: '100%', border: '1px solid rgba(20,17,15,0.25)', background: '#fff',
  padding: '13px 14px', fontFamily: 'Inter, sans-serif', fontSize: 16, color: C.ink,
  borderRadius: 0, outline: 'none',
}

const labelStyle = {
  fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em',
  textTransform: 'uppercase', color: 'rgba(20,17,15,0.5)',
}

export default function Wholesale() {
  const { t } = useT()
  const [form, setForm] = useState({ company: '', country: '', message: '' })
  const [qty, setQty] = useState({ cover: '', bag: '', towel: '' })
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setQ = (k) => (e) => setQty((q) => ({ ...q, [k]: e.target.value.replace(/[^0-9]/g, '') }))

  const startChat = () => {
    if (!form.country.trim()) return setError(t('Please tell us your country.'))
    const wanted = WHOLESALE.filter((p) => Number(qty[p.id]) > 0)
    if (wanted.length === 0) return setError(t('Please enter a quantity for at least one product.'))
    setError('')
    const msg = [
      'Hello Mriie PADL! Wholesale inquiry:',
      '',
      form.company.trim() && `Company: ${form.company.trim()}`,
      `Country: ${form.country.trim()}`,
      '',
      ...wanted.map((p) => `• ${p.name} × ${Number(qty[p.id]).toLocaleString('en-US')} pcs`),
      form.message.trim() && '',
      form.message.trim() && `Message: ${form.message.trim()}`,
      '',
      'Please send me the wholesale catalogue and pricing.',
    ].filter((l) => l !== false && l !== undefined)
    window.open(wholesaleWaLink(msg.join('\n')), '_blank')
  }

  return (
    <Layout
      title="Wholesale"
      description="Wholesale handmade padel covers, bags and towels from Bali — tiered pricing from 100 pcs, custom prints and club co-branding. Supplying partners in six countries."
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 20px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 16 }}>{t('For stores, clubs & distributors')}</Label>
        <H size={40}>{t('Wholesale')}</H>
        <Body size={14} color="rgba(20,17,15,0.65)" style={{ marginTop: 18, maxWidth: 620 }}>
          {t('Handmade in Bali, wholesale to the world — over 10,000 pieces supplied to partners in six countries. Made to order in your choice of 20+ signature prints, with custom co-branding available for clubs and stores.')}
        </Body>

        {/* Terms strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
          {[t('Trial orders from 100 pcs'), t('Lead time 3–6 weeks'), 'EXW Bali', t('50% deposit'), t('Custom logo available')].map((s) => (
            <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.6)', border: '1px solid rgba(20,17,15,0.2)', padding: '6px 12px' }}>
              {s}
            </span>
          ))}
        </div>

        {/* Tier tables */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginTop: 40 }}>
          {WHOLESALE.map((p) => (
            <div key={p.id} style={{ background: '#fff' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '16px 18px 20px' }}>
                <span style={{ fontFamily: '"Fraunces", serif', fontSize: 19, color: C.ink, display: 'block' }}>{p.name}</span>
                <Body size={11} color="rgba(20,17,15,0.5)" style={{ marginTop: 4 }}>RRP US${p.rrp}</Body>
                <Body size={12} color="rgba(20,17,15,0.6)" style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid rgba(20,17,15,0.1)' }}>
                  {t('Tiered wholesale pricing — shared privately with the catalogue.')}
                </Body>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry form */}
        <div style={{ maxWidth: 560, margin: '64px auto 0' }}>
          <MotifDivider motif="frangipani" />
          <H size={28} style={{ display: 'block', textAlign: 'center', marginTop: 36 }}>{t('Start a wholesale conversation')}</H>
          <Body size={13} color="rgba(20,17,15,0.6)" style={{ margin: '14px 0 28px', textAlign: 'center' }}>
            {t('Tell us where you are and roughly what you need — it opens straight into a WhatsApp chat with our founding team, with the catalogue to follow.')}
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={labelStyle}>{t('Company / club')}</label>
                <input style={inputStyle} placeholder={t('Optional')} value={form.company} onChange={set('company')} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={labelStyle}>{t('Country')} <span style={{ color: C.terra }}>*</span></label>
                <input style={inputStyle} placeholder={t('e.g. Spain')} value={form.country} onChange={set('country')} />
              </div>
            </div>

            <div>
              <label style={{ ...labelStyle, display: 'block', marginBottom: 10 }}>{t('Estimated quantities')} <span style={{ color: C.terra }}>*</span></label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {WHOLESALE.map((p) => (
                  <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(20,17,15,0.65)' }}>{p.name.replace('Thermal Padel ', '').replace('Linen Sport ', '')}</span>
                    <input style={inputStyle} inputMode="numeric" placeholder="0" value={qty[p.id]} onChange={setQ(p.id)} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>{t('Anything else?')}</label>
              <textarea style={{ ...inputStyle, minHeight: 70, resize: 'vertical' }} placeholder={t('Custom prints, co-branding, timeline…')} value={form.message} onChange={set('message')} />
            </div>
          </div>

          {error && <Body size={13} color={C.terra} style={{ marginTop: 16 }}>{error}</Body>}

          <button
            onClick={startChat}
            style={{
              width: '100%', marginTop: 22, background: '#25D366', color: '#fff', border: 'none',
              padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            {t('Chat with us on WhatsApp')}
          </button>
          <Body size={12} color="rgba(20,17,15,0.5)" style={{ marginTop: 12, textAlign: 'center' }}>
            {t('Prefer email?')} <a href={`mailto:${SHOP.email}?subject=Wholesale inquiry`} style={{ color: C.terra }}>{SHOP.email}</a>
          </Body>
        </div>
      </div>
    </Layout>
  )
}
