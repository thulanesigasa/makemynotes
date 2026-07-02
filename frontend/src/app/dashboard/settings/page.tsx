"use client"

import { useState } from 'react'
import { User, Settings2, CreditCard, Camera, Loader2, CheckCircle2, Trash2, Plus, Download } from 'lucide-react'
import { CustomDropdown, DropdownOption } from '@/components/CustomDropdown'

type Tab = 'profile' | 'preferences' | 'billing'

const THEME_OPTIONS: DropdownOption[] = [
  { id: 'system', label: 'System Default' },
  { id: 'light', label: 'Light Mode' },
  { id: 'dark', label: 'Dark Mode' },
]

const LANGUAGE_OPTIONS: DropdownOption[] = [
  { id: 'en', label: 'English (US)' },
  { id: 'es', label: 'Spanish' },
  { id: 'fr', label: 'French' },
  { id: 'de', label: 'German' },
]

const TIMEZONE_OPTIONS: DropdownOption[] = [
  { id: 'SAST', label: 'South Africa Standard Time (SAST)' },
  { id: 'EST', label: 'Eastern Time (EST)' },
  { id: 'CST', label: 'Central Time (CST)' },
  { id: 'PST', label: 'Pacific Time (PST)' },
  { id: 'UTC', label: 'Coordinated Universal Time (UTC)' },
]

const FORMAT_OPTIONS: DropdownOption[] = [
  { id: 'markdown', label: 'Markdown Study Guide' },
  { id: 'bullet', label: 'Bullet Points Summary' },
  { id: 'qa', label: 'Q&A Flashcards' },
]

const DETAIL_OPTIONS: DropdownOption[] = [
  { id: 'standard', label: 'Standard' },
  { id: 'brief', label: 'Brief' },
  { id: 'detailed', label: 'Highly Detailed' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile')
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Preferences States
  const [theme, setTheme] = useState<DropdownOption>(THEME_OPTIONS[0])
  const [language, setLanguage] = useState<DropdownOption>(LANGUAGE_OPTIONS[0])
  const [timezone, setTimezone] = useState<DropdownOption>(TIMEZONE_OPTIONS[0])
  const [format, setFormat] = useState<DropdownOption>(FORMAT_OPTIONS[0])
  const [detailLevel, setDetailLevel] = useState<DropdownOption>(DETAIL_OPTIONS[0])

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setShowSuccess(false)
    
    // Simulate network request to save settings
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-black mb-1">Settings</h1>
        <p className="text-black/60">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === 'profile' 
                ? 'bg-orange-50 text-orange-600' 
                : 'text-black/60 hover:bg-black/5 hover:text-black'
            }`}
          >
            <User className="w-5 h-5" />
            Account Profile
          </button>
          
          <button 
            onClick={() => setActiveTab('preferences')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === 'preferences' 
                ? 'bg-orange-50 text-orange-600' 
                : 'text-black/60 hover:bg-black/5 hover:text-black'
            }`}
          >
            <Settings2 className="w-5 h-5" />
            Preferences
          </button>

          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === 'billing' 
                ? 'bg-orange-50 text-orange-600' 
                : 'text-black/60 hover:bg-black/5 hover:text-black'
            }`}
          >
            <CreditCard className="w-5 h-5" />
            Billing & Usage
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 bg-white border border-black/10 rounded-3xl p-6 sm:p-10 shadow-sm min-h-[500px]">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-black mb-1">Account Profile</h2>
                <p className="text-sm text-black/60">Update your personal information, bio, and password.</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl font-bold">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-white border border-black/10 rounded-full shadow-sm hover:border-orange-500 hover:text-orange-500 transition-colors text-black">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <button className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-lg text-sm font-semibold text-black transition-colors mb-2">
                    Upload new picture
                  </button>
                  <p className="text-xs text-black/40">JPG, GIF or PNG. Max size of 800K.</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSave}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">First Name</label>
                    <input type="text" defaultValue="John" className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-black">Email Address</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-black">Bio</label>
                  <textarea 
                    rows={3} 
                    defaultValue="Computer Science student at University. Focusing on AI and machine learning." 
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black resize-none" 
                  />
                  <p className="text-xs text-black/40">Brief description for your profile.</p>
                </div>

                <div className="pt-6 border-t border-black/10">
                  <h3 className="text-lg font-bold text-black mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-black" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <button 
                    type="submit" 
                    disabled={isSaving}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-70"
                  >
                    {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                    Save Changes
                  </button>
                  {showSuccess && (
                    <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      Saved successfully!
                    </span>
                  )}
                </div>
              </form>
              
              <div className="pt-10 mt-10 border-t border-red-200">
                <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
                <p className="text-sm text-black/60 mb-4">Permanently delete your account and all of your generated study notes. This action cannot be undone.</p>
                <button className="flex items-center gap-2 px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-xl transition-colors border border-red-200">
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === 'preferences' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-black mb-1">Preferences</h2>
                <p className="text-sm text-black/60">Customize the appearance, localization, and study defaults.</p>
              </div>

              <form className="space-y-10" onSubmit={handleSave}>
                
                {/* Appearance */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider">Appearance</h3>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">Theme</label>
                    <div className="max-w-md">
                      <CustomDropdown 
                        options={THEME_OPTIONS}
                        value={theme}
                        onChange={setTheme}
                      />
                    </div>
                  </div>
                </div>

                {/* Localization */}
                <div className="space-y-4 pt-6 border-t border-black/10">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider">Localization</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">Language</label>
                      <CustomDropdown 
                        options={LANGUAGE_OPTIONS}
                        value={language}
                        onChange={setLanguage}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">Timezone</label>
                      <CustomDropdown 
                        options={TIMEZONE_OPTIONS}
                        value={timezone}
                        onChange={setTimezone}
                      />
                    </div>
                  </div>
                </div>

                {/* Study Defaults */}
                <div className="space-y-4 pt-6 border-t border-black/10">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider">Study Defaults</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">Default Output Format</label>
                      <CustomDropdown 
                        options={FORMAT_OPTIONS}
                        value={format}
                        onChange={setFormat}
                      />
                      <p className="text-xs text-black/40 mt-1">Pre-selected when generating notes.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black">Default Detail Level</label>
                      <CustomDropdown 
                        options={DETAIL_OPTIONS}
                        value={detailLevel}
                        onChange={setDetailLevel}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <button 
                    type="submit" 
                    disabled={isSaving}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-70"
                  >
                    {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                    Save Preferences
                  </button>
                  {showSuccess && (
                    <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      Saved successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* BILLING TAB */}
          {activeTab === 'billing' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-black mb-1">Billing & Usage</h2>
                <p className="text-sm text-black/60">Manage your subscription, payment methods, and track your usage.</p>
              </div>

              {/* Current Plan Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-orange-200/50 text-orange-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Current Plan</span>
                    <h3 className="text-2xl font-bold text-black mb-1">Free Tier</h3>
                    <p className="text-black/60 text-sm">Perfect for students starting out.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="space-y-6 pt-2">
                <h3 className="text-lg font-bold text-black">Current Billing Cycle Usage</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-black">Documents Generated</span>
                    <span className="text-black/60 font-medium">5 / 10 limit</span>
                  </div>
                  <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-xs text-black/40">Resets on August 1st, 2026</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-black">Storage Used</span>
                    <span className="text-black/60 font-medium">45 MB / 100 MB</span>
                  </div>
                  <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-8 border-t border-black/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-black">Payment Methods</h3>
                  <button className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add Method
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-black/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-black/5 rounded flex items-center justify-center text-xs font-bold text-black border border-black/10">
                      VISA
                    </div>
                    <div>
                      <p className="font-semibold text-black">Visa ending in 4242</p>
                      <p className="text-sm text-black/60">Expires 12/2028</p>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-lg text-sm font-semibold text-black transition-colors">
                    Edit
                  </button>
                </div>
              </div>

              {/* Billing History */}
              <div className="pt-8 border-t border-black/10">
                <h3 className="text-lg font-bold text-black mb-6">Billing History</h3>
                <div className="border border-black/10 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-black/5 text-black/60 font-medium">
                      <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3 text-right">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10 bg-white">
                      <tr>
                        <td className="px-4 py-4 text-black">Jul 1, 2026</td>
                        <td className="px-4 py-4 text-black">Free Tier - Monthly</td>
                        <td className="px-4 py-4 text-black">$0.00</td>
                        <td className="px-4 py-4 text-right">
                          <button className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium transition-colors">
                            <Download className="w-4 h-4" />
                            PDF
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-black">Jun 1, 2026</td>
                        <td className="px-4 py-4 text-black">Free Tier - Monthly</td>
                        <td className="px-4 py-4 text-black">$0.00</td>
                        <td className="px-4 py-4 text-right">
                          <button className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium transition-colors">
                            <Download className="w-4 h-4" />
                            PDF
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Cancel Subscription */}
              <div className="pt-10 mt-10 border-t border-black/10">
                <button className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
                  Cancel Subscription
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}
