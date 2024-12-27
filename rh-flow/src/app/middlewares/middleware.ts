import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { connectDB } from '../config/db.config'

let isConnected = false;

export async function middleware(request: NextRequest) {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
} 