'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Wayfair Support
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/submit" className="text-gray-700 hover:text-primary transition">
              Submit Complaint
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-primary transition">
              FAQ
            </Link>
            <Link
              href="/admin"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/submit"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Submit Complaint
            </Link>
            <Link
              href="/#faq"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/admin"
              className="block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
