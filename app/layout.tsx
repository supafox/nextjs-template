import type { Metadata } from "next"

import { fontMono, fontSans } from "@/config/fonts"

import "@/styles/globals.css"

import { headers } from "next/headers"
import { defaultMeta } from "@/constants/seo"
import { ThemeProvider } from "@/providers/theme-provider"

import Footer from "@/components/widgets/footer"
import Nav from "@/components/widgets/nav"

export const metadata: Metadata = {
  ...defaultMeta,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const nonce = headersList.get("x-nonce") ?? undefined

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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
