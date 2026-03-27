import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
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

  const offices = [
    {
      city: 'Ubud, Bali',
      role: 'Workshop & HQ',
      address: 'Jl. Hanoman No.7, Ubud, Gianyar, Bali 80571',
      email: 'hello@mriie.com',
      phone: '+62 361 900 1234',
      hours: 'Mon–Fri 9am–6pm WITA',
      icon: 'home',
    },
    {
      city: 'London',
      role: 'European Showroom',
      address: '14 Motcomb Street, Belgravia, London SW1X 8LB',
      email: 'london@mriie.com',
      phone: '+44 20 7946 0012',
      hours: 'Mon–Fri 10am–6pm GMT',
      icon: 'storefront',
    },
    {
      city: 'Singapore',
      role: 'Asia-Pacific Office',
      address: '78 Shenton Way, #15-01, Singapore 079120',
      email: 'apac@mriie.com',
      phone: '+65 6812 3456',
      hours: 'Mon–Fri 9am–5pm SGT',
      icon: 'business',
    },
  ]

  return (
    <Layout
      title="Contact Us"
      description="Reach the Mriie team in Bali, London or Singapore. General enquiries, wholesale, press, and returns support."
    >
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img_13.jpg" alt="Bali artisan workshop overhead" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#302e2b]/80 via-[#302e2b]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 w-full">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">Get in Touch</span>
          <h1 className="font-headline text-6xl md:text-7xl italic font-light leading-tight text-[#fbf5f0] max-w-2xl">
            We&apos;d Love to <span className="text-[#ff7290]">Hear From You.</span>
          </h1>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-[#302e2b] mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((o) => (
              <div key={o.city} className="p-10 bg-[#f6f0ea] rounded-lg space-y-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0e666a] text-2xl">{o.icon}</span>
                  <div>
                    <h3 className="font-headline text-2xl italic text-[#302e2b]">{o.city}</h3>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#874e00]">{o.role}</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-[#5e5b57]">
                  <p className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5 text-[#b1aca8]">location_on</span>
                    {o.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b1aca8]">mail</span>
                    <a href={`mailto:${o.email}`} className="hover:text-[#b70049] transition-colors">{o.email}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b1aca8]">phone_iphone</span>
                    {o.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b1aca8]">schedule</span>
                    {o.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-5xl italic text-[#302e2b] mb-4">Send a Message</h2>
                <p className="text-[#5e5b57] leading-relaxed">
                  For general enquiries, press, styling requests, or anything else — fill in the form and we&apos;ll respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Quick Links</h4>
                {[
                  ['Wholesale & B2B', '/b2b'],
                  ['Shipping & Returns', '/shipping'],
                  ['Size Guide', '/size-guide'],
                  ['Product Care', '/care'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="flex items-center gap-2 text-sm text-[#0e666a] hover:text-[#b70049] transition-colors font-medium">
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                    {label}
                  </a>
                ))}
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/images/img_25.jpg" alt="Mriie Seminyak store interior" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-white p-12 rounded-lg shadow-lg">
              {status === 'success' ? (
                <div className="text-center space-y-6 py-12">
                  <span className="material-symbols-outlined text-6xl text-[#0e666a]">mark_email_read</span>
                  <h3 className="font-headline text-3xl italic text-[#302e2b]">Message Sent</h3>
                  <p className="text-[#5e5b57]">Thank you for reaching out. We&apos;ll reply within 24 hours.</p>
                  <button onClick={() => setStatus(null)} className="px-8 py-4 rounded-full border-2 border-[#0e666a] text-[#0e666a] font-bold text-xs tracking-widest uppercase hover:bg-[#0e666a]/5 transition-all">
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Your Name</label>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Email Address</label>
                      <input
                        type="email"
                        placeholder="jane@email.com"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    >
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Order Support</option>
                      <option>Returns & Exchanges</option>
                      <option>Press & Media</option>
                      <option>Styling Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#7a7672]">Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-[#f6f0ea] border-b-2 border-[#b1aca8] focus:border-[#b70049] focus:outline-none transition-all px-4 py-3 rounded-t-sm"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-[#b31b25] text-sm">Something went wrong. Please email us directly at hello@mriie.com.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 rounded-full bg-[#b70049] text-[#ffeff0] font-bold uppercase tracking-widest text-sm active:scale-95 transition-all shadow-xl shadow-[#b70049]/20 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
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
