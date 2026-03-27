import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <Layout
      title="Our Story"
      description="Mriie was born in the lush heart of Bali, not just as a label, but as a bridge. We connect ancestral weaving techniques with the rigorous demands of global performance wear."
    >
      {/* Hero Section: The Narrative Hook */}
      <section className="relative min-h-[870px] flex items-center px-8 py-20 overflow-hidden bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-[#a6eff3] text-[#005b5f] text-[10px] tracking-[0.2em] uppercase font-bold mb-6">
              Our Narrative
            </span>
            <h1 className="font-headline text-6xl md:text-8xl italic leading-[1.1] mb-8 text-[#302e2b]">
              Beyond Borders: <br />
              <span className="text-[#b70049]">Supporting Local</span> <br />
              Craft on a Global Scale.
            </h1>
            <p className="text-lg md:text-xl text-[#5e5b57] max-w-xl leading-relaxed mb-10">
              Mriie was born in the lush heart of Bali, not just as a label, but as a bridge. We connect ancestral weaving techniques with the rigorous demands of global performance wear.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all">
                Read Our Journey
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-[#b70049] text-[#b70049] font-bold text-sm tracking-widest uppercase hover:bg-[#b70049]/5 transition-all">
                Wholesale Portal
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden transform rotate-2 relative" style={{boxShadow: '0 40px 60px -15px rgba(48,46,43,0.06)'}}>
              <Image
                src="/images/img_12.jpg"
                alt="Close up of skilled artisan hands weaving intricate sustainable fabric in a sun-drenched tropical workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ff9800] rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Pillar Section: Regenerative Sourcing (Teal Block) */}
      <section className="bg-[#0e666a] text-[#c8fcff] py-32 px-8 overflow-hidden rounded-t-xl">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/img_05.jpg"
                      alt="Lush regenerative cotton plantation in Bali at dawn with morning mist and soft green tones"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg">
                    <h4 className="font-headline text-2xl italic mb-2">100% Traceable</h4>
                    <p className="text-sm opacity-80">From seed to stitch, every fiber tells a story of ecological respect.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-[#ff7290] text-[#4d001a] rounded-lg">
                    <span className="material-symbols-outlined text-4xl mb-4 block">eco</span>
                    <h4 className="font-headline text-2xl italic mb-2">Closed Loop</h4>
                    <p className="text-sm opacity-90">Our dyeing processes utilize recycled rainwater and organic pigments.</p>
                  </div>
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/images/img_17.jpg"
                      alt="Abstract macro shot of sustainable fabric texture with soft emerald and deep teal organic patterns"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-5xl md:text-7xl italic leading-tight mb-8">Regenerative Sourcing</h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                We don&apos;t just &ldquo;sustain&rdquo;; we restore. By partnering with Balinese regenerative farms, Mriie ensures that every piece of sportswear produced contributes to the healing of the soil. Our fabrics are engineered for high performance while remaining entirely biodegradable.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#a6eff3]">check_circle</span>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-xs mb-1">GOTS Certified Organic</span>
                    <span className="text-sm opacity-70">Ensuring the highest international standards for textile ecology.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#a6eff3]">check_circle</span>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-xs mb-1">Low-Impact Botanicals</span>
                    <span className="text-sm opacity-70">Dyes extracted from waste agricultural products.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Section: Artisan Equity (Pink Block) */}
      <section className="bg-[#ff7290] text-[#4d001a] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="font-headline text-5xl md:text-7xl italic leading-tight mb-8">Artisan Equity</h2>
              <p className="text-xl opacity-90 leading-relaxed mb-12">
                Luxury is defined by the hands that create it. Mriie operates on a model of radical transparency and profit-sharing. Our artisans are not just &ldquo;labor&rdquo;; they are shareholders in the craft, receiving 3x the local fair-trade minimum and healthcare for their entire families.
              </p>
              <div className="bg-[#4d001a]/5 p-10 rounded-lg border border-[#4d001a]/10">
                <blockquote className="font-headline text-3xl italic mb-6">
                  &ldquo;Mriie allows us to keep our village traditions alive while reaching women across the world.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0e666a]"></div>
                  <div>
                    <p className="font-bold uppercase text-xs tracking-widest">Ni Wayan</p>
                    <p className="text-xs opacity-70">Master Weaver, Ubud Collective</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/img_20.jpg"
                    alt="Artisan community workspace in Bali with sunlight streaming through bamboo structures and vibrant pink fabrics"
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/img_22.jpg"
                    alt="A portrait of a smiling Balinese craftswoman working with natural textiles in a traditional setting"
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Compliance & B2B Section */}
      <section className="bg-[#fbf5f0] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-5xl italic mb-6">Global Standards, Local Soul.</h2>
            <p className="text-[#5e5b57]">We merge artisanal beauty with global logistical excellence. From EU environmental compliance to seamless worldwide distribution, Mriie is built for the global stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="p-10 bg-[#f6f0ea] rounded-lg border-b-4 border-[#0e666a]">
              <span className="material-symbols-outlined text-[#0e666a] text-4xl mb-6 block">verified</span>
              <h3 className="font-headline text-2xl mb-4">Global Compliance</h3>
              <p className="text-sm text-[#5e5b57] leading-relaxed">Full adherence to REACH, GOTS, and international labor standards. We provide comprehensive ESG reporting for all B2B partners.</p>
            </div>
            <div className="p-10 bg-[#f6f0ea] rounded-lg border-b-4 border-[#b70049]">
              <span className="material-symbols-outlined text-[#b70049] text-4xl mb-6 block">public</span>
              <h3 className="font-headline text-2xl mb-4">Scalable Logistics</h3>
              <p className="text-sm text-[#5e5b57] leading-relaxed">DDP shipping options to 60+ countries. Optimized carbon-neutral supply chain from our Bali hub to your storefront.</p>
            </div>
            <div className="p-10 bg-[#f6f0ea] rounded-lg border-b-4 border-[#874e00]">
              <span className="material-symbols-outlined text-[#874e00] text-4xl mb-6 block">handshake</span>
              <h3 className="font-headline text-2xl mb-4">Artisan Equity</h3>
              <p className="text-sm text-[#5e5b57] leading-relaxed">Direct-to-artisan payments verified via blockchain technology. 100% transparency in our financial ecosystem.</p>
            </div>
          </div>

          {/* B2B Inquiry Form */}
          <div className="bg-[#ede7e2] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 editorial-shadow">
            <div className="p-12 lg:p-20 bg-[#0e666a] text-[#c8fcff] flex flex-col justify-center">
              <h2 className="font-headline text-5xl italic mb-8">Wholesale &amp; Partnership</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">Join our global network of sustainable luxury retailers. Let&apos;s bring the soul of Bali to your customers.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#a6eff3]">mail</span>
                  <span className="text-sm tracking-wider uppercase font-bold">partnerships@mriie.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#a6eff3]">phone_iphone</span>
                  <span className="text-sm tracking-wider uppercase font-bold">+62 361 900 1234</span>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-20 bg-white">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Full Name</label>
                    <input
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Company Name</label>
                    <input
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                      placeholder="Luxury Retails Inc."
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Business Email</label>
                  <input
                    className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Inquiry Type</label>
                  <select className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm">
                    <option>Wholesale Inquiry</option>
                    <option>B2B Custom Production</option>
                    <option>Brand Collaboration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Tell us about your project</label>
                  <textarea
                    className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    placeholder="How can we work together?"
                    rows={4}
                  />
                </div>
                <button
                  className="w-full py-5 rounded-full bg-[#b70049] text-[#ffeff0] font-bold uppercase tracking-widest text-sm active:scale-95 transition-all shadow-xl shadow-[#b70049]/20"
                  type="submit"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
