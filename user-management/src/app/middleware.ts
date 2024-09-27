import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';

export async function middleware(req: NextRequest) {
  console.log('Middleware triggered');

  // Check session
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log('Unauthorized - No session');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Allow requests from specific origin (your frontend URL)
  const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests (OPTIONS method)
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*',  // This applies the middleware to all API routes
};
