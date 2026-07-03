'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complaint Submitted Successfully!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you for submitting your complaint. We have received your information and will review it shortly.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">What happens next:</span>
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">1.</span>
                <span>We will review your complaint within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">2.</span>
                <span>You will receive a confirmation email with your case reference</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">3.</span>
                <span>Our team will investigate and contact you using your preferred method</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">4.</span>
                <span>We will work to resolve your issue as quickly as possible</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Keep your case reference for future reference:</span>
            </p>
            <div className="bg-gray-100 rounded-lg p-4 font-mono text-lg font-bold text-primary">
              Check your email for your case reference
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Back to Home
            </Link>
            <p className="text-gray-600">
              or
            </p>
            <Link
              href="/submit"
              className="inline-block text-primary hover:text-primary-dark font-semibold"
            >
              Submit Another Complaint
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
