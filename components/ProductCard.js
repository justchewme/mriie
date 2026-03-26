import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)

  const hasSecondImage = product.images && product.images.length > 1
  const displayImage = hovered && hasSecondImage ? product.images[1] : product.images[0]

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-mriie-cream">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index < 4 ? 'eager' : 'lazy'}
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tags && product.tags.map(tag => (
            <span
              key={tag}
              className="inline-block font-sans text-xs tracking-widest-sm uppercase bg-mriie-white px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              // Quick add to cart
            }}
            className="w-full bg-mriie-black text-mriie-white font-sans text-xs tracking-widest-sm uppercase py-3.5 hover:bg-mriie-earth transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1">
        <p className="section-label">{product.category}</p>
        <h3 className="font-serif text-lg font-light text-mriie-black group-hover:text-mriie-warm transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <p className="font-sans text-sm text-mriie-black">
            ${product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="font-sans text-sm text-mriie-muted line-through">
              ${product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
        {product.colors && (
          <p className="font-sans text-xs text-mriie-muted">
            {product.colors.join(' · ')}
          </p>
        )}
      </div>
    </Link>
  )
}
