import { useState, useMemo } from 'react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/products'

export default function ProductCatalog({ allProducts }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = activeCategory === 'All'
      ? allProducts
      : allProducts.filter(p => p.category === activeCategory)

    switch (sortBy) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'newest':
        return [...list].filter(p => p.isNew).concat(list.filter(p => !p.isNew))
      default:
        return list
    }
  }, [allProducts, activeCategory, sortBy])

  return (
    <Layout
      title="Collection"
      description="Shop the full Mriie collection — ethically made, built to last."
    >
      {/* Page header */}
      <section className="pt-28 lg:pt-36 pb-12 px-6 lg:px-12 max-w-site mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-3">Shop</p>
            <h1 className="font-serif text-display-md font-light text-mriie-black">
              The Collection
            </h1>
          </div>
          <p className="font-sans text-sm text-mriie-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-20 z-40 bg-mriie-white/95 backdrop-blur-sm border-y border-mriie-sand">
        <div className="max-w-site mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4 gap-6">
            {/* Category tabs - desktop */}
            <nav className="hidden lg:flex items-center gap-8 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs tracking-widest-sm uppercase whitespace-nowrap transition-colors duration-200 pb-1 ${
                    activeCategory === cat
                      ? 'text-mriie-black border-b border-mriie-black'
                      : 'text-mriie-muted hover:text-mriie-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            {/* Mobile filter toggle */}
            <button
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest-sm uppercase text-mriie-black"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FilterIcon />
              Filter ({activeCategory !== 'All' ? activeCategory : 'All'})
            </button>

            {/* Sort */}
            <div className="flex items-center gap-3 ml-auto">
              <label className="font-sans text-xs tracking-widest-sm uppercase text-mriie-muted hidden sm:block">
                Sort
              </label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="font-sans text-xs text-mriie-black bg-transparent border border-mriie-sand px-3 py-2 focus:outline-none focus:border-mriie-black cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Mobile category filter */}
          {filterOpen && (
            <div className="lg:hidden pb-4 flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setFilterOpen(false)
                  }}
                  className={`font-sans text-xs tracking-widest-sm uppercase px-4 py-2 border transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'bg-mriie-black text-mriie-white border-mriie-black'
                      : 'text-mriie-muted border-mriie-sand hover:border-mriie-black hover:text-mriie-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-2xl font-light text-mriie-stone mb-4">
              No pieces found
            </p>
            <p className="font-sans text-sm text-mriie-muted mb-8">
              Try adjusting your filters
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-mriie-cream border-t border-mriie-sand py-16 lg:py-20">
        <div className="max-w-narrow mx-auto px-6 text-center">
          <p className="section-label mb-4">Not sure where to start?</p>
          <h2 className="font-serif text-display-sm font-light text-mriie-black mb-6">
            Build your essential wardrobe
          </h2>
          <p className="font-sans text-sm text-mriie-muted mb-8 max-w-xs mx-auto leading-relaxed">
            We recommend starting with 5–7 versatile pieces that work together effortlessly.
          </p>
          <a href="mailto:hello@mriie.com" className="btn-ghost text-mriie-black">
            Get a personal recommendation →
          </a>
        </div>
      </section>
    </Layout>
  )
}

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="6" x2="16" y2="6" />
      <line x1="8" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="16" y2="18" />
      <circle cx="18" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="6" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export async function getStaticProps() {
  return {
    props: { allProducts: products },
  }
}
