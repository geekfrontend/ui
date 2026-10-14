"use client"

import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { components, type Tag } from "@/lib/catalog"
import { ComponentCard } from "@/components/site/component-card"
import { EmptyState } from "@/components/site/empty-state"
import { SectionHeader } from "@/components/site/home/section-header"
import { cn } from "@/lib/utils"

const filters: { label: string; tag?: Tag }[] = [
  { label: "All" },
  { label: "Cards", tag: "card" },
  { label: "Code", tag: "code" },
  { label: "Cursor", tag: "cursor" },
  { label: "Layout", tag: "layout" },
]

// Catalog order is newest first.
const indexed = components.map((item, index) => ({ item, index }))

export function ComponentsSection() {
  const [filter, setFilter] = useState<Tag | undefined>()
  const [newestFirst, setNewestFirst] = useState(true)

  const filtered = indexed.filter(({ item }) => !filter || item.tag === filter)
  const visible = (newestFirst ? filtered : [...filtered].reverse()).slice(0, 12)

  return (
    <section className="flex flex-col gap-6 px-4 pt-16 md:px-10">
      <SectionHeader
        eyebrow="01 / COMPONENTS"
        title="Components"
        description="Custom pieces you won't find in a UI kit — animated, raised, ready to paste."
        href="/components"
        cta={components.length ? `View all ${components.length}` : undefined}
      />
      {components.length === 0 ? (
        <EmptyState kind="components" />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div
              role="tablist"
              className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-site-surface-2 p-1 shadow-[inset_0_1px_2px_rgb(0_0_0/6%)]"
            >
              {filters.map((f) => {
                const active = filter === f.tag
                const count = f.tag ? components.filter((c) => c.tag === f.tag).length : components.length
                return (
                  <button
                    key={f.label}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f.tag)}
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-[7px] text-[13px] font-medium",
                      active
                        ? "border-site-border bg-site-surface text-site-ink shadow-[0_1px_2px_rgb(51_51_51/4%),0_6px_12px_rgb(51_51_51/4%)]"
                        : "border-transparent text-site-soft hover:text-site-ink",
                    )}
                  >
                    {f.label}
                    <span className="font-mono text-xs font-normal text-site-mute">{count}</span>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => setNewestFirst((v) => !v)}
              className="flex items-center gap-1.5 text-[13px] text-site-soft hover:text-site-ink"
            >
              {newestFirst ? "Newest first" : "Oldest first"}
              <ChevronsUpDown className="size-3.5" />
            </button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map(({ item, index }) => (
              <ComponentCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
