'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Copy } from 'lucide-react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const SuccessPage = () => {
  const searchParams = useSearchParams()
  const caseRef = searchParams.get('caseRef')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (caseRef) {
      navigator.clipboard.writeText(caseRef)
      setCopied(true)
      toast.success('Case reference copied!')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complaint Submitted!</h1>
          <p className="text-gray-600 mb-6">Thank you for submitting your complaint. Our team will review it shortly.</p>

          {caseRef && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Your Case Reference:</p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-lg font-mono font-bold text-primary">{caseRef}</code>
                <button
                  onClick={handleCopy}
                  className="text-primary hover:text-primary-dark transition"
                  title="Copy case reference"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-blue-900">
              <strong>What's next?</strong> We'll send you updates via your preferred contact method. Keep your case reference number handy for future reference.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  )
}
