// Docs pages — shared by app/docs/[slug] and app/sitemap.ts.
export const docs = [
  {
    slug: "introduction",
    title: "Introduction",
    description:
      "harke/ui is a set of pixel-perfect custom components and blocks for React and Next.js — sliced in public and shipped as code you own.",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Set up Next.js, Tailwind CSS and Base UI, then add components from the @harke registry with the shadcn CLI.",
  },
  {
    slug: "theming",
    title: "Theming",
    description: "Every color, radius and shadow is a CSS variable. Change a token and every component follows — in light and dark.",
  },
  {
    slug: "cli",
    title: "CLI & Registry",
    description: "harke/ui is a shadcn registry. The CLI fetches JSON from ui.harke.dev/r and writes plain source files into your project.",
  },
] as const

export type DocSlug = (typeof docs)[number]["slug"]
export const getDoc = (slug: string) => docs.find((d) => d.slug === slug)
