// Mriie — Illustrated Bali dawn hero
// Pure SVG scene: pre-dawn coastline, animated waves, palms, frangipani

const STARS = [
  [88,28],[204,54],[312,18],[418,42],[532,11],[644,36],[758,22],[866,48],[980,15],
  [1092,38],[1200,20],[1318,44],[1028,62],[172,72],[456,68],[740,58],[924,74],[1260,66],
  [60,92],[280,86],[560,96],[800,82],[1040,90],[1360,78],[148,110],[440,102],[724,114],
  [1008,106],[1292,98],[1140,120],
]

const STAR_SIZES = [0.9, 1.2, 0.7, 1.0, 1.3, 0.8, 1.1, 0.6, 1.4,
  0.9, 1.2, 0.7, 1.0, 0.8, 1.1, 0.6, 1.3, 0.9,
  1.0, 0.7, 1.2, 0.8, 1.1, 0.6, 0.9, 1.3, 0.7, 1.0, 0.8, 1.2]

const STAR_OPS = [0.55, 0.72, 0.40, 0.68, 0.82, 0.50, 0.76, 0.38, 0.88,
  0.60, 0.74, 0.42, 0.70, 0.52, 0.78, 0.36, 0.84, 0.62,
  0.66, 0.44, 0.78, 0.54, 0.80, 0.34, 0.64, 0.86, 0.46, 0.72, 0.56, 0.76]

export default function HeroBali() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          {/* Sky: deep night → pre-dawn teal → horizon amber-gold */}
          <linearGradient id="hb-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#040c16"/>
            <stop offset="18%"  stopColor="#091a2c"/>
            <stop offset="38%"  stopColor="#122e40"/>
            <stop offset="55%"  stopColor="#1a4250"/>
            <stop offset="68%"  stopColor="#22545c" stopOpacity="0.98"/>
            <stop offset="76%"  stopColor="#5c6840"/>
            <stop offset="83%"  stopColor="#9a6030"/>
            <stop offset="89%"  stopColor="#c07238"/>
            <stop offset="94%"  stopColor="#d88840"/>
            <stop offset="97%"  stopColor="#e89848"/>
            <stop offset="100%" stopColor="#f0a84c"/>
          </linearGradient>

          {/* Sun corona — wide warm glow */}
          <radialGradient id="hb-corona" cx="50%" cy="100%" r="55%">
            <stop offset="0%"   stopColor="#fbd472" stopOpacity="0.60"/>
            <stop offset="25%"  stopColor="#f09040" stopOpacity="0.32"/>
            <stop offset="55%"  stopColor="#c86828" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#040c16"  stopOpacity="0"/>
          </radialGradient>

          {/* Sun disc */}
          <radialGradient id="hb-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fffde8"/>
            <stop offset="38%"  stopColor="#fbd872" stopOpacity="0.95"/>
            <stop offset="72%"  stopColor="#f0a840" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#e88030" stopOpacity="0"/>
          </radialGradient>

          {/* Ocean depth */}
          <linearGradient id="hb-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0c2232"/>
            <stop offset="22%"  stopColor="#133040"/>
            <stop offset="48%"  stopColor="#1b4254"/>
            <stop offset="72%"  stopColor="#245868"/>
            <stop offset="100%" stopColor="#2e6e80"/>
          </linearGradient>

          {/* Sand */}
          <linearGradient id="hb-sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#b8a472"/>
            <stop offset="28%"  stopColor="#c8b27e"/>
            <stop offset="65%"  stopColor="#d8c298"/>
            <stop offset="100%" stopColor="#e4d0b0"/>
          </linearGradient>

          {/* Shimmer path (sun reflection on water) */}
          <linearGradient id="hb-shimmer" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%"   stopColor="#fbd472" stopOpacity="0.42"/>
            <stop offset="45%"  stopColor="#f09040" stopOpacity="0.20"/>
            <stop offset="100%" stopColor="#c86828" stopOpacity="0.02"/>
          </linearGradient>

          {/* Haze band at horizon */}
          <linearGradient id="hb-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f0a040" stopOpacity="0"/>
            <stop offset="50%"  stopColor="#f0a040" stopOpacity="0.14"/>
            <stop offset="100%" stopColor="#f0a040" stopOpacity="0"/>
          </linearGradient>

          {/* Foam layers */}
          <linearGradient id="hb-foam-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.88"/>
            <stop offset="100%" stopColor="white" stopOpacity="0.04"/>
          </linearGradient>
          <linearGradient id="hb-foam-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>

          {/* Text legibility overlays */}
          <linearGradient id="hb-veil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(4,12,22,0.58)"/>
            <stop offset="26%"  stopColor="rgba(4,12,22,0.04)"/>
            <stop offset="62%"  stopColor="rgba(4,12,22,0.18)"/>
            <stop offset="100%" stopColor="rgba(4,12,22,0.70)"/>
          </linearGradient>
          <linearGradient id="hb-left-veil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(4,12,22,0.45)"/>
            <stop offset="52%"  stopColor="rgba(4,12,22,0)"/>
          </linearGradient>

          {/* Misty atmosphere filter */}
          <filter id="hb-blur-sm" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5"/>
          </filter>
          <filter id="hb-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="18" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ═══ SKY ═══ */}
        <rect width="1440" height="820" fill="url(#hb-sky)"/>

        {/* Stars — pre-dawn sky */}
        {STARS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={STAR_SIZES[i]} fill="white" opacity={STAR_OPS[i]}/>
        ))}
        {/* Soft Milky Way smear */}
        <ellipse cx="680" cy="90" rx="380" ry="55" fill="rgba(180,210,240,0.04)" style={{ filter: 'blur(12px)' }}/>
        <ellipse cx="860" cy="130" rx="260" ry="35" fill="rgba(180,210,240,0.03)" style={{ filter: 'blur(8px)' }}/>

        {/* ═══ SUN CORONA & GLOW ═══ */}
        <ellipse cx="720" cy="492" rx="520" ry="240" fill="url(#hb-corona)"/>
        {/* Haze band */}
        <rect x="0" y="450" width="1440" height="80" fill="url(#hb-haze)"/>

        {/* ═══ DISTANT COASTLINE SILHOUETTES ═══ */}
        {/* Left headland — faint */}
        <path d="M0,476 Q40,466 90,470 Q130,465 170,472 Q200,468 230,474 L230,492 L0,492 Z"
          fill="#081822" opacity="0.65"/>
        {/* Uluwatu-style cliff — right horizon */}
        <path d="M1440,462 Q1390,455 1330,460 Q1290,454 1250,458 Q1210,463 1180,456 Q1145,460 1100,464 Q1070,460 1030,464 L1030,492 L1440,492 Z"
          fill="#081822" opacity="0.72"/>
        {/* Tall cliff face hint right */}
        <path d="M1310,448 Q1320,440 1335,442 Q1345,438 1360,440 Q1370,444 1380,438 Q1390,434 1400,436 Q1415,440 1440,442 L1440,462 Q1390,455 1360,460 Q1330,458 1310,462 Z"
          fill="#060f18" opacity="0.80"/>
        {/* Faint distant island center */}
        <path d="M560,479 Q610,473 660,476 Q700,472 740,475 Q780,479 840,474 L840,492 L560,492 Z"
          fill="#081822" opacity="0.40"/>

        {/* ═══ SUN ═══ */}
        {/* Soft diffuse disc (behind) */}
        <circle cx="720" cy="491" r="58" fill="rgba(251,212,100,0.28)" style={{ filter: 'blur(14px)' }}/>
        {/* Main disc */}
        <circle cx="720" cy="491" r="32" fill="url(#hb-sun)" filter="url(#hb-glow)"/>
        <circle cx="720" cy="491" r="18" fill="#fffde8" opacity="0.65"/>
        {/* Lower hemisphere cut by horizon */}
        <rect x="630" y="492" width="180" height="40" fill="url(#hb-sky)"/>

        {/* ═══ SUN PATH ON WATER ═══ */}
        {/* Central shimmer column */}
        <path d="M672,492 Q690,520 682,560 Q676,600 688,645 Q700,680 720,715 Q740,680 752,645 Q764,600 758,560 Q750,520 768,492 Z"
          fill="url(#hb-shimmer)" opacity="0.85"/>
        {/* Wide shimmer blooms */}
        <ellipse cx="720" cy="530" rx="140" ry="18" fill="rgba(251,212,100,0.18)" opacity="0.8"/>
        <ellipse cx="720" cy="575" rx="90"  ry="10" fill="rgba(251,180, 64,0.12)" opacity="0.7"/>
        <ellipse cx="720" cy="625" rx="55"  ry="6"  fill="rgba(251,160, 48,0.10)" opacity="0.6"/>

        {/* ═══ OCEAN BASE ═══ */}
        <rect x="0" y="492" width="1440" height="328" fill="url(#hb-ocean)"/>

        {/* Fine horizon texture */}
        <path d="M0,502 Q360,498 720,502 Q1080,506 1440,502 L1440,508 Q1080,512 720,508 Q360,504 0,508 Z"
          fill="rgba(255,255,255,0.06)"/>

        {/* ═══ WAVES — 5 animated layers ═══ */}

        {/* Wave 1: distant horizon ripple — very fine, fast */}
        <g className="hb-w1" style={{ willChange: 'transform' }}>
          <path
            d="M-720,516 C-540,512 -360,520 -180,516 C0,512 180,520 360,516 C540,512 720,520 900,516 C1080,512 1260,520 1440,516 C1620,512 1800,520 1980,516 C2160,512 2340,520 2520,516 L2520,820 L-720,820 Z"
            fill="#142e3e" opacity="0.55"/>
        </g>

        {/* Wave 2: small swell */}
        <g className="hb-w2" style={{ willChange: 'transform' }}>
          <path
            d="M-720,540 C-630,532 -450,550 -270,540 C-90,530 90,550 270,540 C450,530 630,552 810,540 C990,530 1170,552 1350,540 C1530,530 1710,552 1890,540 C2070,530 2250,552 2520,540 L2520,820 L-720,820 Z"
            fill="#183a4c" opacity="0.70"/>
          {/* subtle crest highlight */}
          <path
            d="M-720,540 C-630,532 -450,550 -270,540 C-90,530 90,550 270,540 C450,530 630,552 810,540 C990,530 1170,552 1350,540 C1530,530 1710,552 1890,540 C2070,530 2250,552 2520,540 L2520,544 C2250,556 2070,534 1890,544 C1710,556 1530,534 1350,544 C1170,556 990,534 810,544 C630,556 450,534 270,544 C90,554 -90,534 -270,544 C-450,556 -630,536 -720,544 Z"
            fill="rgba(255,255,255,0.08)"/>
        </g>

        {/* Wave 3: medium swell */}
        <g className="hb-w3" style={{ willChange: 'transform' }}>
          <path
            d="M-720,574 C-576,560 -432,588 -288,572 C-144,558 0,588 144,573 C288,558 432,590 576,574 C720,560 864,590 1008,575 C1152,560 1296,592 1440,576 C1584,562 1728,592 1872,576 C2016,562 2232,592 2520,576 L2520,820 L-720,820 Z"
            fill="#1c4458" opacity="0.82"/>
          {/* foam trace */}
          <path
            d="M-720,574 C-576,560 -432,588 -288,572 C-144,558 0,588 144,573 C288,558 432,590 576,574 C720,560 864,590 1008,575 C1152,560 1296,592 1440,576 C1584,562 1728,592 1872,576 C2016,562 2232,592 2520,576 L2520,580 C2232,596 2016,566 1872,580 C1728,596 1584,566 1440,580 C1296,596 1152,564 1008,579 C864,594 720,564 576,578 C432,594 288,562 144,577 C0,592 -144,562 -288,576 C-432,592 -576,564 -720,578 Z"
            fill="rgba(255,255,255,0.11)"/>
        </g>

        {/* Wave 4: larger breaking wave with pronounced foam crest */}
        <g className="hb-w4" style={{ willChange: 'transform' }}>
          {/* wave body */}
          <path
            d="M-720,618 C-576,600 -396,635 -216,616 C-72,601 108,638 288,617 C468,600 648,638 828,618 C1008,600 1188,640 1368,618 C1548,600 1728,640 1908,618 C2088,600 2304,638 2520,618 L2520,820 L-720,820 Z"
            fill="#215062" opacity="0.92"/>
          {/* foam crest — thicker, more opaque */}
          <path
            d="M-720,618 C-576,600 -396,635 -216,616 C-72,601 108,638 288,617 C468,600 648,638 828,618 C1008,600 1188,640 1368,618 C1548,600 1728,640 1908,618 C2088,600 2304,638 2520,618 L2520,626 C2304,646 2088,608 1908,626 C1728,648 1548,608 1368,626 C1188,648 1008,608 828,626 C648,646 468,608 288,625 C108,646 -72,609 -216,624 C-396,643 -576,608 -720,626 Z"
            fill="url(#hb-foam-a)" opacity="0.88"/>
          {/* secondary foam wisps */}
          <path
            d="M-720,620 C-620,614 -500,626 -380,619 C-260,612 -140,626 0,618 C140,612 260,626 400,619 C520,613 640,627 760,620 C880,614 1000,628 1120,620 C1240,614 1360,628 1480,620 C1600,614 1720,628 1860,620 C2000,613 2200,627 2520,620"
            stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </g>

        {/* Wave 5: gentle shore wash */}
        <g className="hb-w5" style={{ willChange: 'transform' }}>
          <path
            d="M-360,682 C-180,674 0,690 180,680 C360,670 540,688 720,678 C900,668 1080,688 1260,678 C1440,668 1620,688 1800,678 L1800,820 L-360,820 Z"
            fill="rgba(46,110,128,0.55)"/>
          {/* shoreline foam wash */}
          <path
            d="M-360,682 C-180,674 0,690 180,680 C360,670 540,688 720,678 C900,668 1080,688 1260,678 C1440,668 1620,688 1800,678 L1800,686 C1620,696 1440,676 1260,686 C1080,696 900,676 720,686 C540,696 360,678 180,688 C0,698 -180,682 -360,690 Z"
            fill="url(#hb-foam-b)" opacity="0.80"/>
          {/* runout tongues */}
          <path
            d="M200,694 Q320,690 420,695 Q520,699 620,692"
            stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path
            d="M780,696 Q900,691 1000,696 Q1100,700 1220,693"
            stroke="rgba(255,255,255,0.24)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        </g>

        {/* ═══ BEACH SAND ═══ */}
        <path d="M0,710 Q360,700 720,705 Q1080,710 1440,700 L1440,820 L0,820 Z"
          fill="url(#hb-sand)"/>

        {/* Wet sand zone — darker, reflective */}
        <path d="M0,710 Q360,700 720,705 Q1080,710 1440,700 L1440,728 Q1080,738 720,733 Q360,728 0,738 Z"
          fill="rgba(140,118,72,0.32)"/>

        {/* Sand ripple lines */}
        {[745, 760, 773, 785, 796, 806].map((y, i) => (
          <path key={i}
            d={`M${i * 60},${y} Q${360 + i * 14},${y - 2} 720,${y + 1} Q${1080 + i * 10},${y - 1} ${1440 - i * 40},${y}`}
            stroke="rgba(132,108,60,0.18)" strokeWidth="0.7" fill="none"
          />
        ))}

        {/* Sand footprint hints */}
        <ellipse cx="380" cy="754" rx="6" ry="3.5" fill="rgba(110,88,44,0.18)" transform="rotate(-15,380,754)"/>
        <ellipse cx="400" cy="762" rx="5" ry="3"   fill="rgba(110,88,44,0.15)" transform="rotate(-12,400,762)"/>
        <ellipse cx="420" cy="752" rx="6" ry="3.5" fill="rgba(110,88,44,0.18)" transform="rotate(-15,420,752)"/>
        <ellipse cx="440" cy="760" rx="5" ry="3"   fill="rgba(110,88,44,0.14)" transform="rotate(-12,440,760)"/>

        {/* ═══ LEFT PALM GROUP ═══ */}
        <g>
          {/* Back left palm */}
          <path d="M-30,820 Q-18,730  2,650 Q16,596 30,546 Q40,514 50,486"
            stroke="#061410" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.75"/>
          {/* fronds */}
          <path d="M50,486 Q-10,458 -80,472 Q-130,476 -180,465" stroke="#061410" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.70"/>
          <path d="M50,486 Q54,438 38,396 Q30,372 18,354"  stroke="#061410" strokeWidth="5"   fill="none" strokeLinecap="round" opacity="0.68"/>
          <path d="M50,486 Q100,460 136,436 Q162,416 180,400" stroke="#061410" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.65"/>
          <path d="M50,486 Q10,508 -32,522 Q-64,530 -96,527"  stroke="#061410" strokeWidth="4"   fill="none" strokeLinecap="round" opacity="0.52"/>
          <path d="M50,486 Q90,505 120,516 Q148,524 172,521"  stroke="#061410" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.48"/>
          {/* leaflets on fronds */}
          {[[-40,469,'-25,462,-18,455'], [0,464,'-8,456,6,449'], [80,455,'95,448,102,440'], [30,436,'24,428,38,421']].map(([x,y,pts],i) => (
            <path key={i} d={`M${x},${y} L${pts}`} stroke="#061410" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.38"/>
          ))}

          {/* Front main palm */}
          <path d="M90,820 Q98,720 116,636 Q128,582 144,530 Q155,498 164,468"
            stroke="#061410" strokeWidth="16" fill="none" strokeLinecap="round"/>
          <path d="M90,820 Q94,720 110,636 Q122,582 138,530 Q149,498 158,468"
            stroke="#050e0a" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.40"/>
          {/* fronds */}
          <path d="M164,468 Q92,432 18,448 Q-30,453 -82,440"  stroke="#061410" strokeWidth="7"   fill="none" strokeLinecap="round"/>
          <path d="M164,468 Q172,414 152,368 Q143,342 130,322"  stroke="#061410" strokeWidth="6.5" fill="none" strokeLinecap="round"/>
          <path d="M164,468 Q222,438 264,410 Q292,390 312,372"  stroke="#061410" strokeWidth="6"   fill="none" strokeLinecap="round"/>
          <path d="M164,468 Q120,492 72,508 Q36,517 0,514"     stroke="#061410" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.65"/>
          <path d="M164,468 Q208,490 244,504 Q268,512 290,509"  stroke="#061410" strokeWidth="5"   fill="none" strokeLinecap="round" opacity="0.60"/>
          <path d="M164,468 Q144,442 148,410 Q149,392 152,376"  stroke="#061410" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.55"/>
          {/* coconut cluster */}
          <circle cx="162" cy="472" r="9" fill="#1a2c10" opacity="0.6"/>
          <circle cx="153" cy="466" r="7" fill="#1a2c10" opacity="0.5"/>
          <circle cx="173" cy="465" r="6" fill="#1a2c10" opacity="0.45"/>
        </g>

        {/* ═══ RIGHT PALM GROUP ═══ */}
        <g>
          {/* Back right palm */}
          <path d="M1490,820 Q1476,732 1454,650 Q1440,596 1424,546 Q1413,514 1403,486"
            stroke="#061410" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.72"/>
          {/* fronds */}
          <path d="M1403,486 Q1468,456 1540,468 Q1588,472 1638,460" stroke="#061410" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.68"/>
          <path d="M1403,486 Q1395,438 1412,396 Q1421,374 1432,354"  stroke="#061410" strokeWidth="5"   fill="none" strokeLinecap="round" opacity="0.65"/>
          <path d="M1403,486 Q1348,460 1310,435 Q1284,415 1265,400" stroke="#061410" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.62"/>
          <path d="M1403,486 Q1448,508 1490,522 Q1520,530 1552,527"  stroke="#061410" strokeWidth="4"   fill="none" strokeLinecap="round" opacity="0.50"/>

          {/* Front right palm */}
          <path d="M1370,820 Q1360,724 1340,642 Q1326,586 1310,532 Q1299,498 1289,466"
            stroke="#061410" strokeWidth="16" fill="none" strokeLinecap="round"/>
          <path d="M1370,820 Q1362,724 1344,642 Q1330,586 1314,532 Q1303,498 1293,466"
            stroke="#050e0a" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.40"/>
          {/* fronds */}
          <path d="M1289,466 Q1362,430 1436,445 Q1486,450 1538,436"   stroke="#061410" strokeWidth="7"   fill="none" strokeLinecap="round"/>
          <path d="M1289,466 Q1280,413 1300,365 Q1309,340 1322,318"   stroke="#061410" strokeWidth="6.5" fill="none" strokeLinecap="round"/>
          <path d="M1289,466 Q1228,438 1185,410 Q1156,390 1135,372"   stroke="#061410" strokeWidth="6"   fill="none" strokeLinecap="round"/>
          <path d="M1289,466 Q1336,490 1386,506 Q1422,516 1458,513"   stroke="#061410" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.65"/>
          <path d="M1289,466 Q1244,490 1207,504 Q1182,512 1160,510"   stroke="#061410" strokeWidth="5"   fill="none" strokeLinecap="round" opacity="0.60"/>
          <path d="M1289,466 Q1310,440 1306,408 Q1304,390 1300,374"   stroke="#061410" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.55"/>
          {/* coconut cluster */}
          <circle cx="1291" cy="470" r="9" fill="#1a2c10" opacity="0.6"/>
          <circle cx="1300" cy="463" r="7" fill="#1a2c10" opacity="0.5"/>
          <circle cx="1280" cy="464" r="6" fill="#1a2c10" opacity="0.45"/>
        </g>

        {/* ═══ FRANGIPANI ═══ */}
        {/* Left cluster on sand */}
        {[0,60,120,180,240].map((deg, i) => {
          const rad = deg * Math.PI / 180
          const px = 260 + Math.cos(rad) * 10, py = 730 + Math.sin(rad) * 6
          return <ellipse key={i} cx={px} cy={py} rx="7" ry="4.5"
            fill="#f2deb8" opacity="0.72"
            transform={`rotate(${deg}, ${px}, ${py})`}/>
        })}
        <circle cx="260" cy="730" r="2.5" fill="#f5e8b0" opacity="0.8"/>

        {/* Right cluster on sand */}
        {[0,60,120,180,240].map((deg, i) => {
          const rad = deg * Math.PI / 180
          const px = 1110 + Math.cos(rad) * 9, py = 725 + Math.sin(rad) * 5.5
          return <ellipse key={i} cx={px} cy={py} rx="6" ry="4"
            fill="#edd8aa" opacity="0.65"
            transform={`rotate(${deg}, ${px}, ${py})`}/>
        })}
        <circle cx="1110" cy="725" r="2" fill="#f5e8b0" opacity="0.7"/>

        {/* Scattered loose petals */}
        <ellipse cx="440"  cy="745" rx="8" ry="4" fill="#f0d8b0" opacity="0.50" transform="rotate(-22,440,745)"/>
        <ellipse cx="620"  cy="716" rx="5" ry="3" fill="#f2deb8" opacity="0.40" transform="rotate(14,620,716)"/>
        <ellipse cx="820"  cy="742" rx="7" ry="3.5" fill="#ecd4a8" opacity="0.45" transform="rotate(-8,820,742)"/>
        <ellipse cx="980"  cy="728" rx="6" ry="3.5" fill="#f0d8b0" opacity="0.42" transform="rotate(25,980,728)"/>
        <ellipse cx="1240" cy="738" rx="8" ry="4" fill="#f2dcb0" opacity="0.48" transform="rotate(-18,1240,738)"/>

        {/* ═══ CRAFT DETAIL — fine batik motif in sky (ultra-subtle, represents handwork) ═══ */}
        <g opacity="0.038" stroke="rgba(245,220,160,1)" strokeWidth="0.5" fill="none">
          <circle cx="540" cy="160" r="18"/>
          <circle cx="540" cy="160" r="12"/>
          <circle cx="540" cy="160" r="6"/>
          {[0,45,90,135,180,225,270,315].map((d, i) => {
            const r = d * Math.PI / 180
            return <line key={i} x1={540 + Math.cos(r)*18} y1={160 + Math.sin(r)*18}
                                  x2={540 + Math.cos(r)*26} y2={160 + Math.sin(r)*26}/>
          })}
          <circle cx="900" cy="200" r="14"/>
          <circle cx="900" cy="200" r="8"/>
          {[0,60,120,180,240,300].map((d, i) => {
            const r = d * Math.PI / 180
            return <line key={i} x1={900 + Math.cos(r)*14} y1={200 + Math.sin(r)*14}
                                  x2={900 + Math.cos(r)*20} y2={200 + Math.sin(r)*20}/>
          })}
        </g>

        {/* Soft atmospheric haze near horizon */}
        <rect x="0" y="468" width="1440" height="40"
          fill="rgba(200,150,80,0.07)" style={{ filter: 'blur(8px)' }}/>

        {/* ═══ LEGIBILITY OVERLAYS ═══ */}
        <rect width="1440" height="820" fill="url(#hb-veil)"/>
        <rect width="860"  height="820" fill="url(#hb-left-veil)"/>
      </svg>
    </div>
  )
}
