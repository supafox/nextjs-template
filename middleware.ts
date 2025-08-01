import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Generate a fixed-length random byte array for CSP nonce
  const nonceBytes = new Uint8Array(16) // 16 bytes = 128 bits
  crypto.getRandomValues(nonceBytes)
  const nonce = Buffer.from(nonceBytes).toString("base64")

  const cspHeader = `
    default-src 'self';
    script-src 'strict-dynamic' 'nonce-${nonce}' ${
      process.env.NODE_ENV === "production" ? "" : `'unsafe-eval'`
    };
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  )

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
