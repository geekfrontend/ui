import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata = { title: "Blocks" }

// See "UI — Blocks" in harke.dev.pen
export default function BlocksPage() {
  return (
    <>
      <SiteHeader active="Blocks" />
      <main className="px-4 py-16 md:px-10">
        <h1 className="text-5xl font-semibold tracking-[-0.035em]">Blocks</h1>
      </main>
      <SiteFooter />
    </>
  )
}
