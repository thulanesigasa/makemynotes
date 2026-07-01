import Link from 'next/link'
import { BookOpen, FilePlus, Settings, LogOut } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/10 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-black/10">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            makemynotes
          </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 text-orange-600 font-medium transition-colors">
            <BookOpen className="w-5 h-5" />
            My Notes
          </Link>
          <Link href="/dashboard/new" className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/70 hover:bg-black/5 hover:text-black font-medium transition-colors">
            <FilePlus className="w-5 h-5" />
            Generate New
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/70 hover:bg-black/5 hover:text-black font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
        <div className="p-6 border-t border-black/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-black/70 hover:bg-red-50 hover:text-red-600 font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-black/10 p-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            makemynotes
          </Link>
          <button className="p-2 border border-black/10 rounded-lg">
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
