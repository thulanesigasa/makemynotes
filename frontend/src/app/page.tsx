import { ArrowRight, BookOpen, BrainCircuit, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      {/* Navbar */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">makemynotes</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Study Generation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Transform past papers into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              perfect study notes.
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting hours summarizing. Our AI extracts text from past exam papers and memos, cross-references them, and generates beautiful markdown study guides instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] hover:-translate-y-1">
              Start Studying Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
              See how it works
            </Link>
          </div>
        </div>
      </main>

      {/* Feature Section */}
      <section id="features" className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to ace your exams</h2>
            <p className="mt-4 text-lg text-slate-600">Powered by advanced OCR and Google Gemini.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                <BookOpen className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Extensive Database</h3>
              <p className="text-slate-600 leading-relaxed">
                Access a massive, organized library of provincial past papers and memos categorized by grade and subject.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-300">
                <BrainCircuit className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Synthesis</h3>
              <p className="text-slate-600 leading-relaxed">
                Our engine cross-references the blank exam with the official memo to create coherent, structured notes that explain the 'why'.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Beautiful Markdown</h3>
              <p className="text-slate-600 leading-relaxed">
                Notes are rendered in clean, readable markdown with proper math formatting, tables, and highlighted key concepts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
