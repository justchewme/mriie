import Link from 'next/link'
import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Privacy() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro={`How ${SHOP.company} (NIB ${SHOP.nib}) handles your personal data when you use mriie.com. Short version: we collect only what an order or enquiry needs, we set no tracking cookies, and we never sell your data.`}
    >
      <InfoSection heading="What we collect, and why">
        When you place an order: your name, contact details (WhatsApp number and/or email) and
        delivery address — used only to make, deliver and message you about that order. When you
        send an enquiry or wholesale request: the details you type into the form. That&apos;s the
        complete list; we ask for nothing we don&apos;t need.
      </InfoSection>
      <InfoSection heading="Cookies & tracking">
        This site sets no advertising or tracking cookies. Your shopping bag and display
        preferences (language, currency) are stored only in your own browser and never leave it.
        Our traffic analytics (Vercel Analytics) are cookieless and collect no personal
        identifiers. Instagram posts on our homepage only load — and only then may set
        Instagram&apos;s own cookies — after you click to view them; until you click, nothing is
        sent to Instagram.
      </InfoSection>
      <InfoSection heading="Who processes your data">
        Card payments are processed by Stripe on their secure checkout — your card details go
        directly to Stripe and never touch our servers (see Stripe&apos;s privacy policy). Orders
        and enquiries are delivered to our team as messages; delivery is handled by DHL Express or
        a local courier, who receive your name, address and phone number to deliver your parcel.
        We use no advertising platforms and share data with no one else.
      </InfoSection>
      <InfoSection heading="How long we keep it">
        Order records are kept as long as bookkeeping and warranty obligations require. Enquiry
        messages are kept until resolved. You can ask us to delete your data at any time (below).
      </InfoSection>
      <InfoSection heading="Your rights">
        You can ask us at any time what data we hold about you, ask us to correct it, or ask us
        to delete it (we may need to keep the minimum required for tax records of completed
        orders). If you are in the EU/UK, these are your GDPR rights — access, rectification,
        erasure, portability and objection — and you may also complain to your local data
        protection authority.
      </InfoSection>
      <InfoSection heading="Contact">
        {SHOP.company} · NIB {SHOP.nib}
        <br />
        {SHOP.address}
        <br />
        <Link href="/contact" style={{ color: C.terra }}>Contact form</Link>
        <br />
        <br />
        Our full terms of sale are on the{' '}
        <Link href="/terms" style={{ color: C.terra }}>Terms</Link> page.
      </InfoSection>
    </InfoPage>
  )
}
