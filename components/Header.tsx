'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Wayfair Support
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-primary transition">
              FAQ
            </Link>
            <Link href="/submit" className="text-gray-700 hover:text-primary transition">
              Submit Complaint
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-primary transition">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/#faq" className="block text-gray-700 hover:text-primary transition">
              FAQ
            </Link>
            <Link href="/submit" className="block text-gray-700 hover:text-primary transition">
              Submit Complaint
            </Link>
            <Link href="/admin" className="block text-gray-700 hover:text-primary transition">
              Admin
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
