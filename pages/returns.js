import InfoPage, { InfoSection } from '@/components/InfoPage'
import { SHOP, waLink } from '@/lib/config'
import { C } from '@/components/MriieShared'

export default function Returns() {
  return (
    <InfoPage
      title="Returns"
      intro="Each piece is handmade to order for you, so we keep our policy simple and honest."
    >
      <InfoSection heading="Change of mind">
        Because every order is made to order by hand, we can&apos;t accept returns or exchanges
        for change of mind. Unsure about a colour or print? Message us before you order — we&apos;ll
        happily send more photos of any piece.
      </InfoSection>
      <InfoSection heading="Damaged or faulty">
        If your order arrives damaged or with a fault, tell us within 7 days of delivery with a
        couple of photos, and we&apos;ll make it right — a repair, a replacement, or a full refund,
        your choice. Handmade means small variations in print placement and stitching; those are
        part of the charm, not faults.
      </InfoSection>
      <InfoSection heading="How to reach us">
        <a href={waLink('Hello Mriie PADL! I have an issue with my order.')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          WhatsApp us
        </a>{' '}
        or email {SHOP.email} with your order details.
      </InfoSection>
    </InfoPage>
  )
}
