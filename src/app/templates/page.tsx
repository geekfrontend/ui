import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata = { title: "Templates" }

// See "UI — Templates" in harke.dev.pen
export default function TemplatesPage() {
  return (
    <>
      <SiteHeader active="Templates" />
      <main className="px-4 py-16 md:px-10">
        <h1 className="text-5xl font-semibold tracking-[-0.035em]">Templates</h1>
      </main>
      <SiteFooter />
    </>
  )
}
