import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const artisans = [
  {
    name: 'Ni Made Suastini',
    title: 'Head Artisan & Lead Pattern Maker',
    village: 'Ubud, Bali',
    years: 24,
    specialty: 'Endek weaving & performance panelling',
    bio: 'Ni Made learned the sacred art of Balinese Endek weaving at the age of eight, sitting beside her grandmother in their family compound in Ubud. Today she leads a team of 22 artisans, translating centuries-old geometric patterns into the aerodynamic seam lines of Mriie\'s flagship activewear. Her hands have shaped every single piece in the Hibiscus Dawn collection.',
    image: '/images/img_22.jpg',
  },
  {
    name: 'I Wayan Darma',
    title: 'Master Dyer & Colour Architect',
    village: 'Gianyar, Bali',
    years: 18,
    specialty: 'Natural botanical dyeing & mordant chemistry',
    bio: 'Wayan studied traditional Balinese natural dyeing under a government cultural preservation grant before joining Mriie as our first dedicated colour artisan. He sources indigo, turmeric, teak bark, and hibiscus flower from regenerative farms within 50km of our workshop. His GOTS-certified dye baths produce the signature sunset palette that defines Mriie\'s visual identity.',
    image: '/images/img_20.jpg',
  },
  {
    name: 'Ni Wayan Suari',
    title: 'Master Weaver & Textile Heritage Lead',
    village: 'Klungkung, Bali',
    years: 31,
    specialty: 'Songket backstrap loom weaving & quality certification',
    bio: 'With over three decades of practice, Ni Wayan is the cultural heart of the Mriie workshop. A certified Balinese Cultural Heritage Practitioner, she oversees all quality standards and ensures that every technique used in production is documented and traceable. She also leads our bi-annual weaving workshops for young women in Klungkung, helping keep the craft alive for the next generation.',
    image: '/images/img_15.jpg',
  },
  {
    name: 'Komang Ayu Lestari',
    title: 'Cut & Sew Specialist',
    village: 'Denpasar, Bali',
    years: 9,
    specialty: 'High-performance seam construction & ergonomic fitting',
    bio: 'Komang joined Mriie after completing a technical tailoring program in Denpasar, combining modern garment engineering with the precision she observed in her mother\'s ceremonial dress work. She specialises in flatlock and bonded seam techniques that eliminate chafing for elite athletes. Her fitting sessions with sponsored athletes in Seminyak have shaped the ergonomic profile of the Oceanic Flow Set.',
    image: '/images/img_12.jpg',
  },
]

const workshopStats = [
  { number: '48', label: 'Artisans Employed', icon: 'group' },
  { number: '3x', label: 'Above Fair Trade Minimum', icon: 'volunteer_activism' },
  { number: '100%', label: 'Families with Healthcare', icon: 'health_and_safety' },
  { number: '6', label: 'Villages Represented', icon: 'location_on' },
]

export default function ArtisansPage() {
  return (
    <Layout
      title="Our Artisans"
      description="Meet the master weavers, dyers, and craftspeople behind every Mriie piece. Rooted in Bali, paid fairly, celebrated globally."
    >
      {/* Hero */}
      <section className="relative min-h-[780px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_15.jpg"
            alt="Artisan hands weaving in a sun-lit Balinese workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#302e2b]/80 via-[#302e2b]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 w-full">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#a6eff3] mb-6">The Hands Behind Mriie</span>
          <h1 className="font-headline text-6xl md:text-8xl italic font-light leading-tight text-[#fbf5f0] mb-6 max-w-3xl">
            Craft Is Not a <span className="text-[#ff7290]">Product.</span><br />It Is a People.
          </h1>
          <p className="text-[#fbf5f0]/80 text-xl max-w-xl leading-relaxed">
            Every Mriie garment is shaped by the hands of master artisans who have dedicated their lives to Balinese textile tradition. We don&apos;t just employ them — we build the business around them.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0e666a] py-16 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {workshopStats.map((stat) => (
            <div key={stat.label} className="text-center text-[#c8fcff]">
              <span className="material-symbols-outlined text-4xl mb-3 block opacity-70">{stat.icon}</span>
              <div className="font-headline text-5xl italic mb-2">{stat.number}</div>
              <div className="text-xs tracking-widest uppercase font-bold opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisan profiles */}
      <section className="py-32 px-8 bg-[#fbf5f0]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl md:text-6xl italic text-[#302e2b] mb-6">Meet the Makers</h2>
            <p className="text-[#5e5b57] max-w-2xl mx-auto text-lg leading-relaxed">
              These are not factory workers. They are cultural custodians, each bringing decades of inherited knowledge to a craft that shapes how the world moves.
            </p>
          </div>
          <div className="space-y-24">
            {artisans.map((artisan, i) => (
              <div key={artisan.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-2xl">
                    <Image src={artisan.image} alt={artisan.name} fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#ff7290] text-[#4d001a] p-6 rounded-lg shadow-xl hidden md:block">
                    <div className="font-headline text-3xl italic">{artisan.years}</div>
                    <div className="text-[10px] tracking-widest uppercase font-bold">Years of Mastery</div>
                  </div>
                </div>
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#a6eff3] text-[#005b5f] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                      {artisan.village}
                    </span>
                    <h3 className="font-headline text-4xl italic text-[#302e2b] mb-2">{artisan.name}</h3>
                    <p className="text-xs tracking-widest uppercase font-bold text-[#874e00]">{artisan.title}</p>
                  </div>
                  <p className="text-[#5e5b57] leading-relaxed text-lg">{artisan.bio}</p>
                  <div className="flex items-start gap-3 p-6 bg-[#f6f0ea] rounded-lg">
                    <span className="material-symbols-outlined text-[#0e666a]">star</span>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#302e2b] mb-1">Specialisation</h4>
                      <p className="text-sm text-[#5e5b57] capitalize">{artisan.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop model */}
      <section className="bg-[#302e2b] text-[#fbf5f0] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-5xl md:text-6xl italic leading-tight">
              The Ubud Workshop Model
            </h2>
            <p className="text-[#fbf5f0]/70 text-lg leading-relaxed">
              Our production is intentionally small-batch and local. Every garment is made within a 30km radius of Ubud, in a cooperative workshop co-owned by the artisans themselves. There are no sweatshops, no sub-contracting, no opaque supply chains.
            </p>
            <ul className="space-y-6">
              {[
                ['Profit-Sharing', 'All artisans receive a quarterly profit dividend based on production contribution.'],
                ['Skills Investment', 'Mriie funds annual craft training programs, including overseas study exchanges.'],
                ['Family Benefits', 'Full private health insurance for every artisan and their immediate family.'],
                ['Ownership Path', 'Senior artisans have the option to purchase co-op shares after 5 years.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#a6eff3] mt-0.5">check_circle</span>
                  <div>
                    <span className="block font-bold tracking-widest uppercase text-xs mb-1 text-[#a6eff3]">{title}</span>
                    <span className="text-sm text-[#fbf5f0]/60">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/images/img_20.jpg" alt="Artisans collaborating in the Ubud workshop" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fbf5f0] py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-headline text-5xl italic text-[#302e2b]">Wear the Story</h2>
          <p className="text-[#5e5b57] text-lg leading-relaxed">
            When you wear Mriie, you carry the legacy of these makers. Explore the collection they built.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="px-10 py-5 bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all">
              Shop the Collection
            </Link>
            <Link href="/sustainability" className="px-10 py-5 border-2 border-[#0e666a] text-[#0e666a] rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#0e666a]/5 transition-all">
              Our Sustainability Story
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
