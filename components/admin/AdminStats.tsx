'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export const AdminStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inReview: 0,
    resolved: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase.from('complaints').select('status')

      if (error) throw error

      const complaints = data || []
      setStats({
        total: complaints.length,
        pending: complaints.filter((c) => c.status === 'pending').length,
        inReview: complaints.filter((c) => c.status === 'in_review').length,
        resolved: complaints.filter((c) => c.status === 'resolved').length,
      })
    } catch (err) {
      console.error('Error fetching stats:', err)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: 'Total Complaints', value: stats.total, color: 'bg-blue-100' },
    { label: 'Pending', value: stats.pending, color: 'bg-yellow-100' },
    { label: 'In Review', value: stats.inReview, color: 'bg-purple-100' },
    { label: 'Resolved', value: stats.resolved, color: 'bg-green-100' },
  ]

  if (loading) {
    return <div className="text-center py-8">Loading statistics...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {statCards.map((card, index) => (
        <div key={index} className={`${card.color} rounded-lg p-6 shadow`}>
          <p className="text-gray-700 text-sm font-medium mb-2">{card.label}</p>
          <p className="text-4xl font-bold text-gray-900">{card.value}</p>
        </div>
      ))}
    </div>
  )
}
