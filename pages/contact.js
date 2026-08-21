// Mriie PADL — backup contact form.
// The reliable route when WhatsApp isn't an option: goes straight to Telegram.
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { useT } from '@/lib/i18n'

const field = {
  width: '100%', padding: '13px 14px', border: '1px solid rgba(20,17,15,0.18)',
  background: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 300,
  // 16px keeps iOS from zooming the page when the field takes focus.
  fontSize: 16, color: C.ink, borderRadius: 0,
}

export default function Contact() {
  const { t } = useT()
  const router = useRouter()
  const [form, setForm] = useState({ name: '', contact: '', message: '', website: '' })
  const [state, setState] = useState({ sending: false, sent: false, error: null })

  // Arrivals from a WhatsApp button carry their intended message across, so
  // they only have to add their name and contact.
  const fromWhatsApp = router.query.via === 'whatsapp'
  useEffect(() => {
    const msg = typeof router.query.msg === 'string' ? router.query.msg.slice(0, 300) : ''
    if (msg) setForm((f) => (f.message ? f : { ...f, message: msg }))
  }, [router.query.msg])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setState({ sending: true, sent: false, error: null })
    try {
      const r = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data.error || 'Something went wrong.')
      setState({ sending: false, sent: true, error: null })
    } catch (err) {
      setState({ sending: false, sent: false, error: err.message })
    }
  }

  return (
    <Layout title="Message us">
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Message us')}</Label>
        <H size={34}>{t('Send us a message')}</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '18px 0 24px' }}>
          {t('Prefer not to use WhatsApp, or it did not open? Leave your details here and we will reply personally.')}
        </Body>

        {fromWhatsApp && (
          <div style={{ background: 'rgba(196,106,74,0.09)', borderLeft: `3px solid ${C.terra}`, padding: '14px 16px', marginBottom: 26 }}>
            <Body size={13} color="rgba(20,17,15,0.8)">
              {t('Our WhatsApp is being upgraded right now. Send your message here instead — it reaches us instantly and we reply just as fast.')}
            </Body>
          </div>
        )}

        {state.sent ? (
          <div style={{ border: `1px solid ${C.terra}`, padding: '28px 24px', textAlign: 'center' }}>
            <H size={24}>{t('Message sent')}</H>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 10 }}>
              {t('Thank you — we have received it and will get back to you shortly.')}
            </Body>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input style={field} placeholder={t('Your name')} value={form.name} onChange={set('name')} required />
            <input
              style={field}
              placeholder={t('WhatsApp number or email')}
              value={form.contact}
              onChange={set('contact')}
              required
            />
            <textarea
              style={{ ...field, minHeight: 130, resize: 'vertical' }}
              placeholder={t('What would you like to ask or order?')}
              value={form.message}
              onChange={set('message')}
              required
            />
            {/* Honeypot — hidden from people, catnip for bots. */}
            <input
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={set('website')}
            />
            {state.error && (
              <Body size={12} color="#b3261e">{state.error}</Body>
            )}
            <button
              type="submit"
              disabled={state.sending}
              style={{
                background: C.ink, color: C.bone, border: 'none', padding: '16px 20px',
                fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', cursor: state.sending ? 'wait' : 'pointer',
                opacity: state.sending ? 0.6 : 1,
              }}
            >
              {state.sending ? t('Sending…') : t('Send message')}
            </button>
          </form>
        )}

        <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 26 }}>
          {t('You can also reach us on')}{' '}
          <a href={waLink('Hello Mriie PADL!')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
            WhatsApp
          </a>{' '}
          {t('or email')} {SHOP.email}.
        </Body>
      </div>
    </Layout>
  )
}
