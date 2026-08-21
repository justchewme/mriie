import { useState } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { waLink } from '@/lib/config'
import { useT } from '@/lib/i18n'

// Wholesale pricing is shared privately via the catalogue — never publish it here.
const WHOLESALE = [
  { id: 'cover', name: 'Thermal Padel Cover', rrp: 105, image: '/shop/covers.jpg' },
  { id: 'bag', name: 'Thermal Padel Bag', rrp: 175, image: '/shop/bag-emerald-weave.jpg' },
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
  const [form, setForm] = useState({ company: '', country: '', contact: '', message: '', website: '' })
  const [qty, setQty] = useState({ cover: '', bag: '', towel: '' })
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setQ = (k) => (e) => setQty((q) => ({ ...q, [k]: e.target.value.replace(/[^0-9]/g, '') }))

  const submit = async () => {
    if (!form.country.trim()) return setError(t('Please tell us your country.'))
    if (!form.contact.trim()) return setError(t('Please add your WhatsApp number or email so we can reply.'))
    const wanted = WHOLESALE.filter((p) => Number(qty[p.id]) > 0)
    if (wanted.length === 0) return setError(t('Please enter a quantity for at least one product.'))
    setError('')
    setSending(true)
    const message = [
      `Country: ${form.country.trim()}`,
      '',
      ...wanted.map((p) => `• ${p.name} × ${Number(qty[p.id]).toLocaleString('en-US')} pcs`),
      form.message.trim() && '',
      form.message.trim() && `Message: ${form.message.trim()}`,
    ].filter((l) => l !== false && l !== undefined).join('\n')
    try {
      const r = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'wholesale',
          name: form.company.trim() || '(no company given)',
          contact: form.contact.trim(),
          message,
          website: form.website,
        }),
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data.error || t('Something went wrong — please try again.'))
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <Layout
      title="Wholesale & Partnerships"
      description="Partner with Mriie PADL — wholesale handmade padel covers, bags and towels from Bali. Trial orders from 100 pcs, custom prints and club co-branding. Supplying partners in six countries."
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 20px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 16 }}>{t('For stores, clubs & distributors')}</Label>
        <H size={40}>{t('Partner with Mriie')}</H>
        <Body size={14} color="rgba(20,17,15,0.65)" style={{ marginTop: 18, maxWidth: 620 }}>
          {t('Handmade in Bali, wholesale to the world — over 10,000 pieces supplied to partners in six countries. Made to order in your choice of 20+ signature prints, with custom co-branding available for clubs and stores.')}
        </Body>

        {/* Numbers strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14, marginTop: 34 }}>
          {[
            ['10,000+', t('pieces shipped')],
            ['6', t('countries supplied')],
            ['20+', t('signature prints')],
            ['100 pcs', t('trial order minimum')],
          ].map(([n, label]) => (
            <div key={label} style={{ background: '#fff', padding: '18px 16px', textAlign: 'center' }}>
              <span style={{ display: 'block', fontFamily: '"Fraunces", serif', fontSize: 30, color: C.terra }}>{n}</span>
              <span style={{ display: 'block', marginTop: 4, fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.55)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Terms strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
          {[t('Lead time 3–6 weeks'), 'EXW Bali', t('50% deposit'), t('Custom logo available')].map((s) => (
            <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.6)', border: '1px solid rgba(20,17,15,0.2)', padding: '6px 12px' }}>
              {s}
            </span>
          ))}
        </div>

        {/* Where you'll find us — real venues, from our Instagram */}
        <div style={{ marginTop: 56 }}>
          <Label color={C.terra} style={{ marginBottom: 6 }}>{t('Seen on court & in store')}</Label>
          <Body size={13} color="rgba(20,17,15,0.6)" style={{ marginBottom: 18 }}>
            {t('Our pieces on shelves, court-side and at events across Bali — tap any photo to see the moment on Instagram.')}
          </Body>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { code: 'DbR6lnvTm8N', venue: 'Little Brew, Canggu', note: t('Monday pop-up display') },
              { code: 'DaWxHyxzeJu', venue: 'Jungle Padel Lembongan', note: t('Stockist') },
              { code: 'DavEJR3mKqF', venue: 'Bali Fun Padel', note: t('Event prize partner') },
              { code: 'DbxyqN_OhN5', venue: 'Body Craft Elements, Bali', note: t('Pop-up market') },
            ].map(({ code, venue, note }) => (
              <a
                key={code}
                href={`https://www.instagram.com/p/${code}/`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', background: '#fff', textDecoration: 'none' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/ig/${code}.jpg`}
                  alt={`Mriie PADL at ${venue}`}
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
                />
                <span style={{ display: 'block', padding: '12px 14px 4px', fontFamily: '"Fraunces", serif', fontSize: 15, color: C.ink }}>{venue}</span>
                <span style={{ display: 'block', padding: '0 14px 14px', fontFamily: 'Inter, sans-serif', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.terra }}>{note}</span>
              </a>
            ))}
          </div>
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

        {/* Case studies — real B2B track record, no prices */}
        <div style={{ marginTop: 56 }}>
          <Label color={C.terra} style={{ marginBottom: 14 }}>{t('Track record')}</Label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px 28px' }}>
            {[
              t('Wholesale partner to Padelbox.de, Germany — repeat production runs shipped to Europe.'),
              t('600 custom-branded covers produced for a single Pilates studio order.'),
              t('Bulk orders shipped to clubs and resellers in Australia, Turkey and Thailand.'),
              t('Consigned island-wide across Bali padel clubs — the covers you see on court are ours.'),
            ].map((s) => (
              <Body key={s} size={13} color="rgba(20,17,15,0.75)" style={{ borderLeft: `2px solid ${C.terra}`, padding: '4px 0 4px 14px', lineHeight: 1.7 }}>
                {s}
              </Body>
            ))}
          </div>
        </div>

        {/* Inquiry form */}
        <div style={{ maxWidth: 560, margin: '64px auto 0' }}>
          <MotifDivider motif="frangipani" />
          <H size={28} style={{ display: 'block', textAlign: 'center', marginTop: 36 }}>{t('Request the catalogue & pricing')}</H>
          <Body size={13} color="rgba(20,17,15,0.6)" style={{ margin: '14px 0 28px', textAlign: 'center' }}>
            {t('Tell us where you are and roughly what you need — it goes straight to our founding team, and we reply personally with the private catalogue and pricing.')}
          </Body>

          {sent ? (
            <div style={{ border: `1px solid ${C.terra}`, padding: '28px 24px', textAlign: 'center' }}>
              <H size={24}>{t('Inquiry sent')}</H>
              <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 10 }}>
                {t('Thank you — the catalogue and wholesale pricing are on their way to you.')}
              </Body>
            </div>
          ) : (
          <>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>{t('WhatsApp number or email')} <span style={{ color: C.terra }}>*</span></label>
              <input style={inputStyle} placeholder="+62 812 …" value={form.contact} onChange={set('contact')} />
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

            {/* Honeypot — hidden from people, catnip for bots. */}
            <input
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={set('website')}
            />
          </div>

          {error && <Body size={13} color={C.terra} style={{ marginTop: 16 }}>{error}</Body>}

          <button
            onClick={submit}
            disabled={sending}
            style={{
              width: '100%', marginTop: 22, background: C.ink, color: C.bone, border: 'none',
              padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              cursor: sending ? 'wait' : 'pointer', opacity: sending ? 0.6 : 1,
            }}
          >
            {sending ? t('Sending…') : t('Send inquiry')}
          </button>
          <Body size={12} color="rgba(20,17,15,0.5)" style={{ marginTop: 12, textAlign: 'center' }}>
            {t('Prefer to chat?')}{' '}
            <a
              href={waLink('Hello Mriie PADL! Wholesale inquiry — I would like the catalogue and pricing for my store/club.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: C.terra }}
            >
              {t('WhatsApp us directly')}
            </a>
          </Body>
          </>
          )}
        </div>
      </div>
    </Layout>
  )
}
