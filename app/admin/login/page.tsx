'use client'
import ClientButton from  '../../components/ClientButton'
import { signIn } from 'next-auth/react'

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
        <ClientButton onClick={() => signIn()} className="btn-primary w-full">
          Sign In
        </ClientButton>
      </div>
    </div>
  )
}