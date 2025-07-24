import { defineConfig, defineDocs } from "fumadocs-mdx/config"

export default defineConfig({
  mdxOptions: {
    rehypePlugins: () => {
      // Return empty array to disable all rehype plugins including syntax highlighting
      // This prevents CSP violations from rehype-pretty-code
      return []
    },
  },
})

export const docs = defineDocs({
  dir: "content/docs",
})
