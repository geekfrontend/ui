"use client"

import { useState } from "react"
import { Check, Copy, MousePointer2 } from "lucide-react"
import { useCopy } from "@/hooks/use-copy"
import { buttonVariants } from "@/components/ui/button"
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
  [["keyword", "import "], ["plain", "{ PixelText } "], ["keyword", "from "], ["string", '"@/components/pixel-text"']],
  [["keyword", "import "], ["plain", "{ SelectionBox } "], ["keyword", "from "], ["string", '"@/components/selection-box"']],
  [],
  [["keyword", "export function "], ["tag", "HelloWorld"], ["plain", "() {"]],
  [["keyword", "  return "], ["plain", "("]],
  [["tag", "    <SelectionBox "], ["attr", "rotate"], ["plain", "={-3}"], ["tag", ">"]],
  [["tag", "      <PixelText>"], ["plain", "HELLO WORLD"], ["tag", "</PixelText>"]],
  [["tag", "    </SelectionBox>"]],
  [["plain", "  )"]],
  [["plain", "}"]],
]

const source = lines.map((l) => l.map(([, t]) => t).join("")).join("\n")
const stack = ["Base UI", "React", "Next.js", "TypeScript", "Tailwind"]

export function FeaturedSnippet({ className }: { className?: string }) {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const { copied, copy } = useCopy()

  return (
    <div className={cn("flex flex-col rounded-2xl bg-ui-card p-1 elevation-wrapper", className)}>
      <div className="flex items-center justify-between py-3 pr-3 pl-4">
        <span className="flex items-center gap-2 font-mono">
          <span className="text-xs text-accent">№ 000</span>
          <span className="text-[13px]">hello-world.tsx</span>
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
            "col-start-1 row-start-1 flex items-center justify-center overflow-hidden rounded-lg bg-site-surface elevation-panel",
            tab !== "preview" && "invisible",
          )}
        >
          <HelloWorldPreview />
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

// "Code" preview frame on the hero — pixel headline in a tilted Figma-style selection.
function HelloWorldPreview() {
  const handle = "absolute size-2.5 border-[1.5px] border-accent bg-site-surface"
  return (
    <div className="relative h-[306px] w-[532px] shrink-0 max-sm:scale-[0.62]">
      <div className="absolute top-[37px] left-[83px] origin-top-left -rotate-3 border-[1.5px] border-accent px-5 py-3">
        <p className="font-pixel text-[92px] leading-[0.88] font-bold tracking-[2px] text-accent">
          HELLO
          <br />
          WORLD
        </p>
        <span className={cn(handle, "-top-[5px] -left-[5px]")} />
        <span className={cn(handle, "-top-[5px] -right-[5px]")} />
        <span className={cn(handle, "-bottom-[5px] -left-[5px]")} />
        <span className={cn(handle, "-right-[5px] -bottom-[5px]")} />
      </div>
      <span className="absolute top-[253px] left-[93px] origin-top-left -rotate-3 rounded-[4px] bg-accent px-[7px] py-0.5 font-mono text-[10px] text-white">
        344 × 186
      </span>
      <span className="absolute top-[249px] left-[433px] flex flex-col gap-0.5">
        <MousePointer2 className="size-5 text-accent" />
        <span className="rounded-full bg-accent px-[9px] py-[3px] text-[11px] font-semibold text-white">harke</span>
      </span>
    </div>
  )
}
