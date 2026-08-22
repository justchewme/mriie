// Instagram posts as a click-to-load facade: we show a self-hosted thumbnail
// (in /public/ig/<shortcode>.jpg) and only inject Instagram's embed — which
// sets Instagram cookies — after the visitor clicks. That keeps the page
// GDPR-clean with no consent banner (nothing else on the site sets tracking
// cookies) and keeps Instagram's heavy script off the initial load.
//
// To feature different posts: swap the shortcodes below and drop a matching
// thumbnail into /public/ig/ (first slide of the post, ~900px JPEG).
import { useEffect, useState } from 'react'
import { useT } from '@/lib/i18n'

export const FEATURED_POSTS = [
  // Real customers and players, not product flat-lays.
  { code: 'DcN0TgKIYFT', alt: 'Customer showing her new Mriie PADL towel' },
  { code: 'DavEJR3mKqF', alt: 'Bali Fun Padel × Mriie PADL event — winners with their prize bags' },
  { code: 'DaEqpjOE_o8', alt: 'Ladies on court with Mriie PADL bags' },
]

export default function InstagramFeed({ posts = FEATURED_POSTS }) {
  const { t } = useT()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) return
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process()
      return
    }
    const s = document.createElement('script')
    s.src = 'https://www.instagram.com/embed.js'
    s.async = true
    document.body.appendChild(s)
  }, [loaded])

  return (
    <div
      style={{
        display: 'grid', gap: 16, marginTop: 24,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        alignItems: 'stretch',
      }}
    >
      {posts.map(({ code, alt }) => {
        const url = `https://www.instagram.com/p/${code}/`
        if (loaded) {
          // Instagram swaps the blockquote for an iframe of its own height
          // (a reel and a carousel differ). The wrapper carries the box so
          // all three cards share the same outline regardless; the iframe
          // min-width/shadow overrides live in globals.css (.ig-card).
          return (
            <div key={code} className="ig-card">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: '#fff', border: 0, margin: 0, minWidth: 0, maxWidth: '100%', width: '100%', padding: 0 }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', minHeight: 320 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/ig/${code}.jpg`} alt={alt} style={{ width: '100%', display: 'block' }} />
                </a>
              </blockquote>
            </div>
          )
        }
        return (
          <button
            key={code}
            onClick={() => setLoaded(true)}
            aria-label={`${alt} — load Instagram post`}
            style={{
              position: 'relative', display: 'block', width: '100%', padding: 0,
              border: '1px solid rgba(20,17,15,0.1)', background: '#fff', cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/ig/${code}.jpg`}
              alt={alt}
              loading="lazy"
              style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
            />
            <span
              style={{
                position: 'absolute', left: 12, bottom: 12,
                background: 'rgba(244,239,230,0.94)', padding: '8px 14px',
                fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: '#14110F',
              }}
            >
              {t('▶ View post — loads Instagram')}
            </span>
          </button>
        )
      })}
    </div>
  )
}
