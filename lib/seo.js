// Mriie PADL — SEO library.
// Single source of truth for site identity, canonical URLs, and JSON-LD
// structured data. Import from pages to add meta + schema consistently.
import { SHOP } from '@/lib/config'

export const SITE = {
  url: 'https://mriie.com',
  name: 'Mriie PADL',
  title: 'Padel Covers, Bags & Towels Handmade in Bali — Mriie PADL',
  description:
    'Thermal padel racket covers, court bags and linen sport towels handmade in Bali. Shipped worldwide, stocked at padel clubs across Bali and beyond.',
  ogImage: '/shop/covers.jpg',
}

export const absUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`

// --- JSON-LD builders (render with <script type="application/ld+json">) ---

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SHOP.company,
  url: SITE.url,
  logo: absUrl('/favicon.svg'),
  sameAs: SHOP.ordersOpen ? [SHOP.instagramUrl] : [],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surabaya',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
})

export const productLd = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.variants.map((v) => absUrl(v.image)),
  brand: { '@type': 'Brand', name: SITE.name },
  ...(SHOP.ordersOpen ? { offers: {
    '@type': 'Offer',
    url: SITE.url,
    priceCurrency: 'USD',
    price: product.price,
    availability: 'https://schema.org/MadeToOrder',
    itemCondition: 'https://schema.org/NewCondition',
  } } : {}),
})

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
})

export const faqLd = (qas) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qas.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

// Helper to serialize for <script dangerouslySetInnerHTML>
export const ld = (obj) => ({ __html: JSON.stringify(obj) })
