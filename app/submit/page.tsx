import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ComplaintForm } from '@/components/form/ComplaintForm'

export const metadata = {
  title: 'Submit Complaint | Wayfair Customer Support',
  description: 'Submit your complaint to our Wayfair support team',
}

export default function SubmitPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit Your Complaint</h1>
            <p className="text-gray-600">Please provide as much detail as possible to help us resolve your issue.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <ComplaintForm />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
