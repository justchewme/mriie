import Link from 'next/link'
import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP, waLink } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Returns() {
  return (
    <InfoPage
      title="Returns & Guarantee"
      intro="Each piece is handmade to order for you, so we keep our policy simple and honest — and we stand behind the work."
    >
      <InfoSection heading={`${SHOP.warrantyMonths}-month workmanship guarantee`}>
        Every Mriie PADL piece carries a {SHOP.warrantyMonths}-month guarantee on stitching and
        workmanship. If a seam, strap or zip fails in normal use within {SHOP.warrantyMonths} months
        of delivery, send us a photo and we&apos;ll repair or replace it — your choice, at our cost.
      </InfoSection>
      <InfoSection heading="EU & UK customers — 14-day right of withdrawal">
        If you&apos;re in the EU or UK, you may withdraw from your purchase within 14 days of
        receiving it, without giving a reason. Tell us within those 14 days (WhatsApp or email,
        below), then return the piece unused and in its original condition within 14 days of
        telling us; you pay the return shipping to our workshop in Indonesia, and we refund the
        full price of the goods once they arrive back. Pieces made to your specification —
        custom logos, bespoke prints, personalised items — are excluded, as EU law allows.
      </InfoSection>
      <InfoSection heading="Everywhere else — change of mind">
        Because every order is made to order by hand, we can&apos;t accept change-of-mind returns
        outside the EU/UK. Unsure about a colour or print? Message us before you order — we&apos;ll
        happily send more photos of any piece.
      </InfoSection>
      <InfoSection heading="Damaged or faulty on arrival">
        If your order arrives damaged or with a fault, tell us within 7 days of delivery with a
        couple of photos, and we&apos;ll make it right — a repair, a replacement, or a full refund,
        your choice, at our cost. Handmade means small variations in print placement and stitching;
        those are part of the charm, not faults.
      </InfoSection>
      <InfoSection heading="How to start a return or claim">
        <a href={waLink('Hello Mriie PADL! I have an issue with my order.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          WhatsApp us
        </a>{' '}
        or use the <Link href="/contact" style={{ color: C.terra }}>contact form</Link> with your
        order details and photos. We reply within a day and give you the return address and
        instructions.
      </InfoSection>
    </InfoPage>
  )
}
