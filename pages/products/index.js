import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    slug: 'hibiscus-dawn-bikini',
    name: 'Hibiscus Dawn Bikini',
    subtitle: 'Sustainable Swimwear',
    price: '$145.00',
    image: '/images/img_14.jpg',
    tag: 'Sustainable',
    featured: true,
  },
  {
    slug: 'artisan-yoga-mat',
    name: 'Artisan Yoga Mat',
    subtitle: 'Natural Cork & Rubber',
    price: '$120.00',
    image: '/images/img_16.jpg',
  },
  {
    slug: 'padel-signature-racket',
    name: 'Padel Signature Racket',
    subtitle: 'Pro Carbon Series',
    price: '$280.00',
    image: '/images/img_08.jpg',
  },
  {
    slug: 'oceanic-flow-set',
    name: 'Oceanic Flow Set',
    subtitle: 'Recycled Polyamide',
    price: '$195.00',
    image: '/images/img_09.jpg',
  },
]

export default function ProductCatalogPage() {
  return (
    <Layout
      title="Collections"
      description="Summer 2024 Collection — Hand-crafted in Bali. Sustainable luxury sportswear designed for the movement of light and the spirit of the sun."
    >
      {/* Hero Editorial Section */}
      <section className="relative min-h-[716px] flex flex-col justify-center px-8 md:px-16 py-20 overflow-hidden bg-[#fbf5f0]">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#ff7290]/30 to-transparent"></div>
        </div>
        <div className="max-w-4xl relative z-10">
          <h2 className="tracking-widest uppercase text-xs text-[#874e00] mb-4 font-label font-bold">Summer 2024 Collection</h2>
          <h1 className="font-headline text-6xl md:text-8xl italic font-light leading-[0.9] text-[#302e2b] mb-8">
            The Solar <span className="text-[#b70049]">Editorial.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#5e5b57] max-w-2xl leading-relaxed mb-10">
            Hand-crafted in Bali. Sustainable luxury sportswear designed for the movement of light and the spirit of the sun.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] font-medium tracking-wide active:scale-95 transition-transform">
              Explore Collections
            </button>
            <Link
              href="/our-story"
              className="px-8 py-4 rounded-full border-2 border-[#0e666a] text-[#0e666a] font-medium tracking-wide hover:bg-[#0e666a] hover:text-[#c8fcff] transition-all"
            >
              B2B Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Product Bento Grid */}
      <section className="px-8 md:px-16 py-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Featured Card */}
          <Link href={`/products/${products[0].slug}`} className="md:col-span-8 group cursor-pointer relative overflow-hidden rounded-lg bg-[#f6f0ea]">
            <div className="relative w-full h-[600px]">
              <Image
                src={products[0].image}
                alt={products[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="bg-[#ff9800] text-[#4a2800] px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold">
                {products[0].tag}
              </span>
              <h3 className="font-headline text-4xl italic mt-4">{products[0].name}</h3>
              <p className="tracking-widest uppercase text-xs opacity-90">{products[0].price}</p>
            </div>
          </Link>

          {/* B2B Callout Card */}
          <div className="md:col-span-4 flex flex-col justify-between p-10 bg-[#0e666a] rounded-lg text-[#c8fcff]">
            <div>
              <h3 className="font-headline text-3xl italic mb-6">Global Wholesale &amp; Distribution</h3>
              <p className="text-[#c8fcff]/80 leading-relaxed mb-8">Partner with Mriie to bring Bali&apos;s finest sustainable sportswear to your boutique or resort.</p>
              <ul className="space-y-4 font-label text-[10px] tracking-widest uppercase">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Wholesale Pricing Available
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Low MOQ for New Stockists
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Global Express Shipping
                </li>
              </ul>
            </div>
            <Link
              href="/our-story"
              className="mt-12 text-[#00474a] bg-[#a6eff3] py-4 px-6 rounded-full text-center font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors"
            >
              Become a Stockist
            </Link>
          </div>

          {/* Grid Items */}
          {products.slice(1).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="md:col-span-4 group">
              <div className="rounded-lg overflow-hidden aspect-[4/5] bg-[#ede7e2] mb-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h4 className="font-headline text-2xl">{product.name}</h4>
                  <p className="text-[#5e5b57] text-sm tracking-widest uppercase">{product.subtitle}</p>
                </div>
                <span className="text-sm text-[#b70049] font-bold">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / B2B Section */}
      <section className="bg-[#f6f0ea] py-24 px-8 md:px-16 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-5xl italic leading-tight mb-8">
              Join the Global <span className="text-[#0e666a]">Community.</span>
            </h2>
            <p className="text-[#5e5b57] mb-10 text-lg leading-relaxed">
              Stay updated with our latest artisan collaborations and B2B opportunities. We value sustainability and heritage in every stitch.
            </p>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  className="w-full bg-transparent border-b-2 border-[#b1aca8] py-4 px-0 focus:outline-none focus:border-[#b70049] transition-all placeholder-[#b1aca8] placeholder-text-[10px] placeholder-tracking-widest"
                  placeholder="YOUR EMAIL"
                  type="email"
                />
              </div>
              <button className="bg-[#b70049] text-[#ffeff0] py-4 px-10 rounded-full w-fit font-bold tracking-widest uppercase text-xs active:scale-95 transition-transform">
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/img_13.jpg"
              alt="Overhead shot of a rustic artisan workshop in Bali with woven fabrics and design sketches on a teak wood table"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#b70049]/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
