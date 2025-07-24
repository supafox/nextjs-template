export interface Routes {
  marketing: Array<{
    label: string
    path: string
  }>
  documentation: Array<{
    label: string
    path: string
  }>
}

export const routes: Routes = {
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
