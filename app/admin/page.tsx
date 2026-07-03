import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AdminStats } from '@/components/admin/AdminStats'
import { ComplaintsTable } from '@/components/admin/ComplaintsTable'

export const metadata = {
  title: 'Admin Dashboard | Wayfair Customer Support',
  description: 'Admin dashboard for managing complaints',
}

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage and track all customer complaints</p>
          </div>

          <AdminStats />

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Complaints</h2>
            <ComplaintsTable />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
