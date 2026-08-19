import { createContext, useContext, useEffect, useState } from 'react'
import { products, getVariant } from '@/lib/products'

// Cart shape: { ["productId|variantId"]: { qty: number } }
const CartContext = createContext(null)

const STORAGE_KEY = 'mriie-cart-v2'

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

  const keyOf = (productId, variantId) => `${productId}|${variantId}`

  const addItem = (productId, variantId, qty) => {
    const key = keyOf(productId, variantId)
    setCart((c) => ({ ...c, [key]: { qty: (c[key]?.qty || 0) + qty } }))
  }

  const setQty = (key, qty) => {
    setCart((c) => {
      const next = { ...c }
      if (qty <= 0) delete next[key]
      else next[key] = { qty }
      return next
    })
  }

  const clear = () => setCart({})

  const items = Object.entries(cart)
    .map(([key, line]) => {
      const [productId, variantId] = key.split('|')
      const product = products.find((p) => p.id === productId)
      if (!product) return null
      const variant = getVariant(product, variantId)
      return { key, ...product, variant, qty: line.qty }
    })
    .filter(Boolean)

  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0)

  const inCartFor = (productId) =>
    items.filter((i) => i.id === productId).reduce((n, i) => n + i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, items, count, subtotal, addItem, setQty, clear, inCartFor, loaded }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
