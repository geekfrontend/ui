import type { Metadata } from "next"
import { site } from "@/lib/site"

// Page-level openGraph/twitter objects replace the root ones (no deep merge),
// so every page builds the full set here to keep siteName, type and card intact.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const shareTitle = `${title} — ${site.name}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url: path, title: shareTitle, description },
    twitter: { card: "summary_large_image", title: shareTitle, description },
  }
}
