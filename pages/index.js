import Head from 'next/head'
import { useState } from 'react'
import {
  C, Frangipani, Wave, Racket,
  Label, H, Body, Wordmark,
  Photo, InkButton, MotifDivider,
} from '@/components/MriieShared'
import HeroBali from '@/components/HeroBali'

// ─── Arrow SVG ───────────────────────────────────────────────────────────────
const Arrow = ({ color = C.ink }) => (
  <svg width="18" height="8" viewBox="0 0 18 8">
    <path d="M0 4 L17 4 M13 1 L17 4 L13 7" stroke={color} strokeWidth="0.8" fill="none"/>
  </svg>
);

// ─── Desktop sections ─────────────────────────────────────────────────────────
const DesktopNav = () => (
  <div style={{
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '28px 56px',
    color: C.bone,
  }}>
    <div style={{ display: 'flex', gap: 34 }}>
      {['bikinis', 'padel covers', 'the atelier', 'stockists'].map(x => (
        <a key={x} href={`#${x.replace(' ', '-')}`} style={{
          fontFamily: 'Inter', fontSize: 11, fontWeight: 400,
          letterSpacing: '0.22em', textTransform: 'lowercase',
          color: C.bone, textDecoration: 'none', cursor: 'pointer',
        }}>{x}</a>
      ))}
    </div>
    <Wordmark color={C.bone} size={15}/>
    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', color: C.bone }}>en · usd</span>
      <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', color: C.bone, cursor: 'pointer' }}>search</span>
      <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', color: C.bone, cursor: 'pointer' }}>bag (0)</span>
    </div>
  </div>
);

const DesktopHero = () => (
  <div style={{ position: 'relative', height: 820, overflow: 'hidden' }}>
    <HeroBali/>

    <div style={{ position: 'absolute', left: 56, bottom: 80, maxWidth: 720, color: C.bone }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{ width: 40, height: 1, background: C.bone, opacity: 0.7 }}/>
        <Label color="#E8DFD0" style={{ display: 'inline' }}>atelier — ubud, bali · ss 26</Label>
      </div>
      <H size={120} color={C.bone} style={{ lineHeight: 0.95 }}>
        stitched by hand,<br/>worn by the sea.
      </H>
      <div style={{ marginTop: 38, display: 'flex', gap: 14 }}>
        <a href="#bikinis" style={{
          padding: '18px 32px', background: C.bone, color: C.ink,
          fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.22em',
          textTransform: 'lowercase', display: 'inline-flex', gap: 14,
          textDecoration: 'none', alignItems: 'center',
        }}>the bikinis <Arrow color={C.ink}/></a>
        <a href="#padel-covers" style={{
          padding: '18px 32px', border: `1px solid ${C.bone}`, color: C.bone,
          fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.22em',
          textTransform: 'lowercase', display: 'inline-flex', gap: 14,
          textDecoration: 'none', alignItems: 'center',
        }}>padel covers <Arrow color={C.bone}/></a>
      </div>
    </div>

    <div style={{ position: 'absolute', right: 56, bottom: 80, color: C.bone, textAlign: 'right' }}>
      <Label color="#E8DFD0" style={{ display: 'inline-block' }}>no. 001 · opening</Label>
      <Body size={12} color="#E8DFD0" style={{ marginTop: 8 }}>komang at the dye bath</Body>
      <Body size={12} color="#E8DFD0" style={{ marginTop: 2 }}>april, before the rains</Body>
    </div>

    <div style={{ position: 'absolute', left: '50%', bottom: 24, transform: 'translateX(-50%)', textAlign: 'center' }}>
      <Body size={10} color={C.bone} style={{ letterSpacing: '0.32em', textTransform: 'uppercase' }}>scroll</Body>
      <div style={{ width: 1, height: 18, background: C.bone, margin: '8px auto 0', opacity: 0.6 }}/>
    </div>
  </div>
);

const DesktopIntro = () => (
  <div style={{ background: C.bone, padding: '140px 120px 120px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 120, alignItems: 'start' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Frangipani size={22} color={C.sand} stroke={0.9}/>
          <Label style={{ display: 'inline' }}>a letter from ubud</Label>
        </div>
        <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 50, height: 1, background: C.sand }}/>
          <Body size={11} color={C.sand} style={{ letterSpacing: '0.2em', textTransform: 'lowercase' }}>
            est. 2024 · jl. raya ubud
          </Body>
        </div>
      </div>
      <div>
        <H size={64}>we do not chase seasons. we cut, we dye in coconut husk and indigo, we sit and we sew.</H>
        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <Body size={14} color={C.sand}>
            what leaves our atelier is small, considered, and ours. a bikini for the reef at uluwatu. a cover for the racket that comes with you to canggu.
          </Body>
          <Body size={14} color={C.sand}>
            we make two things only. we make them by the hands of six women, in a wooden room that opens to the rice. nothing else is on offer, and that is the point.
          </Body>
        </div>
      </div>
    </div>
  </div>
);

const DesktopCategories = () => (
  <div id="bikinis" style={{ background: C.bone, padding: '0 56px 140px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
      <MotifDivider motif="wave" />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
      <div>
        <Photo ratio="4 / 5" tone="sand" src="/images/bikini-product.jpg"
          label="THE BIKINIS · ON BODY" sublabel="the frangipani · model, beach at canggu"/>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <Label>category 001</Label>
            <H size={56} style={{ marginTop: 14 }}>the bikinis</H>
            <Body size={13} color={C.sand} style={{ marginTop: 14, maxWidth: 380 }}>
              hand-dyed, cut and sewn in ubud. four silhouettes, named for places we love. one price.
            </Body>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Body size={11} color={C.sand} style={{ letterSpacing: '0.28em' }}>ALL FOUR · $100 USD</Body>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
              <div style={{ width: 28, height: 1, background: C.ink }}/>
              <Body size={11} color={C.ink} weight={400} style={{ letterSpacing: '0.22em' }}>see all</Body>
            </div>
          </div>
        </div>
      </div>

      <div id="padel-covers">
        <Photo ratio="4 / 5" tone="coconut" src="/images/padel-colorful.jpg"
          label="THE PADEL COVERS · FULL RANGE" sublabel="eight colourways · all available"
          imgStyle={{ objectPosition: 'center 18%' }}/>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <Label>category 002</Label>
            <H size={56} style={{ marginTop: 14 }}>the padel covers</H>
            <Body size={13} color={C.sand} style={{ marginTop: 14, maxWidth: 380 }}>
              a quiet sleeve for the racket you love. woven cotton, vegetable-tanned trim, made in the same room.
            </Body>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Body size={11} color={C.sand} style={{ letterSpacing: '0.28em' }}>SIX COVERS · $85 USD</Body>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
              <div style={{ width: 28, height: 1, background: C.ink }}/>
              <Body size={11} color={C.ink} weight={400} style={{ letterSpacing: '0.22em' }}>see the covers</Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BIKINIS = [
  { name: 'the frangipani', tone: 'warm',    sub: 'rose · paisley',    note: '001', src: '/images/bikini-product.jpg' },
  { name: 'the uluwatu',    tone: 'warm',    sub: 'indigo · batik',    note: '002', src: '/images/bikini-product.jpg' },
  { name: 'the canggu',     tone: 'warm',    sub: 'ochre · floral',    note: '003', src: '/images/bikini-product.jpg' },
  { name: 'the seminyak',   tone: 'warm',    sub: 'ebony · gold',      note: '004', src: '/images/bikini-product.jpg' },
];

const DesktopSeason = () => (
  <div style={{ background: C.coconut, padding: '140px 56px 120px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
      <div>
        <Label>ss 26 · four bikinis</Label>
        <H size={72} style={{ marginTop: 22 }}>named for the places we love.</H>
      </div>
      <Body size={13} color={C.sand} style={{ maxWidth: 340 }}>
        each takes about nine hours. made once, in small runs. when they are gone, they are gone.
      </Body>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
      {BIKINIS.map((it, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Body size={10} color={C.sand} style={{ letterSpacing: '0.28em' }}>{it.note}</Body>
            <Body size={10} color={C.sand} style={{ letterSpacing: '0.28em' }}>$100</Body>
          </div>
          <Photo ratio="3 / 4" tone={it.tone} src={it.src} label={it.name.toUpperCase()} sublabel={it.sub}/>
          <H size={26} style={{ marginTop: 18 }}>{it.name}</H>
          <Body size={11} color={C.sand} style={{ marginTop: 4 }}>{it.sub}</Body>
        </div>
      ))}
    </div>
  </div>
);

const DesktopAtelier = () => (
  <div id="the-atelier" style={{ background: C.ocean, color: C.bone, padding: '140px 56px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, alignItems: 'center' }}>
      <Photo ratio="4 / 5" tone="ocean" src="/images/photo-08.jpg"
        label="THE SIX · PORTRAIT" sublabel="komang · ni made · wayan · ketut · made · nyoman"/>
      <div>
        <Label color="#B5C9C7">the atelier · ubud</Label>
        <H size={96} color={C.bone} style={{ marginTop: 22 }}>six<br/>women.<br/>two<br/>products.</H>
        <Body size={14} color="#D6CDB8" style={{ marginTop: 40, maxWidth: 460 }}>
          komang dyes the cloth at dawn, before the heat. ni made cuts each panel by eye. wayan sews the seams that touch your skin. each bikini takes about nine hours. each padel cover, four.
        </Body>
        <H size={32} color={C.bone} style={{ marginTop: 32 }}>we do not scale.</H>
        <div style={{ marginTop: 44, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 36, height: 1, background: C.bone }}/>
          <Body size={11} color={C.bone} weight={400} style={{ letterSpacing: '0.24em', textTransform: 'lowercase' }}>
            visit the atelier →
          </Body>
        </div>
      </div>
    </div>
  </div>
);

const DesktopDispatch = () => (
  <div style={{ background: C.terra, color: C.bone, padding: '96px 56px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: 72, alignItems: 'start' }}>
      <div>
        <Label color="#F1D9C8">made by hand · please be patient</Label>
        <Wave width={80} color={C.bone} stroke={0.9} style={{ marginTop: 28 }}/>
      </div>
      <H size={54} color={C.bone}>orders take a little longer. each piece is hand-sewn by a small number of women, in our ubud atelier.</H>
      <div>
        <Body size={14} color="#F1D9C8">
          wrapped in banana-leaf paper. a note from the maker, tucked inside. sent worldwide, when she has finished.
        </Body>
        <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(244,239,230,0.25)' }}>
          <Label color="#F1D9C8">custom orders</Label>
          <Body size={13} color={C.bone} style={{ marginTop: 12 }}>
            something for a wedding, a honeymoon, a club of six. write to komang — komang@mriie.co
          </Body>
        </div>
      </div>
    </div>
  </div>
);

const STOCKISTS = [
  { name: 'como shambhala estate', place: 'ubud, bali' },
  { name: 'potato head beach club', place: 'seminyak, bali' },
  { name: 'la brisa', place: 'canggu, bali' },
  { name: 'desa potato head', place: 'seminyak, bali' },
  { name: 'the bulgari villa', place: 'uluwatu, bali' },
  { name: 'hoshinoya', place: 'private request · asia' },
];

const DesktopStockists = () => (
  <div id="stockists" style={{ background: C.bone, padding: '140px 56px 120px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96 }}>
      <div>
        <Label>found also at</Label>
        <H size={56} style={{ marginTop: 22 }}>a quiet handful of houses.</H>
        <Body size={13} color={C.sand} style={{ marginTop: 28, maxWidth: 340 }}>
          we keep our stockists small. these are the places our pieces also live.
        </Body>
      </div>
      <div>
        {STOCKISTS.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '40px 1.2fr 1fr 40px',
            alignItems: 'center', gap: 20,
            padding: '26px 0', borderBottom: '1px solid rgba(20,17,15,0.12)',
            borderTop: i === 0 ? '1px solid rgba(20,17,15,0.12)' : 'none',
          }}>
            <Body size={11} color={C.sand} style={{ letterSpacing: '0.28em' }}>{String(i+1).padStart(2,'0')}</Body>
            <H size={22}>{r.name}</H>
            <Body size={12} color={C.sand}>{r.place}</Body>
            <Arrow color={C.ink}/>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DesktopLetters = ({ email, setEmail, onSubmit, status }) => (
  <div style={{ background: C.coconut, padding: '100px 56px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'center' }}>
      <div>
        <Frangipani size={36} color={C.sand} stroke={0.9}/>
        <H size={56} style={{ marginTop: 28 }}>one letter a season. no noise.</H>
        <Body size={13} color={C.sand} style={{ marginTop: 20, maxWidth: 460 }}>
          we write four times a year, from ubud. about the dye, the women, the sea. that is all.
        </Body>
      </div>
      <div>
        {status === 'success' ? (
          <Body size={16} color={C.ink}>welcome. we will write to you in the next season.</Body>
        ) : (
          <form onSubmit={onSubmit}>
            <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink}`, paddingBottom: 16 }}>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your email"
                style={{
                  flex: 1, border: 'none', background: 'transparent', outline: 'none',
                  fontFamily: 'Inter', fontSize: 18, fontWeight: 300, color: C.ink,
                }}
              />
              <button type="submit" style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.24em',
                color: C.ink, textTransform: 'lowercase',
              }}>subscribe →</button>
            </div>
            <Body size={11} color={C.sand} style={{ marginTop: 18, letterSpacing: '0.16em' }}>
              by subscribing you will receive four letters a year. nothing else.
            </Body>
          </form>
        )}
      </div>
    </div>
  </div>
);

const FM = '#7FBDB6'  // footer muted — soft warm teal, readable on #1A3038

const DesktopFooter = ({ email, setEmail, onSubmit, status }) => (
  <div style={{ background: '#1A3038', color: C.bone, padding: '96px 56px 40px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 56 }}>
      <div>
        <Wordmark color={C.bone} size={20}/>
        <Body size={12} color={FM} style={{ marginTop: 18, maxWidth: 280 }}>
          an atelier in ubud. two things, made slowly, by hand.
        </Body>
        <div style={{ marginTop: 40 }}>
          <Frangipani size={28} color={FM} stroke={0.8}/>
        </div>
      </div>
      <div>
        <Label color={FM}>shop</Label>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['bikinis', 'padel covers', 'gift cards'].map(x => (
            <Body key={x} size={13} color={C.bone}>{x}</Body>
          ))}
        </div>
      </div>
      <div>
        <Label color={FM}>house</Label>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['the atelier', 'stockists', 'journal'].map(x => (
            <Body key={x} size={13} color={C.bone}>{x}</Body>
          ))}
        </div>
      </div>
      <div>
        <Label color={FM}>letters</Label>
        <Body size={13} color={C.bone} style={{ marginTop: 18 }}>one letter a season. no noise.</Body>
        {status === 'success' ? (
          <Body size={12} color={FM} style={{ marginTop: 14 }}>you&apos;re in.</Body>
        ) : (
          <form onSubmit={onSubmit}>
            <div style={{ marginTop: 16, display: 'flex', borderBottom: '1px solid rgba(244,239,230,0.22)', paddingBottom: 8 }}>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="email" className="input-dark"
                style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontFamily: 'Inter', fontSize: 12, color: C.bone }}
              />
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 11, color: FM, letterSpacing: '0.22em' }}>→</button>
            </div>
          </form>
        )}
      </div>
    </div>
    <div style={{
      marginTop: 80, paddingTop: 20, borderTop: '1px solid rgba(244,239,230,0.10)',
      display: 'flex', justifyContent: 'space-between',
    }}>
      <Body size={10} color={FM} style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>ships from ubud, bali</Body>
      <Body size={10} color={FM} style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>est. 2024</Body>
      <Body size={10} color={FM} style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>© mriie ss 26 · all quiet</Body>
    </div>
  </div>
);

// ─── Mobile sections ──────────────────────────────────────────────────────────
const MobileHeader = ({ menuOpen, setMenuOpen }) => (
  <>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 20px 14px',
      background: C.bone,
      position: 'sticky', top: 0, zIndex: 20,
      borderBottom: menuOpen ? `1px solid rgba(20,17,15,0.1)` : 'none',
    }}>
      <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <svg width="18" height="10" viewBox="0 0 18 10">
          <path d="M1 2 L17 2 M1 5 L17 5 M1 8 L17 8" stroke={C.ink} strokeWidth="0.8"/>
        </svg>
      </button>
      <Wordmark size={13}/>
      <div style={{ display: 'flex', gap: 14 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="5" stroke={C.ink} strokeWidth="0.8"/>
          <path d="M9.5 9.5 L13 13" stroke={C.ink} strokeWidth="0.8" strokeLinecap="round"/>
        </svg>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 4 L2 12 L12 12 L12 4 M4 4 C4 2, 5.5 1, 7 1 C8.5 1, 10 2, 10 4" stroke={C.ink} strokeWidth="0.8"/>
        </svg>
      </div>
    </div>
    {menuOpen && (
      <div style={{ background: C.bone, padding: '20px 24px 28px', borderBottom: `1px solid rgba(20,17,15,0.1)`, zIndex: 20, position: 'relative' }}>
        {['bikinis', 'padel covers', 'the atelier', 'stockists'].map(x => (
          <a key={x} href={`#m-${x.replace(' ', '-')}`} onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', padding: '12px 0',
              fontFamily: 'Inter', fontSize: 13, letterSpacing: '0.2em',
              textTransform: 'lowercase', color: C.ink,
              textDecoration: 'none', borderBottom: '1px solid rgba(20,17,15,0.06)',
            }}>{x}</a>
        ))}
      </div>
    )}
  </>
);

const MobileHero = () => (
  <div style={{ position: 'relative', background: C.bone }}>
    <div style={{ position: 'relative', aspectRatio: '3 / 4.4', overflow: 'hidden' }}>
      <HeroBali/>
    </div>
    <div style={{ padding: '36px 24px 28px' }}>
      <Label>atelier — ubud, bali</Label>
      <H size={40} style={{ marginTop: 18 }}>stitched by<br/>hand, worn<br/>by the sea.</H>
      <Body size={13} color={C.sand} style={{ marginTop: 22, maxWidth: 300 }}>
        two things, made slowly, by six women. a bikini that takes nine hours. a padel cover that takes four.
      </Body>
      <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
        <a href="#m-bikinis" style={{
          flex: 1, padding: '16px 10px', background: C.ink, color: C.bone,
          fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.2em',
          textTransform: 'lowercase', textAlign: 'center', textDecoration: 'none',
        }}>the bikinis</a>
        <a href="#m-padel-covers" style={{
          flex: 1, padding: '16px 10px',
          border: `1px solid ${C.ink}`, color: C.ink,
          fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.2em',
          textTransform: 'lowercase', textAlign: 'center', textDecoration: 'none',
        }}>padel covers</a>
      </div>
    </div>
  </div>
);

const MobileIntro = () => (
  <div style={{ background: C.coconut, padding: '56px 28px 52px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <Frangipani size={18} color={C.sand} stroke={0.9}/>
      <Label style={{ display: 'inline' }}>a letter from ubud</Label>
    </div>
    <H size={22} style={{ lineHeight: 1.25 }}>
      we do not chase seasons. we cut, we dye in coconut husk and indigo, we sit and we sew.
    </H>
    <Body size={13} color={C.sand} style={{ marginTop: 20 }}>
      what leaves our atelier is small, considered, and ours — a bikini for the reef at uluwatu, a cover for the racket that comes with you to canggu.
    </Body>
    <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 28, height: 1, background: C.ink }}/>
      <Body size={11} color={C.ink} weight={400} style={{ letterSpacing: '0.18em', textTransform: 'lowercase' }}>
        read the journal
      </Body>
    </div>
  </div>
);

const MobileCategories = () => (
  <div id="m-bikinis" style={{ background: C.bone, padding: '64px 20px 36px' }}>
    <div style={{ textAlign: 'center', marginBottom: 28 }}>
      <Label style={{ display: 'inline-block' }}>two things, nothing more</Label>
    </div>
    <MotifDivider motif="wave" />

    <div style={{ marginTop: 36 }}>
      <Photo ratio="4 / 5" tone="sand" src="/images/bikini-product.jpg"
        label="THE BIKINIS · ON BODY" sublabel="the frangipani · paisley, rose-dyed" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
        <H size={26}>the bikinis</H>
        <Body size={11} color={C.sand} style={{ letterSpacing: '0.2em' }}>$100 · usd</Body>
      </div>
      <Body size={12} color={C.sand} style={{ marginTop: 6 }}>hand-dyed, cut &amp; sewn in ubud. four names, one price, made to meet the sea.</Body>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 16, height: 1, background: C.ink }}/>
        <Body size={10} color={C.ink} weight={400} style={{ letterSpacing: '0.24em', textTransform: 'lowercase' }}>see all four</Body>
      </div>
    </div>

    <div id="m-padel-covers" style={{ marginTop: 54 }}>
      <Photo ratio="4 / 5" tone="coconut" src="/images/padel-colorful.jpg"
        label="THE PADEL COVERS · FULL RANGE" sublabel="eight colourways · all available"
        imgStyle={{ objectPosition: 'center 18%' }}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
        <H size={26}>the padel covers</H>
        <Body size={11} color={C.sand} style={{ letterSpacing: '0.2em' }}>$85 · usd</Body>
      </div>
      <Body size={12} color={C.sand} style={{ marginTop: 6 }}>a soft sleeve for the racket you love. quiet patterns, drawn from the island.</Body>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 16, height: 1, background: C.ink }}/>
        <Body size={10} color={C.ink} weight={400} style={{ letterSpacing: '0.24em', textTransform: 'lowercase' }}>see the covers</Body>
      </div>
    </div>
  </div>
);

const MobileSeason = () => (
  <div style={{ background: C.coconut, padding: '56px 0 60px' }}>
    <div style={{ padding: '0 24px', marginBottom: 22 }}>
      <Label>ss 26 · four bikinis</Label>
      <H size={26} style={{ marginTop: 10 }}>named for the places we love.</H>
    </div>
    <div style={{
      display: 'flex', gap: 14, overflowX: 'auto',
      padding: '0 24px 6px', scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
    }}>
      {BIKINIS.map((it, i) => (
        <div key={i} style={{ flex: '0 0 62%', scrollSnapAlign: 'start' }}>
          <Photo ratio="3 / 4" tone={it.tone} src={it.src} label={it.name.toUpperCase()} sublabel={it.sub}/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <H size={15}>{it.name}</H>
            <Body size={11} color={C.sand}>$100</Body>
          </div>
          <Body size={10} color={C.sand} style={{ display: 'block', marginTop: 2 }}>{it.sub}</Body>
        </div>
      ))}
    </div>
  </div>
);

const MobileAtelier = () => (
  <div id="m-the-atelier" style={{ background: C.ocean, padding: '72px 28px 72px', color: C.bone }}>
    <Label color="#B5C9C7">the atelier · ubud</Label>
    <H size={34} color={C.bone} style={{ marginTop: 22 }}>six women.<br/>two products.</H>
    <Photo ratio="4 / 5" tone="ocean" src="/images/photo-08.jpg"
      label="PORTRAIT · KOMANG" sublabel="at the dye bath, morning" style={{ marginTop: 28 }}/>
    <Body size={13} color="#D6CDB8" style={{ marginTop: 24 }}>
      komang dyes the cloth at dawn, before the heat. ni made cuts each panel by eye. wayan sews the seams that touch your skin.
    </Body>
    <Body size={13} color="#D6CDB8" style={{ marginTop: 16 }}>
      each bikini takes about nine hours. each padel cover, four.
    </Body>
    <H size={18} color={C.bone} style={{ marginTop: 12, fontStyle: 'italic' }}>we do not scale.</H>
    <div style={{ marginTop: 34, display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 24, height: 1, background: C.bone }}/>
      <Body size={11} color={C.bone} weight={400} style={{ letterSpacing: '0.2em', textTransform: 'lowercase' }}>
        visit the atelier
      </Body>
    </div>
  </div>
);

const MobileDispatch = () => (
  <div style={{ background: C.terra, padding: '52px 28px', color: C.bone }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Wave width={32} color={C.bone} stroke={0.8}/>
      <Label color="#F1D9C8" style={{ display: 'inline' }}>made by hand · please be patient</Label>
    </div>
    <H size={28} color={C.bone} style={{ marginTop: 18 }}>orders take a little longer. each piece is hand-sewn by a small number of women.</H>
    <Body size={12} color="#F1D9C8" style={{ marginTop: 16 }}>
      wrapped in banana-leaf paper, sent from jl. raya ubud. a note from the maker, tucked inside.
    </Body>
    <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(244,239,230,0.25)' }}>
      <Label color="#F1D9C8">custom orders</Label>
      <Body size={12} color={C.bone} style={{ marginTop: 10 }}>
        something for a wedding, a honeymoon, a club. write to us — komang@mriie.co
      </Body>
    </div>
  </div>
);

const MobileStockists = () => (
  <div id="m-stockists" style={{ background: C.bone, padding: '64px 28px 52px' }}>
    <Label>found also at</Label>
    <H size={24} style={{ marginTop: 18 }}>a quiet handful of houses.</H>
    <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {['como shambhala · ubud', 'potato head · seminyak', 'la brisa · canggu', 'desa potato head', 'uluwatu villas · private'].map((s, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 12, borderBottom: '1px solid rgba(20,17,15,0.1)',
        }}>
          <Body size={13} color={C.ink}>{s}</Body>
          <Body size={10} color={C.sand} style={{ letterSpacing: '0.2em' }}>visit →</Body>
        </div>
      ))}
    </div>
  </div>
);

const MobileLetters = ({ email, setEmail, onSubmit, status }) => (
  <div style={{ background: C.coconut, padding: '60px 28px' }}>
    <Frangipani size={26} color={C.sand} stroke={0.9}/>
    <H size={26} style={{ marginTop: 20 }}>one letter a season. no noise.</H>
    <Body size={12} color={C.sand} style={{ marginTop: 14 }}>we write four times a year, from ubud. about the dye, the women, the sea.</Body>
    {status === 'success' ? (
      <Body size={14} color={C.ink} style={{ marginTop: 22 }}>welcome. we&apos;ll write to you in the next season.</Body>
    ) : (
      <form onSubmit={onSubmit}>
        <div style={{ marginTop: 22, display: 'flex', borderBottom: `1px solid ${C.ink}`, paddingBottom: 10 }}>
          <input
            type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your email"
            style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: C.ink }}
          />
          <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.2em', color: C.ink, textTransform: 'lowercase' }}>
            subscribe →
          </button>
        </div>
      </form>
    )}
  </div>
);

const MobileFooter = ({ email, setEmail, onSubmit, status }) => (
  <div style={{ background: '#1A3038', color: C.bone, padding: '56px 28px 80px' }}>
    <Wordmark color={C.bone} size={13}/>
    <Body size={11} color={FM} style={{ marginTop: 12 }}>an atelier in ubud. two things, made slowly, by hand.</Body>

    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 26 }}>
      <div>
        <Label color={FM}>shop</Label>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['bikinis', 'padel covers', 'gift cards'].map(x => <Body key={x} size={12} color={C.bone}>{x}</Body>)}
        </div>
      </div>
      <div>
        <Label color={FM}>house</Label>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['the atelier', 'stockists', 'journal'].map(x => <Body key={x} size={12} color={C.bone}>{x}</Body>)}
        </div>
      </div>
      <div>
        <Label color={FM}>letters</Label>
        {status === 'success' ? (
          <Body size={12} color={FM} style={{ marginTop: 10 }}>you&apos;re in.</Body>
        ) : (
          <form onSubmit={onSubmit} style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(244,239,230,0.22)', paddingBottom: 8 }}>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="email" className="input-dark"
                style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontFamily: 'Inter', fontSize: 12, color: C.bone }}
              />
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 11, color: FM, letterSpacing: '0.22em' }}>→</button>
            </div>
          </form>
        )}
      </div>
    </div>

    <div style={{ marginTop: 44, paddingTop: 20, borderTop: '1px solid rgba(244,239,230,0.08)', display: 'flex', justifyContent: 'space-between' }}>
      <Body size={10} color={FM}>ships from ubud, bali</Body>
      <Body size={10} color={FM}>© mriie ss 26</Body>
    </div>
  </div>
);

// ─── Under Construction Banner ───────────────────────────────────────────────
const ConstructionBanner = ({ onDismiss }) => (
  <div style={{
    background: C.terra,
    color: C.bone,
    padding: '10px 20px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
    position: 'relative', zIndex: 50,
  }}>
    <Wave width={28} color="rgba(244,239,230,0.5)" stroke={0.8}/>
    <span style={{
      fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.26em',
      textTransform: 'lowercase', color: C.bone,
    }}>
      this space is still being crafted — more soon
    </span>
    <Wave width={28} color="rgba(244,239,230,0.5)" stroke={0.8}/>
    <button onClick={onDismiss} aria-label="dismiss" style={{
      position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
      background: 'none', border: 'none', cursor: 'pointer',
      color: 'rgba(244,239,230,0.65)', fontSize: 14, lineHeight: 1, padding: 4,
    }}>×</button>
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  function handleSubscribe(e) {
    e.preventDefault()
    setSubStatus('success')
    setEmail('')
  }

  return (
    <>
      <Head>
        <title>Mriie — an atelier in ubud</title>
        <meta name="description" content="Two things, made slowly, by six women. A bikini for the reef. A padel cover for the court. Handmade in Ubud, Bali." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── Construction banner (shared) ── */}
      {bannerVisible && <ConstructionBanner onDismiss={() => setBannerVisible(false)} />}

      {/* ── Desktop ── */}
      <div className="desktop-only">
        <div style={{ background: C.bone, fontFamily: 'Inter, sans-serif', width: '100%' }}>
          <div style={{ position: 'relative' }}>
            <DesktopNav />
            <DesktopHero />
          </div>
          <DesktopIntro />
          <DesktopCategories />
          <DesktopSeason />
          <DesktopAtelier />
          <DesktopDispatch />
          <DesktopStockists />
          <DesktopLetters email={email} setEmail={setEmail} onSubmit={handleSubscribe} status={subStatus} />
          <DesktopFooter email={email} setEmail={setEmail} onSubmit={handleSubscribe} status={subStatus} />
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="mobile-only">
        <div style={{ background: C.bone, fontFamily: 'Inter, sans-serif' }}>
          <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileHero />
          <MobileIntro />
          <MobileCategories />
          <MobileSeason />
          <MobileAtelier />
          <MobileDispatch />
          <MobileStockists />
          <MobileLetters email={email} setEmail={setEmail} onSubmit={handleSubscribe} status={subStatus} />
          <MobileFooter email={email} setEmail={setEmail} onSubmit={handleSubscribe} status={subStatus} />
        </div>
      </div>
    </>
  )
}
