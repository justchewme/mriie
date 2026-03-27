import Layout from '@/components/Layout'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service"
      description="Mriie Terms of Service — the terms and conditions governing your use of the Mriie website and purchase of Mriie products."
    >
      <section className="py-24 px-8 bg-[#fbf5f0]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#874e00] mb-6">Legal</span>
          <h1 className="font-headline text-5xl italic text-[#302e2b] mb-4">Terms of Service</h1>
          <p className="text-sm text-[#7a7672] mb-12">Last updated: 1 January 2024</p>

          <div className="space-y-10 text-[#5e5b57] text-sm leading-relaxed">
            {[
              {
                title: '1. Acceptance of Terms',
                body: 'By accessing and using the Mriie website (mriie.com) or purchasing Mriie products, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services. These terms are governed by the laws of Indonesia.',
              },
              {
                title: '2. Products & Pricing',
                body: 'All products are described and priced as accurately as possible. Prices are in USD unless otherwise stated and are exclusive of applicable taxes and shipping unless explicitly included. We reserve the right to correct pricing errors, refuse orders placed at erroneous prices, and modify our product range at any time.',
              },
              {
                title: '3. Orders & Payment',
                body: 'By placing an order, you confirm you are authorised to use the payment method provided. Your order constitutes an offer to purchase, which we may accept or decline. We accept Visa, Mastercard, American Express, and PayPal. Payment is charged at the time of order confirmation.',
              },
              {
                title: '4. Shipping & Delivery',
                body: 'Estimated delivery times are provided in good faith and are not guaranteed. Risk passes to you upon delivery. For international orders, you are responsible for any customs duties unless you have selected DDP shipping (B2B partners only). See our Shipping page for full details.',
              },
              {
                title: '5. Returns & Refunds',
                body: 'We accept returns of unworn, unwashed items in original packaging within 30 days. Refunds are issued to the original payment method. Custom orders, final sale items, and swimwear with hygiene seal removed are non-returnable. See our Shipping & Returns page for full details.',
              },
              {
                title: '6. Intellectual Property',
                body: 'All content on this website — including photography, copy, design, brand marks, and product designs — is the intellectual property of PT Mriie Nusantara or its licensors. You may not reproduce, distribute, or create derivative works without written permission.',
              },
              {
                title: '7. User Conduct',
                body: 'You agree not to use the site for unlawful purposes, to transmit spam or malware, to impersonate others, or to attempt to gain unauthorised access to our systems. We reserve the right to suspend or terminate access for violations.',
              },
              {
                title: '8. Limitation of Liability',
                body: 'To the maximum extent permitted by law, Mriie\'s liability for any claim arising from use of our products or website is limited to the purchase price of the relevant product. We are not liable for indirect, incidental, or consequential damages.',
              },
              {
                title: '9. Warranty',
                body: 'Our products are warranted against manufacturing defects for 2 years from purchase. This warranty does not cover normal wear and tear, damage caused by improper care, or accidental damage. To make a warranty claim, contact hello@mriie.com.',
              },
              {
                title: '10. Governing Law & Disputes',
                body: 'These terms are governed by Indonesian law. Any disputes shall first be subject to good-faith negotiation. If unresolved, disputes shall be referred to mediation in Bali before any legal proceedings. For EU consumers, EU consumer protection laws apply in addition to these terms.',
              },
              {
                title: '11. Changes to Terms',
                body: 'We may update these terms at any time. Continued use of the site after updates constitutes acceptance. We will provide reasonable notice of material changes via email or website notice.',
              },
              {
                title: '12. Contact',
                body: 'For questions about these terms, contact legal@mriie.com or write to: Legal Department, PT Mriie Nusantara, Jl. Hanoman No.7, Ubud, Gianyar, Bali 80571, Indonesia.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="space-y-3">
                <h2 className="font-headline text-2xl italic text-[#302e2b]">{title}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#e2dcd6] flex flex-wrap gap-4">
            <Link href="/privacy" className="text-sm text-[#0e666a] hover:text-[#b70049] transition-colors font-medium">Privacy Policy</Link>
            <Link href="/contact" className="text-sm text-[#0e666a] hover:text-[#b70049] transition-colors font-medium">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
