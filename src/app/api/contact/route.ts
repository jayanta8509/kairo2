import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Save contact submission to database
    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        company: company || null,
        service: service || null,
        message
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: submission.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
