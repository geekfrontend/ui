"use client"

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog } from "@base-ui/react/dialog"
import {
  Code, CornerDownLeft, CreditCard, Keyboard, LayoutGrid, LayoutTemplate, MousePointer2, Navigation, Search, Signal, Type,
} from "lucide-react"
import { blocks, components, type Tag } from "@/lib/catalog"
import { useCopy } from "@/hooks/use-copy"
import { Kbd } from "@/components/ui/kbd"
import { cn } from "@/lib/utils"

// "State · Command" (⌘K) on UI — States in harke.dev.pen.
type Item = {
  id: string
  group: "Components" | "Blocks"
  name: string
  meta: string
  href: string
  icon: React.ElementType
  keywords: string
  install?: string
}

const tagIcons: Record<Tag, React.ElementType> = {
  nav: Navigation,
  card: CreditCard,
  code: Code,
  text: Type,
  data: Signal,
  layout: LayoutGrid,
  cursor: MousePointer2,
  input: Keyboard,
}

const items: Item[] = [
  ...components.map((c) => ({
    id: `component:${c.slug}`,
    group: "Components" as const,
    name: c.name,
    meta: c.tag,
    href: `/components/${c.slug}`,
    icon: tagIcons[c.tag],
    keywords: `${c.name} ${c.slug} ${c.tag} ${c.description}`.toLowerCase(),
    install: `pnpm dlx shadcn@latest add @harke/${c.slug}`,
  })),
  ...blocks.map((b) => ({
    id: `block:${b.slug}`,
    group: "Blocks" as const,
    name: b.name,
    meta: "block",
    href: `/blocks/${b.slug}`,
    icon: LayoutTemplate,
    keywords: `${b.name} ${b.slug} ${b.tag} ${b.description}`.toLowerCase(),
  })),
]

const SearchContext = createContext<{ open: () => void } | null>(null)

export function useSearch() {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error("useSearch must be used inside <SearchProvider>")
  return ctx
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const value = useMemo(() => ({ open: () => setOpen(true) }), [])

  return (
    <SearchContext.Provider value={value}>
      {children}
      <CommandMenu open={open} onOpenChange={setOpen} />
    </SearchContext.Provider>
  )
}

// Any element that should open the palette (header search, mobile icon, …).
export function SearchTrigger({ onClick, ...props }: React.ComponentProps<"button">) {
  const { open } = useSearch()
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e)
        open()
      }}
      {...props}
    />
  )
}

function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState("")
  const [activeId, setActiveId] = useState<string>()
  const { copied, copy } = useCopy()

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
    return items.filter((item) => terms.every((t) => item.keywords.includes(t)))
  }, [query])

  const groups = useMemo(
    () => (["Components", "Blocks"] as const)
      .map((group) => ({ group, items: results.filter((r) => r.group === group) }))
      .filter((g) => g.items.length > 0),
    [results],
  )

  const active = results.find((r) => r.id === activeId) ?? results[0]

  useEffect(() => {
    if (!active) return
    listRef.current?.querySelector(`[data-id="${CSS.escape(active.id)}"]`)?.scrollIntoView({ block: "nearest" })
  }, [active])

  const go = (item: Item) => {
    onOpenChange(false)
    router.push(item.href)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const index = active ? results.indexOf(active) : -1
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
      if (!results.length) return
      const next = (index + (e.key === "ArrowDown" ? 1 : -1) + results.length) % results.length
      setActiveId(results[next].id)
    } else if (e.key === "Enter" && active) {
      e.preventDefault()
      go(active)
    } else if (e.key.toLowerCase() === "c" && (e.metaKey || e.ctrlKey) && active?.install) {
      const el = e.currentTarget
      if (el.selectionStart !== el.selectionEnd) return
      e.preventDefault()
      copy(active.install)
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next)
        if (!next) {
          setQuery("")
          setActiveId(undefined)
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-[#0a0a0a]/35 backdrop-blur-[2px] transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          initialFocus={inputRef}
          className="fixed top-4 left-1/2 z-50 flex max-h-[calc(100dvh-32px)] w-[620px] max-w-[calc(100vw-32px)] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-ui-ring bg-site-surface text-site-ink shadow-[0_24px_64px_rgb(0_0_0/25%),inset_0_1px_0_var(--ui-highlight)] transition-[opacity,scale] duration-150 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0 sm:top-[110px] sm:max-h-[calc(100dvh-140px)]"
        >
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <div className="flex h-14 shrink-0 items-center gap-3 border-b border-site-line pr-4 pl-[18px]">
            <Search className="size-[18px] shrink-0 text-site-soft" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveId(undefined)
              }}
              onKeyDown={onKeyDown}
              placeholder="Search components and blocks…"
              aria-label="Search components and blocks"
              aria-activedescendant={active ? `cmd-${active.id}` : undefined}
              aria-controls="cmd-results"
              role="combobox"
              aria-expanded
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-base caret-accent outline-none placeholder:text-site-mute"
            />
            <Dialog.Close className="inline-flex h-[22px] items-center rounded-xs bg-site-surface-2 px-1.5 text-[11px] text-site-soft hover:text-site-ink">
              esc
            </Dialog.Close>
          </div>

          <div ref={listRef} id="cmd-results" role="listbox" className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto p-2">
            {groups.length === 0 && (
              <p className="px-2.5 py-10 text-center text-sm text-site-soft">No results for “{query}”.</p>
            )}
            {groups.map(({ group, items }) => (
              <div key={group} role="group" aria-label={group} className="flex flex-col gap-0.5">
                <p className="px-2.5 pt-2.5 pb-1 text-[11px] font-semibold tracking-[0.4px] text-site-mute uppercase">{group}</p>
                {items.map((item) => {
                  const selected = item.id === active?.id
                  const Icon = item.icon
                  return (
                    <div
                      key={item.id}
                      id={`cmd-${item.id}`}
                      data-id={item.id}
                      role="option"
                      aria-selected={selected}
                      onMouseMove={() => setActiveId(item.id)}
                      onClick={() => go(item)}
                      className={cn(
                        "flex h-10 shrink-0 cursor-pointer items-center gap-3 rounded-[10px] px-2.5",
                        selected && "bg-site-surface-2",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-[7px] [&_svg]:size-[13px]",
                          selected ? "bg-accent text-white" : "bg-site-surface-2 text-site-soft",
                        )}
                      >
                        <Icon />
                      </span>
                      <span className={cn("flex-1 truncate text-sm", selected && "font-medium")}>{item.name}</span>
                      <span className="font-mono text-[11px] text-site-mute">{item.meta}</span>
                      {selected && <CornerDownLeft className="size-3.5 text-site-soft" />}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="hidden h-11 shrink-0 items-center gap-4 border-t border-site-line bg-site-bg px-4 text-xs text-site-soft sm:flex">
            <span className="flex items-center gap-1.5"><Kbd>↑↓</Kbd>navigate</span>
            <span className="flex items-center gap-1.5"><Kbd>↵</Kbd>open</span>
            {active?.install && (
              <span className="flex items-center gap-1.5"><Kbd>⌘C</Kbd>{copied ? "copied!" : "copy install"}</span>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
