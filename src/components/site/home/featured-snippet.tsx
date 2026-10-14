"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { useCopy } from "@/hooks/use-copy"
import { buttonVariants } from "@/components/ui/button"
import { StatCardPreview } from "@/components/site/previews"
import { cn } from "@/lib/utils"

// Hero "Featured" card — № 000 from the feed, with Preview / Code tabs.
const c = {
  comment: "text-[#6f6c69]",
  keyword: "text-[#ff7ab2]",
  tag: "text-[#7aa2ff]",
  attr: "text-[#ffc66d]",
  string: "text-[#9be38f]",
  plain: "text-[#ededed]",
}

type Token = [keyof typeof c, string]

const lines: Token[][] = [
  [["comment", "// ui.harke.dev/000-hello-world"]],
  [["keyword", "import "], ["plain", "{ Card } "], ["keyword", "from "], ["string", '"@/components/ui/card"']],
  [],
  [["keyword", "export function "], ["tag", "StatCard"], ["plain", "() {"]],
  [["keyword", "  return "], ["plain", "("]],
  [["tag", "    <Card "], ["attr", "className"], ["plain", "="], ["string", '"p-4 gap-2"'], ["tag", ">"]],
  [["tag", "      <Delta "], ["attr", "value"], ["plain", "={12.4}"], ["tag", " />"]],
  [["tag", "      <Value>"], ["plain", "$48,210"], ["tag", "</Value>"]],
  [["tag", "      <Bars "], ["attr", "data"], ["plain", "={revenue}"], ["tag", " />"]],
  [["tag", "    </Card>"]],
  [["plain", "  )"]],
  [["plain", "}"]],
]

const source = lines.map((l) => l.map(([, t]) => t).join("")).join("\n")
const stack = ["Base UI", "React", "Next.js", "TypeScript", "Tailwind"]

export function FeaturedSnippet({ className }: { className?: string }) {
  const [tab, setTab] = useState<"preview" | "code">("code")
  const { copied, copy } = useCopy()

  return (
    <div className={cn("flex flex-col rounded-2xl bg-ui-card p-1 elevation-wrapper", className)}>
      <div className="flex items-center justify-between py-3 pr-3 pl-4">
        <span className="flex items-center gap-2 font-mono">
          <span className="text-xs text-accent">№ 000</span>
          <span className="text-[13px]">stat-card.tsx</span>
        </span>
        <span role="tablist" className="flex gap-0.5 rounded-[9px] bg-site-surface-2 p-[3px]">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-[7px] px-2.5 py-1 text-xs font-medium capitalize",
                tab === t ? "bg-site-surface text-site-ink shadow-[0_1px_2px_var(--ui-shade)]" : "text-site-soft hover:text-site-ink",
              )}
            >
              {t}
            </button>
          ))}
        </span>
      </div>

      <div className="grid">
        <pre
          className={cn(
            "col-start-1 row-start-1 flex flex-col gap-1.5 overflow-x-auto rounded-lg bg-code-bg px-5 py-[18px] font-mono text-[13px] leading-[17px] shadow-[0_1px_1px_rgb(0_0_0/12%),0_3px_6px_rgb(0_0_0/6%),0_10px_20px_rgb(0_0_0/6%),inset_0_1px_0_rgb(255_255_255/12%)]",
            tab !== "code" && "invisible",
          )}
        >
          {lines.map((tokens, i) => (
            <code key={i} className="flex gap-3.5 whitespace-pre">
              <span className="w-[2ch] shrink-0 text-right text-[#3b3937] select-none">{i + 1}</span>
              <span>
                {tokens.map(([kind, text], j) => (
                  <span key={j} className={c[kind]}>{text}</span>
                ))}
              </span>
            </code>
          ))}
        </pre>
        <div
          className={cn(
            "col-start-1 row-start-1 grid place-items-center rounded-lg bg-site-surface elevation-panel",
            tab !== "preview" && "invisible",
          )}
        >
          <StatCardPreview />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 pr-3 pb-2.5 pl-4">
        <span className="flex flex-wrap items-center gap-1.5">
          {stack.map((s) => (
            <span key={s} className="rounded-full bg-site-surface px-2 py-[3px] text-[11px] font-medium text-site-body">{s}</span>
          ))}
        </span>
        <button
          type="button"
          onClick={() => copy(source)}
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "h-7 gap-1.5 text-xs [&_svg]:size-[13px]")}
        >
          {copied ? <Check /> : <Copy />}
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
    </div>
  )
}
