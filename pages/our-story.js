import Layout from '@/components/Layout'
import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <Layout
      title="Our Story"
      description="Learn about Mriie's philosophy, origins, and commitment to creating clothing that lasts a lifetime."
    >
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1800&q=85"
            alt="Mriie atelier"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mriie-black/80 via-mriie-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-24">
          <p className="section-label text-mriie-white/60 mb-4">Est. 2019</p>
          <h1 className="font-serif text-display-lg text-mriie-white font-light leading-none">
            Our Story
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="section-label mb-6">The Beginning</p>
            <h2 className="font-serif text-display-sm font-light text-mriie-black leading-tight mb-8">
              Born from a belief that fashion had lost its way
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6">
            <p className="font-sans text-body-md text-mriie-muted leading-relaxed">
              Mriie was founded in 2019 by a small group of designers who grew tired of watching beautiful garments fall apart after a few seasons. They had all seen it: a beloved linen shirt reduced to rags, a cashmere sweater pilling beyond recognition, a leather bag that never truly aged into something better.
            </p>
            <p className="font-sans text-body-md text-mriie-muted leading-relaxed">
              The question they kept returning to was simple: why couldn't clothing be made to truly last? Not just through clever marketing or "investment piece" language — but through genuinely superior materials and construction, sourced ethically and made by people who took pride in their craft.
            </p>
            <p className="font-sans text-body-md text-mriie-muted leading-relaxed">
              That question became Mriie. The name itself — pronounced "Marie" — is a nod to the French concept of <em>durabilité</em>: durability in all its senses, physical and emotional alike.
            </p>
          </div>
        </div>
      </section>

      {/* Large image */}
      <section className="max-w-site mx-auto px-6 lg:px-12">
        <div className="aspect-[16/7] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85"
            alt="Mriie manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <p className="section-label mb-12">What We Stand For</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              number: '01',
              title: 'Materials First',
              body: 'Every piece begins with the material. We work directly with heritage mills in Italy, Scotland, Portugal, and Belgium — places where weaving traditions stretch back centuries. We never compromise on fibre quality.',
            },
            {
              number: '02',
              title: 'Made Slowly',
              body: 'Our garments are made in small batches in family-owned workshops. We visit every factory we work with. We know the people who make our clothes by name, and they know us.',
            },
            {
              number: '03',
              title: 'Designed to Last',
              body: 'We design for the long term. Classic silhouettes that will feel relevant in ten years. Construction details that improve with wear. Colours that age beautifully rather than fade.',
            },
            {
              number: '04',
              title: 'Transparent Pricing',
              body: 'We publish a full breakdown of the cost of every garment — materials, labour, transport, our margin. No mystery, no inflation. You pay for quality, not branding.',
            },
            {
              number: '05',
              title: 'Repair, Not Replace',
              body: 'Every Mriie piece comes with a lifetime repair commitment. We will fix a broken seam, replace a button, or re-sole a shoe for the life of the garment. We mean it.',
            },
            {
              number: '06',
              title: 'Carbon Neutral',
              body: 'We offset 100% of the carbon footprint of every shipment and have committed to net-zero operations by 2027. Our packaging is made from recycled and compostable materials only.',
            },
          ].map((value) => (
            <div key={value.number} className="flex flex-col gap-4">
              <p className="font-serif text-5xl font-light text-mriie-sand">{value.number}</p>
              <h3 className="font-serif text-xl font-light text-mriie-black">{value.title}</h3>
              <p className="font-sans text-sm text-mriie-muted leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-mriie-cream flex items-center px-8 lg:px-16 xl:px-24 py-20 lg:py-32 order-2 lg:order-1">
          <div className="max-w-sm">
            <p className="section-label mb-6">The Craft</p>
            <h2 className="font-serif text-display-md font-light text-mriie-black leading-tight mb-8">
              Made by hands that know what they are doing
            </h2>
            <p className="font-sans text-sm text-mriie-muted leading-relaxed mb-6">
              Our partner workshops in Portugal and Italy have been making fine garments for three and four generations. They bring a depth of knowledge that no amount of automation can replicate — the ability to feel whether a seam is right, to judge tension by touch, to spot an imperfection that a machine would pass.
            </p>
            <p className="font-sans text-sm text-mriie-muted leading-relaxed mb-8">
              We pay above the living wage in every country we work in, and we maintain long-term relationships with our makers. Stability, we have found, is the foundation of quality.
            </p>
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto overflow-hidden order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85"
            alt="Artisan craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Team */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-3">The People</p>
          <h2 className="font-serif text-display-sm font-light text-mriie-black">
            Who we are
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Elena Marchetti',
              role: 'Founder & Creative Director',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
            },
            {
              name: 'James Willoughby',
              role: 'Head of Product',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            },
            {
              name: 'Sofia Chen',
              role: 'Head of Sustainability',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            },
            {
              name: 'Luca Ferrante',
              role: 'Production Director',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
            },
          ].map((person) => (
            <div key={person.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-mriie-cream mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg font-light text-mriie-black">{person.name}</h3>
              <p className="font-sans text-xs text-mriie-muted mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="bg-mriie-cream border-t border-mriie-sand py-16 lg:py-20">
        <div className="max-w-site mx-auto px-6 lg:px-12">
          <p className="section-label text-center mb-10">As seen in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {['Vogue', 'Financial Times', 'The Guardian', 'Wallpaper*', 'Monocle'].map((pub) => (
              <p
                key={pub}
                className="font-serif text-xl lg:text-2xl font-light text-mriie-stone italic"
              >
                {pub}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-narrow mx-auto px-6 py-20 lg:py-28 text-center">
        <p className="section-label mb-4">Ready to Start?</p>
        <h2 className="font-serif text-display-md font-light text-mriie-black mb-8">
          Build a wardrobe<br />that lasts
        </h2>
        <p className="font-sans text-sm text-mriie-muted mb-10 leading-relaxed">
          Every piece we make is a step toward a wardrobe you truly love — fewer things, better things, more meaning.
        </p>
        <Link href="/products" className="btn-primary">
          Explore the Collection
        </Link>
      </section>
    </Layout>
  )
}
