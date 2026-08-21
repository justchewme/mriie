// Mriie PADL — product data
// Each product has colourway variants; variant images live in /public/shop/.

export const products = [
  {
    id: 'cover',
    name: 'Thermal Padel Cover',
    tagline: 'Insulated racket cover · zip pocket',
    price: 105,
    description:
      'Keeps your racket cool in the heat of the game. Insulated thermal lining, zip valuables pocket, adjustable strap — and a drawstring dust bag with every cover. Each one handmade in Bali.',
    specs: [
      'Fits all standard padel rackets',
      'Insulated thermal lining · woven outer in signature prints',
      'Zip valuables pocket · adjustable shoulder strap',
      'Includes a drawstring dust bag',
      'Care: spot clean, air dry away from direct sun',
    ],
    variants: [
      { id: 'riviera-stripe', name: 'Riviera Stripe', image: '/shop/cover-riviera-stripe.jpg' },
      { id: 'noir-stripe', name: 'Noir Stripe', image: '/shop/cover-noir-stripe.jpg' },
      { id: 'signature-mix', name: 'Signature Prints', image: '/shop/covers.jpg' },
    ],
  },
  {
    id: 'bag',
    name: 'Thermal Padel Bag',
    tagline: 'Court tote with insulated racket compartment',
    price: 160,
    description:
      'The whole game in one bag. A roomy court tote with an insulated racket compartment, side pockets for bottle and balls, and space for everything else. Handmade in Bali, made to be lived in.',
    specs: [
      'Insulated compartment fits 2 padel rackets',
      'Side pockets for bottle and balls · inner valuables pocket',
      'Woven outer in signature prints · sturdy carry handles',
      'Care: spot clean, air dry away from direct sun',
    ],
    variants: [
      { id: 'emerald-weave', name: 'Emerald Weave', image: '/shop/bag-emerald-weave.jpg' },
      { id: 'vintage-plaid', name: 'Vintage Plaid', image: '/shop/bag-vintage-plaid.jpg' },
      { id: 'plaid-forest', name: 'Plaid Forest', image: '/shop/bag-plaid-forest.jpg' },
      { id: 'pastel-mosaic', name: 'Pastel Mosaic', image: '/shop/bag-pastel-mosaic.jpg' },
      { id: 'riviera-stripe', name: 'Riviera Stripe', image: '/shop/bag-riviera-stripe.jpg' },
      { id: 'cherry-check', name: 'Cherry Check', image: '/shop/bag-cherry-check.jpg' },
    ],
  },
  {
    id: 'bag-men',
    name: "Men's Padel Bag",
    tagline: 'The male collection · minimal all-black court tote',
    price: 160,
    description:
      'The whole game in one bag — stripped back to black. Same roomy court tote with an insulated racket compartment, side pockets for bottle and balls, in a minimal charcoal weave. Handmade in Bali.',
    specs: [
      'Insulated compartment fits 2 padel rackets',
      'Side pockets for bottle and balls · inner valuables pocket',
      'Minimal charcoal weave · sturdy carry handles',
      'Care: spot clean, air dry away from direct sun',
    ],
    variants: [
      { id: 'charcoal', name: 'Charcoal', image: '/shop/bag-charcoal.jpg' },
    ],
  },
  {
    id: 'towel',
    name: 'Linen Sport Towel',
    tagline: 'Woven stripe · quick-dry · matches your cover',
    price: 60,
    description:
      'A court-side towel that earns its place in the photo. Woven linen blend, quick-dry, in the same prints as our covers — made to match.',
    specs: [
      '30 × 75 cm — court-side size',
      'Woven linen blend · quick-dry',
      'Prints match our covers and bags',
      'Care: machine wash cold, air dry',
    ],
    variants: [
      { id: 'rose-stripe', name: 'Rosé Stripe', image: '/shop/towel-rose-stripe.jpg' },
      { id: 'bluebell-check', name: 'Bluebell Check', image: '/shop/towel.jpg' },
    ],
  },
]

export const getProduct = (id) => products.find((p) => p.id === id) || null

export const getVariant = (product, variantId) =>
  product?.variants.find((v) => v.id === variantId) || product?.variants[0] || null

// Slug used by the shareable direct-buy links at /buy/<slug>.
export const buySlug = (productId, variantId) => `${productId}-${variantId}`
