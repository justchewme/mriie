import Layout from '@/components/Layout'
import Link from 'next/link'

const sizingData = {
  tops: {
    headers: ['Size', 'UK/AU', 'EU', 'US', 'Chest (cm)', 'Waist (cm)', 'Hip (cm)'],
    rows: [
      ['XS', '6', '34', '2', '80–83', '62–65', '88–91'],
      ['S', '8', '36', '4', '84–87', '66–69', '92–95'],
      ['M', '10', '38', '6', '88–91', '70–73', '96–99'],
      ['L', '12', '40', '8', '92–95', '74–77', '100–103'],
      ['XL', '14', '42', '10', '96–99', '78–81', '104–107'],
      ['XXL', '16', '44', '12', '100–104', '82–86', '108–112'],
    ],
  },
  bottoms: {
    headers: ['Size', 'UK/AU', 'EU', 'US', 'Waist (cm)', 'Hip (cm)', 'Inseam (cm)'],
    rows: [
      ['XS', '6', '34', '2', '62–65', '88–91', '76'],
      ['S', '8', '36', '4', '66–69', '92–95', '77'],
      ['M', '10', '38', '6', '70–73', '96–99', '78'],
      ['L', '12', '40', '8', '74–77', '100–103', '79'],
      ['XL', '14', '42', '10', '78–81', '104–107', '80'],
      ['XXL', '16', '44', '12', '82–86', '108–112', '80'],
    ],
  },
}

export default function SizeGuidePage() {
  return (
    <Layout
      title="Size Guide"
      description="Find your perfect Mriie fit. Size charts for activewear tops, bottoms, swimwear, and accessories — with fit notes from our Bali atelier."
    >
      {/* Hero */}
      <section className="bg-[#fbf5f0] py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#874e00] mb-6">Fit with Confidence</span>
          <h1 className="font-headline text-6xl md:text-7xl italic font-light leading-tight text-[#302e2b] mb-6 max-w-2xl">
            Your Perfect <span className="text-[#b70049]">Mriie Fit.</span>
          </h1>
          <p className="text-[#5e5b57] text-xl max-w-xl leading-relaxed">
            Mriie garments are cut for athletic proportions with a focus on freedom of movement. Our sizes run true — measure yourself using the guide below and compare against our size charts.
          </p>
        </div>
      </section>

      {/* How to measure */}
      <section className="py-16 px-8 bg-[#0e666a]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-[#c8fcff] mb-12">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['Chest', 'measure_outlined', 'Measure around the fullest part of your chest, keeping the tape parallel to the floor. Do not pull tight — allow one finger of ease.'],
              ['Waist', 'straighten', 'Measure around your natural waist — the narrowest part of your torso, typically 2–3cm above your navel. Stand relaxed.'],
              ['Hip', 'directions_run', 'Measure around the fullest part of your hips and seat. Stand with feet together and keep the tape parallel to the floor.'],
            ].map(([part, icon, desc]) => (
              <div key={part} className="bg-white/10 p-8 rounded-lg text-[#c8fcff] space-y-4">
                <span className="material-symbols-outlined text-3xl text-[#a6eff3]">{icon}</span>
                <h3 className="font-bold text-xs tracking-widest uppercase">{part}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size tables */}
      {Object.entries(sizingData).map(([category, data]) => (
        <section key={category} className="py-16 px-8 bg-[#fbf5f0]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-headline text-3xl italic text-[#302e2b] mb-8 capitalize">{category === 'tops' ? 'Tops & Swimwear' : 'Bottoms & Leggings'}</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e2dcd6]">
              <table className="w-full text-sm">
                <thead className="bg-[#302e2b] text-[#fbf5f0]">
                  <tr>
                    {data.headers.map(h => (
                      <th key={h} className="px-5 py-4 text-left text-[10px] tracking-widest uppercase font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2dcd6] bg-white">
                  {data.rows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fbf5f0]'}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-5 py-4 ${j === 0 ? 'font-bold text-[#b70049]' : 'text-[#5e5b57]'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Fit notes */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-[#302e2b] mb-12">Fit Notes from the Atelier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ['Activewear & Leggings', 'Our performance leggings and tops are designed for a supportive, second-skin fit. They are cut with 15–20% positive ease so the fabric moves with your body rather than against it. If you are between sizes, size up for a more relaxed fit.'],
              ['Swimwear', 'Mriie swimwear is designed with a secure athletic fit. Our Hibiscus Dawn bikini runs true to size. The Econyl® fabric offers excellent stretch and snap-back. For larger cup sizes, consider sizing up in the top and using the adjustable tie.'],
              ['Yoga & Flow Sets', 'Our yoga collection is designed with a relaxed yet supportive silhouette. If you prefer a looser, more traditional yoga fit, size up by one. The waistbands are wide and fold-down compatible.'],
              ['After Washing', 'Mriie Econyl® fabrics have zero shrinkage in cold-machine wash. Organic cotton accessories may shrink 2–3% on first wash — we factor this into our sizing. Always wash cold and air dry.'],
            ].map(([title, note]) => (
              <div key={title} className="p-8 bg-white rounded-lg border border-[#e2dcd6] space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0e666a]">info</span>
                  <h3 className="font-bold tracking-widest uppercase text-xs text-[#302e2b]">{title}</h3>
                </div>
                <p className="text-sm text-[#5e5b57] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#fbf5f0] text-center">
        <p className="text-[#5e5b57] mb-4">Still unsure about your size? Our team can help.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-[#b70049] text-[#ffeff0] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
            Ask the Team
          </Link>
          <Link href="/products" className="px-8 py-4 rounded-full border-2 border-[#0e666a] text-[#0e666a] font-bold text-sm tracking-widest uppercase hover:bg-[#0e666a]/5 transition-all">
            Shop Now
          </Link>
        </div>
      </section>
    </Layout>
  )
}
