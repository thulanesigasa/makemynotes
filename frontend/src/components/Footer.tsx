import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] pt-16 pb-8 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-black mb-4">makemynotes</h3>
            <p className="text-sm text-black/60 mb-6 leading-relaxed max-w-xs">
              Empowering students with automated compilation to bypass tedious summarizing and secure better grades faster.
            </p>
            <div className="flex items-center gap-4 text-black/50">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">PRODUCT</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link href="/" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">RESOURCES</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-sm text-black/60 hover:text-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-sm text-black/60 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">LEGAL</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/refund" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-black/50 uppercase tracking-wide">
            © 2026 T.S INDUSTRIES. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-black/50">
            Designed for the modern student.
          </p>
        </div>
      </div>
    </footer>
  )
}
