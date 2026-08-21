import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { SHOP } from '@/lib/config'

const PHOTOS = [
  { src: '/shop/collection.jpg', alt: 'Mriie PADL collection of handmade covers and bags' },
  { src: '/shop/covers.jpg', alt: 'Handmade thermal padel covers in signature prints' },
  { src: '/shop/bag-riviera-stripe-2.jpg', alt: 'Handwoven court bag in Riviera Stripe' },
  { src: '/shop/towel-2.jpg', alt: 'Linen sport towels woven in Bali' },
]

export default function About() {
  return (
    <Layout
      title="Our Story"
      description="MRIIE began on the courts of Canggu, where padel meets island craft. Every cover, bag and towel is cut and sewn by hand by our artisans in Bali."
    >
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 20px 20px' }}>
        <Label color={C.terra} style={{ marginBottom: 16 }}>Our Story</Label>
        <H size={40}>Made by hand in Bali.</H>
        <Body size={15} color="rgba(20,17,15,0.75)" style={{ marginTop: 22, lineHeight: 1.9 }}>
          MRIIE began on the courts of Canggu, where padel meets island craft. Every cover, bag
          and towel is cut and sewn by hand by our artisans in Bali — over 10,000 pieces made so
          far, shipped to players in six countries. We work in small batches, in 20+ signature
          prints, with insulated thermal linings that keep your racket cool in tropical heat.
        </Body>
        <Body size={15} color="rgba(20,17,15,0.75)" style={{ marginTop: 18, lineHeight: 1.9 }}>
          Behind each piece is a workshop of skilled makers, a tradition of Balinese
          craftsmanship, and a promise: if it carries our name, it&apos;s built to last. Soon
          you&apos;ll be able to visit us in person at our {SHOP.store.area} shop on{' '}
          {SHOP.store.street}.
        </Body>

        <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 12, marginTop: 40,
          }}
        >
          {PHOTOS.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block', background: C.coconut }}
            />
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <MotifDivider motif="frangipani" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28, marginTop: 44 }}>
          <div>
            <Label color={C.terra}>Built to last</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              Every piece carries our {SHOP.warrantyMonths}-month workmanship guarantee — if a
              seam, strap or zip fails in normal use, we repair or replace it at our cost. Details
              on the <Link href="/returns" style={{ color: C.terra }}>Returns</Link> page.
            </Body>
          </div>
          <div>
            <Label color={C.terra}>Made to order</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              We don&apos;t hold warehouse stock — your piece is cut and sewn for you. {SHOP.leadNote},
              and we send you a photo of your piece before it ships.
            </Body>
          </div>
          <div>
            <Label color={C.terra}>On the island</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              Stocked at City Padel Bali, Jungle Padel Lembongan and Zabbo Padel Batam, with a
              pop-up every Monday at Little Brew, Bali. Find courts to play on in our{' '}
              <Link href="/padel-bali" style={{ color: C.terra }}>Padel in Bali guide</Link>.
            </Body>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '64px 0 30px' }}>
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
