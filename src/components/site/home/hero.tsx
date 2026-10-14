import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { FeaturedSnippet } from "@/components/site/home/featured-snippet"
import { cn } from "@/lib/utils"

// "UI — Home" › Hero — copy on the left, № 000 featured snippet on the right.
export function Hero() {
  return (
    <section className="flex flex-col gap-12 border-b border-site-line px-4 py-16 md:px-10 md:py-[72px] lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-1 flex-col gap-7">
        <Link
          href="/feed"
          className="flex w-fit max-w-full items-center gap-2.5 rounded-full border border-site-border bg-site-surface py-1.5 pr-3 pl-1.5 hover:bg-site-surface-2"
        >
          <span className="shrink-0 rounded-full bg-accent px-2 py-[3px] font-mono text-xs font-medium text-white">№ 000</span>
          <span className="truncate text-[13px] text-site-body">Hello World block is live — straight from the feed</span>
          <ArrowRight className="size-3.5 shrink-0 text-site-soft" />
        </Link>
        <h1 className="text-[44px] leading-[1.02] font-semibold tracking-[-0.035em] sm:text-6xl md:text-7xl">
          Pixel-perfect UI,
          <br />
          ready to copy.
        </h1>
        <p className="max-w-[620px] text-[17px] leading-normal text-site-body md:text-[19px]">
          Components and blocks sliced from real designs, built on Base UI and Tailwind for React and Next.js. Every post on
          the feed ships with its code here.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/components" className={buttonVariants({ variant: "neutral", size: "lg" })}>
            Browse components
          </Link>
          <Link href="/docs/installation" className={cn(buttonVariants({ variant: "basic", size: "lg" }), "font-mono text-[13px] font-normal")}>
            <Terminal />
            pnpm dlx shadcn add @harke/…
          </Link>
        </div>
      </div>
      <FeaturedSnippet className="w-full lg:w-[540px] lg:shrink-0" />
    </section>
  )
}
