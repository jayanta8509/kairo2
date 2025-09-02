import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Simple rate limiting store (in production, use Redis or database)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()
const MAX_ATTEMPTS = 5
const LOCKOUT_TIME = 15 * 60 * 1000 // 15 minutes

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Rate limiting check
    const clientId = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const now = Date.now()
    const attempts = loginAttempts.get(clientId)
    
    if (attempts && attempts.count >= MAX_ATTEMPTS && (now - attempts.lastAttempt) < LOCKOUT_TIME) {
      const remainingTime = Math.ceil((LOCKOUT_TIME - (now - attempts.lastAttempt)) / 60000)
      return NextResponse.json(
        { success: false, message: `Too many failed attempts. Try again in ${remainingTime} minutes.` },
        { status: 429 }
      )
    }

    // Find admin user
    const adminUser = await db.adminUser.findUnique({
      where: { email }
    })

    if (!adminUser) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, adminUser.password)

    if (!adminUser || !isValidPassword) {
      // Record failed attempt
      const currentAttempts = loginAttempts.get(clientId) || { count: 0, lastAttempt: 0 }
      loginAttempts.set(clientId, { 
        count: currentAttempts.count + 1, 
        lastAttempt: now 
      })
      
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Clear failed attempts on successful login
    loginAttempts.delete(clientId)

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: adminUser.id,
        email: adminUser.email,
        name: adminUser.name
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
