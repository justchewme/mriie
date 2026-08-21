// Official Instagram embeds for selected posts — real swipeable carousels
// with live likes/comments, no API token needed. embed.js is only injected
// once the section scrolls near the viewport, so it can't slow the shop.
//
// To feature different posts, replace the shortcodes below (the code in
// instagram.com/p/<shortcode>/) with any public post from @mriie.padl.
import { useEffect, useRef, useState } from 'react'

// Real customers and players, not product flat-lays: a buyer showing off her
// new bag, the Bali Fun Padel event day, and ladies on court.
export const FEATURED_POSTS = ['DcN0TgKIYFT', 'DavEJR3mKqF', 'DaEqpjOE_o8']

export default function InstagramFeed({ posts = FEATURED_POSTS }) {
  const ref = useRef(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '600px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!load) return
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process()
      return
    }
    const s = document.createElement('script')
    s.src = 'https://www.instagram.com/embed.js'
    s.async = true
    document.body.appendChild(s)
  }, [load])

  return (
    <div
      ref={ref}
      style={{
        display: 'grid', gap: 16, marginTop: 24,
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        alignItems: 'start',
      }}
    >
      {posts.map((code) => {
        const url = `https://www.instagram.com/p/${code}/`
        return (
          <blockquote
            key={code}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#fff', border: '1px solid rgba(20,17,15,0.1)', borderRadius: 3,
              margin: 0, maxWidth: 540, minWidth: 280, width: '100%', padding: 0,
            }}
          >
            {/* Shown until embed.js swaps it for the real carousel */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 320, fontFamily: 'Inter, sans-serif', fontSize: 12,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(20,17,15,0.55)', textDecoration: 'none',
              }}
            >
              View this post on Instagram
            </a>
          </blockquote>
        )
      })}
    </div>
  )
}
