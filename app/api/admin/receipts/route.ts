// app/api/admin/receipts/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { uploadBufferToCloudinary } from '@/lib/storage'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { leadId } = await req.json()
  const lead = await prisma.lead.findUnique({ where: { id: Number(leadId) } })
  if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 })

  // Create simple PDF
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const { width, height } = page.getSize()

  page.drawText('IB Realty Solutions - Receipt', { x: 50, y: height - 60, size: 20, font, color: rgb(0.2, 0.2, 0.7) })
  page.drawText(`Lead ID: ${lead.id}`, { x: 50, y: height - 100, size: 12, font })
  page.drawText(`Name: ${lead.name}`, { x: 50, y: height - 120, size: 12, font })
  page.drawText(`Email: ${lead.email}`, { x: 50, y: height - 140, size: 12, font })
  page.drawText(`Phone: ${lead.phone || 'N/A'}`, { x: 50, y: height - 160, size: 12, font })
  page.drawText(`Message: ${lead.message}`, { x: 50, y: height - 180, size: 12, font })

  const pdfBytes = await pdfDoc.save()

  // Upload to Cloudinary as raw file if configured
  let pdfUrl: string | null = null
  try {
    pdfUrl = await uploadBufferToCloudinary(pdfBytes, `receipt-lead-${lead.id}.pdf`)
  } catch (e) {
    console.log('Cloud upload skipped or failed:', e)
  }

  const updated = await prisma.lead.update({
    where: { id: lead.id },
    data: { receiptUrl: pdfUrl || null },
  })

  return NextResponse.json({ success: true, receiptUrl: updated.receiptUrl })
}