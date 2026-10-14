import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { components, getComponent } from "@/lib/catalog"
import { pageMetadata } from "@/lib/metadata"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { CodeBlock } from "@/components/site/code-block"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = getComponent(slug)
  if (!item) return {}
  return pageMetadata({
    title: `${item.name} — React component`,
    description: item.description,
    path: `/components/${item.slug}`,
  })
}

// "UI — Component · Pill Dock" — Preview, Customize, Installation, Usage, Props, Dependencies, Related.
export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getComponent(slug)
  if (!item) notFound()

  return (
    <>
      <SiteHeader active="Components" />
      <main className="mx-auto flex max-w-[960px] flex-col gap-14 px-4 py-12 md:px-14">
        <header className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <h1 className="text-[40px] font-semibold tracking-[-0.03em]">{item.name}</h1>
            {item.isNew && <Badge>New</Badge>}
          </div>
          <p className="text-[17px] leading-relaxed text-site-body">{item.description}</p>
        </header>
        {/* TODO: <Preview /> + <CustomizePanel /> per component (see src/registry/harke/{slug}) */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold tracking-tight">Installation</h2>
          <CodeBlock code={`pnpm dlx shadcn@latest add @harke/${item.slug}`} />
        </section>
        {item.dependencies && (
          <section className="flex flex-col gap-4">
            <h2 className="text-[22px] font-semibold tracking-tight">Dependencies</h2>
            <div className="flex gap-2">
              {item.dependencies.map((d) => (
                <span key={d} className="rounded-full bg-site-surface px-3 py-1.5 font-mono text-xs elevation-raised">{d}</span>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
