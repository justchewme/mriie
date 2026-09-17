import Link from 'next/link'
import InfoPage, { InfoSection, PausedPage } from '@/components/InfoPage'
import { SHOP, waLink } from '@/lib/config'
import { SHIPPING_REGIONS, LOCAL_DELIVERY } from '@/lib/shipping'
import { C } from '@/components/MriieShared'

export default function Shipping() {
  if (!SHOP.ordersOpen) return <PausedPage title="Shipping & Delivery" text="Orders are paused, so there is nothing to ship. No delivery, pickup or courier service is offered through this website." />
  return (
    <InfoPage
      title="Shipping & Delivery"
      intro="Every piece is handmade to order in our Bali workshop, then shipped worldwide or collected in person."
    >
      <InfoSection heading="Made to order">
        {SHOP.leadNote}. Once your piece is ready, we send you a photo before it ships.
      </InfoSection>
      <InfoSection heading="International delivery — two speeds, by region">
        Every international order is tracked to your door. Standard ships with EMS (the
        international postal express network); Express ships with DHL. Business days are counted
        after dispatch, per order:
        <div style={{ overflowX: 'auto', marginTop: 14 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'rgba(20,17,15,0.5)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                <th style={{ padding: '8px 0', fontWeight: 500 }}>Region</th>
                <th style={{ padding: '8px 0', fontWeight: 500 }}>Standard — EMS</th>
                <th style={{ padding: '8px 0', fontWeight: 500 }}>Express — DHL</th>
              </tr>
            </thead>
            <tbody>
              {SHIPPING_REGIONS.map((r) => (
                <tr key={r.id} style={{ borderTop: '1px solid rgba(20,17,15,0.12)' }}>
                  <td style={{ padding: '10px 12px 10px 0' }}>{r.label}</td>
                  <td style={{ padding: '10px 12px 10px 0' }}>
                    <span style={{ fontFamily: '"Fraunces", serif', fontSize: 15, color: C.terra }}>US${r.standard.fee}</span>
                    <span style={{ color: 'rgba(20,17,15,0.55)' }}> · {r.standard.days} days</span>
                  </td>
                  <td style={{ padding: '10px 0' }}>
                    <span style={{ fontFamily: '"Fraunces", serif', fontSize: 15, color: C.terra }}>US${r.express.fee}</span>
                    <span style={{ color: 'rgba(20,17,15,0.55)' }}> · {r.express.days} days</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span style={{ display: 'block', marginTop: 12 }}>
          You receive the tracking number by WhatsApp or email as soon as your order is on its way.
        </span>
      </InfoSection>
      <InfoSection heading="Duties & taxes">
        Import duties or taxes charged by your country are the responsibility of the recipient.
        Want a guaranteed landed cost with no surprise customs bill (DDP)?{' '}
        <a href={waLink('Hello Mriie PADL! Can you quote my order Delivered Duty Paid?')} target="_blank" rel="noopener noreferrer" style={{ color: C.terra }}>
          Ask us on WhatsApp
        </a>{' '}
        before ordering and we&apos;ll quote duties upfront where DHL supports it for your country.
      </InfoSection>
      <InfoSection heading="Local courier — within Indonesia">
        Flat US${LOCAL_DELIVERY.fee} per order to anywhere in Indonesia, tracked, typically{' '}
        {LOCAL_DELIVERY.days} business days. Pay by card at checkout, or place the order and pay
        by bank transfer.
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
        or use the <Link href="/contact" style={{ color: C.terra }}>contact form</Link> — we reply
        within a day.
      </InfoSection>
    </InfoPage>
  )
}
