// lib/email.ts
import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function sendLeadNotification(lead: any) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Lead received (email disabled):', lead)
    return
  }

  const to = process.env.ADMIN_EMAIL || 'admin@ibrealty.com'
  const from = process.env.EMAIL_FROM || 'noreply@ibrealty.com'

  const msg = {
    to,
    from,
    subject: 'New Lead Submission',
    html: `
      <h2>New Lead</h2>
      <p><b>Name:</b> ${lead.name}</p>
      <p><b>Email:</b> ${lead.email}</p>
      <p><b>Phone:</b> ${lead.phone || 'N/A'}</p>
      <p><b>Message:</b> ${lead.message}</p>
    `,
  }

  await sgMail.send(msg)
}