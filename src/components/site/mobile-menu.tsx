"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog } from "@base-ui/react/dialog"
import {
  BookOpen, ChevronRight, Component, LayoutGrid, LayoutTemplate, Menu, Rss, Search, Smartphone, X,
} from "lucide-react"
import { blocks, components } from "@/lib/catalog"
import { site } from "@/lib/site"
import { GitHubIcon, HarkeMark, InstagramIcon, ThreadsIcon, TikTokIcon } from "@/components/icons/brand"
import { ThemeSwitcher } from "@/components/site/theme-switcher"
import { SearchTrigger } from "@/components/site/command-menu"
import { cn } from "@/lib/utils"

// "UI — Mobile Menu" in harke.dev.pen — full-screen sheet opened from UI / Header · Mobile.
const meta: Record<string, { icon: React.ElementType; count?: number }> = {
  Components: { icon: Component, count: components.length },
  Blocks: { icon: LayoutTemplate, count: blocks.length },
  Templates: { icon: LayoutGrid },
  "From the feed": { icon: Rss },
  Docs: { icon: BookOpen },
}

const socials = [
  { href: site.links.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.links.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: site.links.threads, label: "Threads", icon: ThreadsIcon },
  { href: site.links.github, label: "GitHub", icon: GitHubIcon },
]

export const iconButton = "grid size-9 place-items-center rounded-full pill-basic text-site-ink [&_svg]:size-[17px]"

export function MobileMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger aria-label="Open menu" className={iconButton}>
        <Menu />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-site-bg text-site-ink transition-[opacity,translate] duration-200 ease-out data-ending-style:-translate-y-2 data-ending-style:opacity-0 data-starting-style:-translate-y-2 data-starting-style:opacity-0 lg:hidden">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-site-line px-4">
            <Link href="/" onClick={close} className="flex items-center gap-2 text-[15px]">
              <span className="grid size-[26px] place-items-center rounded-[7px] bg-site-ink text-site-bg">
                <HarkeMark size={15} />
              </span>
              <span className="font-semibold">harke</span>
              <span className="font-medium text-site-mute">/ui</span>
            </Link>
            <Dialog.Close
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-full bg-site-ink text-site-bg shadow-[0_1px_2px_rgb(27_28_29/48%),inset_0_1px_0_rgb(255_255_255/16%)]"
            >
              <X className="size-[17px]" />
            </Dialog.Close>
          </div>

          <div className="flex flex-1 flex-col gap-5 px-4 pt-5 pb-6">
            <SearchTrigger
              onClick={close}
              className="flex h-11 items-center gap-2.5 rounded-full bg-site-surface pr-2.5 pl-3.5 text-sm text-site-mute elevation-raised"
            >
              <Search className="size-4" />
              <span className="flex-1 text-left">Search components…</span>
              <kbd className="rounded-xs bg-site-surface-2 px-[7px] py-0.5 font-sans text-[11px] text-site-soft">⌘K</kbd>
            </SearchTrigger>

            <nav className="flex flex-col gap-1 rounded-2xl bg-ui-card p-1.5 elevation-wrapper">
              {site.nav.map((item) => {
                const { icon: Icon, count } = meta[item.label] ?? { icon: Component }
                const current = item.label === active
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex h-13 items-center gap-3 rounded-[14px] pr-3.5 pl-2 text-base",
                      current ? "bg-site-surface font-semibold elevation-panel" : "font-medium",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-9 place-items-center rounded-[10px] [&_svg]:size-[17px]",
                        current
                          ? "bg-accent bg-linear-to-b from-white/20 to-transparent text-white shadow-[0_2px_6px_rgb(51_102_255/25%),inset_0_1px_0_rgb(255_255_255/25%)]"
                          : "bg-site-surface-2 text-site-ink",
                      )}
                    >
                      <Icon />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {count !== undefined && <span className="font-mono text-xs font-normal text-site-mute">{count}</span>}
                    <ChevronRight className="size-4 text-site-mute" />
                  </Link>
                )
              })}
            </nav>

            <div aria-disabled="true" className="flex cursor-not-allowed items-center gap-2.5 rounded-[14px] bg-site-surface-2 px-3.5 py-3 text-sm text-site-mute shadow-[inset_0_1px_2px_rgb(0_0_0/6%)] select-none">
              <Smartphone className="size-4" />
              <span className="flex-1">mobile.harke.dev</span>
              <span className="rounded-full bg-site-bg px-[7px] py-px font-mono text-[10px] text-site-soft">Coming soon</span>
            </div>

            <div className="mt-auto flex flex-col gap-2.5">
              <p className="text-xs font-semibold text-site-mute">Appearance</p>
              <ThemeSwitcher variant="segmented" />
            </div>

            <div className="flex items-center justify-between px-0.5 pt-1.5">
              <p className="text-xs text-site-mute">©2026 harke.dev</p>
              <div className="flex gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full bg-site-surface text-site-ink elevation-raised"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
