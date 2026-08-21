// Mriie PADL — shop configuration
// Single place to change contact + shop settings.

export const SHOP = {
  // WhatsApp number that receives orders + help chats (digits only, country code first).
  // Justin's line, corrected 21 Aug 2026 — the old PT Mriie number 6287833112262
  // was not registered on WhatsApp, so every chat link dead-ended.
  whatsapp: '6281119737114',
  // Flip to true once the WhatsApp number is confirmed reachable. While false,
  // every chat link routes to /contact instead of dead-ending in WhatsApp.
  whatsappUp: false,
  // Wholesale inquiries — number given by Justin 20 Aug 2026.
  wholesaleWhatsapp: '6283852793706',
  email: 'mriieolahragabersama@gmail.com',
  instagram: 'mriie.padl',
  instagramUrl: 'https://instagram.com/mriie.padl',
  currency: 'US$',
  deliveryFee: 35, // DHL Express flat rate, USD
  company: 'PT. Mriie Olahraga Bersama',
  nib: '0708250133921', // Indonesian business registration number, shown in footer + terms
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
