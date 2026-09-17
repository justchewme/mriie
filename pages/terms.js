import Link from 'next/link'
import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Terms() {
  return (
    <InfoPage
      title="Terms of Sale"
      intro={`${SHOP.ordersOpen ? '' : 'ORDERS SUSPENDED — since 16 September 2026 this website accepts no orders and no payments, and no contract of sale can be formed through it. The terms below are retained for reference only. '}This shop is operated by ${SHOP.company}, a company registered in Indonesia (NIB ${SHOP.nib}), ${SHOP.address}.`}
    >
      <InfoSection heading="Orders & payment">
        All prices are in US dollars; other currencies shown on the site are approximate
        conversions for convenience and the charge is always made in USD. Card payments are
        processed by Stripe on their secure checkout — your card details go directly to Stripe
        and never touch our servers. Orders placed via WhatsApp are confirmed and paid in the
        chat. An order is accepted once we confirm it and payment is received.
      </InfoSection>
      <InfoSection heading="Delivery & returns">
        Delivery terms are described on{' '}
        <Link href="/shipping" style={{ color: C.terra }}>Shipping &amp; Delivery</Link> and our
        returns policy — including the EU/UK 14-day right of withdrawal and our {SHOP.warrantyMonths}-month
        workmanship guarantee — on <Link href="/returns" style={{ color: C.terra }}>Returns</Link>.
        Both form part of these terms. Import duties or taxes charged by the destination country
        are the responsibility of the recipient unless agreed otherwise in writing.
      </InfoSection>
      <InfoSection heading="Handmade products">
        Every piece is made by hand — small variations in print placement, weave and stitching
        are natural and not defects. Product photos are of real pieces; your piece will be its
        own, slightly.
      </InfoSection>
      <InfoSection heading="Your data">
        How we handle personal data — what we collect, cookies, your rights — is described in our{' '}
        <Link href="/privacy" style={{ color: C.terra }}>Privacy Policy</Link>, which forms part
        of these terms.
      </InfoSection>
      <InfoSection heading="Contact">
        {SHOP.company} · NIB {SHOP.nib}
        <br />
        {SHOP.address}
        <br />
        <Link href="/contact" style={{ color: C.terra }}>Contact form</Link>
      </InfoSection>
    </InfoPage>
  )
}
