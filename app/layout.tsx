import type { Metadata } from "next"

import { fontMono, fontSans } from "@/config/fonts"

import "@/styles/globals.css"

import { headers } from "next/headers"
import { defaultMeta } from "@/constants/seo"
import { ThemeProvider } from "@/providers/theme-provider"

import Footer from "@/components/widgets/footer"
import Nav from "@/components/widgets/nav"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  ...defaultMeta,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let nonce: string | undefined

  try {
    const headersList = await headers()
    nonce = headersList.get("x-nonce") ?? undefined
  } catch (error) {
    console.warn("Failed to retrieve headers:", error)
    nonce = undefined
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          nonce={nonce}
        >
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
