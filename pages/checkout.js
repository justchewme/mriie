// Mriie PADL — /checkout. Ordering is closed; this URL only tells people so.
import { PausedPage } from '@/components/InfoPage'

export default function Checkout() {
  return <PausedPage title="Orders are paused" text="This website is not taking orders or payments at the moment. If you paid for an order that has not arrived, please report it and we will get back to you." />
}
