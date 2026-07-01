import { Shield, Eye, Lock, RefreshCw, Scale } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 right-0 translate-x-1/4 w-[1000px] h-[600px] bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none transform -rotate-12"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 relative z-10">
          Privacy Policy
        </h1>
        <div className="relative z-10 inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 text-orange-600">
          <span className="text-xs font-bold uppercase tracking-widest">Last updated: January 15, 2026</span>
        </div>
      </section>

      {/* 1. Introduction */}
      <section className="py-24 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">1. Introduction</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70">
            <p className="text-xl leading-relaxed">
              At makemynotes, your privacy is our priority. We are committed to protecting your personal data and ensuring that your experience with our educational tools is secure. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website, application, and related services.
            </p>
          </div>
          <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 mt-12 shadow-sm">
            <p className="text-orange-800 text-lg font-medium">
              <strong className="text-orange-900">Key Takeaway:</strong> We never sell your personal data to third-party data brokers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Information We Collect */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">2. Information We Collect</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70 mb-12">
            <p className="text-xl leading-relaxed">
              We collect information to provide better services to all our users. The types of personal information we obtain include:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold text-black mb-3">Account Information</h4>
              <p className="text-black/60">Name, email address, and password when you create an account.</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold text-black mb-3">Uploaded Content</h4>
              <p className="text-black/60">PDFs, images, and text you upload for processing.</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold text-black mb-3">Usage Data</h4>
              <p className="text-black/60">Pages visited, features used, and time spent on the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="py-24 bg-[#FAFAFA] border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <RefreshCw className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">3. How We Use Your Information</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70 mb-12">
            <p className="text-xl leading-relaxed">
              Your information is used primarily to deliver and improve our core service—generating study notes. Specifically, we use it to:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-3">Service Delivery</h4>
              <p className="text-black/60">Process your past papers and generate accurate summaries.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-3">Account Management</h4>
              <p className="text-black/60">Authenticate your login and manage your subscription.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-3">Communication</h4>
              <p className="text-black/60">Send you updates, security alerts, and support messages.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-3">Improvement</h4>
              <p className="text-black/60">Analyze aggregate usage to build better features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Data Security */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Lock className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">4. Data Security</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70">
            <p className="text-xl leading-relaxed">
              We implement industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Your uploaded documents are processed securely and are never used to train generalized AI models without your explicit, opt-in consent. If you delete a document from your dashboard, it is permanently erased from our active servers within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Your Rights */}
      <section className="py-24 bg-black text-white rounded-t-[3rem] mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Scale className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">5. Your Rights</h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-white/70 mb-12">
            <p className="text-xl leading-relaxed">
              Depending on your location (e.g., GDPR in Europe, CCPA in California), you may have the following rights regarding your personal data:
            </p>
            <ul className="text-lg relative border-l-2 border-white/20 ml-4 space-y-8">
              <li className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] top-1.5 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <strong className="text-white block mb-1">Access</strong>
                The right to access the personal data we hold about you.
              </li>
              <li className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] top-1.5 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <strong className="text-white block mb-1">Correction</strong>
                The right to request correction of inaccurate data.
              </li>
              <li className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] top-1.5 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <strong className="text-white block mb-1">Deletion</strong>
                The right to request deletion of your account and associated data.
              </li>
              <li className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] top-1.5 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <strong className="text-white block mb-1">Portability</strong>
                The right to export your data in a portable format.
              </li>
            </ul>
            <p className="text-xl leading-relaxed mt-12">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@makemynotes.com" className="text-orange-400 hover:text-orange-300">privacy@makemynotes.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
