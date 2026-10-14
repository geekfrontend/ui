// Single source of truth for the component catalog.
// Mirrors the 16 "Preview / …" components in harke.dev.pen.
export type Tag = "nav" | "card" | "code" | "text" | "data" | "layout" | "cursor" | "input"

export type CatalogItem = {
  slug: string
  name: string
  description: string
  tag: Tag
  isNew?: boolean
  dependencies?: string[]
}

export const components: CatalogItem[] = [
  { slug: "pill-dock", name: "Pill Dock", description: "A raised dock that magnifies on hover.", tag: "nav", isNew: true, dependencies: ["motion"] },
  { slug: "raised-card", name: "Raised Card", description: "Embossed card with a glare that follows the cursor.", tag: "card", dependencies: ["motion"] },
  { slug: "terminal-card", name: "Terminal Card", description: "A terminal that types itself, line by line.", tag: "code" },
  { slug: "pixel-text", name: "Pixel Text", description: "Headlines that resolve pixel by pixel.", tag: "text", dependencies: ["motion"] },
  { slug: "stat-ticker", name: "Stat Ticker", description: "Numbers count up, bars grow in.", tag: "data", dependencies: ["motion"] },
  { slug: "code-peek", name: "Code Peek", description: "Lift the preview to peek at the code.", tag: "code", dependencies: ["motion"] },
  { slug: "browser-frame", name: "Browser Frame", description: "A browser window with URL pill and scroll.", tag: "layout" },
  { slug: "selection-box", name: "Selection Box", description: "Figma-style selection with handles and size.", tag: "cursor", isNew: true },
  { slug: "cursor-tag", name: "Cursor Tag", description: "Multiplayer cursors with name pills.", tag: "cursor", dependencies: ["motion"] },
  { slug: "pill-nav", name: "Pill Nav", description: "Pill navigation with a sliding indicator.", tag: "nav", dependencies: ["motion"] },
  { slug: "copy-pill", name: "Copy Pill", description: "An install command that flips to a check.", tag: "code" },
  { slug: "feed-stack", name: "Feed Stack", description: "Stacked posts that fan out on hover.", tag: "card", dependencies: ["motion"] },
  { slug: "spotlight-card", name: "Spotlight Card", description: "A dark card lit by your cursor.", tag: "card" },
  { slug: "tech-marquee", name: "Tech Marquee", description: "An endless strip of stack pills.", tag: "layout" },
  { slug: "keycap", name: "Keycap", description: "3D keys that press down. ⌘K included.", tag: "input", isNew: true },
  { slug: "grid-paper", name: "Grid Paper", description: "A snapping grid paper canvas.", tag: "layout" },
]

export const getComponent = (slug: string) => components.find((c) => c.slug === slug)

// Mirrors the "Block — …" cards on "UI — Home" in harke.dev.pen.
export type BlockItem = {
  slug: string
  code: string
  name: string
  description: string
  tag: "marketing" | "application"
  isNew?: boolean
}

export const blocks: BlockItem[] = [
  { slug: "pricing-section", code: "B01", name: "Pricing Section", description: "Three tiers with a monthly / yearly switch.", tag: "marketing" },
  { slug: "dashboard-shell", code: "B02", name: "Dashboard Shell", description: "Sidebar, stat tiles and a revenue chart.", tag: "application", isNew: true },
  { slug: "auth-split", code: "B03", name: "Auth Split", description: "Sign-in form next to a brand panel.", tag: "application" },
  { slug: "hero-section", code: "B04", name: "Hero Section", description: "Headline, CTAs and a product shot, ready for launch.", tag: "marketing", isNew: true },
]
