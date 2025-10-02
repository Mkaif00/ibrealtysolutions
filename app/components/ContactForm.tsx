'use client'
import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Send } from 'lucide-react'
import React from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landType: 'Residential',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: ''});
  const [loading, setLoading] = useState(false);
  const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzDAS7htD26e6DNpoAPhnRkPgFmyWx2itAZ-rCPrIPRRK6jK2yjwopga0dStTvDudlU0w/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const dateToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        landType: formData.landType,
        message: formData.message,
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
      };
      const response = await fetch(SHEET_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dateToSend),
      });

      setStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', landType: 'Residential', message: '' });

    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Something went Wrong. Please try again later' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-2">Get In Touch</h2>
          <p className="text-slate-300">Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
              Full Name *
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-yellow-500 focus:border-transparent transition"
              placeholder="Enter your name"
            />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Land Type */}
            <div>
              <label htmlFor="landType" className="block text-sm font-medium text-slate-200 mb-2">
                Type of Land *
              </label>
              <select
                id="landType"
                name="landType"
                required
                value={formData.landType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Status Messages */}
              {status.message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type == 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              { /* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin">
                      Sending...
                    </div>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5"  />
                    Submit Enquiry
                  </>
                )}
                
              </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Your Information is safe with us and will only be used to cintact you regarding your enquiry.
        </p>
      </div>
    </div>
  );
}
