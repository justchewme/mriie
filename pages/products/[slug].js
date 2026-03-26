import { useState } from 'react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { products, getProductBySlug, getRelatedProducts } from '@/lib/products'

export default function ProductDetail({ product, related }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [careOpen, setCareOpen] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) return null

  const handleAddToCart = () => {
    if (!selectedSize) return
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  return (
    <Layout
      title={product.name}
      description={product.description}
    >
      {/* Breadcrumb */}
      <div className="pt-24 lg:pt-28 max-w-site mx-auto px-6 lg:px-12">
        <nav className="flex items-center gap-3 font-sans text-xs text-mriie-muted tracking-widest-sm uppercase">
          <Link href="/" className="hover:text-mriie-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-mriie-black transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-mriie-black">{product.name}</span>
        </nav>
      </div>

      {/* Product content */}
      <section className="max-w-site mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-mriie-cream relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.tags && product.tags.map(tag => (
                <span
                  key={tag}
                  className="absolute top-4 left-4 font-sans text-xs tracking-widest-sm uppercase bg-mriie-white px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-[3/4] overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === i ? 'border-mriie-black' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-32 self-start space-y-8">
            {/* Header */}
            <div>
              <p className="section-label mb-2">{product.category}</p>
              <h1 className="font-serif text-display-sm font-light text-mriie-black mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <p className="font-sans text-xl text-mriie-black">
                  ${product.price.toLocaleString()}
                </p>
                {product.originalPrice && (
                  <p className="font-sans text-sm text-mriie-muted line-through">
                    ${product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <div className="divider" />

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="font-sans text-xs tracking-widest-sm uppercase text-mriie-muted mb-4">
                  Color: {selectedColor || <span className="text-mriie-stone">Select a colour</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`font-sans text-sm px-4 py-2 border transition-colors duration-200 ${
                        selectedColor === color
                          ? 'bg-mriie-black text-mriie-white border-mriie-black'
                          : 'text-mriie-black border-mriie-sand hover:border-mriie-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-sans text-xs tracking-widest-sm uppercase text-mriie-muted">
                    Size: {selectedSize || <span className="text-mriie-stone">Select a size</span>}
                  </p>
                  <button className="font-sans text-xs tracking-widest-sm uppercase text-mriie-warm underline-grow">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`font-sans text-sm min-w-[3rem] px-3 py-2.5 border transition-colors duration-200 ${
                        selectedSize === size
                          ? 'bg-mriie-black text-mriie-white border-mriie-black'
                          : 'text-mriie-black border-mriie-sand hover:border-mriie-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize && product.sizes.length > 1}
                className={`w-full py-4 font-sans text-sm tracking-widest-sm uppercase transition-all duration-300 ${
                  addedToCart
                    ? 'bg-mriie-warm text-mriie-white'
                    : !selectedSize && product.sizes.length > 1
                    ? 'bg-mriie-sand text-mriie-muted cursor-not-allowed'
                    : 'bg-mriie-black text-mriie-white hover:bg-mriie-earth'
                }`}
              >
                {addedToCart ? '✓ Added to Bag' : !selectedSize && product.sizes.length > 1 ? 'Select a Size' : 'Add to Bag'}
              </button>
              <button className="w-full py-4 border border-mriie-black font-sans text-sm tracking-widest-sm uppercase transition-all duration-300 hover:bg-mriie-cream">
                Save to Wishlist
              </button>
            </div>

            {/* Description */}
            <div>
              <p className="font-sans text-sm text-mriie-muted leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="divider" />

            {/* Accordions */}
            <div className="space-y-0 border-t border-mriie-sand">
              {/* Details */}
              <div className="border-b border-mriie-sand">
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <p className="font-sans text-xs tracking-widest-sm uppercase text-mriie-black">
                    Product Details
                  </p>
                  <ChevronIcon open={detailsOpen} />
                </button>
                {detailsOpen && (
                  <ul className="pb-6 space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-mriie-stone shrink-0" />
                        <p className="font-sans text-sm text-mriie-muted leading-relaxed">{detail}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Care */}
              <div className="border-b border-mriie-sand">
                <button
                  onClick={() => setCareOpen(!careOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <p className="font-sans text-xs tracking-widest-sm uppercase text-mriie-black">
                    Care Instructions
                  </p>
                  <ChevronIcon open={careOpen} />
                </button>
                {careOpen && (
                  <div className="pb-6">
                    <p className="font-sans text-sm text-mriie-muted leading-relaxed">{product.care}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Shipping note */}
            <div className="bg-mriie-cream p-4 space-y-2">
              {[
                { icon: '→', text: 'Free shipping on orders over $200' },
                { icon: '↩', text: 'Free returns within 60 days' },
                { icon: '✦', text: 'Lifetime repair commitment' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-mriie-warm font-sans text-sm">{item.icon}</span>
                  <p className="font-sans text-xs text-mriie-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-site mx-auto px-6 lg:px-12 py-20 lg:py-28 border-t border-mriie-sand">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">You May Also Like</p>
              <h2 className="font-serif text-display-sm font-light text-mriie-black">
                Complete the Look
              </h2>
            </div>
            <Link href="/products" className="hidden sm:btn-ghost sm:inline-flex text-mriie-black">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export async function getStaticPaths() {
  const paths = products.map(p => ({
    params: { slug: p.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug)
  if (!product) return { notFound: true }
  const related = getRelatedProducts(product, 3)
  return { props: { product, related } }
}
