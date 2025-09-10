import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public routes & static files
const PUBLIC_PATHS = [
  "/signin",
  "/signup",
  "/_next/",
  "/favicon.ico",
  "/api/auth",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public routes & static files
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check JWT token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token) {
    return NextResponse.next();
  }

  // Redirect to signin if not authenticated
  const signInUrl = new URL("/signin", req.url);
  return NextResponse.redirect(signInUrl);
}
