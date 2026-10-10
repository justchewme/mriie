// Press coverage block for the warning pages. The featured article (Bali) is
// rendered large on purpose: a third-party news report is the most credible
// thing on the page, and it is what a buyer in Bali will recognise.
import { C, Label, H, Body } from '@/components/MriieShared'
import { NOTICE, noticeCopy } from '@/lib/notice'
import { useT } from '@/lib/i18n'

const DANGER = '#8a1c1c'

const fmt = (iso, locale) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(
    { en: 'en-GB', id: 'id-ID', es: 'es-ES' }[locale] || 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
  )

// Indonesian readers get the Bahasa article; everyone else the English one.
const pick = (obj, locale) => obj[locale === 'id' ? 'id' : 'en'] || obj.en || obj.id

export default function PressFeature() {
  const { locale } = useT()
  const c = noticeCopy(locale)
  const featured = NOTICE.press.find((p) => p.featured)
  const others = NOTICE.press.filter((p) => !p.featured)

  return (
    <section style={{ marginTop: 34 }}>
      {featured && (
        <div style={{ background: C.ink, borderTop: `8px solid ${DANGER}`, padding: '38px 28px 32px', color: '#fff' }}>
          <Body size={13} color="#f0b4b4" weight={700} style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            📰 {c.pressFeaturedLabel} · {featured.outlet} · {fmt(featured.date, locale)}
          </Body>
          <a href={pick(featured.url, locale)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <H size={40} color="#fff" style={{ marginTop: 18, lineHeight: 1.15 }}>
              “{pick(featured.headline, locale)}”
            </H>
          </a>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
            {[['id', 'Baca berita (Bahasa Indonesia)'], ['en', 'Read the article (English)']].map(([lang, label]) => (
              <a
                key={lang}
                href={featured.url[lang]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', background: lang === 'id' ? '#f4c542' : 'transparent', color: lang === 'id' ? '#3a0a0a' : '#fff',
                  border: '2px solid #f4c542', textDecoration: 'none', padding: '15px 22px',
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
          <Body size={12} color="rgba(255,255,255,0.6)" style={{ marginTop: 16, wordBreak: 'break-all' }}>
            {featured.url.id}
          </Body>
        </div>
      )}

      {others.length > 0 && (
        <div style={{ marginTop: 18 }}>
          <Label color={C.terra} style={{ marginBottom: 12 }}>{c.pressAlso}</Label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {others.map((p) => (
              <a
                key={p.outlet}
                href={pick(p.url, locale)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none', background: '#fff', padding: '22px 22px', border: `2px solid ${DANGER}` }}
              >
                <Body size={11} color={DANGER} weight={600} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  {p.outlet} · {fmt(p.date, locale)}
                </Body>
                <Body size={18} color={C.ink} style={{ marginTop: 10, lineHeight: 1.45 }}>
                  {pick(p.headline, locale)}
                </Body>
                {p.original && (
                  <Body size={13} color="rgba(20,17,15,0.55)" style={{ marginTop: 6, lineHeight: 1.5 }}>
                    {p.original}
                  </Body>
                )}
                <Body size={13} color={DANGER} weight={700} style={{ marginTop: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {c.pressRead} ↗
                </Body>
                <Body size={11} color="rgba(20,17,15,0.45)" style={{ marginTop: 6, wordBreak: 'break-all' }}>
                  {pick(p.url, locale)}
                </Body>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export function PatternBlock() {
  const { locale } = useT()
  const c = noticeCopy(locale)
  return (
    <section style={{ marginTop: 40, background: '#fbeeee', borderLeft: `4px solid ${DANGER}`, padding: '24px 24px 22px' }}>
      <H size={24} color={DANGER}>{c.patternHeading}</H>
      <ul style={{ margin: '16px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {c.pattern.map((x) => (
          <li key={x} style={{ lineHeight: 1.8 }}>
            <Body size={14} color="rgba(20,17,15,0.85)">{x}</Body>
          </li>
        ))}
      </ul>
    </section>
  )
}
