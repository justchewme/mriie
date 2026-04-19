import Head from 'next/head'

const palette = [
  { name: 'Bone', hex: '#F4EFE6', text: '#14110F' },
  { name: 'Coconut', hex: '#E8DFD0', text: '#14110F' },
  { name: 'Volcanic Sand', hex: '#8A7560', text: '#F4EFE6' },
  { name: 'Terracotta', hex: '#B5532A', text: '#F4EFE6' },
  { name: 'Deep Ocean', hex: '#1F3A3D', text: '#F4EFE6' },
  { name: 'Ink', hex: '#14110F', text: '#F4EFE6' },
]

const Wordmark = ({ size = 28, color = '#14110F' }) => (
  <span
    style={{
      fontFamily: 'Fraunces, serif',
      fontWeight: 300,
      letterSpacing: '0.42em',
      fontSize: size,
      color,
      textTransform: 'uppercase',
    }}
  >
    M R I I E
  </span>
)

const Label = ({ children, color = '#8A7560' }) => (
  <span
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 10,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color,
      fontWeight: 500,
    }}
  >
    {children}
  </span>
)

const SectionTitle = ({ children, color = '#14110F' }) => (
  <h2
    style={{
      fontFamily: 'Fraunces, serif',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 'clamp(40px, 6vw, 84px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color,
      margin: 0,
    }}
  >
    {children}
  </h2>
)

const Body = ({ children, color = '#3a342d', max = 520 }) => (
  <p
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 15,
      lineHeight: 1.7,
      color,
      maxWidth: max,
      fontWeight: 400,
    }}
  >
    {children}
  </p>
)

export default function DesignPreview() {
  return (
    <>
      <Head>
        <title>Mriie — Design Preview</title>
      </Head>
      <main
        style={{
          background: '#F4EFE6',
          color: '#14110F',
          fontFamily: 'Inter, sans-serif',
          minHeight: '100vh',
        }}
      >
        {/* TOP NOTICE */}
        <div
          style={{
            background: '#14110F',
            color: '#F4EFE6',
            padding: '10px 32px',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          design preview · sun-bleached atelier · branch claude/redesign-premium-bali-brand
        </div>

        {/* NAV */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '28px 48px',
            borderBottom: '1px solid rgba(20,17,15,0.08)',
          }}
        >
          <Label>Made in Ubud · Bali</Label>
          <Wordmark />
          <Label>Cart (0)</Label>
        </header>

        {/* HERO */}
        <section
          style={{
            position: 'relative',
            height: '88vh',
            minHeight: 600,
            backgroundImage:
              'linear-gradient(180deg, rgba(20,17,15,0.15) 0%, rgba(20,17,15,0.55) 100%), url(/images/home_hero_bali.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '64px 48px',
            color: '#F4EFE6',
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <Label color="#E8DFD0">Volume 01 · Resort 2026</Label>
            <h1
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 200,
                fontStyle: 'italic',
                fontSize: 'clamp(56px, 9vw, 132px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                margin: '20px 0 28px',
              }}
            >
              Stitched by hand,
              <br />
              worn by the sea.
            </h1>
            <Body color="#E8DFD0" max={500}>
              A small atelier in Ubud making two things, slowly: bikinis that move
              with the tide and padel covers that travel from Canggu to Mallorca.
            </Body>
            <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
              <button
                style={{
                  background: '#F4EFE6',
                  color: '#14110F',
                  border: 'none',
                  padding: '18px 32px',
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                The bikinis
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: '#F4EFE6',
                  border: '1px solid #F4EFE6',
                  padding: '18px 32px',
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Padel covers
              </button>
            </div>
          </div>
        </section>

        {/* PALETTE */}
        <section style={{ padding: '120px 48px', borderBottom: '1px solid rgba(20,17,15,0.08)' }}>
          <Label>01 · Palette</Label>
          <div style={{ marginTop: 16, marginBottom: 56 }}>
            <SectionTitle>Sun-bleached, sea-worn.</SectionTitle>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 2,
            }}
          >
            {palette.map((c) => (
              <div
                key={c.name}
                style={{
                  background: c.hex,
                  color: c.text,
                  aspectRatio: '3 / 4',
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Label color={c.text}>{c.name}</Label>
                <div
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontStyle: 'italic',
                    fontSize: 22,
                    fontWeight: 300,
                  }}
                >
                  {c.hex}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section
          style={{
            padding: '120px 48px',
            background: '#E8DFD0',
            borderBottom: '1px solid rgba(20,17,15,0.08)',
          }}
        >
          <Label>02 · Typography</Label>
          <div style={{ marginTop: 16, marginBottom: 56 }}>
            <SectionTitle>A serif that whispers.</SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <Label>Display · Fraunces Italic</Label>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 88,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  margin: '20px 0 8px',
                }}
              >
                Aa
              </p>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 32,
                  margin: '0 0 4px',
                }}
              >
                The hibiscus set.
              </p>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 300,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  fontSize: 13,
                }}
              >
                Wordmark sample
              </p>
            </div>
            <div>
              <Label>Body · Inter</Label>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: 88,
                  lineHeight: 0.95,
                  margin: '20px 0 8px',
                }}
              >
                Aa
              </p>
              <Body>
                Cut from a single bolt of Italian econyl. Sewn by Komang in our
                Ubud atelier over the course of two afternoons. Made for one
                woman at a time, never two of the same.
              </Body>
              <Label>Caption · 10/12</Label>
            </div>
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section style={{ padding: '120px 48px', borderBottom: '1px solid rgba(20,17,15,0.08)' }}>
          <Label>03 · Product card</Label>
          <div style={{ marginTop: 16, marginBottom: 56 }}>
            <SectionTitle>Quiet on the page.</SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { img: '/images/catalog_hibiscus_bikini.jpg', name: 'The Frangipani', kind: 'Bikini set', price: '$100' },
              { img: '/images/catalog_oceanic_flow.jpg', name: 'The Uluwatu', kind: 'Bikini set', price: '$100' },
              { img: '/images/catalog_padel_racket.jpg', name: 'The Canggu Cover', kind: 'Padel cover', price: '$85' },
            ].map((p) => (
              <div key={p.name}>
                <div
                  style={{
                    aspectRatio: '3 / 4',
                    backgroundImage: `url(${p.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: 20,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <Label>{p.kind}</Label>
                    <div
                      style={{
                        fontFamily: 'Fraunces, serif',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 24,
                        marginTop: 8,
                      }}
                    >
                      {p.name}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.3em',
                    }}
                  >
                    {p.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORIAL SPLIT */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            background: '#1F3A3D',
            color: '#F4EFE6',
            borderBottom: '1px solid rgba(20,17,15,0.08)',
          }}
        >
          <div
            style={{
              backgroundImage: 'url(/images/story_craftswoman_portrait.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 640,
            }}
          />
          <div style={{ padding: '120px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Label color="#E8DFD0">04 · The atelier</Label>
            <div style={{ marginTop: 16, marginBottom: 32 }}>
              <SectionTitle color="#F4EFE6">
                Six women.
                <br />
                Two products.
              </SectionTitle>
            </div>
            <Body color="#E8DFD0">
              Our atelier sits on the edge of a rice field in Ubud. Six women cut,
              dye and stitch every Mriie piece by hand. Each bikini takes about
              nine hours. Each padel cover, four. We do not scale.
            </Body>
            <div style={{ marginTop: 40 }}>
              <Label color="#E8DFD0">Meet them →</Label>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAIL MOCK */}
        <section style={{ padding: '120px 48px', borderBottom: '1px solid rgba(20,17,15,0.08)' }}>
          <Label>05 · Product page</Label>
          <div style={{ marginTop: 16, marginBottom: 56 }}>
            <SectionTitle>One woman at a time.</SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div
                style={{
                  aspectRatio: '3 / 4',
                  backgroundImage: 'url(/images/detail_bikini_ladder.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  gridRow: 'span 2',
                }}
              />
              <div
                style={{
                  aspectRatio: '1 / 1',
                  backgroundImage: 'url(/images/catalog_hibiscus_bikini.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  aspectRatio: '1 / 1',
                  backgroundImage: 'url(/images/story_fabric_texture.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div style={{ paddingTop: 24 }}>
              <Label>Bikini set · 01</Label>
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 56,
                  lineHeight: 1,
                  margin: '16px 0 12px',
                  letterSpacing: '-0.02em',
                }}
              >
                The Frangipani
              </h3>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                $100 · USD
              </div>
              <div
                style={{
                  margin: '40px 0',
                  height: 1,
                  background: 'rgba(20,17,15,0.12)',
                }}
              />
              <Body>
                A high-cut brief and a tied-string top in hand-dyed botanical
                ochre. Cut from regenerated Italian econyl, lined twice. Sewn by
                Komang over two afternoons in our Ubud atelier.
              </Body>
              <div style={{ marginTop: 32 }}>
                <Label>Size</Label>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  {['XS', 'S', 'M', 'L'].map((s) => (
                    <div
                      key={s}
                      style={{
                        width: 44,
                        height: 44,
                        border: '1px solid rgba(20,17,15,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 11,
                        letterSpacing: '0.2em',
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <button
                style={{
                  marginTop: 40,
                  width: '100%',
                  background: '#14110F',
                  color: '#F4EFE6',
                  border: 'none',
                  padding: '22px',
                  fontSize: 11,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Take it home — $100
              </button>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <Label>Ships from Bali in 48 hours</Label>
              </div>
            </div>
          </div>
        </section>

        {/* TERRACOTTA STRIP */}
        <section
          style={{
            background: '#B5532A',
            color: '#F4EFE6',
            padding: '120px 48px',
            textAlign: 'center',
          }}
        >
          <Label color="#F4EFE6">06 · Accent block</Label>
          <div style={{ marginTop: 24, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            <SectionTitle color="#F4EFE6">
              Find us at COMO Shambhala, Potato Head, La Brisa, and a few quiet villas in Uluwatu.
            </SectionTitle>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            background: '#14110F',
            color: '#E8DFD0',
            padding: '80px 48px 48px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 80 }}>
            <div>
              <Wordmark color="#F4EFE6" size={20} />
              <div style={{ marginTop: 24, maxWidth: 320 }}>
                <Body color="#A8A096" max={320}>
                  An atelier in Ubud. Two things, made slowly, by hand.
                </Body>
              </div>
            </div>
            <div>
              <Label color="#A8A096">Shop</Label>
              <div style={{ marginTop: 16, fontSize: 13, lineHeight: 2.2, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>
                Bikinis<br />Padel covers<br />Gift cards
              </div>
            </div>
            <div>
              <Label color="#A8A096">House</Label>
              <div style={{ marginTop: 16, fontSize: 13, lineHeight: 2.2, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>
                The atelier<br />Stockists<br />Journal
              </div>
            </div>
            <div>
              <Label color="#A8A096">Letters</Label>
              <div style={{ marginTop: 16 }}>
                <Body color="#A8A096" max={240}>
                  One letter a season. No noise.
                </Body>
                <input
                  placeholder="email"
                  style={{
                    marginTop: 16,
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #A8A096',
                    color: '#F4EFE6',
                    padding: '8px 0',
                    width: '100%',
                    fontSize: 13,
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid rgba(232,223,208,0.15)',
              paddingTop: 32,
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#A8A096',
            }}
          >
            <span>© 2026 Mriie · Ubud, Bali</span>
            <span>Privacy · Terms · Care</span>
          </div>
        </footer>
      </main>
    </>
  )
}
