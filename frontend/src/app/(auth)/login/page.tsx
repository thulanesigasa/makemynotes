"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Github, Mail, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      router.push('/dashboard')
    }, 800)
  }

  return (
    <div className="flex-1 flex min-h-screen">
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
            <h1 className="text-3xl font-extrabold tracking-tight text-black mb-2">Welcome back</h1>
            <p className="text-black/60">Enter your credentials to access your account.</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-black">Email</label>
              <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm text-black"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold text-black">Password</label>
                <Link href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">Forgot password?</Link>
              </div>
              <input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm text-black"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          <div className="relative pt-4">
            <div className="absolute inset-0 flex items-center pt-4">
              <div className="w-full border-t border-black/10"></div>
            </div>
            <div className="relative flex justify-center text-sm pt-4">
              <span className="px-4 bg-white text-black/40 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/10 rounded-xl hover:bg-black/5 transition-colors font-medium text-black">
              <Github className="w-5 h-5" />
              Github
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-black/10 rounded-xl hover:bg-black/5 transition-colors font-medium text-black">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </div>

          <p className="text-center text-sm text-black/60 pt-4">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Sign up
            </Link>
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
            The smartest way to <br/>
            <span className="text-orange-500">prepare for exams.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto">
            Join thousands of students turning their past papers into beautiful, structured study notes.
          </p>
        </div>
      </div>
    </div>
  )
}
