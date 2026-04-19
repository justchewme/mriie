import Head from 'next/head'

const palette = [
  { name: 'Bone', hex: '#F4EFE6', text: '#14110F' },
  { name: 'Coconut', hex: '#E8DFD0', text: '#14110F' },
  { name: 'Volcanic Sand', hex: '#8A7560', text: '#F4EFE6' },
  { name: 'Terracotta', hex: '#B5532A', text: '#F4EFE6' },
  { name: 'Deep Ocean', hex: '#1F3A3D', text: '#F4EFE6' },
  { name: 'Ink', hex: '#14110F', text: '#F4EFE6' },
]

const products = [
  { img: '/images/catalog_hibiscus_bikini.jpg', name: 'The Frangipani', kind: 'Bikini set', price: '$100' },
  { img: '/images/catalog_oceanic_flow.jpg', name: 'The Uluwatu', kind: 'Bikini set', price: '$100' },
  { img: '/images/catalog_padel_racket.jpg', name: 'The Canggu Cover', kind: 'Padel cover', price: '$85' },
]

export default function DesignPreview() {
  return (
    <>
      <Head>
        <title>Mriie — Design Preview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <div className="topnotice">
          design preview · sun-bleached atelier
        </div>

        <header className="nav">
          <span className="label">Made in Ubud</span>
          <span className="wordmark">M R I I E</span>
          <span className="label">Cart (0)</span>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <span className="label light">Volume 01 · Resort 2026</span>
            <h1 className="hero-title">
              Stitched by hand,<br />worn by the sea.
            </h1>
            <p className="hero-body">
              A small atelier in Ubud making two things, slowly: bikinis that
              move with the tide and padel covers that travel from Canggu to
              Mallorca.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-light">The bikinis</button>
              <button className="btn btn-ghost">Padel covers</button>
            </div>
          </div>
        </section>

        {/* PALETTE */}
        <section className="section">
          <span className="label">01 · Palette</span>
          <h2 className="display">Sun-bleached, sea-worn.</h2>
          <div className="palette-grid">
            {palette.map((c) => (
              <div
                key={c.name}
                className="swatch"
                style={{ background: c.hex, color: c.text }}
              >
                <span className="label" style={{ color: c.text }}>{c.name}</span>
                <span className="swatch-hex">{c.hex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="section sand">
          <span className="label">02 · Typography</span>
          <h2 className="display">A serif that whispers.</h2>
          <div className="type-grid">
            <div>
              <span className="label">Display · Fraunces Italic</span>
              <p className="type-aa serif">Aa</p>
              <p className="serif type-sample">The hibiscus set.</p>
              <p className="wordmark">Wordmark sample</p>
            </div>
            <div>
              <span className="label">Body · Inter</span>
              <p className="type-aa">Aa</p>
              <p className="body">
                Cut from a single bolt of Italian econyl. Sewn by Komang in our
                Ubud atelier over the course of two afternoons.
              </p>
              <span className="label">Caption · 10/12</span>
            </div>
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section className="section">
          <span className="label">03 · Product card</span>
          <h2 className="display">Quiet on the page.</h2>
          <div className="card-grid">
            {products.map((p) => (
              <div key={p.name} className="card">
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div className="card-row">
                  <div>
                    <span className="label">{p.kind}</span>
                    <div className="card-name serif">{p.name}</div>
                  </div>
                  <div className="card-price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORIAL SPLIT */}
        <section className="split">
          <div
            className="split-img"
            style={{ backgroundImage: 'url(/images/home_artisan_stitch.jpg)' }}
          />
          <div className="split-text">
            <span className="label light">04 · The atelier</span>
            <h2 className="display light">Six women.<br />Two products.</h2>
            <p className="body light">
              Our atelier sits on the edge of a rice field in Ubud. Six women
              cut, dye and stitch every Mriie piece by hand. Each bikini takes
              about nine hours. Each padel cover, four. We do not scale.
            </p>
            <span className="label light" style={{ marginTop: 32, display: 'block' }}>
              Meet them →
            </span>
          </div>
        </section>

        {/* PRODUCT DETAIL */}
        <section className="section">
          <span className="label">05 · Product page</span>
          <h2 className="display">One woman at a time.</h2>
          <div className="pdp">
            <div className="pdp-imgs">
              <div className="pdp-tall" style={{ backgroundImage: 'url(/images/detail_bikini_ladder.jpg)' }} />
              <div className="pdp-sq" style={{ backgroundImage: 'url(/images/catalog_hibiscus_bikini.jpg)' }} />
              <div className="pdp-sq" style={{ backgroundImage: 'url(/images/story_fabric_texture.jpg)' }} />
            </div>
            <div className="pdp-info">
              <span className="label">Bikini set · 01</span>
              <h3 className="pdp-title serif">The Frangipani</h3>
              <div className="pdp-price">$100 · USD</div>
              <hr className="rule" />
              <p className="body">
                A high-cut brief and a tied-string top in hand-dyed botanical
                ochre. Cut from regenerated Italian econyl, lined twice. Sewn
                by Komang over two afternoons in our Ubud atelier.
              </p>
              <div style={{ marginTop: 32 }}>
                <span className="label">Size</span>
                <div className="size-row">
                  {['XS', 'S', 'M', 'L'].map((s) => (
                    <div key={s} className="size-chip">{s}</div>
                  ))}
                </div>
              </div>
              <button className="btn btn-dark btn-block">
                Take it home — $100
              </button>
              <div className="ships">Ships from Bali in 48 hours</div>
            </div>
          </div>
        </section>

        {/* TERRACOTTA STRIP */}
        <section className="terracotta">
          <span className="label light">06 · Accent block</span>
          <h2 className="display light center">
            Find us at COMO Shambhala, Potato Head, La Brisa, and a few quiet villas in Uluwatu.
          </h2>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="wordmark light">M R I I E</div>
              <p className="body muted" style={{ marginTop: 24 }}>
                An atelier in Ubud. Two things, made slowly, by hand.
              </p>
            </div>
            <div>
              <span className="label muted">Shop</span>
              <div className="footer-links serif">
                Bikinis<br />Padel covers<br />Gift cards
              </div>
            </div>
            <div>
              <span className="label muted">House</span>
              <div className="footer-links serif">
                The atelier<br />Stockists<br />Journal
              </div>
            </div>
            <div>
              <span className="label muted">Letters</span>
              <p className="body muted" style={{ marginTop: 16 }}>
                One letter a season. No noise.
              </p>
              <input className="email-input" placeholder="email" />
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Mriie · Ubud, Bali</span>
            <span>Privacy · Terms · Care</span>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        html, body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
      `}</style>

      <style jsx>{`
        .page {
          background: #F4EFE6;
          color: #14110F;
          font-family: Inter, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .label {
          font-family: Inter, sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8A7560;
          font-weight: 500;
        }
        .label.light { color: #E8DFD0; }
        .label.muted { color: #A8A096; }

        .wordmark {
          font-family: Fraunces, serif;
          font-weight: 300;
          letter-spacing: 0.42em;
          font-size: 16px;
          text-transform: uppercase;
          color: #14110F;
        }
        .wordmark.light { color: #F4EFE6; font-size: 18px; }

        .display {
          font-family: Fraunces, serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(34px, 7vw, 84px);
          line-height: 1.02;
          letter-spacing: -0.02em;
          margin: 12px 0 32px;
        }
        .display.light { color: #F4EFE6; }
        .display.center { text-align: center; max-width: 900px; margin-left: auto; margin-right: auto; }

        .body {
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #3a342d;
          max-width: 520px;
          font-weight: 400;
        }
        .body.light { color: #E8DFD0; }
        .body.muted { color: #A8A096; max-width: 320px; }

        .topnotice {
          background: #14110F;
          color: #F4EFE6;
          padding: 10px 20px;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-align: center;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 20px;
          border-bottom: 1px solid rgba(20,17,15,0.08);
          gap: 12px;
        }
        .nav .label:first-child,
        .nav .label:last-child {
          flex: 1;
        }
        .nav .label:last-child { text-align: right; }

        .hero {
          position: relative;
          min-height: 80vh;
          background-image:
            linear-gradient(180deg, rgba(20,17,15,0.15) 0%, rgba(20,17,15,0.6) 100%),
            url(/images/home_hero_bali.jpg);
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px 20px 48px;
          color: #F4EFE6;
        }
        .hero-inner { max-width: 720px; }
        .hero-title {
          font-family: Fraunces, serif;
          font-weight: 200;
          font-style: italic;
          font-size: clamp(40px, 11vw, 132px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 16px 0 20px;
        }
        .hero-body {
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #E8DFD0;
          max-width: 500px;
          margin: 0;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .btn {
          padding: 16px 24px;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: Inter, sans-serif;
          border: 1px solid transparent;
        }
        .btn-light { background: #F4EFE6; color: #14110F; }
        .btn-ghost { background: transparent; color: #F4EFE6; border-color: #F4EFE6; }
        .btn-dark { background: #14110F; color: #F4EFE6; }
        .btn-block {
          width: 100%;
          padding: 22px;
          margin-top: 32px;
          letter-spacing: 0.4em;
        }

        .section {
          padding: 64px 20px;
          border-bottom: 1px solid rgba(20,17,15,0.08);
        }
        .section.sand { background: #E8DFD0; }

        .palette-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        .swatch {
          aspect-ratio: 3 / 4;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .swatch-hex {
          font-family: Fraunces, serif;
          font-style: italic;
          font-size: 18px;
          font-weight: 300;
        }

        .type-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        .type-aa {
          font-size: clamp(56px, 18vw, 120px);
          line-height: 0.9;
          margin: 16px 0 8px;
          font-weight: 300;
        }
        .type-aa.serif {
          font-family: Fraunces, serif;
          font-style: italic;
          letter-spacing: -0.025em;
        }
        .type-aa:not(.serif) { font-family: Inter, sans-serif; }
        .type-sample {
          font-family: Fraunces, serif;
          font-style: italic;
          font-weight: 300;
          font-size: 26px;
          margin: 0 0 12px;
        }
        .serif { font-family: Fraunces, serif; }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .card-img {
          aspect-ratio: 3 / 4;
          background-size: cover;
          background-position: center;
          margin-bottom: 16px;
        }
        .card-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
        }
        .card-name {
          font-style: italic;
          font-weight: 300;
          font-size: 22px;
          margin-top: 6px;
        }
        .card-price {
          font-size: 11px;
          letter-spacing: 0.3em;
          white-space: nowrap;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr;
          background: #1F3A3D;
          color: #F4EFE6;
          border-bottom: 1px solid rgba(20,17,15,0.08);
        }
        .split-img {
          background-size: cover;
          background-position: center;
          min-height: 360px;
        }
        .split-text {
          padding: 64px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pdp {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .pdp-imgs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .pdp-tall {
          aspect-ratio: 3 / 4;
          background-size: cover;
          background-position: center;
          grid-row: span 2;
        }
        .pdp-sq {
          aspect-ratio: 1 / 1;
          background-size: cover;
          background-position: center;
        }
        .pdp-info { padding-top: 8px; }
        .pdp-title {
          font-style: italic;
          font-weight: 300;
          font-size: clamp(38px, 9vw, 56px);
          line-height: 1;
          margin: 12px 0 10px;
          letter-spacing: -0.02em;
        }
        .pdp-price {
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .rule {
          margin: 32px 0;
          height: 1px;
          background: rgba(20,17,15,0.12);
          border: none;
        }
        .size-row { display: flex; gap: 8px; margin-top: 12px; }
        .size-chip {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(20,17,15,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          letter-spacing: 0.2em;
        }
        .ships {
          margin-top: 14px;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8A7560;
        }

        .terracotta {
          background: #B5532A;
          color: #F4EFE6;
          padding: 80px 20px;
          text-align: center;
        }

        .footer {
          background: #14110F;
          color: #E8DFD0;
          padding: 56px 20px 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-links {
          margin-top: 14px;
          font-size: 13px;
          line-height: 2.2;
          font-style: italic;
        }
        .email-input {
          margin-top: 16px;
          background: transparent;
          border: none;
          border-bottom: 1px solid #A8A096;
          color: #F4EFE6;
          padding: 8px 0;
          width: 100%;
          font-size: 13px;
          font-family: Inter, sans-serif;
          outline: none;
        }
        .footer-bottom {
          border-top: 1px solid rgba(232,223,208,0.15);
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #A8A096;
        }

        @media (min-width: 640px) {
          .nav { padding: 24px 32px; }
          .hero { padding: 48px 32px 64px; }
          .section { padding: 96px 32px; }
          .terracotta { padding: 100px 32px; }
          .footer { padding: 72px 32px 40px; }

          .palette-grid { grid-template-columns: repeat(3, 1fr); }
          .type-grid { grid-template-columns: 1fr 1fr; gap: 56px; }
          .card-grid { grid-template-columns: 1fr 1fr; }
          .pdp-imgs { gap: 8px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .footer-bottom { flex-direction: row; justify-content: space-between; }
        }

        @media (min-width: 960px) {
          .nav { padding: 28px 48px; }
          .hero { padding: 64px 48px 80px; min-height: 86vh; }
          .section { padding: 120px 48px; }
          .terracotta { padding: 120px 48px; }
          .footer { padding: 80px 48px 48px; }

          .palette-grid { grid-template-columns: repeat(6, 1fr); }
          .card-grid { grid-template-columns: repeat(3, 1fr); }
          .split { grid-template-columns: 1fr 1fr; }
          .split-img { min-height: 640px; }
          .split-text { padding: 120px 64px; }
          .pdp { grid-template-columns: 1.3fr 1fr; gap: 64px; }
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px; }
        }
      `}</style>
    </>
  )
}
