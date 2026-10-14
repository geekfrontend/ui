import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { site } from "@/lib/site"
import { GitHubIcon, HarkeMark } from "@/components/icons/brand"
import { Kbd } from "@/components/ui/kbd"
import { ThemeToggle } from "@/components/site/theme-toggle"

// UI / Header (desktop) + UI / Header · Mobile collapse at md.
export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-site-line bg-site-bg/80 px-4 backdrop-blur md:px-10">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2.5 text-base">
          <span className="grid size-7 place-items-center rounded-sm bg-site-ink text-site-bg">
            <HarkeMark size={16} />
          </span>
          <span className="font-semibold">harke</span>
          <span className="font-medium text-site-mute">/ui</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === active ? "font-medium text-site-ink" : "text-site-soft hover:text-site-ink"}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.links.mobile} className="flex items-center gap-1.5 text-site-soft hover:text-site-ink">
            mobile.harke.dev
            <ArrowUpRight className="size-[13px] text-site-mute" />
            <span className="rounded-xs bg-accent-soft px-1.5 py-px text-[11px] font-medium text-accent">Soon</span>
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden h-9 w-[260px] items-center gap-2 rounded-md border border-site-border bg-site-surface pr-2 pl-3 text-sm text-site-mute md:flex">
          <Search className="size-4" />
          <span className="flex-1 text-left">Search components…</span>
          <Kbd className="w-[22px] justify-center px-0 text-xs">⌘</Kbd>
          <Kbd className="w-[22px] justify-center px-0 text-xs">K</Kbd>
        </button>
        <a href={site.links.github} aria-label="GitHub" className="grid size-9 place-items-center rounded-full pill-basic text-site-ink">
          <GitHubIcon size={18} />
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
