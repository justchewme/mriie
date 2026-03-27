import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const productsData = {
  'hibiscus-dawn-bikini': {
    name: 'Hibiscus Dawn Bikini',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$145.00',
    description: 'Hand-crafted by local artisans in the heart of Bali. Each piece utilizes ocean-recovered nylon and natural rubber, merging high-performance with a commitment to the earth.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'artisan-yoga-mat': {
    name: 'The Uluwatu Ritual Mat',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$145.00',
    description: 'Hand-crafted by local artisans in the heart of Bali. Each mat utilizes ocean-recovered nylon and natural rubber, merging high-performance grip with a commitment to the earth.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'padel-signature-racket': {
    name: 'Padel Signature Racket',
    collection: 'Island Essentials — Pro Series',
    price: '$280.00',
    description: 'Precision-engineered for elite performance. Carbon-fiber construction with Balinese artisan grip detailing.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
  },
  'oceanic-flow-set': {
    name: 'Oceanic Flow Set',
    collection: 'Island Essentials — Sustainable Edition',
    price: '$195.00',
    description: 'A complete set crafted from 100% recycled ocean polyamide. Two-piece luxury activewear for the conscious athlete.',
    images: ['/images/img_19.jpg', '/images/img_21.jpg', '/images/img_23.jpg'],
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
  return (
    <Layout
      title={product.name}
      description={product.description}
    >
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
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0e666a] border-4 border-[#fbf5f0] ring-1 ring-[#b1aca8]/30 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#b70049] border-4 border-[#fbf5f0] cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#874e00] border-4 border-[#fbf5f0] cursor-pointer"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="hibiscus-gradient text-[#ffeff0] py-5 rounded-full font-bold tracking-widest uppercase text-xs shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all">
                Add to Ritual
              </button>
              <Link
                href="/our-story"
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
                href="/our-story"
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
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#fbf5f0]/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all">
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
