import {
  CalendarRange, Check, Component, House, LayoutGrid, LayoutTemplate, Lock, MousePointer2, MousePointerClick, Sparkles,
} from "lucide-react"
import { GitHubIcon, HarkeMark, InstagramIcon } from "@/components/icons/brand"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Static card thumbnails — mirror the "Preview / …" components in harke.dev.pen.
// Swap for the live registry component once each one is built out.

const Bar = ({ className }: { className: string }) => <span className={cn("block rounded-full", className)} />

const Stage = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("relative h-[180px] w-[300px] shrink-0", className)} {...props} />
)

function PillDockPreview() {
  const items = [
    { icon: <House className="size-[18px]" />, size: "size-[42px]" },
    { icon: <Component className="size-[22px]" />, size: "size-[52px]", active: true },
    { icon: <LayoutTemplate className="size-[18px]" />, size: "size-[42px]" },
    { icon: <Sparkles className="size-4" />, size: "size-9" },
    { icon: <InstagramIcon size={16} />, size: "size-9" },
    { icon: <GitHubIcon size={16} />, size: "size-9" },
  ]
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="rounded-full bg-site-ink px-[9px] py-[3px] text-[11px] font-medium text-site-bg">Components</span>
      <div className="flex items-end gap-2 rounded-full bg-ui-card p-2 elevation-wrapper">
        {items.map((item, i) => (
          <span
            key={i}
            className={cn(
              "grid place-items-center rounded-full",
              item.size,
              item.active
                ? "bg-accent bg-[linear-gradient(to_bottom,rgb(255_255_255/25%),transparent)] text-white shadow-[0_6px_14px_rgb(51_102_255/35%),inset_0_1px_0_rgb(255_255_255/35%)]"
                : "bg-site-surface text-site-ink elevation-item",
            )}
          >
            {item.icon}
          </span>
        ))}
      </div>
    </div>
  )
}

function RaisedCardPreview() {
  return (
    <div className="flex h-[124px] w-[200px] rotate-[4deg] flex-col justify-between rounded-[20px] bg-ui-card bg-[linear-gradient(135deg,transparent_30%,var(--ui-gloss)_50%,transparent_70%)] p-4 elevation-item">
      <span className="grid size-[30px] place-items-center rounded-[9px] bg-site-ink text-site-bg">
        <HarkeMark size={16} />
      </span>
      <span className="flex flex-col gap-1.5">
        <Bar className="h-1.5 w-[110px] bg-site-ink" />
        <Bar className="h-1.5 w-20 bg-site-pip" />
      </span>
    </div>
  )
}

function TerminalCardPreview() {
  return (
    <div className="w-[250px] overflow-hidden rounded-[14px] bg-code-bg shadow-[0_10px_24px_var(--ui-shade),inset_0_1px_0_rgb(255_255_255/12%)]">
      <div className="flex h-6 items-center gap-[5px] border-b border-white/8 px-2.5">
        <span className="size-[7px] rounded-full bg-[#ff5f57]" />
        <span className="size-[7px] rounded-full bg-[#febc2e]" />
        <span className="size-[7px] rounded-full bg-[#28c840]" />
      </div>
      <div className="flex flex-col gap-1.5 px-3.5 py-3 font-mono text-[10px]">
        <p className="flex gap-1.5"><span className="text-accent">&gt;</span><span className="text-[#ededed]">pnpm dlx shadcn add @harke/terminal</span></p>
        <p className="flex gap-1.5 text-[#9be38f]"><span>✓</span><span>installed terminal-card</span></p>
        <p className="flex gap-1.5 text-[#9be38f]"><span>✓</span><span>ready in 0.4s</span></p>
        <p className="flex items-center gap-1.5"><span className="text-accent">&gt;</span><span className="h-3 w-1.5 bg-[#ededed]" /></p>
      </div>
    </div>
  )
}

function PixelTextPreview() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-pixel text-[64px] leading-[0.9] font-bold tracking-[4px] text-accent">HARKE</span>
      <span className="flex gap-1">
        {[1, 0.7, 0.45, 0.25, 0.12].map((o) => (
          <span key={o} className="size-2 bg-accent" style={{ opacity: o }} />
        ))}
      </span>
    </div>
  )
}

export function StatCardPreview({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-[220px] flex-col gap-2.5 rounded-xl bg-ui-card p-4 elevation-wrapper", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs text-site-soft">Revenue</span>
        <span className="rounded-full bg-accent-soft px-[7px] py-0.5 font-mono text-[10px] text-accent">+12.4%</span>
      </div>
      <span className="text-[28px] leading-none font-semibold tracking-[-0.8px]">$48,210</span>
      <div className="flex h-[34px] items-end gap-1">
        {[14, 20, 16, 24, 19, 28, 22, 34].map((h, i, all) => (
          <span key={i} className={cn("flex-1 rounded-[3px]", i === all.length - 1 ? "bg-accent" : "bg-site-line")} style={{ height: h }} />
        ))}
      </div>
    </div>
  )
}

function CodePeekPreview() {
  return (
    <Stage>
      <div className="absolute top-7 left-[92px] flex h-[120px] w-[170px] origin-top-left rotate-[6deg] flex-col gap-[7px] rounded-[14px] bg-code-bg p-3.5 shadow-[0_8px_20px_var(--ui-shade)]">
        <Bar className="h-[5px] w-[90px] bg-[#ff7ab2]" />
        <Bar className="h-[5px] w-[120px] bg-[#ededed]" />
        <Bar className="h-[5px] w-[70px] bg-[#9be38f]" />
        <Bar className="h-[5px] w-[100px] bg-[#7aa2ff]" />
      </div>
      <div className="absolute top-10 left-11 grid h-[110px] w-40 place-items-center rounded-[14px] bg-site-surface elevation-item">
        <span className={buttonVariants({ variant: "neutral" })}>Peek</span>
      </div>
    </Stage>
  )
}

function BrowserFramePreview() {
  return (
    <div className="flex h-[150px] w-[250px] flex-col overflow-hidden rounded-lg bg-site-surface elevation-item">
      <div className="flex h-[30px] shrink-0 items-center gap-2 border-b border-site-line bg-site-bg px-2.5">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => <span key={i} className="size-1.5 rounded-full bg-site-pip" />)}
        </span>
        <span className="flex h-[18px] flex-1 items-center justify-center gap-1 rounded-full bg-site-surface-2">
          <Lock className="size-2 text-site-mute" />
          <span className="font-mono text-[9px] text-site-soft">ui.harke.dev</span>
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3.5">
        <Bar className="h-2 w-[120px] bg-site-ink" />
        <Bar className="h-1.5 w-[170px] bg-site-pip" />
        <Bar className="h-1.5 w-[140px] bg-site-pip" />
        <Bar className="h-[18px] w-[60px] bg-accent" />
      </div>
    </div>
  )
}

function SelectionBoxPreview() {
  const handle = "absolute size-2 border-[1.5px] border-accent bg-site-surface"
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative border-[1.5px] border-accent px-3.5 py-2">
        <span className="block text-[44px] leading-[50px] font-bold tracking-[-1.5px]">Hello</span>
        <span className={cn(handle, "-top-1 -left-1")} />
        <span className={cn(handle, "-top-1 -right-1")} />
        <span className={cn(handle, "-bottom-1 -left-1")} />
        <span className={cn(handle, "-right-1 -bottom-1")} />
      </div>
      <span className="rounded-[4px] bg-accent px-[7px] py-0.5 font-mono text-[10px] text-white">124 × 66</span>
    </div>
  )
}

function CursorTagPreview() {
  const cursor = (name: string, color: string, className: string) => (
    <div className={cn("absolute flex flex-col gap-0.5", className)}>
      <MousePointer2 className={cn("size-5", color === "accent" ? "text-accent" : "text-destructive")} />
      <span
        className={cn(
          "rounded-full px-[9px] py-[3px] text-[11px] font-semibold text-white shadow-[0_4px_10px_var(--ui-shade)]",
          color === "accent" ? "bg-accent" : "bg-destructive",
        )}
      >
        {name}
      </span>
    </div>
  )
  return (
    <Stage>
      <div className="absolute top-[50px] left-[70px] h-20 w-40 rounded-[14px] bg-site-surface elevation-item" />
      {cursor("harke", "accent", "top-[34px] left-[52px]")}
      {cursor("you", "destructive", "top-[98px] left-[196px]")}
    </Stage>
  )
}

function PillNavPreview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-0.5 rounded-full bg-ui-card p-[5px] elevation-wrapper">
        {["Home", "Components", "Feed", "Docs"].map((label) => (
          <span
            key={label}
            className={cn(
              "rounded-full px-3.5 py-[7px] text-xs font-medium",
              label === "Components"
                ? "bg-site-ink text-site-bg shadow-[0_2px_6px_var(--ui-shade),inset_0_1px_0_rgb(255_255_255/16%)]"
                : "text-site-soft",
            )}
          >
            {label}
          </span>
        ))}
      </div>
      <Bar className="h-[3px] w-10 bg-accent" />
    </div>
  )
}

function CopyPillPreview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="flex items-center gap-1 rounded-full bg-success px-[9px] py-[3px] text-[11px] font-semibold text-white">
        <Check className="size-[11px]" /> Copied
      </span>
      <div className="flex items-center gap-3 rounded-full bg-ui-card py-2 pr-2 pl-4 elevation-wrapper">
        <span className="font-mono text-[10px] text-site-body">pnpm dlx shadcn add @harke/copy-pill</span>
        <span className="grid size-7 place-items-center rounded-full bg-success text-white shadow-[inset_0_1px_0_rgb(255_255_255/25%)]">
          <Check className="size-3.5" />
        </span>
      </div>
    </div>
  )
}

function FeedStackPreview() {
  const post = "absolute flex h-[120px] w-24 origin-top-left flex-col items-center justify-center gap-2 rounded-[12px] border border-ui-ring font-mono text-[9px] shadow-[0_8px_18px_var(--ui-shade)]"
  return (
    <Stage>
      <div className={cn(post, "top-[34px] left-[72px] -rotate-[10deg] bg-[#0a0a0a] text-white")}>
        <MousePointerClick className="size-6" />№ 005
      </div>
      <div className={cn(post, "top-[34px] left-40 rotate-[10deg] bg-site-surface text-site-ink")}>
        <CalendarRange className="size-6 text-accent" />№ 006
      </div>
      <div className={cn(post, "top-[22px] left-[116px] bg-accent text-white")}>
        <LayoutGrid className="size-6" />№ 007
      </div>
    </Stage>
  )
}

function SpotlightCardPreview() {
  return (
    <div className="flex h-[130px] w-[230px] flex-col justify-end gap-1.5 rounded-[18px] border border-white/10 bg-code-bg bg-[linear-gradient(to_top,rgb(51_102_255/40%),transparent_60%)] p-4 shadow-[0_10px_24px_var(--ui-shade)]">
      <span className="text-base font-semibold text-white">Spotlight</span>
      <Bar className="h-[5px] w-[120px] bg-white/20" />
    </div>
  )
}

function TechMarqueePreview() {
  return (
    <Stage className="overflow-hidden">
      <div className="absolute top-[72px] -left-[30px] flex gap-2">
        {["React", "Next.js", "Base UI", "Tailwind", "TypeScript", "Motion"].map((t) => (
          <span key={t} className="rounded-full bg-site-surface px-[13px] py-[7px] text-xs font-medium whitespace-nowrap elevation-item">
            {t}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-[60px] bg-linear-to-r from-site-surface to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[60px] bg-linear-to-l from-site-surface to-transparent" />
    </Stage>
  )
}

function KeycapPreview() {
  const key = "grid size-16 place-items-center rounded-xl border border-ui-ring bg-site-surface bg-[linear-gradient(to_bottom,var(--ui-gloss),transparent)] text-2xl font-medium"
  return (
    <div className="flex gap-3">
      <span className={cn(key, "shadow-[0_5px_0_var(--site-pip),0_10px_16px_var(--ui-shade),inset_0_1px_0_var(--ui-highlight)]")}>⌘</span>
      <span className={cn(key, "text-accent shadow-[0_1px_0_var(--site-pip),inset_0_2px_4px_var(--ui-shade)]")}>K</span>
    </div>
  )
}

function GridPaperPreview() {
  return (
    <div className="relative h-[140px] w-60 overflow-hidden rounded-[14px] border border-ui-ring bg-site-surface bg-[linear-gradient(to_right,var(--site-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--site-line)_1px,transparent_1px)] bg-size-[20px_20px]">
      <span className="absolute top-10 left-[60px] grid h-[60px] w-[120px] place-items-center rounded-[10px] border-[1.5px] border-accent bg-accent-soft font-mono text-[11px] text-accent">
        snap 20px
      </span>
    </div>
  )
}

const previews: Record<string, () => React.ReactNode> = {
  "pill-dock": PillDockPreview,
  "raised-card": RaisedCardPreview,
  "terminal-card": TerminalCardPreview,
  "pixel-text": PixelTextPreview,
  "stat-ticker": () => <StatCardPreview />,
  "code-peek": CodePeekPreview,
  "browser-frame": BrowserFramePreview,
  "selection-box": SelectionBoxPreview,
  "cursor-tag": CursorTagPreview,
  "pill-nav": PillNavPreview,
  "copy-pill": CopyPillPreview,
  "feed-stack": FeedStackPreview,
  "spotlight-card": SpotlightCardPreview,
  "tech-marquee": TechMarqueePreview,
  keycap: KeycapPreview,
  "grid-paper": GridPaperPreview,
}

export function ComponentPreview({ slug }: { slug: string }) {
  const Preview = previews[slug]
  return Preview ? <Preview /> : null
}
