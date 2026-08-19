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
        {SHOP.leadNote}. DHL Express then takes typically 5–10 business days worldwide — see{' '}
        <Link href="/shipping" style={{ color: C.terra }}>Shipping &amp; Delivery</Link>.
      </InfoSection>
      <InfoSection heading="Can I choose a different print?">
        Absolutely. Every piece is handmade in 20+ signature prints — the swatches online are just
        the start.{' '}
        <a href={waLink('Hello Mriie PADL! Can I see more prints?')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          Ask us on WhatsApp
        </a>{' '}
        and we&apos;ll send you the full range.
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
        Yes — we already supply clubs and stores in six countries. Email {SHOP.email} or{' '}
        <a href={waLink('Hello Mriie PADL! I would like to ask about wholesale.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          message us
        </a>{' '}
        for the wholesale catalogue.
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
