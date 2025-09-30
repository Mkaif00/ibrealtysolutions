'use client'

import { useEffect, useState } from 'react'

type Lead = {
  id: number
  name: string
  email: string
  phone?: string
  message: string
  createdAt: string
  projectId?: number
  plotId?: number
  receiptUrl?: string | null
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLeads = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/leads')
    const data = await res.json()
    setLeads(data.leads || [])
    setLoading(false)
  }

  const handleReceipt = async (id: number) => {
    const res = await fetch('/api/admin/receipts', { method: 'POST', body: JSON.stringify({ leadId: id }) })
    if (res.ok) fetchLeads()
    else alert('Failed to generate receipt')
  }

  useEffect(() => { fetchLeads() }, [])

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Leads</h1>
      <div className="space-y-4">
        {leads.map(l => (
          <div key={l.id} className="bg-gray-800 rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-semibold">{l.name} <span className="text-gray-400">({l.email})</span></div>
              <div className="text-gray-400 text-sm">{new Date(l.createdAt).toLocaleString()} • {l.phone || 'No phone'}</div>
              <div className="text-gray-300 mt-2">{l.message}</div>
            </div>
            <div className="mt-3 md:mt-0">
              {l.receiptUrl ? (
                <a href={l.receiptUrl} target="_blank" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">View Receipt</a>
              ) : (
                <button onClick={() => handleReceipt(l.id)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Generate Receipt</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}