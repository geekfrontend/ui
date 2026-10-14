import type { MetadataRoute } from "next"
import { blocks, components } from "@/lib/catalog"
import { docs } from "@/lib/docs"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const url = (path: string) => `${site.url}${path}`

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/components"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/blocks"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/templates"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/feed"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/changelog"), lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    ...components.map((c) => ({
      url: url(`/components/${c.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blocks.map((b) => ({
      url: url(`/blocks/${b.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...docs.map((d) => ({
      url: url(`/docs/${d.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
