import { Globe, Zap, Clock } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 relative z-10">
          Shipping & Delivery
        </h1>
        <div className="relative z-10 inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 text-orange-600">
          <span className="text-xs font-bold uppercase tracking-widest">Last updated: January 15, 2026</span>
        </div>
      </section>

      {/* 1. Digital Delivery */}
      <section className="py-24 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">1. Instant Digital Delivery</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70">
            <p className="text-xl leading-relaxed">
              Because makemynotes is a purely digital Software-as-a-Service (SaaS) platform, we do not ship any physical goods. All services, including account access and generated study notes, are delivered digitally over the internet.
            </p>
          </div>
          <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 mt-12 shadow-sm">
            <p className="text-orange-900 text-lg font-medium">
              <strong className="text-orange-900 font-bold">Key Takeaway:</strong> Your account and features are activated immediately upon successful payment. There is zero waiting time for "shipping."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Access to Services */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">2. Accessing Your Notes</h2>
          </div>
          <div className="prose prose-lg prose-orange max-w-none text-black/70 mb-12">
            <p className="text-xl leading-relaxed">
              Once your study notes are generated, they are "delivered" directly to your personal dashboard. You can access them anytime, anywhere.
            </p>
          </div>
          <div className="relative mt-16">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm relative group">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-110 transition-transform">1</div>
                <h4 className="text-xl font-bold text-black mb-3 mt-4">Dashboard</h4>
                <p className="text-black/60">View your notes in our optimized mobile and desktop web viewer.</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm relative group">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-110 transition-transform">2</div>
                <h4 className="text-xl font-bold text-black mb-3 mt-4">PDF Export</h4>
                <p className="text-black/60">Export your generated notes instantly as vector PDFs to your local device.</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm relative group">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-110 transition-transform">3</div>
                <h4 className="text-xl font-bold text-black mb-3 mt-4">Markdown</h4>
                <p className="text-black/60">Download the raw `.md` files for use in Obsidian, Notion, or Roam Research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Availability */}
      <section className="py-24 bg-black text-white rounded-t-[3rem] mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Globe className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">3. Global Availability</h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-white/70">
            <p className="text-xl leading-relaxed">
              Our services are available globally. As long as you have a stable internet connection and a modern web browser, you can access your makemynotes dashboard. We do not have geographical restrictions on the "delivery" of our digital service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
