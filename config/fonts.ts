import { Geist, Geist_Mono } from "next/font/google"

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})
