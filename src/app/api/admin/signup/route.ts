import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

const ADMIN_REGISTRATION_KEY = process.env.ADMIN_REGISTRATION_KEY || 'KAIRO_ADMIN_2024_SECRET_KEY'
const MAX_ADMIN_ACCOUNTS = parseInt(process.env.MAX_ADMIN_ACCOUNTS || '1')

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, registrationKey } = await request.json()

    // Security Check 1: Validate registration key
    if (!registrationKey || registrationKey !== ADMIN_REGISTRATION_KEY) {
      return NextResponse.json(
        { success: false, message: 'Invalid registration key. Access denied.' },
        { status: 403 }
      )
    }

    // Security Check 2: Check if max admin accounts reached
    const adminCount = await db.adminUser.count()
    if (adminCount >= MAX_ADMIN_ACCOUNTS) {
      return NextResponse.json(
        { success: false, message: 'Maximum number of admin accounts reached. Registration disabled.' },
        { status: 403 }
      )
    }

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        { success: false, message: 'Password must contain uppercase, lowercase, number, and special character' },
        { status: 400 }
      )
    }

    // Check if admin user already exists
    const existingUser = await db.adminUser.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password with higher rounds for security
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    const adminUser = await db.adminUser.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      user: {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email
      }
    })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
