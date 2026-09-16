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
  const [form, setForm] = useState({ name: '', contact: '', topic: 'report', message: '', website: '' })
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
        body: JSON.stringify({ ...form, source: form.topic }),
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data.error || 'Something went wrong.')
      setState({ sending: false, sent: true, error: null })
    } catch (err) {
      setState({ sending: false, sent: false, error: err.message })
    }
  }

  return (
    <Layout title="Report an undelivered order">
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Contact')}</Label>
        <H size={34}>{t('Report an undelivered order')}</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '18px 0 12px' }}>
          {t('If you paid for a Mriie Padel order that has not arrived, tell us what happened below. Every message goes straight to the person compiling these reports and you will get a personal reply.')}
        </Body>
        <Body size={13} color="rgba(20,17,15,0.6)" style={{ margin: '0 0 24px', lineHeight: 1.7 }}>
          {t('Please include: what you ordered, the date, the amount, how you paid (bank transfer, Instagram, WhatsApp) and who you paid. Leave your WhatsApp number so we can reach you.')}
        </Body>

        {fromWhatsApp && (
          <div style={{ background: 'rgba(196,106,74,0.09)', borderLeft: `3px solid ${C.terra}`, padding: '14px 16px', marginBottom: 26 }}>
            <Body size={13} color="rgba(20,17,15,0.8)">
              {t('WhatsApp chat is not available at the moment. Send your message here instead — it reaches us directly.')}
            </Body>
          </div>
        )}

        {state.sent ? (
          <div style={{ border: `1px solid ${C.terra}`, padding: '28px 24px', textAlign: 'center' }}>
            <H size={24}>{t('Report received')}</H>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 10 }}>
              {t('Thank you — it has been delivered and you will hear back on WhatsApp shortly.')}
            </Body>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input style={field} placeholder={t('Your name')} value={form.name} onChange={set('name')} required />
            <input
              style={field}
              placeholder={t('Your WhatsApp number (with country code)')}
              value={form.contact}
              onChange={set('contact')}
              required
            />
            <select style={{ ...field, appearance: 'auto' }} value={form.topic} onChange={set('topic')}>
              <option value="report">{t('I paid for an order that has not arrived')}</option>
              <option value="general">{t('General question')}</option>
              <option value="wholesale">{t('Wholesale / partnership')}</option>
            </select>
            <textarea
              style={{ ...field, minHeight: 160, resize: 'vertical' }}
              placeholder={t('What you ordered, when, how much you paid, how and to whom — and what happened since.')}
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
              {state.sending ? t('Sending…') : t('Send report')}
            </button>
          </form>
        )}

        {SHOP.whatsappUp && (
          <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 26 }}>
            {t('You can also reach us on')}{' '}
            <a href={waLink('Hello Mriie PADL!')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
              WhatsApp
            </a>.
          </Body>
        )}
      </div>
    </Layout>
  )
}
