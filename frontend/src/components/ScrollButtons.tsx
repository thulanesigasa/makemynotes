"use client"

import { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

export function ScrollButtons() {
  const [isNearBottom, setIsNearBottom] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if near bottom (within 100px of the bottom)
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      
      const isBottom = windowHeight + scrollY >= documentHeight - 100
      setIsNearBottom(isBottom)
    }

    const checkScrollable = () => {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight
      setIsScrollable(scrollable)
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkScrollable)
    
    // Initial checks
    checkScrollable()

    // Add a small timeout to re-check in case images/content load and change height
    const timer = setTimeout(checkScrollable, 500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkScrollable)
      clearTimeout(timer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  // Do not render anything if the page isn't long enough to scroll
  if (!isScrollable) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <div className={`transition-all duration-300 absolute bottom-0 right-0 ${isNearBottom ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:bg-orange-500 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className={`transition-all duration-300 absolute bottom-0 right-0 ${!isNearBottom ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <button
            onClick={scrollToBottom}
            className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-orange-600 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
