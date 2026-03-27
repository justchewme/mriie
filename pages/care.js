import Layout from '@/components/Layout'
import Link from 'next/link'

const careGuides = [
  {
    category: 'Econyl® Activewear & Swimwear',
    icon: 'water',
    color: '#0e666a',
    bg: 'bg-[#a6eff3]/20',
    steps: [
      ['Wash', 'Machine wash cold (30°C max) on a gentle cycle. Turn inside out to protect the fabric surface.'],
      ['Detergent', 'Use a gentle, eco detergent. Avoid fabric softeners — they clog the technical fibres and reduce elasticity.'],
      ['Chlorine', 'Rinse swimwear thoroughly with fresh water after pool or sea use. Chlorine and saltwater degrade Econyl® fibres if left unwashed.'],
      ['Dry', 'Lay flat to air dry away from direct sunlight. UV exposure causes fading in botanical dyes. Never tumble dry.'],
      ['Iron', 'Do not iron. The heat-sensitive fibres will distort. If needed, use a cool setting with a damp cloth barrier.'],
      ['Store', 'Store folded flat or rolled. Avoid hanging heavy wet activewear — it may stretch the fabric permanently.'],
    ],
  },
  {
    category: 'Natural Cork Accessories (Yoga Mat)',
    icon: 'grass',
    color: '#874e00',
    bg: 'bg-[#ff9800]/10',
    steps: [
      ['Daily Clean', 'Wipe down with a damp cloth and mild soap after each use. Do not soak.'],
      ['Deep Clean', 'Mix 1 part white vinegar with 3 parts water and a few drops of tea tree oil. Wipe the surface and allow to air dry fully before rolling.'],
      ['Avoid', 'Do not machine wash or submerge in water. Cork is a natural material that will crack if over-saturated.'],
      ['Dry', 'Air dry flat or draped over a rack — never folded while wet. Cork develops a healthy patina with use; slight discolouration is natural.'],
      ['Rubber base', 'The natural rubber base can be wiped with a mild citrus cleaner. Avoid petroleum-based cleaners.'],
      ['Store', 'Roll loosely with the cork side out and store upright or flat. Avoid storing in a hot car or compressed space.'],
    ],
  },
  {
    category: 'Carbon-Fibre Padel Racket',
    icon: 'sports_tennis',
    color: '#302e2b',
    bg: 'bg-[#302e2b]/5',
    steps: [
      ['After Play', 'Wipe the face and frame with a dry microfibre cloth to remove sweat and ball residue.'],
      ['Deep Clean', 'Use a slightly damp cloth with mild soap for the grip tape. Dry immediately — do not allow moisture into the frame joints.'],
      ['Protect', 'Store in the provided artisan-crafted cotton sleeve. Avoid leaving the racket in direct sunlight or in a hot car — extreme heat warps carbon fibre.'],
      ['Strings', 'The padel face is a one-piece carbon composite — no stringing required. Do not drill or modify.'],
      ['Grip', 'Replace the over-grip when it loses tackiness. Standard 24mm over-grips are compatible.'],
    ],
  },
  {
    category: 'Organic Cotton Accessories',
    icon: 'eco',
    color: '#b70049',
    bg: 'bg-[#ff7290]/10',
    steps: [
      ['Wash', 'Machine wash cold (30°C) or hand wash. Wash separately on first use as botanical dyes may bleed slightly.'],
      ['Dry', 'Air dry flat. Cotton accessories may shrink 2–3% on first wash — this is accounted for in our sizing.'],
      ['Iron', 'Iron on medium heat while slightly damp for best results.'],
      ['Bleach', 'Never use chlorine bleach. If stain treatment is needed, use an oxygen-based alternative.'],
      ['Store', 'Store in a cool, dry place away from direct sunlight to preserve botanical dye vibrancy.'],
    ],
  },
]

export default function CarePage() {
  return (
    <Layout
      title="Product Care"
      description="How to care for your Mriie pieces so they last a lifetime. Care guides for Econyl® activewear, cork yoga mats, padel rackets, and organic accessories."
    >
      {/* Hero */}
      <section className="bg-[#302e2b] text-[#fbf5f0] py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">Extend the Life of Your Ritual</span>
          <h1 className="font-headline text-6xl md:text-7xl italic font-light leading-tight mb-6 max-w-2xl">
            Care That <span className="text-[#ff7290]">Lasts</span> a Lifetime.
          </h1>
          <p className="text-[#fbf5f0]/70 text-xl max-w-xl leading-relaxed">
            Mriie pieces are made to outlast fast fashion by decades. The best thing you can do for the planet — and for your investment — is care for them correctly.
          </p>
        </div>
      </section>

      {/* Universal principles */}
      <section className="py-16 px-8 bg-[#0e666a]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-3xl italic text-[#c8fcff] mb-10">Universal Principles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['thermostat', 'Wash Cold', 'Cold water preserves fibres and saves 90% of washing energy.'],
              ['air', 'Air Dry Always', 'Tumble drying degrades technical fabrics and wastes energy.'],
              ['block', 'No Fabric Softener', 'Softeners coat fibres and kill performance properties.'],
              ['wb_sunny', 'Avoid Sunlight', 'Botanical dyes are UV-sensitive. Dry in shade.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-white/10 p-6 rounded-lg text-[#c8fcff] space-y-3">
                <span className="material-symbols-outlined text-2xl text-[#a6eff3]">{icon}</span>
                <h4 className="font-bold text-xs tracking-widest uppercase">{title}</h4>
                <p className="text-xs opacity-80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed care guides */}
      <section className="py-32 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          {careGuides.map((guide) => (
            <div key={guide.category} className="rounded-lg overflow-hidden border border-[#e2dcd6]">
              <div className={`p-8 flex items-center gap-4 ${guide.bg}`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl" style={{ color: guide.color }}>{guide.icon}</span>
                </div>
                <h2 className="font-headline text-3xl italic text-[#302e2b]">{guide.category}</h2>
              </div>
              <div className="bg-white divide-y divide-[#f0eae4]">
                {guide.steps.map(([step, desc]) => (
                  <div key={step} className="flex items-start gap-6 px-8 py-5">
                    <span className="font-bold text-[10px] tracking-widest uppercase min-w-[60px] mt-0.5" style={{ color: guide.color }}>{step}</span>
                    <p className="text-sm text-[#5e5b57] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repair & circular */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-[#0e666a] rounded-lg text-[#c8fcff] space-y-6">
            <span className="material-symbols-outlined text-4xl text-[#a6eff3]">build</span>
            <h3 className="font-headline text-3xl italic">Free Repair Service</h3>
            <p className="text-[#c8fcff]/80 leading-relaxed">
              If a Mriie garment develops a manufacturing defect within 2 years, we will repair it free of charge at our Ubud workshop. We also offer a paid repair service for general wear at cost price. Extending the life of a garment is the most sustainable act of all.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-full bg-[#a6eff3] text-[#00474a] font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors">
              Request a Repair
            </Link>
          </div>
          <div className="p-10 bg-[#ff7290] rounded-lg text-[#4d001a] space-y-6">
            <span className="material-symbols-outlined text-4xl">recycling</span>
            <h3 className="font-headline text-3xl italic">End-of-Life Return</h3>
            <p className="opacity-90 leading-relaxed">
              When a Mriie piece has genuinely reached the end of its wearable life, send it back to us. We will disassemble and recycle all components through our Econyl® closed-loop partners. You will receive a 15% discount on your next purchase.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-full bg-[#4d001a] text-[#ffeff0] font-bold text-xs tracking-widest uppercase hover:opacity-80 transition-opacity">
              Learn About Recycling
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
