import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ children, title, description }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)
  const router = useRouter()

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  const pageTitle = title ? `${title} — Mriie` : 'Mriie — Sustainable Luxury Sportswear'
  const pageDesc = description || 'Precision-engineered performance wear infused with Balinese craftsmanship. Designed for the global athlete who values the planet as much as the podium.'

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/')

  async function handleNewsletterSubmit(e) {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, source: 'footer' }),
      })
      const data = await res.json()
      if (data.success) {
        setNewsletterStatus('success')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mriie" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-[#fbf5f0]/80 backdrop-blur-xl top-0 sticky z-50 shadow-sm shadow-[#302e2b]/5">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
          <Link href="/" className="text-3xl font-headline italic tracking-tighter text-[#b70049]">
            Mriie
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/products"
              className={`tracking-widest uppercase text-[10px] font-bold transition-colors duration-300 ${
                isActive('/products')
                  ? 'text-[#b70049] border-b-2 border-[#b70049] pb-1'
                  : 'text-[#302e2b] opacity-80 hover:text-[#b70049]'
              }`}
            >
              Collections
            </Link>
            <Link
              href="/artisans"
              className={`tracking-widest uppercase text-[10px] font-bold transition-colors duration-300 ${
                isActive('/artisans')
                  ? 'text-[#b70049] border-b-2 border-[#b70049] pb-1'
                  : 'text-[#302e2b] opacity-80 hover:text-[#b70049]'
              }`}
            >
              Artisans
            </Link>
            <Link
              href="/b2b"
              className={`tracking-widest uppercase text-[10px] font-bold transition-colors duration-300 ${
                isActive('/b2b')
                  ? 'text-[#b70049] border-b-2 border-[#b70049] pb-1'
                  : 'text-[#302e2b] opacity-80 hover:text-[#b70049]'
              }`}
            >
              B2B Partners
            </Link>
            <Link
              href="/our-story"
              className={`tracking-widest uppercase text-[10px] font-bold transition-colors duration-300 ${
                isActive('/our-story')
                  ? 'text-[#b70049] border-b-2 border-[#b70049] pb-1'
                  : 'text-[#302e2b] opacity-80 hover:text-[#b70049]'
              }`}
            >
              Our Story
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-[#302e2b] hover:text-[#b70049] transition-colors" aria-label="Search">
              search
            </button>
            <button className="material-symbols-outlined text-[#302e2b] hover:text-[#b70049] transition-colors" aria-label="Shopping bag">
              shopping_bag
            </button>
            <button
              className="md:hidden material-symbols-outlined text-[#302e2b]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#fbf5f0] border-t border-[#e2dcd6] px-8 py-6 flex flex-col gap-6">
            <Link href="/products" className="tracking-widest uppercase text-xs font-bold text-[#302e2b] hover:text-[#b70049] transition-colors">
              Collections
            </Link>
            <Link href="/artisans" className="tracking-widest uppercase text-xs font-bold text-[#302e2b] hover:text-[#b70049] transition-colors">
              Artisans
            </Link>
            <Link href="/b2b" className="tracking-widest uppercase text-xs font-bold text-[#302e2b] hover:text-[#b70049] transition-colors">
              B2B Partners
            </Link>
            <Link href="/our-story" className="tracking-widest uppercase text-xs font-bold text-[#302e2b] hover:text-[#b70049] transition-colors">
              Our Story
            </Link>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0e666a] text-[#fbf5f0] rounded-t-[2rem] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-4xl font-headline italic text-[#fbf5f0]">Mriie</div>
            <p className="text-[#fbf5f0]/70 leading-relaxed max-w-xs font-light text-sm">
              Elevating movement through the harmony of Indonesian heritage and modern performance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/mriie.bali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#fbf5f0]/20 flex items-center justify-center hover:bg-[#fbf5f0]/10 transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
              <a
                href="https://pinterest.com/mriie_bali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#fbf5f0]/20 flex items-center justify-center hover:bg-[#fbf5f0]/10 transition-colors"
                aria-label="Pinterest"
              >
                <span className="material-symbols-outlined text-sm">filter_vintage</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-3xl italic">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/artisans" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Our Artisans</Link></li>
              <li><Link href="/sustainability" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Sustainability</Link></li>
              <li><Link href="/b2b" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">B2B Inquiries</Link></li>
              <li><Link href="/contact" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-3xl italic">Collections</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Yoga &amp; Flow</Link></li>
              <li><Link href="/products" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">High Performance</Link></li>
              <li><Link href="/shipping" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Shipping &amp; Returns</Link></li>
              <li><Link href="/size-guide" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Size Guide</Link></li>
              <li><Link href="/care" className="text-[#fbf5f0]/70 hover:text-[#ff7290] transition-all font-medium text-sm">Product Care</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-headline text-3xl italic">Stay Connected</h4>
            <div className="space-y-4">
              <p className="text-xs tracking-widest uppercase opacity-70">Join our newsletter for exclusive Bali stories.</p>
              {newsletterStatus === 'success' ? (
                <p className="text-[#a6eff3] text-sm font-medium">You&apos;re subscribed. Welcome to Mriie.</p>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleNewsletterSubmit}>
                  <input
                    className="bg-transparent border-b-2 border-[#fbf5f0]/20 py-2 outline-none focus:border-[#b70049] transition-all placeholder-[#fbf5f0]/30 text-sm"
                    placeholder="email@address.com"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="text-left text-[#ff7290] underline underline-offset-4 font-bold tracking-widest uppercase text-[10px] hover:opacity-80 transition-opacity disabled:opacity-50"
                  >
                    {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  {newsletterStatus === 'error' && (
                    <p className="text-[#fb5151] text-xs">Something went wrong. Try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="px-12 py-10 border-t border-[#fbf5f0]/5 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase font-bold text-[#fbf5f0]/50">
          <span>© {new Date().getFullYear()} Mriie Bali. Sustainable Luxury Sportswear.</span>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#fbf5f0] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#fbf5f0] transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#fbf5f0] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
