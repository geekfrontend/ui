import { pageMetadata } from "@/lib/metadata"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata = pageMetadata({
  title: "Changelog",
  description: "New components, blocks and fixes in harke/ui.",
  path: "/changelog",
})

// See "UI — Changelog" in harke.dev.pen
export default function ChangelogPage() {
  return (
    <>
      <SiteHeader active="Changelog" />
      <main className="px-4 py-16 md:px-10">
        <h1 className="text-5xl font-semibold tracking-[-0.035em]">Changelog</h1>
      </main>
      <SiteFooter />
    </>
  )
}
