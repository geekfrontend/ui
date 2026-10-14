import { blocks } from "@/lib/catalog"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlockCard } from "@/components/site/block-card"
import { Hero } from "@/components/site/home/hero"
import { ComponentsSection } from "@/components/site/home/components-section"
import { SectionHeader } from "@/components/site/home/section-header"
import { FeedBand } from "@/components/site/home/feed-band"

// "UI — Home" — hero, Components (first 12), Blocks, feed band.
export default function HomePage() {
  return (
    <>
      <SiteHeader active="Components" />
      <main>
        <Hero />
        <ComponentsSection />
        <section className="flex flex-col gap-6 px-4 pt-24 md:px-10">
          <SectionHeader
            eyebrow="02 / BLOCKS"
            title="Blocks"
            description="Full sections and screens, built from the components above."
            href="/blocks"
            cta="View all 42"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {blocks.map((item) => (
              <BlockCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
        <FeedBand />
      </main>
      <SiteFooter />
    </>
  )
}
