import type { Metadata } from "next"

import { baseUrl } from "@/lib/utils"

const site = baseUrl()

export const defaultMeta: Metadata = {
  metadataBase: site,
  title: {
    default: "Next.js",
    template: "%s | Next.js",
  },
  description:
    "Built on a foundation of fast, production-grade tooling. Enhanced with powerful features.",
  authors: [{ name: "Next.js", url: site.href }],
  creator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Next.js",
    description:
      "Built on a foundation of fast, production-grade tooling. Enhanced with powerful features.",
    url: site.href,
    siteName: "Next.js",
    images: [
      {
        url: new URL("/opengraph/og-image.jpg", site).toString(),
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description:
      "Built on a foundation of fast, production-grade tooling. Enhanced with powerful features.",
    site: "@nextjs",
    creator: "@nextjs",
    images: [
      {
        url: new URL("/opengraph/twitter-image.jpg", site).toString(),
        width: 1600,
        height: 800,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon/icon0.svg", type: "image/svg+xml" },
      { url: "/favicon/icon1.png", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/web-app/web-app-manifest-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/web-app/web-app-manifest-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/web-app/manifest.json",
  appleWebApp: {
    title: "Next.js",
    statusBarStyle: "black-translucent",
    capable: true,
  },
}
