// Serves /sitemap.xml dynamically so court pages stay in sync with lib/courts.js.
import { courts } from '@/lib/courts'
import { absUrl } from '@/lib/seo'

const STATIC_PATHS = ['/', '/wholesale', '/faq', '/shipping', '/returns', '/terms', '/padel-bali']

export async function getServerSideProps({ res }) {
  const urls = [
    ...STATIC_PATHS,
    ...courts.map((c) => `/padel-bali/${c.slug}`),
  ]
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
