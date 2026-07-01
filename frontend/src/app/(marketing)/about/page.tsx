import { Code, BookOpen, GraduationCap, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden flex flex-col items-center text-center px-4 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight relative z-10">
          Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">modern student</span>.
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed relative z-10">
          We believe technology should eliminate the busywork of studying, so you can focus on actual learning and comprehension.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-orange max-w-none">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
              <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
              Our Story
            </h2>
            <p className="text-black/70 leading-relaxed mb-6">
              makemynotes started with a simple frustration. During our final year exams, we spent more time copying text from question papers, finding the corresponding memo, and pasting it into a Word document than we actually spent studying the material.
            </p>
            <p className="text-black/70 leading-relaxed mb-6">
              When reviewing past papers, you are constantly flipping back and forth between a 30-page Question PDF and a 15-page Memo PDF. It breaks your concentration, wastes time, and is highly inefficient.
            </p>
            <p className="text-black/70 leading-relaxed">
              We built an internal script to automate this for ourselves. Our friends asked to use it. Then their friends asked. Today, makemynotes processes thousands of past papers a week, helping students across South Africa secure better grades by giving them their time back.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#FAFAFA] border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-black/60 max-w-2xl mx-auto">The principles that guide how we build our product.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Target className="w-8 h-8 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Extreme Accuracy</h3>
              <p className="text-black/60 leading-relaxed">
                If our OCR gets a formula wrong, you learn the formula wrong. We treat text extraction accuracy as a zero-compromise metric.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-black/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Focus on Pedagogy</h3>
              <p className="text-black/60 leading-relaxed">
                We don't just dump answers. We structure the synthesized notes in a way that promotes logical understanding and long-term retention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Code className="w-8 h-8 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Beautiful Software</h3>
              <p className="text-black/60 leading-relaxed">
                Educational software shouldn't look like it was built in 2005. We believe in crafting delightful, premium interfaces that you actually enjoy using.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-500 text-center px-4">
        <GraduationCap className="w-16 h-16 text-white/50 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-8">Join thousands of top-performing students.</h2>
        <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-orange-600 bg-white rounded-full hover:bg-orange-50 transition-colors shadow-xl">
          Create your free account
        </Link>
      </section>
    </div>
  )
}
