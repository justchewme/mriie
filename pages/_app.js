import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { CartProvider } from '@/components/CartContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <Analytics />
    </CartProvider>
  )
}
