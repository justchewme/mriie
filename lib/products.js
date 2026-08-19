// Mriie PADL — product data

export const PRINTS = [
  'Decide later on WhatsApp',
  'Sage Green',
  'Blush Pink',
  'Lilac',
  'Cream',
  'Mint Blue',
  'Peach',
]

export const products = [
  {
    id: 'cover',
    name: 'Thermal Padel Cover',
    tagline: 'Insulated racket cover · zip pocket · 20+ prints',
    price: 105,
    image: '/shop/covers.jpg',
    description:
      'Keeps your racket cool in the heat of the game. Insulated thermal lining, zip valuables pocket, adjustable strap — and a drawstring dust bag with every cover. Each one handmade in Bali in our signature prints.',
    details: ['Insulated thermal lining', 'Zip valuables pocket', 'Adjustable shoulder strap', 'Dust bag included', 'Handmade in Bali'],
  },
  {
    id: 'bag',
    name: 'Thermal Padel Bag',
    tagline: 'Court tote with insulated racket compartment',
    price: 160,
    image: '/shop/bag.jpg',
    description:
      'The whole game in one bag. A roomy court tote with an insulated racket compartment, side pockets for bottle and balls, and space for everything else. Handmade in Bali, made to be lived in.',
    details: ['Insulated racket compartment', 'Side bottle + ball pockets', 'Fits towel, shoes & essentials', 'Signature prints', 'Handmade in Bali'],
  },
  {
    id: 'towel',
    name: 'Linen Sport Towel',
    tagline: 'Woven stripe · quick-dry · matches your cover',
    price: 60,
    image: '/shop/towel.jpg',
    description:
      'A court-side towel that earns its place in the photo. Woven linen blend, quick-dry, in the same prints as our covers — made to match.',
    details: ['Woven linen blend', 'Quick-dry', 'Matches cover prints', 'Handmade in Bali'],
  },
]

export const getProduct = (id) => products.find((p) => p.id === id) || null
