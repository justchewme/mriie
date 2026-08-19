import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, H, Body } from '@/components/MriieShared'

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '100px 20px', textAlign: 'center' }}>
        <H size={36}>Out of bounds</H>
        <Body size={14} color="rgba(20,17,15,0.6)" style={{ margin: '18px 0 30px' }}>
          That page doesn&apos;t exist — the shop is this way.
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
