import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  // Generate a random CSP nonce
  const nonceBytes = new Uint8Array(16)
  crypto.getRandomValues(nonceBytes)
  // Convert to base64 without using Buffer (Edge runtime compatible)
  const nonce = btoa(
    Array.from(nonceBytes, (byte) => String.fromCharCode(byte)).join("")
  )

  const cspHeader = `
    default-src 'self';
    script-src 'strict-dynamic' 'nonce-${nonce}' ${
      process.env.NODE_ENV === "production" ? "" : `'unsafe-eval'`
    };
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self' https://vitals.vercel-insights.com https://cdn.vercel-insights.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim()

  // Clone request headers and set x-nonce so Server Components can read it
  const forwardedRequestHeaders = new Headers(request.headers)
  forwardedRequestHeaders.set("x-nonce", nonce)

  // For normal flows, pass the cloned headers (with nonce) forward
  const response = NextResponse.next({
    request: { headers: forwardedRequestHeaders },
  })

  // Set security headers on the response
  response.headers.set("x-nonce", nonce)
  response.headers.set("Content-Security-Policy", cspHeader)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source:
        "/((?!api|_next/static|_next/image|favicon|web-app|opengraph|images).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
}
