"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export type DropdownOption = {
  id: string
  label: string
}

interface CustomDropdownProps {
  options: DropdownOption[]
  value: DropdownOption
  onChange: (option: DropdownOption) => void
  className?: string
}

export function CustomDropdown({ options, value, onChange, className = '' }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors font-medium text-black border ${
          isOpen ? 'bg-white border-orange-500 ring-1 ring-orange-500' : 'bg-black/5 border-transparent hover:bg-black/10'
        }`}
      >
        {value.label}
        <ChevronDown className={`w-5 h-5 text-black/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden py-1">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                value.id === option.id 
                  ? 'bg-orange-50 text-orange-600 font-semibold' 
                  : 'text-black hover:bg-black/5 font-medium'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
