import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white sticky top-0 z-50 border-b border-black/10">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-black flex items-center">
          {/* Logo removed as requested */}
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Dashboard</Link>
          <Link href="/features" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Pricing</Link>
          <Link href="/faq" className="text-sm font-medium text-black/60 hover:text-black transition-colors">FAQ</Link>
          <Link href="/about" className="text-sm font-medium text-black/60 hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Contact</Link>
        </div>
        <div className="w-px h-5 bg-black/10"></div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-black hover:text-black/70 transition-colors">Log in</Link>
          <Link href="/signup" className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-lg transition-colors shadow-sm shadow-orange-500/20">Sign up</Link>
        </div>
      </div>
    </nav>
  )
}
