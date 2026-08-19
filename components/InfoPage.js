// Mriie PADL — shared shell for info/policy pages (FAQ, shipping, returns, terms).
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'

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
