import Layout from '@/components/Layout'
import Link from 'next/link'

export default function CartPage() {
  return (
    <Layout title="Cart" description="Your Mriie shopping ritual.">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-24 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center space-y-8 max-w-md">
          <span className="material-symbols-outlined text-[#b1aca8] text-8xl">shopping_bag</span>
          <h1 className="font-headline text-5xl italic text-[#302e2b]">Your Ritual is Empty</h1>
          <p className="text-[#5e5b57] leading-relaxed">
            Discover our handcrafted sustainable sportswear, made with love in Bali.
          </p>
          <Link
            href="/products"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#b70049] to-[#ff7290] text-[#ffeff0] rounded-full font-sans text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#b70049]/20 active:scale-95 transition-all"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </Layout>
  )
}
