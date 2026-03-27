import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Layout title="Home" description="Precision-engineered performance wear infused with Balinese craftsmanship.">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0 opacity-90">
          <Image
            src="/images/img_24.jpg"
            alt="Vibrant tropical sunset over Bali coast with golden orange and deep hibiscus pink clouds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf5f0] via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#874e00]">Sustainable Luxury Sportswear</span>
            <h1 className="text-7xl md:text-8xl font-headline font-light italic leading-tight text-[#302e2b]">
              The Soul of <br />
              <span className="text-[#b70049]">Bali Movement</span>
            </h1>
            <p className="text-lg text-[#5e5b57] max-w-md leading-relaxed">
              Precision-engineered performance wear infused with Balinese craftsmanship. Designed for the global athlete who values the planet as much as the podium.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="px-10 py-5 bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] rounded-full font-sans text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all"
              >
                Explore Collection
              </Link>
              <Link
                href="/our-story"
                className="px-10 py-5 border-2 border-[#b70049] text-[#b70049] rounded-full font-sans text-sm font-bold tracking-widest uppercase hover:bg-[#b70049]/5 active:scale-95 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[700px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden -rotate-2 transform scale-95 translate-x-12 translate-y-8 bg-[#a6eff3]/20"></div>
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/img_01.jpg"
                alt="Athletic woman in hibiscus pink activewear performing yoga on a high cliff overlooking the Balinese ocean at dawn"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Soul: Craftsmanship Section */}
      <section className="py-32 bg-[#fbf5f0] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/img_15.jpg"
                  alt="Close-up of artisan hands in a Bali studio meticulously stitching a high-performance recycled fabric garment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-[#0e666a] text-[#c8fcff] p-12 rounded-lg hidden md:block max-w-xs">
                <p className="font-headline italic text-2xl mb-4">&ldquo;Every stitch carries the warmth of the sun and the spirit of the maker.&rdquo;</p>
                <span className="tracking-widest uppercase text-[10px] font-bold opacity-80">Ni Made, Head Artisan</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-10 lg:pl-12">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-headline italic text-[#302e2b]">Sustainable Soul</h2>
                <p className="text-xl text-[#5e5b57] leading-relaxed font-light">
                  We believe luxury is a responsibility. Our garments are hand-finished by master artisans in Bali, using 100% recycled ocean plastics and organic plant dyes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#f6f0ea] rounded-lg space-y-4">
                  <span className="material-symbols-outlined text-4xl text-[#874e00]">eco</span>
                  <h4 className="font-sans font-bold tracking-tight text-xl">Regenerative Tech</h4>
                  <p className="text-sm text-[#5e5b57] leading-relaxed">Fibers sourced from reclaimed fishing nets, transformed into silk-smooth performance textiles.</p>
                </div>
                <div className="p-8 bg-[#f6f0ea] rounded-lg space-y-4">
                  <span className="material-symbols-outlined text-4xl text-[#874e00]">temple_hindu</span>
                  <h4 className="font-sans font-bold tracking-tight text-xl">Local Wisdom</h4>
                  <p className="text-sm text-[#5e5b57] leading-relaxed">Traditional Balinese weaving techniques integrated into modern aerodynamic panelling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mriie Near You: Retail Bento Grid */}
      <section className="py-32 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-headline italic text-[#302e2b]">Mriie Near You</h2>
              <p className="text-[#5e5b57] tracking-widest uppercase text-xs font-bold">Find our signature experience in the world&apos;s most vibrant cities.</p>
            </div>
            <button className="px-8 py-4 bg-[#0e666a] text-[#c8fcff] rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all">
              Find a Stockist
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg">
              <Image
                src="/images/img_25.jpg"
                alt="Sophisticated flagship retail interior with minimalist timber displays and lush tropical ferns"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-headline italic">Seminyak Flagship</h3>
                <p className="text-sm opacity-80 tracking-widest uppercase">Bali, Indonesia</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/img_11.jpg"
                alt="Aerial view of London cityscape during sunset"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-headline italic">Bond Street</h3>
                <p className="text-[10px] opacity-80 tracking-widest uppercase">London, UK</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/img_04.jpg"
                alt="California mountains during golden hour with soft hazy light"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-headline italic">Santa Monica</h3>
                <p className="text-[10px] opacity-80 tracking-widest uppercase">California, USA</p>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg">
              <Image
                src="/images/img_10.jpg"
                alt="Modern high-end gym and wellness studio interior with warm atmospheric lighting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-headline italic">The Wellness Collective</h3>
                <p className="text-sm opacity-80 tracking-widest uppercase">New York City, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition: B2B Section */}
      <section className="py-24 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <div className="bg-[#0e666a] rounded-lg p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-[#c8fcff] relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#ff7290] rounded-full opacity-10 blur-3xl"></div>
            <div className="space-y-6 max-w-xl z-10">
              <h2 className="text-4xl md:text-5xl font-headline italic leading-tight">Global Recognition &amp; Partnership</h2>
              <p className="text-[#c8fcff]/80 text-lg leading-relaxed font-light">
                Supplying elite athletic clubs and luxury resorts worldwide. Join our B2B network and bring Mriie&apos;s sustainable excellence to your clientele.
              </p>
              <div className="pt-4">
                <button className="px-10 py-5 bg-[#b70049] text-[#ffeff0] rounded-full font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#a1003f] transition-all active:scale-95 shadow-xl shadow-black/10">
                  Become a B2B Partner
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-12 w-full md:w-auto opacity-60 z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-5xl">hotel_class</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-center">Elite Resorts</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-5xl">fitness_center</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-center">Pro Athletes</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-5xl">public</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-center">50+ Countries</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-5xl">verified</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-center">Certified Eco</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
