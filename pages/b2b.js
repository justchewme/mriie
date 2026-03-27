import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const partners = [
  { name: 'COMO Shambhala Estate', type: 'Luxury Wellness Resort', location: 'Ubud, Bali' },
  { name: 'Six Senses Uluwatu', type: 'Ultra-Luxury Resort', location: 'Bali, Indonesia' },
  { name: 'The Athletic Club', type: 'Premium Fitness Club', location: 'London, UK' },
  { name: 'Soulful Movement Studio', type: 'Boutique Yoga Studio', location: 'Los Angeles, USA' },
  { name: 'Aura Wellness', type: 'Spa & Retreat Group', location: 'Singapore' },
  { name: 'Élan Sports Collective', type: 'Luxury Activewear Boutique', location: 'Paris, France' },
]

const tiers = [
  {
    name: 'Stockist',
    moq: '50 units',
    discount: '30% off RRP',
    lead: '6–8 weeks',
    features: ['Wholesale pricing access', 'Brand marketing assets', 'Dedicated account manager', 'Seasonal lookbooks'],
    color: 'bg-[#f6f0ea]',
    accent: '#0e666a',
  },
  {
    name: 'Elite Partner',
    moq: '150 units',
    discount: '40% off RRP',
    lead: '4–6 weeks',
    features: ['Priority wholesale pricing', 'Co-branded marketing', 'Exclusive colourways', 'Artisan workshops access', 'ESG reporting package'],
    color: 'bg-[#0e666a]',
    accent: '#a6eff3',
    highlight: true,
  },
  {
    name: 'Custom Production',
    moq: '300 units',
    discount: 'Negotiated',
    lead: '10–14 weeks',
    features: ['Fully bespoke design', 'Private label options', 'Resort & hotel uniforms', 'White-label capability', 'Full compliance dossier'],
    color: 'bg-[#302e2b]',
    accent: '#ff7290',
  },
]

export default function B2BPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', country: '', type: 'Wholesale Inquiry', units: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/b2b-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout
      title="B2B & Wholesale"
      description="Partner with Mriie to bring sustainable Balinese luxury activewear to your resort, boutique, or wellness studio. Wholesale, private label, and custom production available."
    >
      {/* Hero */}
      <section className="relative min-h-[720px] flex items-center overflow-hidden bg-[#302e2b]">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/img_10.jpg" alt="Luxury resort wellness interior" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#302e2b] via-[#302e2b]/80 to-transparent" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 w-full">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">Wholesale & Partnership</span>
          <h1 className="font-headline text-6xl md:text-8xl italic font-light leading-tight text-[#fbf5f0] mb-8 max-w-3xl">
            Bring Bali&apos;s Finest to<br />
            <span className="text-[#ff7290]">Your World.</span>
          </h1>
          <p className="text-[#fbf5f0]/70 text-xl max-w-xl leading-relaxed mb-10">
            From boutique yoga studios to ultra-luxury resorts, Mriie partners with venues that share our commitment to quality, sustainability, and exceptional human experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#inquiry" className="px-10 py-5 bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] rounded-full font-bold text-sm tracking-widest uppercase shadow-lg active:scale-95 transition-all">
              Apply to Partner
            </a>
            <a href="#tiers" className="px-10 py-5 border-2 border-[#fbf5f0]/40 text-[#fbf5f0] rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#fbf5f0]/10 transition-all">
              View Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0e666a] py-16 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#c8fcff]">
          {[
            ['60+', 'Countries Shipped', 'public'],
            ['200+', 'Active Stockists', 'storefront'],
            ['50 units', 'Minimum Order', 'package_2'],
            ['4–8 wks', 'Avg Lead Time', 'schedule'],
          ].map(([num, label, icon]) => (
            <div key={label}>
              <span className="material-symbols-outlined text-4xl mb-3 block opacity-70">{icon}</span>
              <div className="font-headline text-4xl italic mb-2">{num}</div>
              <div className="text-xs tracking-widest uppercase font-bold opacity-70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership tiers */}
      <section id="tiers" className="py-32 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl md:text-6xl italic text-[#302e2b] mb-6">Partnership Tiers</h2>
            <p className="text-[#5e5b57] max-w-xl mx-auto text-lg leading-relaxed">
              Whether you&apos;re a boutique studio or a global resort group, there&apos;s a Mriie partnership structure designed for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`${tier.color} rounded-lg p-10 space-y-8 ${tier.highlight ? 'ring-2 ring-[#a6eff3]' : ''}`}>
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[#a6eff3] text-[#005b5f] text-[10px] tracking-widest uppercase font-bold">Most Popular</span>
                )}
                <h3 className={`font-headline text-3xl italic ${tier.highlight ? 'text-[#c8fcff]' : tier.color === 'bg-[#302e2b]' ? 'text-[#fbf5f0]' : 'text-[#302e2b]'}`}>{tier.name}</h3>
                <div className="space-y-2">
                  {[
                    ['Min. Order', tier.moq],
                    ['Partner Discount', tier.discount],
                    ['Lead Time', tier.lead],
                  ].map(([k, v]) => (
                    <div key={k} className={`flex justify-between text-sm ${tier.highlight || tier.color === 'bg-[#302e2b]' ? 'text-[#c8fcff]/80' : 'text-[#5e5b57]'}`}>
                      <span className="font-bold uppercase tracking-widest text-[10px]">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${tier.highlight || tier.color === 'bg-[#302e2b]' ? 'text-[#c8fcff]/80' : 'text-[#5e5b57]'}`}>
                      <span className="material-symbols-outlined text-base mt-0.5" style={{ color: tier.accent }}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#inquiry" className={`block text-center py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all active:scale-95 ${tier.highlight ? 'bg-[#a6eff3] text-[#00474a] hover:bg-white' : tier.color === 'bg-[#302e2b]' ? 'bg-[#ff7290] text-[#4d001a] hover:opacity-90' : 'bg-[#0e666a] text-[#c8fcff] hover:opacity-90'}`}>
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-center text-[#302e2b] mb-16">Our Global Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="bg-white p-8 rounded-lg border border-[#e2dcd6] space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <h4 className="font-headline text-xl italic text-[#302e2b]">{p.name}</h4>
                  <span className="material-symbols-outlined text-[#0e666a] text-xl">verified</span>
                </div>
                <p className="text-xs tracking-widest uppercase font-bold text-[#874e00]">{p.type}</p>
                <p className="text-sm text-[#5e5b57] flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  {p.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="py-32 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-[#0e666a] text-[#c8fcff] flex flex-col justify-between">
              <div className="space-y-8">
                <h2 className="font-headline text-5xl italic">Start Your Partnership</h2>
                <p className="text-[#c8fcff]/80 text-lg leading-relaxed">
                  Fill in the form and our partnerships team will respond within 2 business days with a tailored proposal and product catalogue.
                </p>
                <div className="space-y-4">
                  {[
                    ['mail', 'partnerships@mriie.com'],
                    ['phone_iphone', '+62 361 900 1234'],
                    ['schedule', 'Mon–Fri, 9am–6pm WITA'],
                    ['location_on', 'Jl. Hanoman No.7, Ubud, Bali 80571'],
                  ].map(([icon, text]) => (
                    <div key={text} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#a6eff3]">{icon}</span>
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 p-8 bg-white/10 rounded-lg">
                <p className="font-headline text-2xl italic mb-3">&ldquo;We chose Mriie because they could match our resort&apos;s commitment to both luxury and the environment. Our guests adore them.&rdquo;</p>
                <span className="text-xs tracking-widest uppercase font-bold opacity-70">— Spa Director, Six Senses Uluwatu</span>
              </div>
            </div>
            <div className="p-12 lg:p-20">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <span className="material-symbols-outlined text-6xl text-[#0e666a]">check_circle</span>
                  <h3 className="font-headline text-3xl italic text-[#302e2b]">Inquiry Received</h3>
                  <p className="text-[#5e5b57]">Thank you for your interest. Our partnerships team will be in touch within 2 business days.</p>
                  <button onClick={() => setStatus(null)} className="px-8 py-4 rounded-full border-2 border-[#0e666a] text-[#0e666a] font-bold text-xs tracking-widest uppercase hover:bg-[#0e666a]/5 transition-all">
                    Submit Another
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      ['name', 'Full Name', 'text', 'Jane Smith'],
                      ['company', 'Company / Resort Name', 'text', 'Luxury Resorts Ltd.'],
                    ].map(([field, label, type, ph]) => (
                      <div key={field} className="space-y-2">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">{label}</label>
                        <input
                          type={type}
                          placeholder={ph}
                          required
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    ['email', 'Business Email', 'email', 'jane@company.com'],
                    ['country', 'Country / Region', 'text', 'Singapore'],
                  ].map(([field, label, type, ph]) => (
                    <div key={field} className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">{label}</label>
                      <input
                        type={type}
                        placeholder={ph}
                        required
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Inquiry Type</label>
                    <select
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    >
                      <option>Wholesale Inquiry</option>
                      <option>B2B Custom Production</option>
                      <option>Brand Collaboration</option>
                      <option>Resort / Hotel Uniforms</option>
                      <option>Private Label</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Estimated Monthly Units</label>
                    <input
                      type="text"
                      placeholder="e.g. 100–200 units"
                      value={form.units}
                      onChange={e => setForm(f => ({ ...f, units: e.target.value }))}
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Tell us about your business</label>
                    <textarea
                      rows={4}
                      placeholder="What are you looking for? How can we work together?"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-[#b31b25] text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 rounded-full bg-[#b70049] text-[#ffeff0] font-bold uppercase tracking-widest text-sm active:scale-95 transition-all shadow-xl shadow-[#b70049]/20 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Partnership Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
