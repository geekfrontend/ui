import { pageMetadata } from "@/lib/metadata"
import { components } from "@/lib/catalog"
import { ComponentCard } from "@/components/site/component-card"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata = pageMetadata({
  title: "Components",
  description: "Custom, animated React components — raised, pixel-perfect and installable as source with the shadcn CLI.",
  path: "/components",
})

export default function ComponentsPage() {
  return (
    <>
      <SiteHeader active="Components" />
      <main className="flex flex-col gap-6 px-4 py-16 md:px-10">
        <p className="font-mono text-xs tracking-wide text-accent">01 / COMPONENTS</p>
        <h1 className="text-5xl font-semibold tracking-[-0.035em] md:text-[56px]">Components</h1>
        <p className="text-lg text-site-body">{components.length} custom components — animated, raised, and made in public.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {components.map((item, i) => (
            <ComponentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
