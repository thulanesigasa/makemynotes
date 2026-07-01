import { UserCheck, AlertTriangle, XCircle, Settings } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center text-center px-4 bg-gradient-to-b from-white to-[#FAFAFA] border-b border-black/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 relative z-10">
          Terms of Service
        </h1>
        <div className="relative z-10 inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 text-orange-600">
          <span className="text-xs font-bold uppercase tracking-widest">Last updated: January 15, 2026</span>
        </div>
      </section>

      {/* 1. Acceptance of Terms */}
      <section className="py-24 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <UserCheck className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">1. Acceptance of Terms</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70">
            <p className="text-xl leading-relaxed">
              By accessing or using makemynotes, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services. We reserve the right to update these terms at any time.
            </p>
          </div>
        </div>
      </section>

      {/* 2. User Accounts */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Settings className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">2. User Accounts</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70">
            <p className="text-xl leading-relaxed mb-8">
              To use certain features of the service, you must register for an account. You agree to:
            </p>
            <ul className="space-y-4 text-lg">
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
              <li>Promptly notify us if you discover or suspect any security breaches related to your account.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Acceptable Use Policy */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">3. Acceptable Use Policy</h2>
          </div>
          <div className="relative bg-[#FAFAFA] p-10 md:p-16 rounded-[2.5rem] border border-black/5 mt-12">
            <div className="absolute -top-6 -left-6 text-orange-200 opacity-50">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-black/80 leading-relaxed relative z-10">
              You are solely responsible for the content you upload to our platform. You agree <span className="text-orange-600 font-bold">not to upload</span>, transmit, or distribute any content that falls into the categories of copyright infringement or malicious content.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 mt-12 shadow-sm">
            <p className="text-orange-900 text-lg">
              <strong className="font-bold">Academic Integrity:</strong> makemynotes is a study aid. It is not intended to facilitate cheating or academic dishonesty. Use the platform responsibly to enhance your learning.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Termination */}
      <section className="py-24 bg-black text-white rounded-t-[3rem] mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <XCircle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">4. Termination</h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-white/70">
            <p className="text-xl leading-relaxed">
              We may suspend or terminate your account and your access to the service immediately, without prior notice or liability, if you breach these Terms of Service. Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact support for data deletion.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
