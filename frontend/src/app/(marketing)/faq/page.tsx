"use client"

import { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "How accurate is the text extraction?",
        a: "Our OCR pipeline is highly optimized for complex exam layouts, including mathematical formulas, physics diagrams, and multi-column formats. We consistently achieve over 99% accuracy on standard font layouts."
      },
      {
        q: "Which subjects and grades are supported?",
        a: "We currently support Grades 10, 11, and 12 across all major South African CAPS subjects, including Mathematics, Physical Sciences, Life Sciences, History, and Languages."
      },
      {
        q: "Can I upload my own school's past papers?",
        a: "Yes! While we have a massive database of provincial and national past papers, you can upload any PDF exam paper and its corresponding memorandum, and our engine will synthesize them."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Can I edit the generated notes?",
        a: "Absolutely. All generated study guides are opened in our interactive, rich-text markdown editor. You can add your own notes, highlight text, and format it exactly how you like before exporting."
      },
      {
        q: "What export formats are available?",
        a: "You can export your compiled notes as beautiful, clean PDFs or as editable Markdown (.md) files if you prefer to use tools like Notion, Obsidian, or Roam Research."
      }
    ]
  }
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("General-0")

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden flex flex-col items-center text-center px-4 bg-white border-b border-black/5">
        <h1 className="text-5xl font-extrabold tracking-tight text-black mb-6 relative z-10">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed relative z-10">
          Everything you need to know about makemynotes, how it works, and how it can help you secure better grades.
        </p>
      </section>

      {/* Accordion Container */}
      <section className="max-w-3xl mx-auto px-6 mt-16">
        {faqs.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
              {group.category}
            </h3>
            
            <div className="space-y-4">
              {group.questions.map((faq, i) => {
                const id = `${group.category}-${i}`
                const isOpen = openIndex === id

                return (
                  <div 
                    key={i} 
                    className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-orange-500 shadow-md' : 'border-black/10 hover:border-black/20'}`}
                  >
                    <button 
                      onClick={() => toggleOpen(id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:bg-orange-50"
                    >
                      <span className={`font-semibold pr-8 ${isOpen ? 'text-orange-600' : 'text-black'}`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 text-black/70 leading-relaxed border-t border-black/5 mx-6">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Still have questions CTA */}
        <div className="mt-20 relative group max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-white border border-black/10 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center shadow-xl">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">Still have questions?</h3>
            <p className="text-lg text-black/60 mb-8 max-w-lg">Can't find the answer you're looking for? Our friendly team is always here to help.</p>
            <Link href="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-orange-500/30 flex items-center gap-2 group/btn">
              Get in touch
              <MessageCircle className="w-4 h-4 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
