import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP, waLink } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Shipping() {
  return (
    <InfoPage
      title="Shipping & Delivery"
      intro="Every piece is handmade to order in our Bali workshop, then shipped worldwide or collected in person."
    >
      <InfoSection heading="Made to order">
        {SHOP.leadNote}. Once your piece is ready, we send you a photo before it ships.
      </InfoSection>
      <InfoSection heading="DHL Express — worldwide">
        Flat {SHOP.currency}{SHOP.deliveryFee} per order, tracked door-to-door, typically 5–10
        business days after dispatch. You receive the DHL tracking number by WhatsApp or email
        as soon as your order is on its way. Any import duties or taxes charged by your country
        are the responsibility of the recipient.
      </InfoSection>
      <InfoSection heading="Local courier — within Indonesia">
        Ordering from anywhere in Indonesia? Choose local courier at checkout — far cheaper
        than international shipping. We confirm the exact rate for your address on WhatsApp
        before you pay anything.
      </InfoSection>
      <InfoSection heading="Self-collection — Bali">
        Free. We share the pickup point with you on WhatsApp when your order is ready.
        Our {SHOP.store.area} shop on {SHOP.store.street} is opening soon — collection will
        move there once it opens.
      </InfoSection>
      <InfoSection heading="Questions about your delivery?">
        <a href={waLink('Hello Mriie PADL! I have a question about my delivery.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          Chat with us on WhatsApp
        </a>{' '}
        or email {SHOP.email} — we reply within a day.
      </InfoSection>
    </InfoPage>
  )
}
