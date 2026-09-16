// Mriie PADL — shop configuration
// Single place to change contact + shop settings.

export const SHOP = {
  // ORDERS PAUSED 16 Sep 2026 — no Stripe session can be created, no bag/buy
  // buttons render, checkout + /buy redirect to /contact. Flip to true to reopen.
  ordersOpen: false,
  // Site-wide notice shown under the header while orders are paused.
  notice: {
    title: 'Warning — do not send money',
    body: 'Multiple buyers have reported paying for Mriie Padel orders through Instagram (@mriie.padl), WhatsApp or bank transfer and never receiving them. Do not pay anyone offering Mriie Padel products. This website is not taking orders and has never processed a payment. The matter is with lawyers and is the subject of a police report.',
    cta: 'If you paid and received nothing, report it now',
  },
  // WhatsApp number that receives orders + help chats (digits only, country code first).
  // REMOVED 16 Sep 2026: no personal number is published anywhere on the site.
  // Every chat link routes to the /contact form (Telegram pipe) instead.
  whatsapp: '',
  // Keep false — with no number configured, wa.me links would dead-end.
  whatsappUp: false,
  // Wholesale inquiries — form posts to Telegram directly.
  wholesaleWhatsapp: '',
  email: 'mriieolahragabersama@gmail.com',
  instagram: 'mriie.padl',
  instagramUrl: 'https://instagram.com/mriie.padl',
  currency: 'US$',
  // Delivery pricing lives in lib/shipping.js (per-region DHL rates).
  company: 'PT. Mriie Olahraga Bersama',
  nib: '0708250133921', // Indonesian business registration number, shown in footer + terms
  // Registered company address (shown in footer + terms for cross-border trust).
  address: 'Jl. Sasak No. 34, Ampel, Semampir, Surabaya, Jawa Timur 60151, Indonesia',
  // 12-month workmanship guarantee — shown on product pages, returns and FAQ.
  warrantyMonths: 12,
  // Shown on product cards + shipping page. Update once Marie confirms exact lead times.
  leadNote: 'Handmade to order — we confirm your dispatch date within 24 hours',
  // Physical store — flip `open` to true when it launches.
  store: { area: 'Canggu, Bali', street: 'Jl. Babadan', open: false },
}

// Every "chat with us" link in the site funnels through these two helpers, so
// flipping SHOP.whatsappUp reroutes the whole site at once — no call site can
// be missed. When WhatsApp is down we hand the customer to /contact and carry
// their intended message across so they don't retype it.
const contactFallback = (text) =>
  `/contact?via=whatsapp${text ? `&msg=${encodeURIComponent(text.slice(0, 300))}` : ''}`

export const waLink = (text) =>
  SHOP.whatsappUp
    ? `https://wa.me/${SHOP.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
    : contactFallback(text)

export const wholesaleWaLink = (text) =>
  SHOP.whatsappUp
    ? `https://wa.me/${SHOP.wholesaleWhatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
    : contactFallback(text)
