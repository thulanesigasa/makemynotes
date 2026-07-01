import { Database, CheckCircle, FileText, ScanText, BrainCircuit, Printer } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8 max-w-4xl leading-tight relative z-10">
          How <span className="text-orange-500">makemynotes</span> works
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
          A deep dive into the technology that turns complex past papers into readable, perfectly structured study guides.
        </p>
      </section>

      {/* Feature 1: OCR */}
      <section className="py-24 border-t border-black/5 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 mb-6">
                <ScanText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">Advanced OCR Pipeline</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                Our proprietary extraction engine doesn't just read text—it understands context. It flawlessly interprets complex mathematical formulas, physics diagrams, and unstructured paragraphs from poorly scanned PDFs.
              </p>
              <ul className="space-y-4">
                {['99.9% text accuracy on standard fonts', 'Interprets LaTeX and MathML', 'Maintains layout hierarchy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Graphic */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-black/10 rounded-3xl p-8 shadow-xl overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                  <div className="h-24 bg-orange-50 rounded-xl border border-orange-100 mt-4 flex items-center justify-center">
                    <span className="font-mono text-orange-600 text-sm">f(x) = ax² + bx + c</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-gradient-to-b from-transparent via-white to-white transform translate-y-[60%] group-hover:translate-y-[80%] transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Synthesis */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual Graphic */}
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-black/10 rounded-3xl p-8 shadow-xl h-80 flex flex-col justify-between">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="flex justify-center my-2">
                  <BrainCircuit className="w-8 h-8 text-black/20" />
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 transform group-hover:translate-y-2 transition-transform duration-300">
                  <div className="w-8 h-8 rounded bg-orange-200 flex-shrink-0 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-orange-600"/></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-orange-200 rounded w-5/6"></div>
                    <div className="h-3 bg-orange-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">Intelligent Cross-Referencing</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                We don't just dump the text. Our AI logically links the Question Paper's context directly to the Official Memorandum's answers, generating a unified, step-by-step study note.
              </p>
              <ul className="space-y-4">
                {['Automatic QA matching', 'Filters out administrative boilerplate', 'Generates coherent logical flows'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Export */}
      <section className="py-24 border-t border-black/5 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-6">
                <Printer className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">Print-Ready Formats</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                Once synthesized, your study guides are instantly available as beautiful, clean PDFs or editable Markdown files. Perfect for printing or importing into Obsidian, Notion, or Roam.
              </p>
              <ul className="space-y-4">
                {['Vector PDFs with selectable text', 'Clean Markdown exports', 'Mobile-friendly dashboard viewer'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Graphic */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-black/10 rounded-3xl p-8 shadow-xl flex items-center justify-center h-80">
                <div className="flex gap-4">
                  <div className="w-24 h-32 bg-orange-50 rounded-lg border border-orange-100 flex flex-col items-center justify-center transform group-hover:-rotate-6 transition-transform duration-300 shadow-sm">
                    <span className="font-bold text-orange-500">PDF</span>
                  </div>
                  <div className="w-24 h-32 bg-orange-50 rounded-lg border border-orange-100 flex flex-col items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                    <span className="font-bold text-orange-500">MD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to see it in action?</h2>
        <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
          Try it for free
        </Link>
      </section>
    </div>
  )
}
