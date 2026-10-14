import { pageMetadata } from "@/lib/metadata"
import { SiteHeader } from "@/components/site/site-header"
import { FooterFeature } from "@/components/site/footer-feature"

export const metadata = pageMetadata({
  title: "From the feed",
  description: "Every Instagram and TikTok post from @harke.dev, with the code behind it.",
  path: "/feed",
})

// "UI — From the Feed" — the only page with the TRAE-style feature footer.
export default function FeedPage() {
  return (
    <>
      <SiteHeader active="From the feed" />
      <main className="px-4 py-16 md:px-10">
        <p className="font-mono text-xs tracking-wide text-accent">03 / FROM THE FEED</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-[-0.035em] md:text-[56px]">From the feed</h1>
      </main>
      <FooterFeature />
    </>
  )
}
