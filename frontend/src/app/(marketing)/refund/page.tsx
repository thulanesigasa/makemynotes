import { Undo2, HelpCircle, CreditCard, AlertCircle } from 'lucide-react'

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center text-center px-4 bg-black text-white rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 relative z-10">
          Refund Policy
        </h1>
        <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-orange-400">
          <span className="text-xs font-bold uppercase tracking-widest">Last updated: January 15, 2026</span>
        </div>
      </section>

      {/* 1. Our Guarantee */}
      <section className="py-24 bg-white relative -mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl shadow-orange-500/20 mb-8 transform -rotate-6">
            <Undo2 className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">7-Day Money-Back Guarantee</h2>
          <div className="prose prose-lg prose-orange max-w-2xl mx-auto text-black/70">
            <p className="text-xl leading-relaxed">
              We stand behind the quality of our OCR extraction and note synthesis. If you upgrade to a Pro plan and find that makemynotes does not meet your expectations, you are eligible for a full refund within the first 7 days of your initial purchase.
            </p>
          </div>
          <div className="inline-flex flex-col items-center mt-12 bg-orange-50/80 border border-orange-200 rounded-[2rem] p-8 max-w-xl mx-auto shadow-sm">
            <strong className="text-orange-900 font-bold uppercase tracking-widest text-sm mb-2">Key Takeaway</strong>
            <p className="text-orange-900 text-lg font-medium m-0">
              You have a full week to test the Pro features risk-free. If it doesn't work for you, you get your money back.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Exceptions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <AlertCircle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">2. Exceptions to Refunds</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70 mb-12">
            <p className="text-xl leading-relaxed">
              While we aim to be as fair as possible, the 7-day refund guarantee does not apply in the following situations:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h4 className="text-xl font-bold text-red-800 mb-3">Abusive Usage</h4>
              <p className="text-red-700/80">If you have generated an excessive number of notes (e.g., over 50 generations) within the 7 days.</p>
            </div>
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h4 className="text-xl font-bold text-red-800 mb-3">Renewals</h4>
              <p className="text-red-700/80">Refunds apply only to the initial purchase, not to subsequent monthly or annual renewals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Request */}
      <section className="py-24 bg-[#FAFAFA] border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <HelpCircle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">3. How to Request a Refund</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70 mb-12">
            <p className="text-xl leading-relaxed">
              Requesting a refund is simple and hassle-free:
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Email Support</h4>
                <p className="text-black/70">Send an email to <a href="mailto:billing@makemynotes.com" className="text-orange-600 hover:text-orange-500">billing@makemynotes.com</a> from your account email.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Provide Details</h4>
                <p className="text-black/70">Include your receipt number or the date of purchase.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Wait for Processing</h4>
                <p className="text-black/70">Our team will process your request within 24-48 hours. No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Processing Time */}
      <section className="py-24 bg-black text-white rounded-t-[3rem] mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <CreditCard className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">4. Refund Processing Time</h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-white/70">
            <p className="text-xl leading-relaxed">
              Once we initiate a refund, it will be returned to your original payment method. Depending on your bank or credit card provider, it may take an additional 3-5 business days for the funds to appear on your statement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
