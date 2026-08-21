import Link from 'next/link'
import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP, waLink } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Faq() {
  return (
    <InfoPage title="FAQ" intro="Quick answers — for anything else, the WhatsApp button is always there.">
      <InfoSection heading="Will the cover fit my racket?">
        Yes — our thermal covers fit all standard padel rackets, with room to spare for grip tape
        and an overgrip. The bag&apos;s insulated compartment fits two rackets.
      </InfoSection>
      <InfoSection heading="How long until my order ships?">
        {SHOP.leadNote}. DHL Express then takes 2–4 business days to Southeast Asia, 3–5 to
        Australia and East Asia, and 4–7 to Europe, the Gulf and the Americas — full regional
        prices on <Link href="/shipping" style={{ color: C.terra }}>Shipping &amp; Delivery</Link>.
      </InfoSection>
      <InfoSection heading="Is there a warranty?">
        Yes — every piece carries a {SHOP.warrantyMonths}-month guarantee on stitching and
        workmanship. If a seam, strap or zip fails in normal use, we repair or replace it at our
        cost. Details on <Link href="/returns" style={{ color: C.terra }}>Returns &amp; Guarantee</Link>.
      </InfoSection>
      <InfoSection heading="Can I choose a different print?">
        Absolutely. Every piece is handmade in 20+ signature prints — the swatches online are just
        the start.{' '}
        <a href={waLink('Hello Mriie PADL! Can I see more prints?')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          Ask us on WhatsApp
        </a>{' '}
        and we&apos;ll send you the full range.
      </InfoSection>
      <InfoSection heading="I&apos;m in Indonesia — do I pay international shipping?">
        No — choose <em>Local courier — Indonesia</em> at checkout and we confirm the (much
        cheaper) local rate on WhatsApp before you pay. Self-collection in Bali is free.
      </InfoSection>
      <InfoSection heading="How do I pay?">
        Securely by card at checkout (processed by Stripe — we never see your card details), or
        order via WhatsApp and pay by bank transfer.
      </InfoSection>
      <InfoSection heading="How do I care for my piece?">
        Spot clean covers and bags, air dry away from direct sun. Towels can be machine washed
        cold and air dried.
      </InfoSection>
      <InfoSection heading="Do you do wholesale or club orders?">
        Yes — we already supply clubs and stores in six countries. Request the catalogue on our{' '}
        <Link href="/wholesale" style={{ color: C.terra }}>wholesale page</Link> and it goes
        straight to our founding team.
      </InfoSection>
      <InfoSection heading="Do you have a physical shop?">
        Our {SHOP.store.area} shop on {SHOP.store.street} is opening soon — follow{' '}
        <a href={SHOP.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          @{SHOP.instagram}
        </a>{' '}
        for the opening. Until then, self-collection in Bali is free.
      </InfoSection>
    </InfoPage>
  )
}
