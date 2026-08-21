/** @type {import('next').NextConfig} */

// Content-Security-Policy for a Pages Router site whose only third-party
// script is Instagram's official embed (homepage carousels).
// 'unsafe-inline' is required in two places we cannot avoid on this stack:
// Next's inline bootstrap script, and React's inline style attributes (the
// whole site is styled with style={{…}}). Everything else is locked down.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.instagram.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https:",
  "connect-src 'self' https://vitals.vercel-insights.com",
  // Stripe is reached by redirect, never framed. Instagram embeds render in
  // an iframe from www.instagram.com — without frame-src they fall back to
  // default-src 'self' and show blank cards.
  "frame-src https://www.instagram.com https://instagram.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
]

const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework and version to scanners.
  poweredByHeader: false,
  i18n: {
    locales: ['en', 'es', 'id'],
    defaultLocale: 'en',
  },
  images: {
    // The site uses plain <img> everywhere, so the Image Optimization API is
    // dead weight — and it is the single largest source of open Next.js
    // advisories (DoS, cache poisoning, content injection). Turning it off
    // removes that attack surface entirely.
    unoptimized: true,
  },
  async redirects() {
    return [
      // The charcoal bag became its own men's product (21 Aug 2026); keep any
      // shared direct-buy links alive.
      { source: '/buy/bag-charcoal', destination: '/buy/bag-men-charcoal', permanent: true },
    ]
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // Each /buy hit creates a real Stripe Checkout Session, so crawlers
        // must never walk these.
        source: '/buy/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        // Private trade pricing — never indexed.
        source: '/trade/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

module.exports = nextConfig
