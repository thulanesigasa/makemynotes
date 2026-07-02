"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Github, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'student',
    gradeLevel: '',
    subjects: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    if (currentStep === 1) {
      if (!formData.email) {
        newErrors.email = 'Email is required'
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
        isValid = false
      }

      if (!formData.password) {
        newErrors.password = 'Password is required'
        isValid = false
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long'
        isValid = false
      }
    }

    if (currentStep === 2) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required'
        isValid = false
      } else if (formData.firstName.length < 2) {
        newErrors.firstName = 'First name must be at least 2 characters'
        isValid = false
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required'
        isValid = false
      } else if (formData.lastName.length < 2) {
        newErrors.lastName = 'Last name must be at least 2 characters'
        isValid = false
      }
    }

    if (currentStep === 3) {
      if (!formData.gradeLevel.trim()) {
        newErrors.gradeLevel = 'Grade/Level is required'
        isValid = false
      }
      if (!formData.subjects.trim()) {
        newErrors.subjects = 'Please enter at least one subject'
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(step)) {
      if (step < 3) setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(3)) {
      // Here we would typically submit the final form data
      console.log("Form Submitted: ", formData)
      alert("Account created successfully! (Mock)")
    }
  }

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="flex-1 flex min-h-screen bg-white">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 sm:px-16 md:px-24 py-12 justify-center relative">
        <div className="absolute top-8 left-8 sm:left-16 md:left-24">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-black mb-2">Create an account</h1>
            <p className="text-black/60">Get started and transform your study routine today.</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between relative mb-8">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-black/5 -z-10 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-orange-500 -z-10 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 ${
                  step >= num 
                    ? 'bg-orange-500 border-orange-500 text-white' 
                    : 'bg-white border-black/10 text-black/30'
                }`}
              >
                {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>

          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">
            {step === 1 && "Step 1: Account Details"}
            {step === 2 && "Step 2: Personal Profile"}
            {step === 3 && "Step 3: Study Goals"}
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={step === 3 ? handleSubmit : handleNext}>
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-black">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => { setFormData({...formData, email: e.target.value}); clearError('email') }}
                    placeholder="you@example.com" 
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black ${
                      errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                    }`}
                  />
                  {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-black">Password</label>
                  <input 
                    id="password" 
                    type="password" 
                    value={formData.password}
                    onChange={(e) => { setFormData({...formData, password: e.target.value}); clearError('password') }}
                    placeholder="••••••••" 
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black ${
                      errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                    }`}
                  />
                  {errors.password 
                    ? <p className="text-sm text-red-500 font-medium">{errors.password}</p>
                    : <p className="text-xs text-black/40">Must be at least 8 characters long.</p>
                  }
                </div>

                <div className="relative pt-4">
                  <div className="absolute inset-0 flex items-center pt-4">
                    <div className="w-full border-t border-black/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm pt-4">
                    <span className="px-4 bg-white text-black/40 font-medium">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/10 rounded-xl hover:bg-black/5 transition-colors font-medium text-black">
                    <Github className="w-5 h-5" />
                    Github
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/10 rounded-xl hover:bg-black/5 transition-colors font-medium text-black">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-black">First Name</label>
                    <input 
                      id="firstName" 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => { setFormData({...formData, firstName: e.target.value}); clearError('firstName') }}
                      placeholder="John" 
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black ${
                        errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                      }`}
                    />
                    {errors.firstName && <p className="text-sm text-red-500 font-medium">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-black">Last Name</label>
                    <input 
                      id="lastName" 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => { setFormData({...formData, lastName: e.target.value}); clearError('lastName') }}
                      placeholder="Doe" 
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black ${
                        errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                      }`}
                    />
                    {errors.lastName && <p className="text-sm text-red-500 font-medium">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-semibold text-black">I am a...</label>
                  <select 
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm text-black appearance-none"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="gradeLevel" className="block text-sm font-semibold text-black">Current Grade/Level</label>
                  <input 
                    id="gradeLevel" 
                    type="text" 
                    value={formData.gradeLevel}
                    onChange={(e) => { setFormData({...formData, gradeLevel: e.target.value}); clearError('gradeLevel') }}
                    placeholder="e.g. Grade 12, University Year 1" 
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black ${
                      errors.gradeLevel ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                    }`}
                  />
                  {errors.gradeLevel && <p className="text-sm text-red-500 font-medium">{errors.gradeLevel}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subjects" className="block text-sm font-semibold text-black">Primary Subjects</label>
                  <textarea 
                    id="subjects" 
                    value={formData.subjects}
                    onChange={(e) => { setFormData({...formData, subjects: e.target.value}); clearError('subjects') }}
                    placeholder="e.g. Mathematics, Physics, History..." 
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-colors shadow-sm text-black min-h-[100px] resize-none ${
                      errors.subjects ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/10 focus:border-orange-500 focus:ring-orange-500'
                    }`}
                  />
                  {errors.subjects 
                    ? <p className="text-sm text-red-500 font-medium">{errors.subjects}</p>
                    : <p className="text-xs text-black/40">This helps us tailor your generated study notes.</p>
                  }
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-black/10 hover:bg-black/5 text-black font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              )}
              <button 
                type="submit" 
                className={`flex items-center justify-center gap-2 py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm ${step === 1 ? 'w-full' : 'flex-1'}`}
              >
                {step === 3 ? 'Create Account' : 'Continue'}
                {step !== 3 && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </form>

          {step === 1 && (
            <p className="text-center text-sm text-black/60 pt-4">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                Log in
              </Link>
            </p>
          )}

          <p className="text-center text-xs text-black/40 pt-4">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-black">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Right Column: Visual */}
      <div className="hidden lg:flex w-1/2 relative bg-black items-center justify-center overflow-hidden">
        {/* Abstract shapes / gradients with animation classes from Tailwind config */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange-500/50 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-400/40 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/40 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

        <div className="relative z-10 text-center px-12">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Stop wasting hours <br/>
            <span className="text-orange-500">summarizing notes.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto">
            Get instant, accurate, and beautifully formatted study guides from any past exam paper.
          </p>
        </div>
      </div>
    </div>
  )
}
