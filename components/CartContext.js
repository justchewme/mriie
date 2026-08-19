import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '@/lib/products'

// Cart shape: { [productId]: { qty: number, pref: string } }
const CartContext = createContext(null)

const STORAGE_KEY = 'mriie-cart-v1'

export function CartProvider({ children }) {
  const [cart, setCart] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setCart(JSON.parse(raw))
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {}
  }, [cart, loaded])

  const setQty = (id, qty, pref) => {
    setCart((c) => {
      const next = { ...c }
      if (qty <= 0) {
        delete next[id]
      } else {
        next[id] = { qty, pref: pref ?? c[id]?.pref ?? 'Decide later on WhatsApp' }
      }
      return next
    })
  }

  const setPref = (id, pref) => {
    setCart((c) => (c[id] ? { ...c, [id]: { ...c[id], pref } } : c))
  }

  const clear = () => setCart({})

  const items = Object.entries(cart)
    .map(([id, line]) => {
      const product = products.find((p) => p.id === id)
      return product ? { ...product, qty: line.qty, pref: line.pref } : null
    })
    .filter(Boolean)

  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ cart, items, count, subtotal, setQty, setPref, clear, loaded }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
