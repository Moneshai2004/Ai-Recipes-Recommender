import { type NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message : "Backend is working fine"
  })
}