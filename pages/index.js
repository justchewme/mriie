import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'

export default function HomePage({ featuredProducts }) {
  return (
    <Layout
      title="Timeless Essentials"
      description="Mriie creates thoughtfully designed clothing and accessories for those who value quality over quantity."
    >
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
            alt="Mriie hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mriie-black/60 via-mriie-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-site mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-widest-sm uppercase text-mriie-white/70 mb-6 animate-fade-in-up">
              New Collection — Spring 2026
            </p>
            <h1 className="font-serif text-display-xl text-mriie-white font-light leading-none mb-8 animate-fade-in-up animation-delay-100">
              Wear what<br />
              <em>lasts</em>
            </h1>
            <p className="font-sans text-body-lg text-mriie-white/80 mb-10 max-w-md animate-fade-in-up animation-delay-200">
              Clothing crafted with intention — from the materials we choose to the hands that make them.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/products" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/our-story" className="inline-flex items-center justify-center px-8 py-3.5 border border-mriie-white text-mriie-white font-sans text-sm tracking-widest-sm uppercase transition-all duration-300 hover:bg-mriie-white hover:text-mriie-black">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-3 animate-fade-in animation-delay-400">
          <span className="font-sans text-xs tracking-widest-sm uppercase text-mriie-white/50 rotate-90 origin-center translate-x-6">
            Scroll
          </span>
          <div className="w-px h-12 bg-mriie-white/30" />
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-mriie-cream border-y border-mriie-sand py-8 overflow-hidden">
        <div className="flex items-center gap-16 animate-scroll">
          {[
            'Ethically Sourced Materials',
            'Made in Europe',
            'Built to Last a Lifetime',
            'Carbon Neutral Shipping',
            'Free Returns for 60 Days',
            'Ethically Sourced Materials',
            'Made in Europe',
            'Built to Last a Lifetime',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="font-sans text-xs tracking-widest-sm uppercase text-mriie-warm whitespace-nowrap">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-mriie-stone shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="section-label mb-3">Featured</p>
            <h2 className="font-serif text-display-md font-light text-mriie-black">
              The Edit
            </h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex btn-ghost text-mriie-black">
            View All
            <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Story interlude */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=85"
            alt="Mriie atelier"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-mriie-earth flex items-center justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-sm">
            <p className="section-label text-mriie-sand/60 mb-6">Our Philosophy</p>
            <h2 className="font-serif text-display-md font-light text-mriie-white leading-tight mb-8">
              Quality is the only luxury that matters
            </h2>
            <p className="font-sans text-sm text-mriie-sand/70 leading-relaxed mb-10">
              We believe in clothing that tells a story. Every Mriie piece is designed to improve with age — to carry the weight of experiences and become more uniquely yours over time.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center font-sans text-sm tracking-widest-sm uppercase text-mriie-accent gap-3 hover:gap-5 transition-all duration-300"
            >
              Read Our Story
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-3">Shop by Category</p>
          <h2 className="font-serif text-display-md font-light">
            Browse the Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              name: 'Outerwear',
              image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
              count: '12 pieces',
            },
            {
              name: 'Knitwear',
              image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
              count: '8 pieces',
            },
            {
              name: 'Dresses',
              image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
              count: '10 pieces',
            },
            {
              name: 'Bottoms',
              image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
              count: '9 pieces',
            },
            {
              name: 'Tops',
              image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
              count: '14 pieces',
            },
            {
              name: 'Accessories',
              image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
              count: '6 pieces',
            },
          ].map((cat) => (
            <Link
              key={cat.name}
              href="/products"
              className="group relative aspect-square overflow-hidden bg-mriie-cream"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-mriie-black/30 group-hover:bg-mriie-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-mriie-white">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-mriie-white/70 tracking-widest-sm uppercase mt-1">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-mriie-cream border-t border-mriie-sand">
        <div className="max-w-narrow mx-auto px-6 py-20 lg:py-28 text-center">
          <p className="section-label mb-4">Stay Connected</p>
          <h2 className="font-serif text-display-sm font-light text-mriie-black mb-6">
            The Mriie Journal
          </h2>
          <p className="font-sans text-sm text-mriie-muted mb-10 max-w-sm mx-auto leading-relaxed">
            Stories of craft, sustainability, and timeless style. New pieces and insights, delivered thoughtfully.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border-b border-mriie-stone bg-transparent py-3 px-0 font-sans text-sm text-mriie-black placeholder-mriie-muted focus:outline-none focus:border-mriie-black transition-colors duration-200"
              required
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
          <p className="font-sans text-xs text-mriie-muted mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </Layout>
  )
}

function ArrowRight({ className = '' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export async function getStaticProps() {
  const featuredProducts = getFeaturedProducts()
  return {
    props: { featuredProducts },
  }
}
