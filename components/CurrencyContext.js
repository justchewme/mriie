// Display-only currency conversion. Checkout always charges USD (Justin's
// rule: USD only, no adaptive pricing) — this converts the *displayed* price
// so a buyer in Dubai or Madrid can read it natively, marked as approximate.
//
// Rates come from open.er-api.com (free, keyless, CORS) and are cached in
// localStorage for 12h; the baked-in FALLBACK keeps prices sane if the fetch
// fails. Fallback snapshot: Aug 2026.
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const CURRENCIES = {
  USD: { symbol: 'US$', locale: 'en-US' },
  EUR: { symbol: '€', locale: 'de-DE' },
  GBP: { symbol: '£', locale: 'en-GB' },
  AED: { symbol: 'AED ', locale: 'en-AE' },
  SAR: { symbol: 'SAR ', locale: 'en-SA' },
  AUD: { symbol: 'A$', locale: 'en-AU' },
  IDR: { symbol: 'Rp ', locale: 'id-ID' },
}

const FALLBACK = { USD: 1, EUR: 0.92, GBP: 0.78, AED: 3.67, SAR: 3.75, AUD: 1.52, IDR: 16300 }

const CurrencyContext = createContext({ currency: 'USD', setCurrency: () => {}, format: (usd) => `US$${usd}` })

export function CurrencyProvider({ children }) {
  const { locale } = useRouter()
  const [currency, setCurrencyState] = useState('USD')
  const [rates, setRates] = useState(FALLBACK)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mriie_currency')
      if (saved && CURRENCIES[saved]) setCurrencyState(saved)
      else if (locale === 'id') setCurrencyState('IDR')
    } catch {}
  }, [locale])

  useEffect(() => {
    try {
      const cached = JSON.parse(localStorage.getItem('mriie_fx') || 'null')
      if (cached && Date.now() - cached.at < 12 * 3600 * 1000) {
        setRates(cached.rates)
        return
      }
    } catch {}
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json())
      .then((d) => {
        if (d?.result !== 'success' || !d.rates) return
        const picked = {}
        for (const c of Object.keys(CURRENCIES)) picked[c] = d.rates[c] || FALLBACK[c]
        setRates(picked)
        try { localStorage.setItem('mriie_fx', JSON.stringify({ at: Date.now(), rates: picked })) } catch {}
      })
      .catch(() => {})
  }, [])

  const setCurrency = (c) => {
    setCurrencyState(c)
    try { localStorage.setItem('mriie_currency', c) } catch {}
  }

  // format(105) -> "US$105" or "≈ €97" / "≈ Rp 1.712.000". The ≈ marks every
  // non-USD price as indicative; the charge is always USD.
  const format = (usd) => {
    if (currency === 'USD') return `US$${usd}`
    const { symbol, locale: numLocale } = CURRENCIES[currency]
    let v = usd * (rates[currency] || FALLBACK[currency])
    if (currency === 'IDR') v = Math.round(v / 1000) * 1000
    else v = Math.round(v)
    return `≈ ${symbol}${v.toLocaleString(numLocale, { maximumFractionDigits: 0 })}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext)
