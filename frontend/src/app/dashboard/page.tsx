import { FileText, Plus, Search } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black mb-1">My Notes</h1>
          <p className="text-black/60">Manage and view your generated study guides.</p>
        </div>
        <Link href="/dashboard/new" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm">
          <Plus className="w-5 h-5" />
          Generate New Notes
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
        <input 
          type="text" 
          placeholder="Search notes by subject, grade, or topic..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-black/10 rounded-2xl focus:outline-none focus:border-orange-500 transition-colors shadow-sm text-black"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Placeholder Note Card 1 */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 hover:border-orange-500 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
            <FileText className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-black mb-1">Physical Sciences P1</h3>
          <p className="text-sm text-black/60 mb-4">Grade 12 • November 2023</p>
          <div className="flex items-center justify-between text-xs font-medium text-black/40">
            <span>Generated 2 days ago</span>
            <span className="text-orange-500 bg-orange-50 px-2 py-1 rounded-md">PDF</span>
          </div>
        </div>

        {/* Placeholder Note Card 2 */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 hover:border-orange-500 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
            <FileText className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-black mb-1">Mathematics P2</h3>
          <p className="text-sm text-black/60 mb-4">Grade 11 • June 2023</p>
          <div className="flex items-center justify-between text-xs font-medium text-black/40">
            <span>Generated 5 days ago</span>
            <span className="text-blue-500 bg-blue-50 px-2 py-1 rounded-md">Markdown</span>
          </div>
        </div>
      </div>
    </div>
  )
}
