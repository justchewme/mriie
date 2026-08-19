import Link from 'next/link'
import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Terms() {
  return (
    <InfoPage
      title="Terms & Privacy"
      intro={`This shop is operated by ${SHOP.company}, a company registered in Indonesia (NIB ${SHOP.nib}).`}
    >
      <InfoSection heading="Orders & payment">
        All prices are in US dollars. Card payments are processed by Stripe on their secure
        checkout — your card details go directly to Stripe and never touch our servers. Orders
        placed via WhatsApp are confirmed and paid in the chat. An order is accepted once we
        confirm it and payment is received.
      </InfoSection>
      <InfoSection heading="Delivery & returns">
        Delivery terms are described on{' '}
        <Link href="/shipping" style={{ color: C.terra }}>Shipping &amp; Delivery</Link> and our
        returns policy on <Link href="/returns" style={{ color: C.terra }}>Returns</Link> — both
        form part of these terms.
      </InfoSection>
      <InfoSection heading="Your data">
        We collect only what an order needs: your name, contact details and delivery address. We
        use them to make and deliver your order and to message you about it — nothing else. We
        don&apos;t sell or share your data, and we don&apos;t run ad trackers. Your bag is stored
        only in your own browser. Payment data is handled by Stripe under their privacy policy.
      </InfoSection>
      <InfoSection heading="Handmade products">
        Every piece is made by hand — small variations in print placement, weave and stitching
        are natural and not defects. Product photos are of real pieces; your piece will be its
        own, slightly.
      </InfoSection>
      <InfoSection heading="Contact">
        {SHOP.company} · NIB {SHOP.nib}
        <br />
        {SHOP.email}
      </InfoSection>
    </InfoPage>
  )
}
