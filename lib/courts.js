// Mriie PADL — padel courts directory data for the /padel-bali guide pages.
// Facts here are limited to what is publicly verifiable; keep claims modest.
// `relationship`: 'stockist' (sells Mriie), 'on-court' (Mriie covers in play there), or null.

export const courts = [
  {
    slug: 'city-padel-bali',
    name: 'City Padel Bali',
    area: 'Denpasar',
    relationship: 'stockist',
    blurb:
      'A central urban sports hub in Denpasar with four padel courts plus tennis and pickleball — one of the most accessible places to play if you are staying in the city.',
  },
  {
    slug: 'jungle-padel-lembongan',
    name: 'Jungle Padel Lembongan',
    area: 'Nusa Lembongan',
    relationship: 'stockist',
    blurb:
      'The first pink padel club in the world — a striking beachfront court on Nusa Lembongan with a padel shop, café and villa on site. Worth the boat trip for the view alone.',
  },
  {
    slug: 'monkey-padel-bali',
    name: 'Monkey Padel Bali',
    area: 'Ubud',
    relationship: 'on-court',
    blurb:
      'Tucked near the Sacred Monkey Forest in Ubud with extended playing hours — play early or late to dodge the jungle heat.',
  },
  {
    slug: 'coral-padel-amed',
    name: 'Coral Padel',
    area: 'Amed',
    relationship: 'on-court',
    blurb:
      'Padel on Bali’s quiet east coast — Amed is famous for diving and black-sand beaches, and a session here pairs perfectly with a morning in the water.',
  },
  {
    slug: 'zabbo-padel-batam',
    name: 'Zabbo Padel',
    area: 'Batam',
    relationship: 'stockist',
    blurb:
      'Batam’s padel scene is growing fast, and Zabbo Padel is at the heart of it — an easy ferry hop from Singapore for a weekend of games.',
  },
  {
    slug: 'bali-social-club',
    name: 'Bali Social Club',
    area: 'Canggu',
    relationship: null,
    blurb:
      'A hidden gem in Canggu with seven premium padel courts, a bar and a pro shop — one of the biggest dedicated padel venues on the island.',
  },
  {
    slug: 'island-sport-club',
    name: 'Island Sport Club',
    area: 'Canggu & Uluwatu',
    relationship: null,
    blurb:
      'Eleven courts spread across multiple locations — Canggu, Uluwatu, Cemagi and Gili T — making it one of the largest padel networks in Bali.',
  },
  {
    slug: 'island-padel-uluwatu',
    name: 'Island Padel',
    area: 'Uluwatu',
    relationship: null,
    blurb:
      'Padel in Pecatu on the Bukit peninsula — courts within easy reach of Uluwatu’s surf breaks and cliff-top sunsets.',
  },
  {
    slug: 'monster-padel-uluwatu',
    name: 'Monster Padel',
    area: 'Uluwatu',
    relationship: null,
    blurb:
      'The giant of the Bukit — plenty of courts and a famously cold ice bath, close to Melasti Beach.',
  },
  {
    slug: 'the-ground-bingin',
    name: 'The Ground',
    area: 'Bingin',
    relationship: null,
    blurb:
      'The aesthetic one — pink-and-blue courts in secluded Bingin that fill every padel feed on the island.',
  },
  {
    slug: 'ola-padel-ungasan',
    name: 'Ola Padel',
    area: 'Ungasan',
    relationship: null,
    blurb:
      'Ungasan’s home of padel, paired with a café-bar — a laid-back southern spot for a game away from the crowds.',
  },
  {
    slug: 'play-uluwatu',
    name: 'Play Uluwatu',
    area: 'Uluwatu',
    relationship: null,
    blurb:
      'Another solid option in the Uluwatu area’s fast-growing padel scene.',
  },
  {
    slug: 'padel-of-gods-ubud',
    name: 'Padel of Gods',
    area: 'Ubud',
    relationship: null,
    blurb:
      'Padel on Jl Campuhan in Ubud — a game surrounded by the ridges and rice terraces that made this town famous.',
  },
  {
    slug: 'bali-sports-club-legian',
    name: 'Bali Sports Club',
    area: 'Legian',
    relationship: null,
    blurb:
      'Centrally positioned in Legian, Kuta — a convenient session between the beach and dinner for anyone staying in the tourist heart of Bali.',
  },
  {
    slug: 'canggu-padel',
    name: 'Canggu Padel',
    area: 'Berawa',
    relationship: null,
    blurb:
      'A popular, easy-to-reach venue in Berawa open daily from early morning to late evening — a staple of the Canggu padel scene.',
  },
  {
    slug: 'sanur-padel-club',
    name: 'Sanur Padel Club',
    area: 'Sanur',
    relationship: null,
    blurb:
      'Four courts on Bali’s calm east coast — three of them indoor, which makes Sanur one of the safest bets on the island in rainy season.',
  },
  {
    slug: 'bali-padel-academy',
    name: 'Bali Padel Academy',
    area: 'Seminyak & Umalas',
    relationship: null,
    blurb:
      'Covered courts across Seminyak and Umalas with a pool, café and fitness facilities — a solid pick for coaching and wet-season play.',
  },
  {
    slug: 'jungle-padel-ubud',
    name: 'Jungle Padel Ubud',
    area: 'Ubud',
    relationship: null,
    blurb:
      'The Jungle Padel crew’s Ubud outpost — padel wrapped in rice-field greenery, minutes from the town centre.',
  },
]

export const getCourt = (slug) => courts.find((c) => c.slug === slug) || null
