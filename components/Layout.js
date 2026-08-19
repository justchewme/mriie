import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { C, Wordmark } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { SITE, absUrl, organizationLd, ld } from '@/lib/seo'
import { useCart } from '@/components/CartContext'

const WaIcon = ({ size = 20, color = C.bone }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.19 8.19 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
)

export default function Layout({ children, title, description, ogImage }) {
  const { count } = useCart()
  const router = useRouter()

  const pageTitle = title ? `${title} — Mriie PADL` : SITE.title
  const pageDesc = description || SITE.description
  const canonical = absUrl(router.asPath.split('?')[0].split('#')[0])
  const image = absUrl(ogImage || SITE.ogImage)

  return (
    <div style={{ background: C.bone, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={ld(organizationLd())} />
      </Head>

      {/* Header */}
      <header
        style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(244,239,230,0.92)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid rgba(20,17,15,0.08)`,
        }}
      >
        <div
          style={{
            maxWidth: 1200, margin: '0 auto', padding: '18px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <Wordmark size={15} />
            <span
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.4em', textTransform: 'uppercase', color: C.terra,
              }}
            >
              Padl
            </span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <a
              href={waLink('Hello Mriie PADL! I have a question 🙂')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: C.ink, textDecoration: 'none', opacity: 0.75,
              }}
            >
              Help
            </a>
            <Link
              href="/checkout"
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: C.bone, background: C.ink, textDecoration: 'none',
                padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              Bag{count > 0 ? ` · ${count}` : ''}
            </Link>
          </div>
        </div>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      {/* Footer */}
      <footer style={{ background: C.ocean, color: C.bone, marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 20px 40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}>
            <div style={{ maxWidth: 320 }}>
              <Wordmark color={C.bone} size={14} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 1.7, opacity: 0.75, marginTop: 16 }}>
                Thermal padel covers, bags and linen towels — handmade in Bali, shipped worldwide.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 1.7, opacity: 0.75, marginTop: 12 }}>
                Our {SHOP.store.area} shop on {SHOP.store.street} is opening soon.
              </p>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 2.1 }}>
              <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 8 }}>
                Shop
              </span>
              <Link href="/faq" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>FAQ</Link>
              <Link href="/padel-bali" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>Padel in Bali guide</Link>
              <Link href="/shipping" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>Shipping &amp; Delivery</Link>
              <Link href="/returns" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>Returns</Link>
              <Link href="/terms" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>Terms &amp; Privacy</Link>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 2.1 }}>
              <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 8 }}>
                Contact
              </span>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>
                WhatsApp us
              </a>
              <a href={`mailto:${SHOP.email}`} style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>
                {SHOP.email}
              </a>
              <a href={SHOP.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: C.bone, textDecoration: 'none', display: 'block' }}>
                @{SHOP.instagram}
              </a>
            </div>
          </div>
          <div
            style={{
              marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(244,239,230,0.15)',
              display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <div style={{ opacity: 0.45, fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em' }}>
              © {new Date().getFullYear()} {SHOP.company} · NIB {SHOP.nib} · Handmade in Bali
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Visa', 'Mastercard', 'Amex', 'Secured by Stripe', 'WhatsApp'].map((m) => (
                <span
                  key={m}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: C.bone, opacity: 0.6,
                    border: '1px solid rgba(244,239,230,0.3)', padding: '5px 10px',
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp help */}
      <a
        href={waLink('Hello Mriie PADL! I need some help 🙂')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: 'fixed', right: 20, bottom: 20, zIndex: 60,
          width: 54, height: 54, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(20,17,15,0.25)',
        }}
      >
        <WaIcon size={28} color="#fff" />
      </a>
    </div>
  )
}
