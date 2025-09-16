
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendAdminNotification, sendClientAcknowledgment } from '@/lib/sendgrid'

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget
    } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Create inquiry record in database
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service: service || 'general',
        urgency: urgency || 'medium',
        details: message,
        budget: budget || null,
        status: 'new'
      }
    })

    // Prepare email data
    const emailData = {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget,
      inquiryId: inquiry.id
    }

    // Send emails (don't let email failures stop the form submission)
    const emailPromises = [
      sendAdminNotification(emailData),
      sendClientAcknowledgment(emailData)
    ]

    // Send emails in parallel and log results
    const emailResults = await Promise.allSettled(emailPromises)
    
    const adminEmailResult = emailResults[0]
    const clientEmailResult = emailResults[1]

    // Log email results for debugging
    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', adminEmailResult.reason)
    }
    if (clientEmailResult.status === 'rejected') {
      console.error('Client email failed:', clientEmailResult.reason)
    }

    // Return success even if emails fail (inquiry is saved)
    const emailStatus = {
      adminEmailSent: adminEmailResult.status === 'fulfilled' && adminEmailResult.value?.success,
      clientEmailSent: clientEmailResult.status === 'fulfilled' && clientEmailResult.value?.success
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      inquiryId: inquiry.id,
      emailStatus // Include email status for debugging
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
