import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import ScrollButtons from "@/components/ScrollButtons"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <ScrollButtons />
      <Footer />
    </div>
  )
}
