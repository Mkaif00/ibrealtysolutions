import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email }
        })
        
        if (!admin) return null
        
        const passwordMatch = await bcrypt.compare(credentials.password, admin.password)
        
        if (!passwordMatch) return null
        
        return {
          id: admin.id,
          email: admin.email,
          name: admin.name
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/admin/login'
  }
}