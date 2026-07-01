import { ArrowRight, FileText, Database, CheckCircle, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

// Simple TikTok SVG icon since lucide doesn't have it natively
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-8">
            <CheckCircle className="w-4 h-4" />
            <span>Automated Study Generation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8 max-w-4xl leading-tight">
            Transform past papers into <br className="hidden md:block"/>
            <span className="text-orange-500">
              perfect study notes.
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting hours summarizing. Our engine extracts text from past exam papers and memos, cross-references them, and generates beautiful markdown study guides instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              Start Studying Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-black bg-white border-2 border-black rounded-full hover:bg-black/5 transition-colors">
              See how it works
            </Link>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-24 bg-white relative z-10 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Everything you need to ace your exams</h2>
              <p className="mt-4 text-lg text-black/70">Powered by advanced text extraction and processing.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group p-8 bg-white rounded-2xl border-2 border-black/10 hover:border-orange-500 transition-colors">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Extensive Database</h3>
                <p className="text-black/70 leading-relaxed">
                  Access a massive, organized library of provincial past papers and memos categorized by grade and subject.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 bg-white rounded-2xl border-2 border-black/10 hover:border-orange-500 transition-colors">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Smart Synthesis</h3>
                <p className="text-black/70 leading-relaxed">
                  Our engine cross-references the blank exam with the official memo to create coherent, structured notes that explain the logic.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 bg-white rounded-2xl border-2 border-black/10 hover:border-orange-500 transition-colors">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Beautiful Formatting</h3>
                <p className="text-black/70 leading-relaxed">
                  Notes are rendered in clean, readable formats with proper structures, tables, and highlighted key concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer matching screenshot */}
      <footer className="bg-[#F8FAFC] pt-16 pb-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Logo and Description */}
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

            {/* PRODUCT */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">PRODUCT</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Features</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">RESOURCES</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-black tracking-wider uppercase mb-6">LEGAL</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Shipping & Delivery</Link></li>
                <li><Link href="#" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Refund Policy</Link></li>
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
    </div>
  )
}
