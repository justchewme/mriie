// Mriie — Shared design tokens and primitives

export const C = {
  bone:    '#F4EFE6',
  coconut: '#E8DFD0',
  sand:    '#8A7560',
  terra:   '#B5532A',
  ocean:   '#1F3A3D',
  ink:     '#14110F',
};

export const Frangipani = ({ size = 40, color = C.sand, stroke = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <g stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 20 C20 12, 14 8, 10 12 C7 15, 10 19, 20 20" />
      <path d="M20 20 C26 14, 30 10, 32 15 C33 19, 29 21, 20 20" />
      <path d="M20 20 C28 24, 32 30, 28 32 C24 33, 21 28, 20 20" />
      <path d="M20 20 C14 26, 8 28, 8 24 C8 20, 13 19, 20 20" />
      <path d="M20 20 C22 15, 26 17, 25 22 C24 26, 19 25, 20 20" />
      <circle cx="20" cy="20" r="1.2" />
    </g>
  </svg>
);

export const Wave = ({ width = 120, color = C.sand, stroke = 1, style }) => (
  <svg width={width} height="14" viewBox="0 0 120 14" fill="none" preserveAspectRatio="none" style={style}>
    <path
      d="M0 7 Q 10 1, 20 7 T 40 7 T 60 7 T 80 7 T 100 7 T 120 7"
      stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round"
    />
  </svg>
);

export const Racket = ({ size = 44, color = C.sand, stroke = 1 }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 40 56" fill="none">
    <g stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M20 4 C30 4, 34 14, 34 24 C34 34, 28 40, 20 40 C12 40, 6 34, 6 24 C6 14, 10 4, 20 4 Z" />
      <line x1="20" y1="40" x2="20" y2="52" />
      <path d="M17 52 L23 52" />
      <path d="M10 18 L30 18 M10 24 L30 24 M10 30 L30 30" opacity="0.5" />
      <path d="M14 10 L14 36 M20 8 L20 38 M26 10 L26 36" opacity="0.5" />
    </g>
  </svg>
);

export const Label = ({ children, color = C.sand, style }) => (
  <span style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: 10, fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.32em',
    color,
    display: 'block',
    ...style,
  }}>{children}</span>
);

export const H = ({ children, size, color = C.ink, style }) => (
  <span style={{
    fontFamily: '"Fraunces", serif',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: size,
    lineHeight: 1.02,
    letterSpacing: '-0.02em',
    color,
    display: 'block',
    ...style,
  }}>{children}</span>
);

export const Body = ({ children, size = 14, weight = 300, color = C.ink, style }) => (
  <span style={{
    fontFamily: 'Inter, sans-serif',
    fontWeight: weight,
    fontSize: size,
    lineHeight: 1.55,
    color,
    display: 'block',
    ...style,
  }}>{children}</span>
);

export const Wordmark = ({ color = C.ink, size = 14 }) => (
  <span style={{
    fontFamily: '"Fraunces", serif',
    fontWeight: 400,
    fontSize: size,
    letterSpacing: '0.42em',
    color,
    textTransform: 'uppercase',
  }}>M R I I E</span>
);

export const Photo = ({
  ratio = '3 / 4',
  label,
  sublabel,
  tone = 'warm',
  src,
  style,
  imgStyle,
  children,
}) => {
  const palettes = {
    warm:    { bg: '#E6DBC9', stripe: '#D8CBB5', text: '#8A7560' },
    ocean:   { bg: '#2A4A4D', stripe: '#1F3A3D', text: '#B5C9C7' },
    ink:     { bg: '#1A1714', stripe: '#232019', text: '#8A7560' },
    coconut: { bg: '#E8DFD0', stripe: '#DDD2BE', text: '#8A7560' },
    sand:    { bg: '#CFC0A4', stripe: '#BFAE8F', text: '#5E4F3A' },
  };
  const p = palettes[tone] || palettes.warm;
  return (
    <div style={{
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      background: src
        ? undefined
        : `repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 15px)`,
      overflow: 'hidden',
      ...style,
    }}>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label || ''}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            imageRendering: 'auto',
            filter: 'contrast(1.04) saturate(1.08) brightness(1.01)',
            ...imgStyle,
          }}
        />
      )}
      {!src && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.08) 100%)',
        }}/>
      )}
      {label && !src && (
        <div style={{
          position: 'absolute', left: 12, top: 12,
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: 9, letterSpacing: '0.08em',
          color: p.text, textTransform: 'uppercase',
          mixBlendMode: 'multiply',
        }}>
          {label}
          {sublabel && <div style={{ opacity: 0.7, marginTop: 2 }}>{sublabel}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export const InkButton = ({ children, full = true, style, onClick, href }) => {
  const inner = (
    <>
      <span>{children}</span>
      <svg width="18" height="8" viewBox="0 0 18 8">
        <path d="M0 4 L17 4 M13 1 L17 4 L13 7" stroke={C.bone} strokeWidth="0.8" fill="none"/>
      </svg>
    </>
  );
  const base = {
    width: full ? '100%' : 'auto',
    background: C.ink,
    color: C.bone,
    border: 'none',
    padding: '20px 28px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'lowercase',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    textDecoration: 'none',
    ...style,
  };
  if (href) return <a href={href} style={base}>{inner}</a>;
  return <button style={base} onClick={onClick}>{inner}</button>;
};

export const MotifDivider = ({ motif = 'wave', color = C.sand }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '4px 0' }}>
    <div style={{ height: 1, flex: 1, background: color, opacity: 0.35 }}/>
    {motif === 'wave'      && <Wave width={56} color={color} stroke={0.8} />}
    {motif === 'frangipani'&& <Frangipani size={22} color={color} stroke={0.8} />}
    {motif === 'racket'    && <Racket size={18} color={color} stroke={0.8} />}
    <div style={{ height: 1, flex: 1, background: color, opacity: 0.35 }}/>
  </div>
);
