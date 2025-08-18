type Route = {
  label: string
  path: string
  allowSubpaths?: boolean
}

export interface Routes {
  error: Route[]
  marketing: Route[]
  documentation: Route[]
}

export const routes: Routes = {
  error: [
    {
      label: "Auth Error",
      path: "/auth/error",
    },
  ],
  marketing: [
    {
      label: "Home",
      path: "/",
    },
  ],
  documentation: [
    {
      label: "Docs",
      path: "/docs",
      allowSubpaths: true,
    },
    {
      label: "Code Showcase",
      path: "/docs/code-showcase",
    },
    {
      label: "Image Showcase",
      path: "/docs/image-showcase",
    },
    {
      label: "Lorem Ipsum",
      path: "/docs/lorem-ipsum",
    },
    {
      label: "Table Showcase",
      path: "/docs/table-showcase",
    },
    {
      label: "Typography Showcase",
      path: "/docs/typography-showcase",
    },
  ],
}

// Centralized home route constant
export const homeRoute =
  routes.marketing.find((r) => r.path === "/")?.path || "/"

// Utility function to check if a route is active, respecting allowSubpaths
export function isRouteActive(
  currentPath: string,
  routePath: string,
  allowSubpaths?: boolean
): boolean {
  // Special-case root to avoid making every path active
  if (routePath === "/") {
    return currentPath === "/"
  }

  // Normalise to handle accidental trailing slashes in config or path
  const normalize = (p: string) =>
    p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p

  if (normalize(currentPath) === normalize(routePath)) return true

  if (allowSubpaths) {
    // For routes that allow subpaths, check if current path starts with the route path
    // but ensure we're at a segment boundary (not just a partial match)
    const base = normalize(routePath)
    return currentPath.startsWith(base + "/")
  }

  return false
}
