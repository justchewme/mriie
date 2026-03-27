import Layout from '@/components/Layout'
import Link from 'next/link'

const shippingZones = [
  {
    zone: 'Indonesia',
    standard: '3–5 business days',
    standardPrice: 'Free over IDR 500k',
    express: '1–2 business days',
    expressPrice: 'IDR 80,000',
  },
  {
    zone: 'Australia & New Zealand',
    standard: '5–8 business days',
    standardPrice: 'AUD 15 / Free over AUD 200',
    express: '2–4 business days',
    expressPrice: 'AUD 35',
  },
  {
    zone: 'Singapore & Malaysia',
    standard: '4–7 business days',
    standardPrice: 'SGD 12 / Free over SGD 150',
    express: '2–3 business days',
    expressPrice: 'SGD 28',
  },
  {
    zone: 'Europe (EU)',
    standard: '8–12 business days',
    standardPrice: 'EUR 18 / Free over EUR 250',
    express: '3–5 business days',
    expressPrice: 'EUR 42',
  },
  {
    zone: 'United Kingdom',
    standard: '8–12 business days',
    standardPrice: 'GBP 15 / Free over GBP 200',
    express: '3–5 business days',
    expressPrice: 'GBP 35',
  },
  {
    zone: 'United States & Canada',
    standard: '10–14 business days',
    standardPrice: 'USD 20 / Free over USD 300',
    express: '4–7 business days',
    expressPrice: 'USD 48',
  },
  {
    zone: 'Rest of World',
    standard: '12–18 business days',
    standardPrice: 'USD 25',
    express: '5–9 business days',
    expressPrice: 'USD 60',
  },
]

const faqs = [
  {
    q: 'How do I track my order?',
    a: 'Once your order ships from our Ubud workshop, you will receive an email with a tracking number and carrier link. Most orders are trackable within 24 hours of dispatch.',
  },
  {
    q: 'Can I change my delivery address after ordering?',
    a: 'Address changes can be made within 2 hours of placing your order by contacting hello@mriie.com. After this window, your order may have entered fulfillment and changes may not be possible.',
  },
  {
    q: 'Do you ship to PO boxes?',
    a: 'We cannot ship to PO boxes or freight forwarders. Please use a residential or business street address.',
  },
  {
    q: 'Will I owe customs duties?',
    a: 'For B2B partners, all orders are shipped DDP (Delivered Duty Paid) — all customs and import duties are pre-paid. For retail customers outside Indonesia, duties may apply and are the responsibility of the recipient. We mark all items at full declared value as required by law.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns of unworn, unwashed items in original packaging within 30 days of delivery. Final sale items and custom pieces are non-returnable. Initiate a return by emailing returns@mriie.com with your order number.',
  },
  {
    q: 'How do I return an item?',
    a: 'Email returns@mriie.com with your order number and reason. We will issue a return authorisation and prepaid label (for orders over USD 150). Items must be returned in original packaging within 14 days of return authorisation.',
  },
  {
    q: 'How long do refunds take?',
    a: 'Once we receive and inspect your return (3–5 business days), refunds are processed to your original payment method within 5–10 business days depending on your bank.',
  },
  {
    q: 'Can I exchange an item?',
    a: 'Yes. We offer one complimentary exchange per order (size or colour) for items in stock. Initiate via returns@mriie.com. For international exchanges, we cover outbound shipping on the replacement piece.',
  },
]

export default function ShippingPage() {
  return (
    <Layout
      title="Shipping & Returns"
      description="Mriie shipping information, delivery times, rates by zone, and return policy. Carbon-neutral shipping worldwide from our Bali workshop."
    >
      {/* Hero */}
      <section className="bg-[#0e666a] text-[#c8fcff] py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">Carbon-Neutral Delivery</span>
          <h1 className="font-headline text-6xl md:text-7xl italic font-light leading-tight mb-6 max-w-2xl">
            Shipping &amp; <span className="text-[#ff7290]">Returns</span>
          </h1>
          <p className="text-[#c8fcff]/80 text-xl max-w-xl leading-relaxed">
            Every Mriie shipment is carbon offset through certified Indonesian reforestation projects. Your purchase travels the world without burdening it.
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section className="bg-[#fbf5f0] py-16 px-8 border-b border-[#e2dcd6]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['60+', 'Countries Shipped', 'public'],
            ['30 days', 'Return Window', 'package_2'],
            ['100%', 'Carbon Offset', 'eco'],
            ['Free', 'Returns over USD 150', 'volunteer_activism'],
          ].map(([num, label, icon]) => (
            <div key={label} className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-[#0e666a]">{icon}</span>
              <div className="font-headline text-4xl italic text-[#302e2b]">{num}</div>
              <div className="text-xs tracking-widest uppercase font-bold text-[#5e5b57]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping table */}
      <section className="py-24 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-4xl italic text-[#302e2b] mb-12">Delivery Times &amp; Rates</h2>
          <div className="overflow-x-auto rounded-lg border border-[#e2dcd6]">
            <table className="w-full text-sm">
              <thead className="bg-[#302e2b] text-[#fbf5f0]">
                <tr>
                  {['Zone', 'Standard Shipping', 'Standard Rate', 'Express Shipping', 'Express Rate'].map(h => (
                    <th key={h} className="px-6 py-4 text-left text-[10px] tracking-widest uppercase font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dcd6] bg-white">
                {shippingZones.map((z, i) => (
                  <tr key={z.zone} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fbf5f0]'}>
                    <td className="px-6 py-4 font-bold text-[#302e2b]">{z.zone}</td>
                    <td className="px-6 py-4 text-[#5e5b57]">{z.standard}</td>
                    <td className="px-6 py-4 text-[#5e5b57]">{z.standardPrice}</td>
                    <td className="px-6 py-4 text-[#5e5b57]">{z.express}</td>
                    <td className="px-6 py-4 text-[#5e5b57]">{z.expressPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#7a7672] mt-4">* All times are estimates from dispatch date. Customs processing may add 1–3 business days in some countries. B2B orders shipped DDP — duties included.</p>
        </div>
      </section>

      {/* Return policy */}
      <section className="py-24 px-8 bg-[#f6f0ea]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl italic text-[#302e2b]">Return Policy</h2>
            <div className="space-y-6">
              {[
                ['30-day window', 'Returns accepted within 30 days of delivery for all standard items.'],
                ['Condition', 'Items must be unworn, unwashed, and in original packaging with tags attached.'],
                ['Non-returnable', 'Final sale items, customised pieces, and swimwear with the hygiene seal removed are non-returnable.'],
                ['Refunds', 'Processed to original payment method within 5–10 business days of receipt.'],
                ['Exchanges', 'One complimentary exchange per order (size/colour swap) where stock is available.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#0e666a] mt-0.5">check_circle</span>
                  <div>
                    <span className="block font-bold text-xs tracking-widest uppercase text-[#302e2b] mb-1">{title}</span>
                    <span className="text-sm text-[#5e5b57] leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 bg-[#0e666a] rounded-lg text-[#c8fcff] space-y-4">
              <h4 className="font-headline text-2xl italic">Initiate a Return</h4>
              <p className="text-sm opacity-80">Email <strong>returns@mriie.com</strong> with your order number. We&apos;ll send a return authorisation and prepaid label within 24 hours.</p>
              <a href="mailto:returns@mriie.com" className="inline-block px-6 py-3 rounded-full bg-[#a6eff3] text-[#00474a] font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors">
                Email Returns Team
              </a>
            </div>
          </div>
          {/* FAQ */}
          <div>
            <h2 className="font-headline text-4xl italic text-[#302e2b] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-0 divide-y divide-[#e2dcd6]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-6 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-sm text-[#302e2b] list-none">
                    {faq.q}
                    <span className="material-symbols-outlined text-[#b70049] transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-4 text-sm text-[#5e5b57] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#fbf5f0] text-center">
        <p className="text-[#5e5b57] mb-4">Still have questions?</p>
        <Link href="/contact" className="px-8 py-4 rounded-full bg-[#b70049] text-[#ffeff0] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
          Contact Support
        </Link>
      </section>
    </Layout>
  )
}
