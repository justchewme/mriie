import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const productsData = {
  'hibiscus-dawn-bikini': {
    name: 'Hibiscus Dawn Bikini',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$145.00',
    colors: ['Hibiscus', 'Ocean Teal', 'Midnight'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Hand-crafted by local artisans in the heart of Bali. Each piece utilizes ocean-recovered nylon and natural rubber, merging high-performance with a commitment to the earth.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'artisan-yoga-mat': {
    name: 'The Uluwatu Ritual Mat',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$145.00',
    colors: ['Natural Cork', 'Shadow'],
    sizes: ['Standard', 'Wide'],
    description: 'Hand-crafted by local artisans in the heart of Bali. Each mat utilizes ocean-recovered nylon and natural rubber, merging high-performance grip with a commitment to the earth.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'padel-signature-racket': {
    name: 'Padel Signature Racket',
    collection: 'Island Essentials — Pro Series',
    price: '$280.00',
    colors: ['Carbon Black', 'Hibiscus Red'],
    sizes: ['One Size'],
    description: 'Precision-engineered for elite performance. Carbon-fiber construction with Balinese artisan grip detailing.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'oceanic-flow-set': {
    name: 'Oceanic Flow Set',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$195.00',
    colors: ['Reef', 'Dusk', 'Black Sand'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A complete set crafted from 100% recycled ocean polyamide. Two-piece luxury activewear for the conscious athlete.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'aling-strap': {
    name: 'The Aling Strap',
    collection: 'Accessories — Flow Series',
    price: '$35.00',
    colors: ['Natural', 'Teal', 'Hibiscus'],
    sizes: ['One Size'],
    description: 'A versatile organic cotton yoga strap hand-woven in the Aling cooperative near Ubud. Reinforced brass buckle, 2.5m adjustable length. Built to last a lifetime of practice.',
    images: ['/images/img_02.jpg', '/images/img_19.jpg', '/images/img_21.jpg'],
  },
  'cork-foundation-block': {
    name: 'Cork Foundation Block',
    collection: 'Accessories — Flow Series',
    price: '$45.00',
    colors: ['Natural Cork'],
    sizes: ['Standard', 'Tall'],
    description: 'Harvested from FSC-certified cork oak forests in Portugal. Non-slip surface, antimicrobial, and fully biodegradable. The perfect foundation for any asana practice.',
    images: ['/images/img_07.jpg', '/images/img_19.jpg', '/images/img_21.jpg'],
  },
  'sembunyi-yoga-top': {
    name: 'Sembunyi Yoga Top',
    collection: 'Active Essentials — Summer 2024',
    price: '$85.00',
    colors: ['Hibiscus', 'Cloud', 'Jungle'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: '"Sembunyi" means hidden in Balinese — a nod to the secret coves where this top was tested. Econyl® recycled nylon with built-in shelf bra support and seamless back detail for unrestricted movement.',
    images: ['/images/img_03.jpg', '/images/img_19.jpg', '/images/img_21.jpg'],
  },
  'tirta-earth-bottle': {
    name: 'Tirta Earth Bottle',
    collection: 'Lifestyle — Ritual Objects',
    price: '$65.00',
    colors: ['Teal', 'Terracotta', 'Cream'],
    sizes: ['500ml', '750ml'],
    description: '"Tirta" is the sacred Balinese water of purification. This double-wall stainless steel bottle is finished with a hand-applied rattan wrap crafted by Ubud artisans. Zero-plastic lid, dishwasher safe body.',
    images: ['/images/img_06.jpg', '/images/img_19.jpg', '/images/img_21.jpg'],
  },
}

const relatedProducts = [
  { slug: 'aling-strap', name: 'The Aling Strap', price: '$35.00', image: '/images/img_02.jpg' },
  { slug: 'cork-foundation-block', name: 'Cork Foundation Block', price: '$45.00', image: '/images/img_07.jpg' },
  { slug: 'sembunyi-yoga-top', name: 'Sembunyi Yoga Top', price: '$85.00', image: '/images/img_03.jpg' },
  { slug: 'tirta-earth-bottle', name: 'Tirta Earth Bottle', price: '$65.00', image: '/images/img_06.jpg' },
]

export async function getStaticPaths() {
  return {
    paths: Object.keys(productsData).map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = productsData[params.slug] || productsData['artisan-yoga-mat']
  return { props: { product, slug: params.slug } }
}

export default function ProductDetailPage({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null)
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null)
  const [toastVisible, setToastVisible] = useState(false)

  const colorSwatches = {
    'Hibiscus': '#b70049',
    'Ocean Teal': '#0e666a',
    'Midnight': '#1a1a2e',
    'Reef': '#0e666a',
    'Dusk': '#7a4f6a',
    'Black Sand': '#302e2b',
    'Cloud': '#e8e4e0',
    'Jungle': '#2d5a27',
    'Natural Cork': '#b5895a',
    'Shadow': '#7a7672',
    'Carbon Black': '#1a1a1a',
    'Hibiscus Red': '#b70049',
    'Natural': '#c9a87c',
    'Teal': '#0e666a',
    'Terracotta': '#c1440e',
    'Cream': '#fbf5f0',
  }

  function handleAddToCart() {
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  return (
    <Layout
      title={product.name}
      description={product.description}
    >
      {/* Cart toast */}
      <div className={`fixed top-6 right-6 z-50 transition-all duration-500 ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-[#302e2b] text-[#fbf5f0] px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a6eff3]">check_circle</span>
          <div>
            <p className="font-bold text-sm">Added to Ritual</p>
            <p className="text-xs opacity-70">{product.name}{selectedColor ? ` — ${selectedColor}` : ''}{selectedSize ? `, ${selectedSize}` : ''}</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12">
        {/* Product Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          {/* Left: Imagery Cluster */}
          <div className="lg:col-span-7 grid grid-cols-6 gap-4">
            <div className="col-span-6 rounded-lg overflow-hidden editorial-shadow bg-[#ede7e2] relative">
              <Image
                src="/images/img_19.jpg"
                alt={product.name}
                width={1200}
                height={716}
                className="w-full h-[716px] object-cover"
                priority
              />
            </div>
            <div className="col-span-3 rounded-lg overflow-hidden editorial-shadow bg-[#ede7e2] -mt-20 ml-8 relative z-10 aspect-[4/5]">
              <Image
                src="/images/img_21.jpg"
                alt="Close up texture of sustainable material"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-3 rounded-lg overflow-hidden editorial-shadow bg-[#ede7e2] mt-4 aspect-square relative">
              <Image
                src="/images/img_23.jpg"
                alt="Lifestyle product shot"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div className="space-y-4">
              <span className="text-[#874e00] tracking-[0.2em] uppercase text-[10px] font-bold">{product.collection}</span>
              <h1 className="font-headline italic text-6xl text-[#302e2b] leading-tight">{product.name}</h1>
              <p className="text-2xl font-headline text-[#0e666a]">{product.price}</p>
            </div>
            <div className="space-y-6">
              <p className="text-[#5e5b57] leading-relaxed max-w-md">{product.description}</p>
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Colour: <span className="text-[#302e2b]">{selectedColor}</span></p>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                        className={`w-8 h-8 rounded-full border-4 transition-all ${selectedColor === color ? 'border-[#b70049] ring-2 ring-[#b70049]/50 scale-110' : 'border-[#fbf5f0] ring-1 ring-[#b1aca8]/30'}`}
                        style={{ backgroundColor: colorSwatches[color] || '#b1aca8' }}
                        aria-label={color}
                      />
                    ))}
                  </div>
                </div>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Size</p>
                    <Link href="/size-guide" className="text-[10px] tracking-widest uppercase font-bold text-[#0e666a] hover:text-[#b70049] transition-colors underline underline-offset-2">Size Guide</Link>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${selectedSize === size ? 'bg-[#302e2b] text-[#fbf5f0] border-[#302e2b]' : 'bg-transparent text-[#302e2b] border-[#b1aca8] hover:border-[#302e2b]'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleAddToCart}
                className="hibiscus-gradient text-[#ffeff0] py-5 rounded-full font-bold tracking-widest uppercase text-xs shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all"
              >
                Add to Ritual
              </button>
              <Link
                href="/b2b"
                className="border-2 border-[#0e666a] text-[#0e666a] py-5 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-[#0e666a] hover:text-[#c8fcff] active:scale-95 transition-all text-center"
              >
                Wholesale Inquiry
              </Link>
            </div>
            <div className="pt-10 border-t border-[#b1aca8]/20 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#874e00]">eco</span>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#302e2b]">Sustainable</h4>
                  <p className="text-[11px] text-[#5e5b57]">Regenerated Ocean Nylon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#874e00]">hand_gesture</span>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#302e2b]">Artisanal</h4>
                  <p className="text-[11px] text-[#5e5b57]">Fair-Trade Bali Craft</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Craft: Story Section */}
        <section className="mb-32 bg-[#0e666a] text-[#c8fcff] rounded-lg p-12 md:p-24 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-headline text-5xl italic leading-tight">The Soul in the Stitch</h2>
              <p className="text-lg opacity-90 leading-relaxed font-light">
                Our workshop in Ubud isn&apos;t a factory—it&apos;s a sanctuary. Here, third-generation artisans combine traditional Balinese weaving techniques with modern performance textiles. Every piece carries the signature of the hands that shaped it, ensuring that your practice is grounded in both quality and spirit.
              </p>
              <Link
                href="/artisans"
                className="inline-block border-b-2 border-[#c8fcff] pb-1 text-xs uppercase tracking-[0.2em] font-bold hover:text-[#ff7290] transition-colors"
              >
                Meet our Artisans
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden editorial-shadow rotate-3 scale-105 relative">
                <Image
                  src="/images/img_18.jpg"
                  alt="Artisan hands weaving sustainable fabric in a traditional Balinese outdoor workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7290]/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        </section>

        {/* Materials & Sustainability: Bento Grid */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[#874e00] tracking-[0.2em] uppercase text-[10px] font-bold">Earth Conscious Luxury</span>
              <h2 className="font-headline text-5xl">Grown, Not Made.</h2>
            </div>
            <p className="text-[#5e5b57] max-w-sm text-sm">We believe luxury is only true when it respects its origins. Our materials are selected for their circular life cycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f6f0ea] p-10 rounded-lg space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#a6eff3] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0e666a]">recycling</span>
              </div>
              <h3 className="font-headline text-2xl italic">Econyl® Nylon</h3>
              <p className="text-[#5e5b57] text-sm leading-relaxed">Recovered from fishing nets and industrial waste, transformed into high-performance, butter-soft activewear fabric.</p>
            </div>
            <div className="bg-[#e7e1dc] p-10 rounded-lg space-y-6 md:translate-y-12">
              <div className="w-12 h-12 rounded-full bg-[#ff9800] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4a2800]">water_drop</span>
              </div>
              <h3 className="font-headline text-2xl italic">Organic Dyes</h3>
              <p className="text-[#5e5b57] text-sm leading-relaxed">Our vibrant sunset hues are achieved through GOTS-certified organic pigments that leave no trace in the Bali waterways.</p>
            </div>
            <div className="bg-[#f6f0ea] p-10 rounded-lg space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#ff7290]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b70049]">forest</span>
              </div>
              <h3 className="font-headline text-2xl italic">FSC Rubber</h3>
              <p className="text-[#5e5b57] text-sm leading-relaxed">Natural tree rubber harvested from sustainably managed forests provides the base for our non-slip performance mats.</p>
            </div>
          </div>
        </section>

        {/* Complete the Ritual: Cross-selling */}
        <section className="mb-32">
          <h2 className="font-headline text-4xl mb-12 text-center">Complete the Ritual</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#ede7e2] mb-4 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <button
                    onClick={e => { e.preventDefault(); setToastVisible(true); setTimeout(() => setToastVisible(false), 3000) }}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-[#fbf5f0]/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Quick add to cart"
                  >
                    <span className="material-symbols-outlined text-[#b70049] text-xl">add</span>
                  </button>
                </div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#302e2b]">{item.name}</h4>
                <p className="text-[#5e5b57] text-xs mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
