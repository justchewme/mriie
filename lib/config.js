// Mriie PADL — shop configuration
// Single place to change contact + shop settings.

export const SHOP = {
  // WhatsApp number that receives orders + help chats (digits only, country code first).
  // Currently the PT Mriie business line — change here if orders should go elsewhere.
  whatsapp: '6287833112262',
  email: 'mriieolahragabersama@gmail.com',
  instagram: 'mriie.padl',
  instagramUrl: 'https://instagram.com/mriie.padl',
  currency: 'US$',
  deliveryFee: 35, // DHL Express flat rate, USD
  company: 'PT. Mriie Olahraga Bersama',
}

export const waLink = (text) =>
  `https://wa.me/${SHOP.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
