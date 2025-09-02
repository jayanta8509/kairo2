import { PrismaClient } from '@prisma/client'

declare global {
  var __db: PrismaClient | undefined
}

const db = globalThis.__db ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : [],
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.__db = db
}

export { db }