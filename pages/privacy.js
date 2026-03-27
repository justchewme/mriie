import Layout from '@/components/Layout'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="Mriie Privacy Policy — how we collect, use, and protect your personal data."
    >
      <section className="py-24 px-8 bg-[#fbf5f0]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#874e00] mb-6">Legal</span>
          <h1 className="font-headline text-5xl italic text-[#302e2b] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#7a7672] mb-12">Last updated: 1 January 2024</p>

          <div className="prose-mriie space-y-10 text-[#5e5b57] text-sm leading-relaxed">
            {[
              {
                title: '1. Who We Are',
                body: 'Mriie Bali ("Mriie", "we", "our", "us") is a sustainable luxury activewear brand headquartered in Ubud, Bali, Indonesia (PT Mriie Nusantara). Our registered address is Jl. Hanoman No.7, Ubud, Gianyar, Bali 80571, Indonesia.',
              },
              {
                title: '2. Information We Collect',
                body: 'We collect information you provide directly (name, email, address, phone, payment details when placing orders), information collected automatically (IP address, browser type, pages visited, referring URL via cookies and analytics tools), and information from third parties (where you use social login or where we receive information from payment processors).',
              },
              {
                title: '3. How We Use Your Information',
                body: 'We use your information to process and fulfil orders, communicate about your purchases, send marketing communications (with your consent), improve our website and products, comply with legal obligations, prevent fraud, and personalise your experience on our site.',
              },
              {
                title: '4. Legal Basis for Processing (GDPR)',
                body: 'For customers in the European Economic Area and UK, our legal bases include: contract performance (order fulfilment), legitimate interests (fraud prevention, improving our services), legal obligation, and consent (marketing emails — which you may withdraw at any time).',
              },
              {
                title: '5. Sharing Your Information',
                body: 'We do not sell your personal data. We share data only with: shipping and logistics partners required to deliver your order; payment processors (Stripe, PayPal) under their own privacy policies; service providers (email, analytics) bound by data processing agreements; and law enforcement where required by applicable law.',
              },
              {
                title: '6. International Data Transfers',
                body: 'Your data may be processed in countries outside your own, including Indonesia. Where required, we use appropriate safeguards such as Standard Contractual Clauses for transfers from the EEA.',
              },
              {
                title: '7. Data Retention',
                body: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations — typically 7 years for financial transaction records and 2 years for marketing consent records. You may request deletion at any time.',
              },
              {
                title: '8. Your Rights',
                body: 'Depending on your jurisdiction, you have the right to access, correct, delete, restrict, or port your personal data, and to object to certain processing. To exercise these rights, email privacy@mriie.com. EEA and UK residents also have the right to lodge a complaint with their local supervisory authority.',
              },
              {
                title: '9. Cookies',
                body: 'We use essential cookies (required for the site to function), analytical cookies (Google Analytics — anonymised), and optional marketing cookies. You may manage cookie preferences through your browser settings. We do not use third-party advertising cookies.',
              },
              {
                title: '10. Security',
                body: 'We implement appropriate technical and organisational measures to protect your data, including SSL/TLS encryption, access controls, and regular security assessments. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.',
              },
              {
                title: '11. Changes to This Policy',
                body: 'We may update this policy from time to time. We will notify you of material changes by email or by posting a prominent notice on our site. Continued use of our services after changes constitutes acceptance of the updated policy.',
              },
              {
                title: '12. Contact',
                body: 'For privacy enquiries, contact our Data Protection Officer at privacy@mriie.com or by post: Data Protection Officer, PT Mriie Nusantara, Jl. Hanoman No.7, Ubud, Gianyar, Bali 80571, Indonesia.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="space-y-3">
                <h2 className="font-headline text-2xl italic text-[#302e2b]">{title}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#e2dcd6] flex flex-wrap gap-4">
            <Link href="/terms" className="text-sm text-[#0e666a] hover:text-[#b70049] transition-colors font-medium">Terms of Service</Link>
            <Link href="/contact" className="text-sm text-[#0e666a] hover:text-[#b70049] transition-colors font-medium">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
