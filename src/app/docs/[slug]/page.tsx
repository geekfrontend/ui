import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

const docs = ["introduction", "installation", "theming", "cli"] as const

export function generateStaticParams() {
  return docs.map((slug) => ({ slug }))
}

// Content lives in content/docs/{slug}.mdx — wire an MDX loader (e.g. @next/mdx) when ready.
export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!docs.includes(slug as (typeof docs)[number])) notFound()
  return (
    <>
      <SiteHeader active="Docs" />
      <main className="mx-auto max-w-[760px] px-4 py-12">
        <h1 className="text-[40px] font-semibold capitalize tracking-[-0.03em]">{slug}</h1>
      </main>
      <SiteFooter />
    </>
  )
}
