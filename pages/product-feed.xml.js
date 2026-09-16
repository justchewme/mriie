// Google Merchant Center product feed (RSS 2.0 with g: namespace).
// Point Merchant Center at https://mriie.com/product-feed.xml — one item per product.
import { products } from '@/lib/products'
import { SITE, absUrl } from '@/lib/seo'
import { SHOP } from '@/lib/config'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function getServerSideProps({ res }) {
  // Orders paused: publish an empty feed so Merchant Center lists nothing.
  const items = (SHOP.ordersOpen ? products : [])
    .map(
      (p) => `    <item>
      <g:id>mriie-${p.id}</g:id>
      <g:title>${esc(`${p.name} — Handmade in Bali`)}</g:title>
      <g:description>${esc(p.description)}</g:description>
      <g:link>${SITE.url}</g:link>
      <g:image_link>${absUrl(p.variants[0].image)}</g:image_link>
${p.variants.slice(1, 10).map((v) => `      <g:additional_image_link>${absUrl(v.image)}</g:additional_image_link>`).join('\n')}
      <g:price>${p.price.toFixed(2)} USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>Mriie PADL</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Sporting Goods &gt; Athletics &gt; Racquet Sports</g:google_product_category>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${SITE.url}</link>
    <description>${esc(SITE.description)}</description>
${items}
  </channel>
</rss>`
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function ProductFeed() {
  return null
}
