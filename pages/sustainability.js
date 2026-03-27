import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    icon: 'recycling',
    title: 'Circular Materials',
    color: 'text-[#0e666a]',
    bg: 'bg-[#a6eff3]/20',
    desc: 'Every Mriie garment is constructed from Econyl® regenerated nylon — recovered from abandoned fishing nets, industrial plastic waste, and carpet flooring. Each kilogram of Econyl saves 6.9kg CO₂ vs virgin nylon production.',
    stat: '100%',
    statLabel: 'Recycled Performance Fabrics',
  },
  {
    icon: 'water_drop',
    title: 'Closed-Loop Dyeing',
    color: 'text-[#874e00]',
    bg: 'bg-[#ff9800]/10',
    desc: 'Our dyeing facility in Gianyar uses GOTS-certified organic botanical pigments and recycles 95% of process water through a closed-loop biofiltration system. We have achieved zero discharge into Bali\'s waterways since 2021.',
    stat: '95%',
    statLabel: 'Water Recycled Per Dye Cycle',
  },
  {
    icon: 'co2',
    title: 'Carbon Neutral Shipping',
    color: 'text-[#b70049]',
    bg: 'bg-[#ff7290]/10',
    desc: 'All Mriie shipments are carbon-neutral through a verified offset programme with Indonesian reforestation projects in East Kalimantan. We also offer DDP (Delivered Duty Paid) consolidated B2B shipping to reduce total freight emissions.',
    stat: '0',
    statLabel: 'Net Carbon Tonnes in Logistics',
  },
  {
    icon: 'forest',
    title: 'Regenerative Sourcing',
    color: 'text-[#0e666a]',
    bg: 'bg-[#a6eff3]/20',
    desc: 'Our natural rubber and plant-based accessories are sourced exclusively from FSC-certified forests and smallholder farms enrolled in Indonesia\'s national regenerative agriculture programme. We pay a 30% premium above commodity prices to support soil restoration.',
    stat: '30%',
    statLabel: 'Premium Paid to Smallholder Farmers',
  },
  {
    icon: 'solar_power',
    title: 'Renewable Energy',
    color: 'text-[#874e00]',
    bg: 'bg-[#ff9800]/10',
    desc: 'Our Ubud workshop runs entirely on rooftop solar, producing 48kWh daily — enough to power all sewing machines, lighting, and equipment with surplus fed back to the community grid. Installation was completed in partnership with the Bali Clean Energy Collective.',
    stat: '48 kWh',
    statLabel: 'Solar Generated Daily',
  },
  {
    icon: 'inventory_2',
    title: 'Packaging Without Plastic',
    color: 'text-[#b70049]',
    bg: 'bg-[#ff7290]/10',
    desc: 'All Mriie retail packaging is FSC-certified recycled paper or undyed organic muslin. Our garment bags double as cleaning cloths. We eliminated single-use plastic from our supply chain entirely in 2022.',
    stat: '0',
    statLabel: 'Plastic Components in Packaging',
  },
]

const certifications = [
  { name: 'GOTS Certified', desc: 'Global Organic Textile Standard', icon: 'eco' },
  { name: 'REACH Compliant', desc: 'EU chemical safety standard', icon: 'science' },
  { name: 'Fair Trade', desc: 'Certified fair wages & conditions', icon: 'handshake' },
  { name: 'B Corp (Pending)', desc: 'Assessment in progress 2024', icon: 'verified' },
  { name: 'bluesign®', desc: 'Resource productivity certified', icon: 'water_drop' },
  { name: 'FSC Certified', desc: 'Responsible forest management', icon: 'forest' },
]

export default function SustainabilityPage() {
  return (
    <Layout
      title="Sustainability"
      description="How Mriie is building a regenerative luxury brand from the ground up — circular materials, zero-discharge dyeing, carbon-neutral shipping, and artisan equity."
    >
      {/* Hero */}
      <section className="relative min-h-[780px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img_05.jpg" alt="Regenerative farm at dawn in Bali" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e666a]/90 via-[#0e666a]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 w-full">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">Earth-First Manufacturing</span>
          <h1 className="font-headline text-6xl md:text-8xl italic font-light leading-tight text-[#fbf5f0] mb-6 max-w-3xl">
            We Don&apos;t Just<br />
            Sustain. We <span className="text-[#ff7290]">Restore.</span>
          </h1>
          <p className="text-[#fbf5f0]/80 text-xl max-w-xl leading-relaxed">
            Sustainability is not a marketing claim at Mriie — it is the governing logic of every material decision, every production process, and every supplier relationship we have built.
          </p>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-[#fbf5f0] py-20 px-8 border-b border-[#e2dcd6]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ['12.4t', 'Ocean Plastic Recovered 2023', '#b70049'],
            ['48k', 'Litres Water Saved Monthly', '#0e666a'],
            ['100%', 'Renewable Energy in Production', '#874e00'],
            ['3×', 'Above Fair Trade Wage Floor', '#b70049'],
          ].map(([num, label, color]) => (
            <div key={label} className="space-y-2">
              <div className="font-headline text-5xl italic" style={{ color }}>{num}</div>
              <div className="text-xs tracking-widest uppercase font-bold text-[#5e5b57]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Six pillars */}
      <section className="py-32 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl md:text-6xl italic text-[#302e2b] mb-6">Six Pillars of Regeneration</h2>
            <p className="text-[#5e5b57] max-w-2xl mx-auto text-lg leading-relaxed">
              Our sustainability commitments are not aspirational targets — they are operating standards we hold ourselves to today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="p-10 bg-[#f6f0ea] rounded-lg space-y-6 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-full ${p.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-2xl ${p.color}`}>{p.icon}</span>
                </div>
                <div>
                  <div className={`font-headline text-4xl italic mb-1 ${p.color}`}>{p.stat}</div>
                  <div className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">{p.statLabel}</div>
                </div>
                <h3 className="font-headline text-2xl italic text-[#302e2b]">{p.title}</h3>
                <p className="text-sm text-[#5e5b57] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply chain visual */}
      <section className="bg-[#302e2b] text-[#fbf5f0] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-5xl italic leading-tight">Full Transparency. Seed to Stitch.</h2>
            <p className="text-[#fbf5f0]/70 text-lg leading-relaxed">
              We publish our full supplier list, third-party audit results, and annual impact report every January. No hidden sub-contractors. No opaque sourcing. You have the right to know exactly where your garment came from.
            </p>
            <div className="space-y-6">
              {[
                ['Step 1', 'Regenerated ocean nylon sourced from certified recycling partners in Italy (Aquafil).'],
                ['Step 2', 'Yarn shipped to Bali via consolidated, carbon-offset freight.'],
                ['Step 3', 'Botanical dyeing in our zero-discharge facility, Gianyar.'],
                ['Step 4', 'Hand-cut and sewn by certified artisans in Ubud cooperative.'],
                ['Step 5', 'Quality inspection, packaging in recycled paper, and DDP dispatch.'],
              ].map(([step, desc]) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="bg-[#b70049] text-[#ffeff0] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0">{step}</span>
                  <p className="text-sm text-[#fbf5f0]/70 leading-relaxed pt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/images/img_17.jpg" alt="Sustainable textile texture under studio light" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-center text-[#302e2b] mb-16">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-lg text-center space-y-3 hover:shadow-md transition-shadow border border-[#e2dcd6]">
                <span className="material-symbols-outlined text-3xl text-[#0e666a]">{cert.icon}</span>
                <h4 className="font-bold text-xs tracking-widest uppercase text-[#302e2b]">{cert.name}</h4>
                <p className="text-[10px] text-[#5e5b57]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e666a] py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto text-[#c8fcff] space-y-8">
          <h2 className="font-headline text-5xl italic">Read Our Annual Impact Report</h2>
          <p className="text-[#c8fcff]/80 text-lg leading-relaxed">
            Every year we publish a full impact report covering carbon, water, waste, and social equity metrics. 2023 report available now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-[#b70049] text-[#ffeff0] rounded-full font-bold text-sm tracking-widest uppercase shadow-lg active:scale-95 transition-all">
              Request Report
            </Link>
            <Link href="/artisans" className="px-10 py-5 border-2 border-[#c8fcff]/40 text-[#c8fcff] rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#c8fcff]/10 transition-all">
              Meet Our Artisans
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
