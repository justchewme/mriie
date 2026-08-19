// Mriie PADL — shop configuration
// Single place to change contact + shop settings.

export const SHOP = {
  // WhatsApp number that receives orders + help chats (digits only, country code first).
  // Currently the PT Mriie business line — change here if orders should go elsewhere.
  whatsapp: '6287833112262',
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

export const waLink = (text) =>
  `https://wa.me/${SHOP.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const wholesaleWaLink = (text) =>
  `https://wa.me/${SHOP.wholesaleWhatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
