import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

import { docs, getDoc } from "@/lib/docs"
import { pageMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return docs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) return {}
  return pageMetadata({ title: doc.title, description: doc.description, path: `/docs/${doc.slug}` })
}

// Content lives in content/docs/{slug}.mdx — wire an MDX loader (e.g. @next/mdx) when ready.
export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) notFound()
  return (
    <>
      <SiteHeader active="Docs" />
      <main className="mx-auto max-w-[760px] px-4 py-12">
        <h1 className="text-[40px] font-semibold tracking-[-0.03em]">{doc.title}</h1>
      </main>
      <SiteFooter />
    </>
  )
}
