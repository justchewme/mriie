// Serves /sitemap.xml dynamically so court pages stay in sync with lib/courts.js.
import { courts } from '@/lib/courts'
import { absUrl } from '@/lib/seo'
import { SHOP } from '@/lib/config'

const STATIC_PATHS = [
  '/', '/notice', '/about', '/wholesale', '/faq', '/shipping', '/returns', '/terms', '/privacy', '/padel-bali',
  '/product/cover', '/product/bag', '/product/bag-men', '/product/towel',
]

export async function getServerSideProps({ res }) {
  // While orders are paused the shop URLs are stood down, so don't ask Google
  // to keep them: the notice and the report form are the whole site.
  const urls = SHOP.ordersOpen
    ? [...STATIC_PATHS, ...courts.map((c) => `/padel-bali/${c.slug}`)]
    : ['/', '/notice', '/contact', '/terms', '/privacy']
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${absUrl(u)}</loc></url>`).join('\n')}
</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function Sitemap() {
  return null
}
