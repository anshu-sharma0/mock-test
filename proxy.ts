import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key_change_me_in_prod";
const key = new TextEncoder().encode(JWT_SECRET);

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  // Define public paths that shouldn't be protected
  const isPublicPath = path === "/" || path.startsWith("/api") || path.startsWith("/_next") || path.includes(".");
  
  // Auth paths
  const isAuthPath = path.startsWith("/auth");

  // If no token
  if (!token) {
    if (isAuthPath || isPublicPath) {
      return NextResponse.next();
    }
    // Redirect to login if trying to access protected routes without token
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Verify token
  try {
    const { payload } = await jwtVerify(token, key);
    const role = payload.role as string;

    // Redirect authenticated users away from auth pages
    if (isAuthPath) {
      if (role === "Admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else if (role === "Creator") {
        return NextResponse.redirect(new URL("/creator", request.url));
      } else {
        return NextResponse.redirect(new URL("/app", request.url));
      }
    }

    // Role-based route protection
    if (path.startsWith("/admin") && role !== "Admin") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (path.startsWith("/creator") && role !== "Creator" && role !== "Admin") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (path.startsWith("/app") && role !== "Student") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Invalid token, clear it and redirect to login
    const response = NextResponse.redirect(new URL("/auth/login", request.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
