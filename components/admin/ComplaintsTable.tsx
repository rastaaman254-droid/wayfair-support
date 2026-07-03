'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Complaint } from '@/lib/types'
import { COMPLAINT_STATUS } from '@/lib/constants'
import toast, { Toaster } from 'react-hot-toast'

export const ComplaintsTable = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchComplaints()
  }, [filter])

  const fetchComplaints = async () => {
    try {
      setLoading(true)
      let query = supabase.from('complaints').select('*').order('created_at', { ascending: false })

      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error } = await query

      if (error) throw error
      setComplaints(data || [])
    } catch (err) {
      console.error('Error fetching complaints:', err)
      toast.error('Failed to load complaints')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('complaints')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      setComplaints((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus as any } : c))
      )
      toast.success('Status updated')
    } catch (err) {
      console.error('Error updating status:', err)
      toast.error('Failed to update status')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in_review':
        return 'bg-blue-100 text-blue-800'
      case 'resolved':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading complaints...</div>
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="mb-6 flex gap-2 flex-wrap">
        {['all', ...COMPLAINT_STATUS.map((s) => s.value)].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === status
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Case Ref</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length === 0 ? (
              <tr>
                <td colSpan={7} className="border px-4 py-4 text-center text-gray-500">
                  No complaints found
                </td>
              </tr>
            ) : (
              complaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 font-mono text-sm">{complaint.case_reference}</td>
                  <td className="border px-4 py-2">{complaint.full_name}</td>
                  <td className="border px-4 py-2 text-sm">{complaint.email}</td>
                  <td className="border px-4 py-2 text-sm capitalize">{complaint.category}</td>
                  <td className="border px-4 py-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
                      {complaint.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="border px-4 py-2 text-sm">
                    {new Date(complaint.created_at).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <select
                      value={complaint.status}
                      onChange={(e) => updateStatus(complaint.id, e.target.value)}
                      className="px-2 py-1 border rounded text-sm"
                    >
                      {COMPLAINT_STATUS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
