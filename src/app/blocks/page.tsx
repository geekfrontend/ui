import { pageMetadata } from "@/lib/metadata"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlockCard } from "@/components/site/block-card"
import { EmptyState } from "@/components/site/empty-state"
import { blocks } from "@/lib/catalog"

export const metadata = pageMetadata({
  title: "Blocks",
  description: "Full sections and screens built from harke/ui components — pricing, dashboards, auth and heroes.",
  path: "/blocks",
})

// See "UI — Blocks" in harke.dev.pen
export default function BlocksPage() {
  return (
    <>
      <SiteHeader active="Blocks" />
      <main className="flex flex-col gap-6 px-4 py-16 md:px-10">
        <p className="font-mono text-xs tracking-wide text-accent">02 / BLOCKS</p>
        <h1 className="text-5xl font-semibold tracking-[-0.035em] md:text-[56px]">Blocks</h1>
        <p className="text-lg text-site-body">Full sections and screens, built from the components.</p>
        {blocks.length === 0 ? (
          <EmptyState kind="blocks" className="mt-4" />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {blocks.map((item) => (
              <BlockCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
