"use client"

import { CheckCircle, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-16 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 max-w-4xl leading-tight relative z-10">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
          Choose the perfect plan for your study needs. No hidden fees, ever.
        </p>

        {/* Toggle */}
        <div className="relative z-10 flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-black' : 'text-black/40'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-gray-200 rounded-full relative p-1 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8 bg-orange-500' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-semibold transition-colors ${isAnnual ? 'text-black' : 'text-black/40'}`}>
            Annually <span className="text-orange-500 ml-1">(Save 20%)</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-2">Starter</h3>
              <p className="text-black/60 mb-6 text-sm h-10">Perfect for trying out the platform.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-black">R0</span>
                <span className="text-black/60 font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> 3 past paper generations</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Basic markdown export</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Community support</li>
              </ul>
              <Link href="/signup" className="w-full py-3 rounded-full border-2 border-black font-semibold text-black hover:bg-black hover:text-white transition-colors text-center block">Get Started</Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 border border-black shadow-2xl flex flex-col relative transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-orange-500 to-transparent rounded-3xl opacity-50 pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-orange-500/30">Most Popular</div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <p className="text-white/60 mb-6 text-sm h-10">For serious students aiming for top grades.</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-white">{isAnnual ? 'R159' : 'R199'}</span>
                  <span className="text-white/60 font-medium">/mo</span>
                  {isAnnual && <div className="text-orange-400 text-xs mt-1 font-semibold">Billed R1,908 yearly</div>}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="w-5 h-5 text-orange-500" /> Unlimited generations</li>
                  <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="w-5 h-5 text-orange-500" /> PDF & Markdown export</li>
                  <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="w-5 h-5 text-orange-500" /> Priority processing speed</li>
                  <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="w-5 h-5 text-orange-500" /> Email support</li>
                </ul>
                <Link href="/signup" className="w-full py-3 rounded-full bg-orange-500 font-semibold text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 text-center block mt-auto">Upgrade to Pro</Link>
              </div>
            </div>

            {/* Team Plan */}
            <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-2">Study Group</h3>
              <p className="text-black/60 mb-6 text-sm h-10">Collaborate with your classmates seamlessly.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-black">{isAnnual ? 'R399' : 'R499'}</span>
                <span className="text-black/60 font-medium">/mo</span>
                {isAnnual && <div className="text-green-600 text-xs mt-1 font-semibold">Billed R4,788 yearly</div>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Up to 5 users included</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Shared notes library</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Collaborative editing</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle className="w-5 h-5 text-black/20" /> Admin dashboard</li>
              </ul>
              <Link href="/signup" className="w-full py-3 rounded-full border-2 border-black font-semibold text-black hover:bg-black hover:text-white transition-colors text-center block">Choose Group</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-black/5 mt-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Billing FAQ</h2>
          </div>
          <div className="space-y-6">
            <div className="group bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:border-orange-500 transition-colors cursor-default">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0"/> Can I cancel my subscription at any time?
              </h4>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-black/70 pt-4">Yes, you can cancel your subscription at any time from your account dashboard. You will retain access to your Pro features until the end of your current billing cycle.</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:border-orange-500 transition-colors cursor-default">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0"/> Do you offer discounts for entire schools?
              </h4>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-black/70 pt-4">Absolutely! We offer significant discounts for school-wide licenses. Please contact our sales team at sales@makemynotes.com for a custom quote.</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:border-orange-500 transition-colors cursor-default">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0"/> What happens if I exceed my generation limit on the Free plan?
              </h4>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-black/70 pt-4">Once you use your 3 free generations, you will need to upgrade to the Pro plan to continue generating new study notes. Your existing notes will remain accessible forever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
