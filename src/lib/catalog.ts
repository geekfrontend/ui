// Single source of truth for the component catalog.
// Mirrors the "Preview / …" components in harke.dev.pen once they ship.
export type Tag = "nav" | "card" | "code" | "text" | "data" | "layout" | "cursor" | "input"

export type CatalogItem = {
  slug: string
  name: string
  description: string
  tag: Tag
  isNew?: boolean
  dependencies?: string[]
}

// Empty until the first components ship — pages render <EmptyState kind="components" />.
export const components: CatalogItem[] = []

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

// Empty until the first blocks ship — pages render <EmptyState kind="blocks" />.
export const blocks: BlockItem[] = []

// Complete sites built from harke/ui. Empty until the first template ships.
export type TemplateItem = {
  slug: string
  name: string
  description: string
  stack: string[]
}

export const templates: TemplateItem[] = []
