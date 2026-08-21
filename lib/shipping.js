// Mriie PADL — where we ship.
// Shared by the cart checkout API and the Stripe Payment Link sync script,
// so both buy paths always offer the same countries.

export const ALLOWED_SHIPPING_COUNTRIES = [
  'AE', 'AT', 'AU', 'BE', 'BG', 'BH', 'CA', 'CH', 'CY', 'CZ', 'DE', 'DK',
  'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HK', 'HR', 'HU', 'ID', 'IE', 'IT',
  'JP', 'KR', 'KW', 'LT', 'LU', 'LV', 'MT', 'MY', 'NL', 'NO', 'NZ', 'OM',
  'PH', 'PL', 'PT', 'QA', 'RO', 'SA', 'SE', 'SG', 'SI', 'SK', 'TH', 'TR',
  'TW', 'US', 'VN',
]

// Display names are reused by the order-alert webhook, so keep them in sync
// with the shipping rates created in Stripe.
export const DELIVERY = {
  pickup: 'Self-collection — Bali',
  dhl: 'DHL Express — worldwide',
}
