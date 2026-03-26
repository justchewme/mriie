import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-serif text-8xl font-light text-mriie-sand mb-6">404</p>
          <h1 className="font-serif text-display-sm font-light text-mriie-black mb-6">
            This page seems to have wandered off
          </h1>
          <p className="font-sans text-sm text-mriie-muted mb-10 leading-relaxed">
            Like a garment that has lived a long life, some things can't be found where we left them. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/products" className="btn-secondary">
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
