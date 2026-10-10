// Mriie PADL — the public warning notice.
//
// Every word on this page comes from lib/notice.js. Documented facts and
// allegations are rendered in separate, differently-styled blocks on purpose:
// the separation is what keeps the page a consumer warning rather than an
// accusation, and it is the first thing a lawyer will look for.
import Link from 'next/link'
import Layout from '@/components/Layout'
import { C, Label, H, Body } from '@/components/MriieShared'
import { NOTICE, noticeCopy } from '@/lib/notice'
import { useT } from '@/lib/i18n'
import PressFeature, { PatternBlock } from '@/components/PressFeature'

const DANGER = '#8a1c1c'

const fmtDate = (iso, locale) => {
  const d = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return iso
  const tag = { en: 'en-GB', id: 'id-ID', es: 'es-ES' }[locale] || 'en-GB'
  return d.toLocaleDateString(tag, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

const Section = ({ title, children, tone }) => (
  <section style={{ marginTop: 44 }}>
    <Label color={tone || C.terra} style={{ marginBottom: 14 }}>{title}</Label>
    {children}
  </section>
)

const Bullets = ({ items, muted }) => (
  <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
    {items.map((s) => (
      <li key={s} style={{ lineHeight: 1.8 }}>
        <Body size={14} color={muted ? 'rgba(20,17,15,0.65)' : 'rgba(20,17,15,0.82)'}>{s}</Body>
      </li>
    ))}
  </ul>
)

export default function Notice() {
  const { locale } = useT()
  const c = noticeCopy(locale)
  const updated = fmtDate(NOTICE.updated, locale)

  const steps = [...c.steps]
  if (NOTICE.flags.policeReportFiled) {
    steps.unshift(
      c.stepPolice
        .replace('{date}', fmtDate(NOTICE.policeReport.date, locale))
        .replace('{unit}', NOTICE.policeReport.unit)
        .replace('{spf}', NOTICE.policeReport.spf)
    )
  }
  if (NOTICE.flags.otherReports) steps.push(c.stepOtherReports)

  return (
    <Layout
      title={c.kicker}
      description={c.title}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 20px 30px' }}>
        <Label color={DANGER} style={{ marginBottom: 16 }}>⚠️ {c.kicker}</Label>
        <H size={36}>{c.title}</H>
        <Body size={12} color="rgba(20,17,15,0.5)" style={{ marginTop: 14, letterSpacing: '0.06em' }}>
          {c.updatedLabel}: {updated}
        </Body>
        <PressFeature />
        <PatternBlock />
        <Body size={15} color="rgba(20,17,15,0.78)" style={{ marginTop: 22, lineHeight: 1.9 }}>
          {c.lede}
        </Body>

        {/* Payment rails — the part of the warning that actually stops a transfer */}
        <div style={{ marginTop: 28, border: `2px solid ${DANGER}`, padding: '20px 22px' }}>
          <Body size={11} color={DANGER} weight={600} style={{ letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>
            {c.payHeading}
          </Body>
          <Body size={14} color={DANGER} weight={600} style={{ lineHeight: 1.8 }}>
            {NOTICE.payChannels.join(' · ')}
          </Body>
        </div>

        <Section title={c.doHeading} tone={DANGER}>
          <Bullets items={c.do} />
        </Section>

        <div style={{ marginTop: 32 }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-block', background: DANGER, color: '#fff', textDecoration: 'none',
              padding: '15px 26px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}
          >
            {c.reportCta} →
          </Link>
        </div>

        <Section title={c.whoHeading}>
          <Bullets items={c.who} />
        </Section>

        <Section title={c.factsHeading}>
          <Body size={13} color="rgba(20,17,15,0.6)" style={{ marginBottom: 16, lineHeight: 1.8 }}>
            {c.factsIntro}
          </Body>
          <Bullets items={c.facts} />
        </Section>

        {/* Allegations are visually separated and captioned — not mixed in above. */}
        <Section title={c.allegHeading}>
          <div style={{ borderLeft: `3px solid rgba(20,17,15,0.2)`, paddingLeft: 18 }}>
            <Body size={13} color="rgba(20,17,15,0.6)" style={{ marginBottom: 16, lineHeight: 1.8 }}>
              {c.allegIntro}
            </Body>
            <Bullets items={c.allegations} muted />
          </div>
        </Section>

        <Section title={c.stepsHeading}>
          <Bullets items={steps} />
        </Section>

        {/* A real, working right of reply is part of the defence — it is the
            difference between a consumer warning and a pillory. */}
        <Section title={c.replyHeading}>
          <Body size={14} color="rgba(20,17,15,0.78)" style={{ lineHeight: 1.9 }}>
            {c.reply}
          </Body>
          {NOTICE.contactEmail && (
            <Body size={14} color="rgba(20,17,15,0.78)" style={{ marginTop: 10, lineHeight: 1.9 }}>
              {c.replyEmail.split('{email}')[0]}
              <a href={`mailto:${NOTICE.contactEmail}`} style={{ color: C.terra }}>{NOTICE.contactEmail}</a>
              {c.replyEmail.split('{email}')[1]}
            </Body>
          )}
          <Link
            href="/contact?topic=reply"
            style={{
              display: 'inline-block', marginTop: 18, border: `1px solid ${C.ink}`, color: C.ink,
              textDecoration: 'none', padding: '13px 22px', fontFamily: 'Inter, sans-serif',
              fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}
          >
            {c.replyCta} →
          </Link>
        </Section>

        <Section title={c.changelogHeading}>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {NOTICE.changelog.map((e) => (
              <li key={e.date + e.text}>
                <Body size={12} color="rgba(20,17,15,0.55)" style={{ lineHeight: 1.75 }}>
                  {fmtDate(e.date, locale)} — {e.text}
                </Body>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Layout>
  )
}
