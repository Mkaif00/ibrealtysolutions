// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const url = req.url

  if (url.startsWith('/admin') && !url.startsWith('/admin/login')) {
    // ...
  }
  return NextResponse.next()
}