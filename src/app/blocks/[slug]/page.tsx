import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

// "UI — Block · …" — full-width preview with viewport toggle, Installation, Built with.
export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <>
      <SiteHeader active="Blocks" />
      <main className="px-4 py-12 md:px-10">
        <h1 className="text-[44px] font-semibold tracking-[-0.03em]">{slug}</h1>
      </main>
      <SiteFooter />
    </>
  )
}
