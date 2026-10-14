import { pageMetadata } from "@/lib/metadata"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { EmptyState } from "@/components/site/empty-state"
import { templates } from "@/lib/catalog"

export const metadata = pageMetadata({
  title: "Templates",
  description: "Complete Next.js sites built from harke/ui. Clone, swap the content, deploy.",
  path: "/templates",
})

// See "UI — Templates" in harke.dev.pen
export default function TemplatesPage() {
  return (
    <>
      <SiteHeader active="Templates" />
      <main className="flex flex-col gap-6 px-4 py-16 md:px-10">
        <p className="font-mono text-xs tracking-wide text-accent">03 / TEMPLATES</p>
        <h1 className="text-5xl font-semibold tracking-[-0.035em] md:text-[56px]">Templates</h1>
        <p className="text-lg text-site-body">Complete Next.js sites built from harke/ui. Clone, swap the content, deploy.</p>
        {templates.length === 0 && <EmptyState kind="templates" className="mt-4" />}
      </main>
      <SiteFooter />
    </>
  )
}
