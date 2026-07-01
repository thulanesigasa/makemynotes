import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden flex flex-col items-center text-center px-4 bg-white border-b border-black/5">
        <h1 className="text-5xl font-extrabold tracking-tight text-black mb-6 relative z-10">
          Get in touch
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed relative z-10">
          Whether you have a question about pricing, need help with your account, or just want to say hi, our team is ready to answer all your questions.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
              <p className="text-black/60 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black text-lg">Email us</h4>
                  <p className="text-black/60 mb-1">We're here to help.</p>
                  <a href="mailto:support@makemynotes.com" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">support@makemynotes.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black text-lg">Live chat</h4>
                  <p className="text-black/60 mb-1">Available 9am - 5pm SAST.</p>
                  <button className="text-blue-500 font-medium hover:text-blue-600 transition-colors">Start a conversation</button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black text-lg">Office</h4>
                  <p className="text-black/60 mb-1">Come say hello.</p>
                  <p className="text-black font-medium">Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/20 transition-colors duration-500"></div>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-black/70 mb-2">First name</label>
                    <input type="text" id="first-name" className="w-full px-4 py-3 bg-gray-50 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-black/70 mb-2">Last name</label>
                    <input type="text" id="last-name" className="w-full px-4 py-3 bg-gray-50 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black/70 mb-2">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 bg-gray-50 border border-black/10 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Billing Support</option>
                    <option>Technical Issue</option>
                    <option>Feature Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">Message</label>
                  <textarea id="message" rows={6} className="w-full px-4 py-3 bg-gray-50 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
