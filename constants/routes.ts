// Type definitions for route structures
export interface MarketingRoutes {
  home: string
}

export interface DocsRoutes {
  home: string
  codeShowcase: string
  imageShowcase: string
  loremIpsum: string
  tableShowcase: string
  typographyShowcase: string
}

export interface Routes {
  marketing: MarketingRoutes
  docs: DocsRoutes
}

export interface ExternalRoutes {
  learn: string
  examples: string
  goToNextjs: string
  vercelDeployment: string
  nextjs: string
}

export interface NavItem {
  label: string
  href: string
}

export type MainNav = NavItem[]

// Route definitions with explicit typing
export const routes: Routes = {
  marketing: {
    home: "/",
  },
  docs: {
    home: "/docs",
    codeShowcase: "/docs/code-showcase",
    imageShowcase: "/docs/image-showcase",
    loremIpsum: "/docs/lorem-ipsum",
    tableShowcase: "/docs/table-showcase",
    typographyShowcase: "/docs/typography-showcase",
  },
}

// External URL constants to avoid duplication
const NEXTJS_URL =
  "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
const NEXTJS_LEARN_URL =
  "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
const VERCEL_TEMPLATES_URL =
  "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

export const externalRoutes: ExternalRoutes = {
  learn: NEXTJS_LEARN_URL,
  examples: VERCEL_TEMPLATES_URL,
  goToNextjs: NEXTJS_URL,
  vercelDeployment: VERCEL_TEMPLATES_URL,
  nextjs: NEXTJS_URL,
}

export const mainNav: MainNav = [
  {
    label: "Home",
    href: routes.marketing.home,
  },
  {
    label: "Docs",
    href: routes.docs.home,
  },
]
