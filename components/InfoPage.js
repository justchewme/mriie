// Mriie PADL — shared shell for info/policy pages (FAQ, shipping, returns, terms).
import Layout from '@/components/Layout'
import Link from 'next/link'
import { C, Label, H, Body } from '@/components/MriieShared'
import { useT } from '@/lib/i18n'

// Shown in place of ordering/shipping/returns/wholesale content while orders
// are paused (SHOP.ordersOpen === false). One message everywhere, no contradictions.
export function PausedPage({ title, text }) {
  const { t } = useT()
  return (
    <Layout title={title}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 20px 80px' }}>
        <H size={38}>{t(title)}</H>
        <Body size={14} color="rgba(20,17,15,0.75)" style={{ marginTop: 18, lineHeight: 1.85 }}>
          {t(text)}
        </Body>
        <Body size={14} color="rgba(20,17,15,0.75)" style={{ marginTop: 14, lineHeight: 1.85 }}>
          {t('This website has never taken an order or a payment. If you paid someone for a Mriie Padel order that has not arrived, report it and you will get a personal reply.')}
        </Body>
        <Link href="/contact" style={{ display: 'inline-block', marginTop: 28, background: C.ink, color: C.bone, textDecoration: 'none', padding: '14px 26px', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          {t('Report an undelivered order')}
        </Link>
      </div>
    </Layout>
  )
}

export function InfoSection({ heading, children }) {
  return (
    <div style={{ marginTop: 36 }}>
      <Label color={C.terra} style={{ marginBottom: 12 }}>{heading}</Label>
      <Body size={14} color="rgba(20,17,15,0.75)" style={{ lineHeight: 1.8 }}>
        {children}
      </Body>
    </div>
  )
}

export default function InfoPage({ title, intro, children }) {
  return (
    <Layout title={title}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 20px 40px' }}>
        <H size={38}>{title}</H>
        {intro && (
          <Body size={14} color="rgba(20,17,15,0.6)" style={{ marginTop: 16 }}>
            {intro}
          </Body>
        )}
        {children}
      </div>
    </Layout>
  )
}
