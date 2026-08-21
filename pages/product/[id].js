// Per-product SEO landing pages — crawlable URLs with unique titles, metas
// and Product JSON-LD, wrapping the same ProductCard used on the shop grid.
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, Label, Body, MotifDivider } from '@/components/MriieShared'
import { products } from '@/lib/products'
import { productLd, breadcrumbLd, ld } from '@/lib/seo'
import { useT, localizeProduct } from '@/lib/i18n'
import ProductCard from '@/components/ProductCard'

// Keyword-targeted titles and metas per product (Layout appends "— Mriie PADL").
const SEO = {
  cover: {
    title: 'Thermal Padel Racket Cover — Handmade in Bali',
    description:
      'Insulated handmade padel racket cover in 20+ signature prints. Ships worldwide by DHL Express to Europe, the UAE, Australia and beyond. Keep your racket cool.',
  },
  bag: {
    title: 'Padel Court Bag — Handmade Thermal Padel Bag',
    description:
      'Handwoven padel court bag with an insulated racket compartment, made in Bali. Signature prints, worldwide DHL delivery, 12-month workmanship guarantee.',
  },
  'bag-men': {
    title: "Men's Padel Bag — Minimal All-Black Court Tote",
    description:
      "Minimal all-black men's padel bag with an insulated racket compartment, handmade in Bali. Worldwide DHL delivery, 12-month workmanship guarantee.",
  },
  towel: {
    title: 'Linen Padel Sport Towel — Handmade in Bali',
    description:
      'Quick-dry woven linen padel towel in prints that match our covers and bags. Handmade in Bali, shipped worldwide.',
  },
}

export async function getStaticPaths() {
  return {
    paths: products.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } }
}

export default function ProductPage({ id }) {
  const { t, locale } = useT()
  const product = products.find((p) => p.id === id)
  if (!product) return null
  const localized = localizeProduct(product, locale)
  const seo = SEO[id] || { title: product.name, description: product.description }
  const others = products.filter((p) => p.id !== id)

  return (
    <Layout title={seo.title} description={seo.description} ogImage={product.variants[0].image}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={ld(productLd(product))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ld(breadcrumbLd([
            { name: 'Shop', path: '/' },
            { name: localized.name, path: `/product/${id}` },
          ]))}
        />
      </Head>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '44px 20px 0' }}>
        <Body size={12} style={{ marginBottom: 18 }}>
          <Link href="/" style={{ color: C.terra }}>← {t('Back to the shop')}</Link>
        </Body>
        <ProductCard product={product} detailLink={false} />

        {/* Cross-sell — match the set */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <MotifDivider motif="frangipani" />
          <Label color={C.terra} style={{ marginTop: 36, marginBottom: 8 }}>{t('Complete the set')}</Label>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 14 }}>
            {others.map((p) => {
              const lp = localizeProduct(p, locale)
              return (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none',
                    background: '#fff', border: '1px solid rgba(20,17,15,0.12)', padding: '8px 14px 8px 8px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.variants[0].image} alt={lp.name} style={{ width: 44, height: 44, objectFit: 'cover', display: 'block' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: C.ink }}>
                    {lp.name} · <span style={{ color: C.terra }}>US${p.price}</span>
                  </span>
                </Link>
              )
            })}
          </div>
          <Body size={12} color="rgba(20,17,15,0.55)" style={{ margin: '26px 0 40px' }}>
            {t('Every piece comes in 20+ signature prints — ask on WhatsApp to see them all.')}
          </Body>
        </div>
      </div>
    </Layout>
  )
}
