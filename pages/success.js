import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { useT } from '@/lib/i18n'
import { useCart } from '@/components/CartContext'

export async function getServerSideProps({ query }) {
  let order = null
  if (SHOP.ordersOpen && query.session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const Stripe = (await import('stripe')).default
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
      const session = await stripe.checkout.sessions.retrieve(query.session_id)
      if (session.payment_status === 'paid') {
        order = {
          total: session.amount_total / 100,
          name: session.metadata?.name || null,
        }
      }
    } catch {
      // Session lookup failed — still show the generic thank-you below.
    }
  }
  return { props: { order } }
}

export default function Success({ order }) {
  const { clear, loaded } = useCart()
  const { t } = useT()

  useEffect(() => {
    if (loaded && order) clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, order])

  if (!SHOP.ordersOpen) {
    return (
      <Layout title="Orders paused">
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
          <H size={34}>{t('Orders are paused')}</H>
          <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '20px 0 32px' }}>
            {t('This website is not taking orders or payments at the moment. If you paid for an order that has not arrived, please report it and we will get back to you.')}
          </Body>
          <Link href="/contact" style={{ display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none', padding: '14px 26px', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {t('Report an undelivered order')}
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Payment received">
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
        <Label color={C.terra} style={{ marginBottom: 18 }}>{t('Thank you')}</Label>
        <H size={36}>{order ? t('Payment received') : t('Thank you for your order')}</H>
        <Body size={14} color="rgba(20,17,15,0.7)" style={{ margin: '20px 0 32px' }}>
          {order?.name ? `Thank you, ${order.name}. ` : ''}
          {order
            ? `Your payment of ${SHOP.currency}${order.total} is confirmed — a receipt is on its way to your email.`
            : 'If you completed payment, your order is confirmed.'}{' '}
          We&apos;ll be in touch shortly to confirm your colours and
          {order ? ' arrange ' : ' '}delivery.
        </Body>
        <Body size={13} color="rgba(20,17,15,0.55)" style={{ marginBottom: 36 }}>
          {t('Questions?')}{' '}
          <Link href="/contact" style={{ color: C.terra }}>{t('Use the contact form')}</Link>.
        </Body>
        <Link
          href="/"
          style={{
            display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
            padding: '16px 30px', fontFamily: 'Inter, sans-serif', fontSize: 12,
            letterSpacing: '0.16em', textTransform: 'uppercase',
          }}
        >
          {t('Back to the shop')}
        </Link>
      </div>
    </Layout>
  )
}
