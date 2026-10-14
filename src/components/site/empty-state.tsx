import Link from "next/link"
import { MousePointer2 } from "lucide-react"
import { site } from "@/lib/site"
import { InstagramIcon } from "@/components/icons/brand"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Kind = "components" | "blocks" | "templates"

const copy: Record<Kind, { eyebrow: string; title: string; description: string }> = {
  components: {
    eyebrow: "0 COMPONENTS · SLICING",
    title: "The first components are being sliced",
    description: "New pieces land here with every post. Follow along on Instagram and TikTok to catch them first.",
  },
  blocks: {
    eyebrow: "0 BLOCKS · ON THE BOARD",
    title: "Blocks are on the cutting board",
    description: "Full sections ship once the components they're built from are ready.",
  },
  templates: {
    eyebrow: "0 TEMPLATES · IN THE WORKS",
    title: "Templates are in the works",
    description: "Complete sites built from harke/ui — coming after the first components and blocks.",
  },
}

// "UI / Empty State" — shown while a catalog list is empty.
export function EmptyState({ kind, className }: { kind: Kind; className?: string }) {
  const { eyebrow, title, description } = copy[kind]

  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)}>
      <div className="flex flex-col items-center gap-7 rounded-lg bg-site-surface px-6 pt-12 pb-10 text-center elevation-panel">
        <GhostStack />
        <div className="flex max-w-md flex-col items-center gap-2.5">
          <p className="font-mono text-[11px] tracking-[0.5px] text-accent">{eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-balance">{title}</h3>
          <p className="text-[15px] leading-relaxed text-pretty text-site-soft">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a href={site.links.instagram} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "primary" })}>
            <InstagramIcon /> Follow @harke.dev
          </a>
          <Link href="/docs/introduction" className={buttonVariants({ variant: "basic" })}>
            Read the docs
          </Link>
        </div>
      </div>
    </div>
  )
}

// Three dashed "ghost" cards; the middle one sits in a Figma-style selection
// with a pixel "SOON" — same language as the Hello World card on Home.
function GhostStack() {
  return (
    <div aria-hidden className="relative h-[124px] w-[260px]">
      <div className="absolute top-4 left-2 h-24 w-20 -rotate-8 rounded-xl border border-dashed border-site-pip bg-site-bg" />
      <div className="absolute top-4 right-2 h-24 w-20 rotate-8 rounded-xl border border-dashed border-site-pip bg-site-bg" />
      <div className="absolute top-1 left-1/2 h-[104px] w-[104px] -translate-x-1/2 rotate-3">
        <div className="grid size-full place-items-center rounded-xl border border-dashed border-site-pip bg-site-surface">
          <span className="font-pixel text-[26px] leading-none font-bold tracking-wide text-accent">SOON</span>
        </div>
        <div className="absolute -inset-1.5 border-[1.5px] border-accent">
          {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-right-1 -bottom-1"].map((pos) => (
            <span key={pos} className={cn("absolute size-2 border-[1.5px] border-accent bg-site-surface", pos)} />
          ))}
        </div>
      </div>
      <div className="absolute right-6 bottom-0 flex flex-col items-start">
        <MousePointer2 className="size-4 fill-accent text-accent" />
        <span className="-mt-0.5 ml-3 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-white">harke</span>
      </div>
    </div>
  )
}
