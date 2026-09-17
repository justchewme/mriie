// Mriie PADL — where we ship, and what delivery costs per region.
// Shared by the cart checkout UI, the checkout API and the /buy direct links,
// so every buy path always quotes the same price for the same destination.
//
// TWO TIERS per region:
//
// STANDARD = Pos Indonesia EMS (tracked, postal network). Fees are set from
// the real published EMS tariffs for a 1.5kg non-doc parcel (checked 21 Aug
// 2026 via cektarif.com against Pos Indonesia data, Denpasar/Jakarta exchange):
//   SG $17.5 · TH $19.7 · MY $20.2 · JP $25.9 · NZ $29.8 · AU $30.2
//   SA $33.6 · AE $35.5 · KW $36.8 · QA $38.1
//   US $46.1 · FR $48 · GB $49.1 · DE $49.5 · IT $49.9 · SE $50.5
//   CA $51.1 · NL $54.9 · ES $55.5 · (Türkiye $72 — the one loss-maker
//   in the EU tier; rare enough to absorb)
// Customer price = tariff rounded up ~$2–4 for packaging/handling.
//
// EXPRESS = DHL Express. DHL retail from Indonesia is brutal (~$100–200 incl
// ~27% fuel for 1.5kg), so these prices assume booking through a Bali
// forwarder (e.g. UrShipper — advertises up to 70% off DHL/FedEx). At ~50%
// off retail these fees break even; get the real forwarder rate card and
// adjust here. One file to edit: this one.

export const SHIPPING_REGIONS = [
  {
    id: 'sea',
    label: 'Southeast Asia',
    standard: { fee: 20, days: '3–6' },
    express: { fee: 50, days: '2–4' },
    countries: ['SG', 'MY', 'TH', 'VN', 'PH'],
  },
  {
    id: 'apac',
    label: 'Australia, NZ & East Asia',
    standard: { fee: 32, days: '4–8' },
    express: { fee: 65, days: '3–5' },
    countries: ['AU', 'NZ', 'JP', 'KR', 'TW', 'HK'],
  },
  {
    id: 'gulf',
    label: 'Middle East & Gulf',
    standard: { fee: 40, days: '6–10' },
    express: { fee: 80, days: '4–6' },
    countries: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
  },
  {
    id: 'am',
    label: 'USA & Canada',
    standard: { fee: 50, days: '6–12' },
    express: { fee: 85, days: '4–6' },
    countries: ['US', 'CA'],
  },
  {
    id: 'eu',
    label: 'Europe & UK',
    standard: { fee: 52, days: '6–12' },
    express: { fee: 95, days: '4–7' },
    countries: [
      'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR',
      'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO',
      'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'TR',
    ],
  },
]

// Domestic Indonesia — flat fee, card-payable. JNE/J&T REG from Bali runs
// ~Rp 30–45k to Java for a ~2kg parcel, more to Sumatra/the east; US$5
// (≈ Rp 82k) covers the typical lane plus buffer. Papua-edge orders may dip
// negative — rare enough to absorb.
export const LOCAL_DELIVERY = { fee: 5, days: '2–5', label: 'Local courier — Indonesia' }

export const SHIPPING_METHODS = {
  standard: 'Standard — EMS, tracked',
  express: 'Express — DHL',
}

export const regionById = (id) => SHIPPING_REGIONS.find((r) => r.id === id) || null

export const regionForCountry = (code) =>
  SHIPPING_REGIONS.find((r) => r.countries.includes(code)) || null

// Everywhere international delivery is offered (Indonesia ships by local courier instead).
export const ALLOWED_SHIPPING_COUNTRIES = SHIPPING_REGIONS.flatMap((r) => r.countries)

// Display names are reused by the order-alert webhook, so keep them in sync
// with the published carrier tariffs.
export const DELIVERY = {
  pickup: 'Self-collection — Bali',
  dhl: 'International delivery',
}
