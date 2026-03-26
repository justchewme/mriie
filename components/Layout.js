import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ children, title, description }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  const pageTitle = title ? `${title} — Mriie` : 'Mriie — Timeless Essentials'
  const pageDesc = description || 'Mriie creates thoughtfully designed clothing and accessories for those who value quality over quantity.'

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
      </Head>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-mriie-white/95 backdrop-blur-sm border-b border-mriie-sand' : 'bg-transparent'
      }`}>
        <div className="max-w-site mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="/products" className="nav-link">
                Collection
              </Link>
              <Link href="/our-story" className="nav-link">
                Our Story
              </Link>
            </nav>

            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl font-light tracking-[0.12em] text-mriie-black hover:text-mriie-warm transition-colors duration-200"
            >
              MRIIE
            </Link>

            {/* Right nav */}
            <div className="hidden lg:flex items-center gap-10">
              <Link href="/products" className="nav-link">
                Shop
              </Link>
              <button
                aria-label="Shopping bag"
                className="nav-link flex items-center gap-2"
              >
                <BagIcon />
                <span>0</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-mriie-black"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-mriie-white border-t border-mriie-sand">
            <nav className="max-w-site mx-auto px-6 py-8 flex flex-col gap-6">
              <Link href="/" className="font-serif text-2xl font-light text-mriie-black">
                Home
              </Link>
              <Link href="/products" className="font-serif text-2xl font-light text-mriie-black">
                Collection
              </Link>
              <Link href="/our-story" className="font-serif text-2xl font-light text-mriie-black">
                Our Story
              </Link>
              <div className="divider" />
              <p className="font-sans text-sm text-mriie-muted tracking-widest-sm uppercase">
                Free shipping on orders over $200
              </p>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-mriie-cream border-t border-mriie-sand mt-32">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="font-serif text-2xl font-light tracking-[0.12em] text-mriie-black"
              >
                MRIIE
              </Link>
              <p className="mt-4 font-sans text-sm text-mriie-muted leading-relaxed max-w-xs">
                Thoughtfully designed clothing for those who value enduring quality over fleeting trends. Made to last, made to matter.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="font-sans text-xs tracking-widest-sm uppercase text-mriie-muted hover:text-mriie-black transition-colors">
                  Instagram
                </a>
                <span className="text-mriie-sand">·</span>
                <a href="#" className="font-sans text-xs tracking-widest-sm uppercase text-mriie-muted hover:text-mriie-black transition-colors">
                  Pinterest
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="section-label mb-6">Shop</p>
              <ul className="flex flex-col gap-3">
                {['New Arrivals', 'Outerwear', 'Knitwear', 'Dresses', 'Accessories'].map(item => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="font-sans text-sm text-mriie-muted hover:text-mriie-black transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label mb-6">Info</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Our Story', href: '/our-story' },
                  { label: 'Sustainability', href: '/our-story' },
                  { label: 'Size Guide', href: '#' },
                  { label: 'Shipping & Returns', href: '#' },
                  { label: 'Contact', href: '#' },
                ].map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-sm text-mriie-muted hover:text-mriie-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="divider mt-12 lg:mt-16" />

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-xs text-mriie-muted">
              © {new Date().getFullYear()} Mriie. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-xs text-mriie-muted hover:text-mriie-black transition-colors">Privacy</a>
              <a href="#" className="font-sans text-xs text-mriie-muted hover:text-mriie-black transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
