export const site = {
  name: "harke/ui",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ui.harke.dev",
  description:
    "Custom React components, blocks and templates — sliced in public, built on Base UI and Tailwind.",
  nav: [
    { label: "Components", href: "/components" },
    { label: "Blocks", href: "/blocks" },
    { label: "Templates", href: "/templates" },
    { label: "From the feed", href: "/feed" },
    { label: "Docs", href: "/docs/introduction" },
  ],
  links: {
    instagram: "https://instagram.com/harke.dev",
    tiktok: "https://tiktok.com/@harke.dev",
    threads: "https://threads.net/@harke.dev",
    github: "https://github.com/geekfrontend/ui",
    home: "https://harke.dev",
    mobile: "https://mobile.harke.dev",
    license: "https://github.com/geekfrontend/ui/blob/main/LICENSE",
  },
} as const
