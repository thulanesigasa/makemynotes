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

          {/* Bento Box Showcase */}
          <div className="mt-20 w-full max-w-5xl mx-auto flex flex-col gap-4">
            {/* Top Wide Box */}
            <div className="group relative bg-white border border-black/10 rounded-2xl p-10 md:p-12 text-left overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-auto flex flex-col justify-center">
              <div className="absolute -right-4 -top-8 text-[14rem] font-black text-black/[0.02] select-none pointer-events-none leading-none">
                01
              </div>
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-4">01 / TEXT EXTRACTION</p>
                <h3 className="text-2xl font-bold text-black">Advanced OCR Pipeline</h3>
              </div>
              <div className="relative z-10 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-black/60 max-w-2xl leading-relaxed pt-4">
                    Flawless text extraction from complex exam papers and memos. Our engine interprets diagrams, mathematical formulas, and unstructured text with perfect accuracy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Two Boxes */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="group bg-white border border-black/10 rounded-2xl p-10 md:p-12 text-left shadow-sm hover:shadow-md transition-all duration-300 h-auto flex flex-col justify-center">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <p className="text-xs font-bold tracking-widest text-black/30 uppercase mb-4">02 / SYNTHESIS</p>
                  <h3 className="text-xl font-bold text-black">Intelligent Cross-Referencing</h3>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-black/60 text-sm leading-relaxed pt-4">
                      Automatically matches questions with their corresponding memo answers to create coherent study logic and structured summaries.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white border border-black/10 rounded-2xl p-10 md:p-12 text-left shadow-sm hover:shadow-md transition-all duration-300 h-auto flex flex-col justify-center">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <p className="text-xs font-bold tracking-widest text-black/30 uppercase mb-4">03 / EXPORT</p>
                  <h3 className="text-xl font-bold text-black">Print-Ready Formats</h3>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-black/60 text-sm leading-relaxed pt-4">
                      Download your compiled notes as beautiful, clean PDFs or editable Markdown files instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}
