// Mriie PADL — where we ship, and what delivery costs per region.
// Shared by the cart checkout UI, the checkout API and the /buy direct links,
// so every buy path always quotes the same price for the same destination.
//
// Regions follow the official DHL Express Indonesia 2026 zone map
// (Service & Rate Guide 2026, export non-doc rates). Customer prices below
// are deliberately subsidised versus DHL's published retail for a ~1.5kg
// parcel — retail is roughly (IDR, before ~27% fuel surcharge):
//   Zone 1–2 (SEA) ≈ 1.28–1.47M (~US$78–90)
//   Zone 3–4 (AU/East Asia) ≈ 1.6–1.85M (~US$100–113)
//   Zone 5 (US/CA) ≈ 2.16M (~US$132)   Zone 6 (Gulf) ≈ 2.31M (~US$141)
//   Zone 7 (Europe/UK/TR) ≈ 2.58M (~US$158)
// The gap must be covered by a discounted DHL business account or a Bali
// forwarder (e.g. UrShipper) — revisit these numbers when the real
// negotiated rates are known. One file to edit: this one.

export const SHIPPING_REGIONS = [
  {
    id: 'sea',
    label: 'Southeast Asia',
    fee: 25,
    days: '2–4',
    countries: ['SG', 'MY', 'TH', 'VN', 'PH'],
  },
  {
    id: 'apac',
    label: 'Australia, NZ & East Asia',
    fee: 35,
    days: '3–5',
    countries: ['AU', 'NZ', 'JP', 'KR', 'TW', 'HK'],
  },
  {
    id: 'gulf',
    label: 'Middle East & Gulf',
    fee: 45,
    days: '4–6',
    countries: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
  },
  {
    id: 'am',
    label: 'USA & Canada',
    fee: 45,
    days: '4–6',
    countries: ['US', 'CA'],
  },
  {
    id: 'eu',
    label: 'Europe & UK',
    fee: 50,
    days: '4–7',
    countries: [
      'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR',
      'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO',
      'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'TR',
    ],
  },
]

export const regionById = (id) => SHIPPING_REGIONS.find((r) => r.id === id) || null

export const regionForCountry = (code) =>
  SHIPPING_REGIONS.find((r) => r.countries.includes(code)) || null

// Everywhere DHL delivery is offered (Indonesia ships by local courier instead).
export const ALLOWED_SHIPPING_COUNTRIES = SHIPPING_REGIONS.flatMap((r) => r.countries)

// Display names are reused by the order-alert webhook, so keep them in sync
// with the shipping rates created in Stripe.
export const DELIVERY = {
  pickup: 'Self-collection — Bali',
  dhl: 'DHL Express — worldwide',
}
