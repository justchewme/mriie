import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { CartProvider } from '@/components/CartContext'
import { CurrencyProvider } from '@/components/CurrencyContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <CurrencyProvider>
        <Component {...pageProps} />
        {/* Vercel Analytics is cookieless (no identifiers stored client-side),
            so it runs without a consent banner. Anything that DOES set
            cookies (Instagram embeds) is click-to-load instead. */}
        <Analytics />
      </CurrencyProvider>
    </CartProvider>
  )
}
