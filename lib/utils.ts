import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function baseUrl() {
  const appUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000"

  const baseUrl = new URL(
    appUrl.startsWith("http") ? appUrl : `https://${appUrl}`
  )
  return baseUrl
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl().toString()}${normalizedPath}`
}
