"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, UploadCloud, Type, Link as LinkIcon, FileText, Loader2, CheckCircle2 } from 'lucide-react'
import { CustomDropdown, DropdownOption } from '@/components/CustomDropdown'

const FORMAT_OPTIONS: DropdownOption[] = [
  { id: 'markdown', label: 'Markdown Study Guide (Recommended)' },
  { id: 'bullet', label: 'Bullet Points Summary' },
  { id: 'qa', label: 'Q&A Flashcard Style' },
  { id: 'essay', label: 'Long-form Essay' },
]

export default function GenerateNotesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'file' | 'text' | 'url'>('file')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // Fake file state
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // Configuration States
  const [detailLevel, setDetailLevel] = useState<'brief' | 'standard' | 'detailed'>('standard')
  const [selectedFormat, setSelectedFormat] = useState<DropdownOption>(FORMAT_OPTIONS[0])

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulate complex generation process (OCR -> LLM -> Markdown)
    setTimeout(() => {
      setIsGenerating(false)
      setIsSuccess(true)
      
      // Redirect to dashboard after showing success state for a moment
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    }, 3000)
  }

  // Handle fake file drop/select
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-2">Notes Generated Successfully!</h2>
          <p className="text-black/60 text-lg">Your new study guide is ready. Redirecting you back to your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-black/5 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-black/60" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-black mb-1">Generate New Notes</h1>
          <p className="text-black/60">Upload your exam paper or paste text to generate a beautiful study guide.</p>
        </div>
      </div>

      <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm">
        
        {/* Tabs */}
        <div className="flex items-center p-1 bg-black/5 rounded-xl w-fit mb-8">
          <button 
            onClick={() => setActiveTab('file')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'file' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'}`}
          >
            <UploadCloud className="w-4 h-4" />
            Upload File
          </button>
          <button 
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'text' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'}`}
          >
            <Type className="w-4 h-4" />
            Paste Text
          </button>
          <button 
            onClick={() => setActiveTab('url')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'url' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'}`}
          >
            <LinkIcon className="w-4 h-4" />
            Web URL
          </button>
        </div>

        {/* Input Areas */}
        <div className="mb-10">
          {activeTab === 'file' && (
            <label className={`block w-full border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${selectedFile ? 'border-orange-500 bg-orange-50/50' : 'border-black/10 hover:border-orange-500 hover:bg-orange-50/20'}`}>
              <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" onChange={onFileChange} />
              
              {selectedFile ? (
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-black">{selectedFile.name}</p>
                    <p className="text-sm text-black/60">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <p className="text-sm font-medium text-orange-600 mt-2">Click to choose a different file</p>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mb-2">
                    <UploadCloud className="w-10 h-10 text-black/40" />
                  </div>
                  <p className="text-xl font-bold text-black">Drag & drop your file here</p>
                  <p className="text-black/60">Supports PDF, PNG, JPG up to 50MB</p>
                  <div className="mt-4 px-6 py-2.5 bg-black/5 rounded-xl text-black font-semibold text-sm hover:bg-black/10 transition-colors">
                    Browse Files
                  </div>
                </div>
              )}
            </label>
          )}

          {activeTab === 'text' && (
            <div>
              <textarea 
                className="w-full h-64 p-6 bg-black/5 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors resize-none text-black"
                placeholder="Paste your raw text, transcript, or exam questions here..."
              ></textarea>
            </div>
          )}

          {activeTab === 'url' && (
            <div>
              <div className="flex items-center gap-3 w-full bg-black/5 border border-transparent rounded-2xl focus-within:bg-white focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-colors p-4">
                <LinkIcon className="w-6 h-6 text-black/40" />
                <input 
                  type="url" 
                  placeholder="https://example.com/article" 
                  className="w-full bg-transparent border-none outline-none text-black text-lg"
                />
              </div>
              <p className="text-sm text-black/40 mt-3 ml-2">We will scrape the main text content from this URL.</p>
            </div>
          )}
        </div>

        {/* Configuration */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 pt-8 border-t border-black/5">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-black uppercase tracking-wider">Output Format</label>
            <CustomDropdown 
              options={FORMAT_OPTIONS}
              value={selectedFormat}
              onChange={setSelectedFormat}
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-bold text-black uppercase tracking-wider">Detail Level</label>
            <div className="flex items-center gap-2 p-1 bg-black/5 rounded-xl">
              <button 
                onClick={() => setDetailLevel('brief')}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  detailLevel === 'brief' ? 'bg-white shadow-sm text-black border border-black/5' : 'hover:bg-black/5 text-black/60 hover:text-black'
                }`}
              >
                Brief
              </button>
              <button 
                onClick={() => setDetailLevel('standard')}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  detailLevel === 'standard' ? 'bg-white shadow-sm text-black border border-black/5' : 'hover:bg-black/5 text-black/60 hover:text-black'
                }`}
              >
                Standard
              </button>
              <button 
                onClick={() => setDetailLevel('detailed')}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  detailLevel === 'detailed' ? 'bg-white shadow-sm text-black border border-black/5' : 'hover:bg-black/5 text-black/60 hover:text-black'
                }`}
              >
                Detailed
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-end pt-8 border-t border-black/5">
          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-sm hover:shadow active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 w-full sm:w-auto"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processing Notes...
              </>
            ) : (
              <>
                <FileText className="w-6 h-6" />
                Generate Study Guide
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  )
}
