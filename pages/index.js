import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { productLd, ld } from '@/lib/seo'
import { C, Label, H, Body, MotifDivider } from '@/components/MriieShared'
import { products } from '@/lib/products'
import { SHOP, waLink } from '@/lib/config'
import { useT } from '@/lib/i18n'
import { useCart } from '@/components/CartContext'
import ProductCard from '@/components/ProductCard'
import InstagramFeed from '@/components/InstagramFeed'


export default function Shop() {
  const { count, subtotal } = useCart()
  const { t } = useT()

  return (
    <Layout>
      <Head>
        {products.map((p) => (
          <script key={p.id} type="application/ld+json" dangerouslySetInnerHTML={ld(productLd(p))} />
        ))}
      </Head>
      {/* Intro strip */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 20px 36px', textAlign: 'center' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Handmade in Bali · Ships Worldwide')}</Label>
        <H size={44}>Keep it cool. Play it hot.</H>
        <Body size={14} color="rgba(20,17,15,0.6)" style={{ maxWidth: 520, margin: '18px auto 0' }}>
          {t('Thermal covers, court bags and linen towels in signature prints — each piece handmade by our artisans in Bali. Tap a swatch to see the colours.')}
        </Body>
      </section>

      {/* Products */}
      <section
        style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 20px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      {/* Story + proof */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 20px 0', textAlign: 'center' }}>
        <MotifDivider motif="frangipani" />
        <Label color={C.terra} style={{ marginTop: 44, marginBottom: 16 }}>{t('From a Bali workshop')}</Label>
        <H size={30}>{t('Stitched in the village')}</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ maxWidth: 540, margin: '18px auto 0' }}>
          {t('Every cover, bag and towel is cut and sewn by hand by our artisans in Bali — over 10,000 pieces so far, shipped to players in six countries. Soon you can visit us too: our {area} shop on {street} is opening soon.', { area: SHOP.store.area, street: SHOP.store.street })}
        </Body>
        <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 22, letterSpacing: '0.06em' }}>
          {t('Stocked at City Padel Bali · Jungle Padel Lembongan · Zabbo Padel Batam')}
        </Body>
        <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 8, letterSpacing: '0.06em' }}>
          {t('Pop-up every Monday at Little Brew, Bali · 08.00–17.00')}
        </Body>
        <Body size={12} style={{ marginTop: 12 }}>
          <Link href="/padel-bali" style={{ color: C.terra }}>
            {t('New to the island? Our guide to padel in Bali →')}
          </Link>
        </Body>
        <Body size={12} style={{ marginTop: 8 }}>
          <Link href="/wholesale" style={{ color: C.terra }}>
            {t('Buying for a store or club? Partner with us →')}
          </Link>
        </Body>
        <Body size={12} style={{ marginTop: 8 }}>
          <Link href="/about" style={{ color: C.terra }}>
            {t('Our story — made by hand in Bali →')}
          </Link>
        </Body>
      </section>

      {/* Trusted by — real B2B relationships, stated as facts */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '72px 20px 0', textAlign: 'center' }}>
        <MotifDivider motif="frangipani" />
        <Label color={C.terra} style={{ marginTop: 44, marginBottom: 16 }}>{t('Trusted by clubs & partners')}</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20, marginTop: 24, textAlign: 'left' }}>
          {[
            t('Wholesale partner to Padelbox.de, Germany — repeat production runs shipped to Europe.'),
            t('600 custom-branded covers produced for a single Pilates studio order.'),
            t('Bulk orders shipped to clubs and resellers in Australia, Turkey and Thailand.'),
            t('Consigned island-wide across Bali padel clubs — the covers you see on court are ours.'),
          ].map((s) => (
            <Body key={s} size={13} color="rgba(20,17,15,0.75)" style={{ background: '#fff', padding: '18px 20px', lineHeight: 1.7 }}>
              {s}
            </Body>
          ))}
        </div>
        <Body size={11} color="rgba(20,17,15,0.5)" style={{ marginTop: 14 }}>
          {t('B2B references available on request — ask on the wholesale page.')}
        </Body>
      </section>

      {/* How it works / FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 20px 0' }}>
        <MotifDivider motif="frangipani" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 44 }}>
          <div>
            <Label color={C.terra}>{t('Ordering')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('Add your pieces and pay securely by card — checkout is handled by Stripe. Prefer to chat? Order via WhatsApp and pay by bank transfer instead. No account needed either way.')}
            </Body>
          </div>
          <div>
            <Label color={C.terra}>{t('Delivery')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('Tracked worldwide delivery from {currency}20 — Standard (EMS) or Express (DHL), priced by region. In Indonesia? Local courier at cost, or free self-collection in Bali.', { currency: SHOP.currency })}
            </Body>
          </div>
          <div>
            <Label color={C.terra}>{t('More prints')}</Label>
            <Body size={13} color="rgba(20,17,15,0.7)" style={{ marginTop: 12 }}>
              {t('Every piece is handmade in 20+ signature prints — the swatches are just the start.')}{' '}
              <a
                href={waLink('Hello Mriie PADL! Can I see more prints?')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.terra }}
              >
                {t('Ask us on WhatsApp')}
              </a>{' '}
              {t('to see them all.')}
            </Body>
          </div>
        </div>
      </section>

      {/* Live Instagram carousels — real posts, swipeable, lazy-loaded */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 20px 0', textAlign: 'center' }}>
        <MotifDivider motif="frangipani" />
        <a
          href={SHOP.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', marginTop: 44,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: C.ink, textDecoration: 'none',
          }}
        >
          {t('Follow us — @{ig} ↗', { ig: SHOP.instagram })}
        </a>
        <InstagramFeed />
      </section>

      {/* Sticky cart bar */}
      {count > 0 && (
        <div
          style={{
            position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 55,
            background: C.ink, padding: '0 20px',
          }}
        >
          <Link
            href="/checkout"
            style={{
              maxWidth: 1200, margin: '0 auto', padding: '18px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: C.bone, textDecoration: 'none',
              fontFamily: 'Inter, sans-serif', fontSize: 13, letterSpacing: '0.1em',
            }}
          >
            <span>{count} {count > 1 ? t('items') : t('item')} · {SHOP.currency}{subtotal}</span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 12 }}>
              {t('Checkout →')}
            </span>
          </Link>
        </div>
      )}
    </Layout>
  )
}
