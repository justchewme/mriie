// Mriie PADL — PRIVATE trade price list.
//
// This page replaces the wholesale catalogue PDF: the website already carries
// products, story and proof — this unguessable URL carries the one thing the
// public site deliberately hides, the wholesale ladder. Share it on WhatsApp
// after an inquiry; it always matches current pricing, and prints to a clean
// one-pager for buyers who want a file. Never link it from any public page.
// noindex + robots Disallow /trade/ + X-Robots-Tag keep it out of search.
//
// If the link leaks: rename this file to a new token (the old URL 404s) and
// share the new one.
import Head from 'next/head'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { SHOP, waLink } from '@/lib/config'
import { PausedPage } from '@/components/InfoPage'

// The private ladder (USD/pc, EXW Bali). Retail RRP must match lib/products.js.
const LADDER = [
  { name: 'Thermal Padel Cover', rrp: 105, tiers: [52, 48, 45, 42] },
  { name: 'Thermal Padel Bag / Men’s Padel Bag', rrp: 175, tiers: [88, 82, 76, 70] },
  { name: 'Linen Sport Towel', rrp: 60, tiers: [28, 26, 24, 22] },
]
const TIER_LABELS = ['100 pcs', '500 pcs', '1,000 pcs', '3,000 pcs']
const ADDONS = [
  ['Custom logo', '+$4.50/pc'],
  ['Signature gift packaging', '+$6.50/pc'],
  ['Express production', '+$1.50/pc'],
]

export default function TradePriceList() {
  if (!SHOP.ordersOpen) return <PausedPage title="Trade Price List" text="This price list is withdrawn. We are not accepting wholesale orders or deposits. Do not pay a deposit to anyone offering Mriie Padel wholesale." />
  return (
    <Layout title="Trade Price List" description="Private trade pricing for Mriie PADL partners.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 20px 40px' }}>
        <Label color={C.terra} style={{ marginBottom: 14 }}>Private · for partners only</Label>
        <H size={38}>Trade Price List 2026</H>
        <Body size={13} color="rgba(20,17,15,0.6)" style={{ marginTop: 14, maxWidth: 560 }}>
          All prices in USD per piece, EXW Bali. Made to order in 20+ signature prints.
          Lead time 3–6 weeks · 50% deposit, balance before dispatch. Please don&apos;t forward
          this link — it&apos;s issued per partner.
        </Body>

        <div style={{ background: '#fff', border: '1px solid rgba(20,17,15,0.1)', padding: '22px 26px', marginTop: 30, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
            <thead>
              <tr style={{ textAlign: 'left', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(20,17,15,0.45)' }}>
                <th style={{ padding: '8px 8px 8px 0', fontWeight: 500 }}>Product</th>
                <th style={{ padding: '8px 8px 8px 0', fontWeight: 500, textAlign: 'right' }}>RRP</th>
                {TIER_LABELS.map((l) => (
                  <th key={l} style={{ padding: '8px 0 8px 8px', fontWeight: 500, textAlign: 'right' }}>{l}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LADDER.map((p) => (
                <tr key={p.name} style={{ borderTop: '1px solid rgba(20,17,15,0.1)' }}>
                  <td style={{ padding: '12px 8px 12px 0' }}>{p.name}</td>
                  <td style={{ padding: '12px 8px 12px 0', textAlign: 'right', color: 'rgba(20,17,15,0.55)' }}>${p.rrp}</td>
                  {p.tiers.map((fee, i) => (
                    <td key={i} style={{ padding: '12px 0 12px 8px', textAlign: 'right', fontFamily: '"Fraunces", serif', fontSize: 16, color: C.terra }}>
                      ${fee}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
          {ADDONS.map(([k, v]) => (
            <span key={k} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(20,17,15,0.65)', border: '1px solid rgba(20,17,15,0.2)', padding: '7px 12px' }}>
              {k} <span style={{ color: C.terra }}>{v}</span>
            </span>
          ))}
        </div>

        <Body size={12} color="rgba(20,17,15,0.55)" style={{ marginTop: 26, lineHeight: 1.8 }}>
          Recommended retail prices are as listed and shown on mriie.com — partners agree not to
          advertise below RRP. Trial orders from 100 pcs. Custom prints, co-branding and Pantone
          matching available on request.
        </Body>

        <div style={{ marginTop: 30 }}>
          <a
            href={waLink('Hello Mriie PADL! I have your trade price list — I would like to place a wholesale order.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: C.ink, color: C.bone, textDecoration: 'none',
              padding: '15px 28px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </Layout>
  )
}
