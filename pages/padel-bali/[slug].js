import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { courts, getCourt } from '@/lib/courts'
import { products } from '@/lib/products'
import { breadcrumbLd, faqLd, ld } from '@/lib/seo'
import { SHOP, waLink } from '@/lib/config'

export async function getStaticPaths({ locales }) {
  return {
    paths: locales.flatMap((locale) => courts.map((c) => ({ params: { slug: c.slug }, locale }))),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return { props: { court: getCourt(params.slug) } }
}

export default function CourtPage({ court }) {
  const isBali = court.area !== 'Batam'
  const title = `${court.name} — Padel in ${court.area}${isBali ? ', Bali' : ''}`

  const faqs = [
    [
      `Where is ${court.name}?`,
      `${court.name} is in ${court.area}${isBali ? ', Bali' : ', Indonesia'}. ${court.blurb}`,
    ],
    [
      `What should I bring to play padel at ${court.name}?`,
      `Racket, court shoes, water and sun protection — and in ${isBali ? "Bali's" : 'the tropical'} heat, a thermal cover to protect your racket between games. Mriie PADL thermal covers and court bags are handmade in Bali and fit all standard padel rackets.`,
    ],
    [
      `Can I buy Mriie PADL gear ${isBali ? 'in Bali' : 'in Indonesia'}?`,
      court.relationship === 'stockist'
        ? `Yes — ${court.name} stocks Mriie PADL pieces, or order online at mriie.com with free self-collection in Bali and worldwide DHL delivery.`
        : 'Yes — order online at mriie.com with free self-collection in Bali and worldwide DHL delivery, or find us at City Padel Bali, Jungle Padel Lembongan and Zabbo Padel Batam.',
    ],
  ]

  return (
    <Layout
      title={title}
      description={`${court.blurb} What to know and what to bring on court at ${court.name}.`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ld(breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Padel in Bali', path: '/padel-bali' },
            { name: court.name, path: `/padel-bali/${court.slug}` },
          ]))}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={ld(faqLd(faqs))} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 20px 20px' }}>
        <Link
          href="/padel-bali"
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: C.terra, textDecoration: 'none',
          }}
        >
          ← Padel in Bali
        </Link>
        <div style={{ marginTop: 24 }}>
          <Label color={C.terra} style={{ marginBottom: 14 }}>{court.area}</Label>
          <H size={38}>{court.name}</H>
          {court.relationship && (
            <span
              style={{
                display: 'inline-block', marginTop: 14, padding: '5px 12px',
                fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: C.terra, border: `1px solid ${C.terra}`,
              }}
            >
              {court.relationship === 'stockist' ? 'Stocks Mriie PADL' : 'Mriie PADL on court'}
            </span>
          )}
          <Body size={15} color="rgba(20,17,15,0.75)" style={{ marginTop: 20, lineHeight: 1.8 }}>
            {court.blurb}
          </Body>
          {court.relationship === 'stockist' && (
            <Body size={14} color="rgba(20,17,15,0.7)" style={{ marginTop: 14, lineHeight: 1.8 }}>
              {court.name} stocks our handmade thermal covers — see them in person next time
              you play, or browse the full collection online.
            </Body>
          )}
          {court.relationship === 'on-court' && (
            <Body size={14} color="rgba(20,17,15,0.7)" style={{ marginTop: 14, lineHeight: 1.8 }}>
              Look around court-side here and you&apos;ll spot our signature prints — players at{' '}
              {court.name} were among the first to carry Mriie PADL.
            </Body>
          )}
        </div>

        <div style={{ marginTop: 48 }}>
          <Label color={C.sand} style={{ marginBottom: 16 }}>What to bring on court</Label>
          <Body size={14} color="rgba(20,17,15,0.7)" style={{ lineHeight: 1.8 }}>
            Racket, grippy court shoes, plenty of water — and something to keep your racket out
            of the {isBali ? 'Bali' : 'tropical'} sun between games. Heat softens the foam core
            of a padel racket; a thermal cover keeps it playing true.
          </Body>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginTop: 22 }}>
            {products.map((p) => (
              <Link key={p.id} href="/" style={{ textDecoration: 'none', background: '#fff', display: 'block' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.variants[0].image} alt={p.name} style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '12px 14px' }}>
                  <span style={{ fontFamily: '"Fraunces", serif', fontSize: 16, color: C.ink, display: 'block' }}>{p.name}</span>
                  <span style={{ fontFamily: '"Fraunces", serif', fontSize: 14, color: C.terra }}>{SHOP.currency}{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <MotifDivider motif="frangipani" />
          <Body size={13} color="rgba(20,17,15,0.6)" style={{ marginTop: 32 }}>
            Organising a club order or want your court&apos;s colours on a custom print?{' '}
            <a href={waLink(`Hello Mriie PADL! I play at ${court.name} and I have a question.`)} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
              Chat with us on WhatsApp
            </a>
            .
          </Body>
        </div>
      </div>
    </Layout>
  )
}
