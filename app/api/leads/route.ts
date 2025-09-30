// app/api/leads/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendLeadNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        projectId: data.projectId || null,
        plotId: data.plotId || null,
      },
    })

    // Try to send email, but don't fail the request if email fails in dev
    try { await sendLeadNotification(lead) } catch {}

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 })
  }
}