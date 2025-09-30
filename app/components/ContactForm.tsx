'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: 'Residential Plots', message: '' })
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // API call remains the same (POST to /api/leads)
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', interest: 'Residential Plots', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } else setStatus('error')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const interestOptions = [
    'Residential Plots', 'Commercial Plots', 'Investment Plots', 'Farm Land', 'Industrial Plots'
  ]

  const inputClass = "w-full p-4 bg-darker-bg border border-gold-dark rounded-xl text-text-light font-body text-lg focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all duration-300"
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-3xl font-heading mb-6 text-text-light">Request Consultation</h3>
      <div className="form-group">
        <label htmlFor="name" className="block mb-2 text-text-gray">Full Name</label>
        <input type="text" id="name" className={inputClass} value={formData.name} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="block mb-2 text-text-gray">Email Address</label>
        <input type="email" id="email" className={inputClass} value={formData.email} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone" className="block mb-2 text-text-gray">Phone Number</label>
        <input type="tel" id="phone" className={inputClass} value={formData.phone} onChange={handleChange} />
      </div>
      
      <div className="form-group">
        <label htmlFor="interest" className="block mb-2 text-text-gray">Plot Interest</label>
        {/* Using standard select for simplicity, enhance later */}
        <select id="interest" className={inputClass} value={formData.interest} onChange={handleChange}>
          {interestOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="block mb-2 text-text-gray">Your Message</label>
        <textarea id="message" className={`${inputClass} resize-none`} rows={4} value={formData.message} onChange={handleChange} />
      </div>

      <button type="submit" disabled={status==='submitting'} className="cta-button w-full">
        {status === 'submitting' ? 'Sending Request...' : status === 'success' ? 'Request Sent!' : 'Request Consultation'}
      </button>

      {status === 'error' && <p className="text-red-400 text-center mt-3">Failed to send request. Try again later.</p>}
    </form>
  )
}