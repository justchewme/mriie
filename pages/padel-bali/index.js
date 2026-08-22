import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { courts } from '@/lib/courts'
import { breadcrumbLd, ld } from '@/lib/seo'
import Head from 'next/head'

export default function PadelBali() {
  const areas = [...new Set(courts.map((c) => c.area))]

  return (
    <Layout
      title="Padel in Bali — Courts & Clubs Guide"
      description="Where to play padel in Bali: courts and clubs in Canggu, Uluwatu, Ubud, Denpasar, Nusa Lembongan and beyond — plus what to bring on court."
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ld(breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Padel in Bali', path: '/padel-bali' },
          ]))}
        />
        {/* ItemList of every club — the schema Google reads for directory pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ld({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Padel courts and clubs in Bali',
            numberOfItems: courts.length,
            itemListElement: courts.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
              url: `https://mriie.com/padel-bali/${c.slug}`,
            })),
          })}
        />
      </Head>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 20px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 16 }}>The island guide</Label>
        <H size={40}>Padel in Bali</H>
        <Body size={14} color="rgba(20,17,15,0.65)" style={{ marginTop: 18, maxWidth: 620 }}>
          Bali&apos;s padel scene has exploded — from beachfront courts on Nusa Lembongan to
          jungle sessions in Ubud. We make our covers and bags here on the island, so we know
          the courts well: some stock our pieces, and on most of them you&apos;ll spot our
          prints court-side. Here&apos;s where to play.
        </Body>

        {areas.map((area) => (
          <div key={area} style={{ marginTop: 44 }}>
            <Label color={C.sand} style={{ marginBottom: 14 }}>{area}</Label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {courts.filter((c) => c.area === area).map((c) => (
                <Link
                  key={c.slug}
                  href={`/padel-bali/${c.slug}`}
                  style={{ textDecoration: 'none', background: '#fff', padding: '20px 22px', display: 'block' }}
                >
                  <span style={{ fontFamily: '"Fraunces", serif', fontSize: 20, color: C.ink, display: 'block' }}>
                    {c.name}
                  </span>
                  {c.relationship && (
                    <span
                      style={{
                        display: 'inline-block', marginTop: 8, padding: '4px 10px',
                        fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: C.terra, border: `1px solid ${C.terra}`,
                      }}
                    >
                      {c.relationship === 'stockist' ? 'Stocks Mriie PADL' : 'Mriie on court'}
                    </span>
                  )}
                  <Body size={12} color="rgba(20,17,15,0.6)" style={{ marginTop: 10 }}>
                    {c.blurb}
                  </Body>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <MotifDivider motif="frangipani" />
          <H size={26} style={{ marginTop: 36 }}>Playing this week?</H>
          <Body size={13} color="rgba(20,17,15,0.65)" style={{ margin: '14px auto 24px', maxWidth: 480 }}>
            Keep your racket cool between games — our thermal covers and court bags are
            handmade right here in Bali and shipped worldwide.
          </Body>
          <Link
            href="/"
            style={{
              display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
              padding: '16px 30px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}
          >
            Shop the collection
          </Link>
        </div>
      </div>
    </Layout>
  )
}
