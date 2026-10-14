import Link from "next/link"
import type { BlockItem } from "@/lib/catalog"
import { HarkeMark } from "@/components/icons/brand"
import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader, CardPreview } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// "Block — …" cards on UI — Home. Previews are wireframe windows, not the real block.
const Bar = ({ className }: { className: string }) => <span className={cn("block shrink-0 rounded-full", className)} />

function Window({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="flex h-[270px] w-[500px] shrink-0 flex-col overflow-hidden max-sm:scale-[0.6] lg:max-xl:scale-[0.85] rounded-lg border border-site-border bg-site-surface shadow-[0_4px_16px_rgb(0_0_0/7%)]">
      <div className="flex h-[26px] shrink-0 items-center gap-[5px] border-b border-site-line bg-site-bg px-2.5">
        {[0, 1, 2].map((i) => <span key={i} className="size-[7px] rounded-full bg-site-pip" />)}
      </div>
      <div className={cn("flex min-h-0 flex-1", className)}>{children}</div>
    </div>
  )
}

function PricingPreview() {
  const tiers = [
    { price: "$0" },
    { price: "$12", featured: true },
    { price: "$29" },
  ]
  return (
    <Window className="flex-col items-center gap-3 px-5 py-[18px]">
      <Bar className="h-2 w-[120px] bg-site-ink" />
      <span className="flex gap-0.5 rounded-[6px] bg-site-surface-2 p-0.5">
        <span className="h-3 w-[34px] rounded-[4px] bg-site-surface" />
        <span className="h-3 w-[34px]" />
      </span>
      <div className="flex min-h-0 w-full flex-1 gap-2.5">
        {tiers.map((t) => (
          <div
            key={t.price}
            className={cn(
              "flex flex-1 flex-col gap-[7px] rounded-[10px] bg-site-surface p-3",
              t.featured ? "border-[1.5px] border-accent" : "border border-site-border",
            )}
          >
            <Bar className={cn("h-1.5 w-10", t.featured ? "bg-accent" : "bg-site-pip")} />
            <span className="text-lg leading-tight font-semibold">{t.price}</span>
            <Bar className="h-1.5 w-[60px] bg-site-line" />
            <Bar className="h-1.5 w-[70px] bg-site-line" />
            <Bar className="h-1.5 w-[50px] bg-site-line" />
            <span className={cn("mt-auto h-[18px] rounded-[5px]", t.featured ? "bg-accent" : "bg-site-surface-2")} />
          </div>
        ))}
      </div>
    </Window>
  )
}

function DashboardPreview() {
  return (
    <Window>
      <div className="flex w-24 flex-col gap-[9px] border-r border-site-line bg-site-bg px-2.5 py-3">
        <span className="size-4 rounded-[4px] bg-site-ink" />
        {[50, 60, 44, 56, 40].map((w, i) => (
          <span key={i} className={cn("flex h-4 items-center rounded-[4px] px-1.5", i === 0 && "bg-site-surface-2")}>
            <span className={cn("h-[5px] rounded-full", i === 0 ? "bg-site-ink" : "bg-site-pip")} style={{ width: w }} />
          </span>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <Bar className="h-2 w-[90px] bg-site-ink" />
        <div className="flex gap-2">
          {[
            { v: "$48.2K" },
            { v: "1,284" },
            { v: "+12%", accent: true },
          ].map((s) => (
            <div key={s.v} className="flex flex-1 flex-col gap-[5px] rounded-sm border border-site-border p-2">
              <Bar className="h-[5px] w-9 bg-site-line" />
              <span className={cn("text-[13px] leading-tight font-semibold", s.accent && "text-accent")}>{s.v}</span>
            </div>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 items-end gap-1.5 rounded-sm border border-site-border p-2.5">
          {[30, 48, 38, 60, 52, 74, 64, 90, 70, 100].map((h, i, all) => (
            <span key={i} className={cn("flex-1 rounded-[3px]", i === all.length - 1 ? "bg-accent" : "bg-site-line")} style={{ height: h }} />
          ))}
        </div>
      </div>
    </Window>
  )
}

function AuthSplitPreview() {
  return (
    <Window>
      <div className="flex flex-1 flex-col justify-center gap-[9px] px-9">
        <Bar className="h-2 w-20 bg-site-ink" />
        <Bar className="h-1.5 w-[120px] bg-site-line" />
        <span className="h-[22px] rounded-[6px] border border-site-border" />
        <span className="h-[22px] rounded-[6px] border border-site-border" />
        <span className="h-[22px] rounded-[6px] bg-site-ink" />
        <span className="flex gap-1.5">
          <span className="h-5 flex-1 rounded-[6px] bg-site-surface-2" />
          <span className="h-5 flex-1 rounded-[6px] bg-site-surface-2" />
        </span>
      </div>
      <div className="flex w-[220px] flex-col justify-between bg-accent p-4 text-white">
        <HarkeMark size={28} />
        <span className="flex flex-col gap-1.5">
          <Bar className="h-1.5 w-[150px] bg-white/80" />
          <Bar className="h-1.5 w-[120px] bg-white/50" />
          <Bar className="h-[5px] w-[60px] bg-white/35" />
        </span>
      </div>
    </Window>
  )
}

function HeroSectionPreview() {
  return (
    <Window className="flex-col items-center gap-3 px-5 pt-3">
      <div className="flex w-full items-center justify-between">
        <span className="size-3.5 rounded-[4px] bg-site-ink" />
        <span className="flex gap-2.5">
          <Bar className="h-[5px] w-6 bg-site-line" />
          <Bar className="h-[5px] w-7 bg-site-line" />
          <Bar className="h-[5px] w-[22px] bg-site-line" />
        </span>
        <span className="h-3.5 w-10 rounded-[5px] bg-site-ink" />
      </div>
      <Bar className="h-3 w-[70px] bg-accent-soft" />
      <Bar className="h-3 w-60 bg-site-ink" />
      <Bar className="h-3 w-[170px] bg-site-ink" />
      <Bar className="h-[5px] w-[200px] bg-site-line" />
      <span className="flex gap-1.5">
        <span className="h-[18px] w-14 rounded-[5px] bg-accent" />
        <span className="h-[18px] w-14 rounded-[5px] border border-site-border" />
      </span>
      <div className="flex min-h-0 w-[380px] flex-1 gap-2 rounded-t-[10px] border border-b-0 border-site-border bg-site-surface-2 px-2.5 pt-2.5">
        <span className="w-[60px] rounded-t-[6px] bg-site-surface" />
        <span className="flex-1 rounded-t-[6px] bg-site-surface" />
      </div>
    </Window>
  )
}

const previews: Record<string, () => React.ReactNode> = {
  "pricing-section": PricingPreview,
  "dashboard-shell": DashboardPreview,
  "auth-split": AuthSplitPreview,
  "hero-section": HeroSectionPreview,
}

export function BlockCard({ item }: { item: BlockItem }) {
  const Preview = previews[item.slug]
  return (
    <Link href={`/blocks/${item.slug}`} className="group min-w-0 outline-none">
      <Card className="h-full transition-transform group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-accent/40">
        <CardHeader className="gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-site-mute">№ {item.code}</span>
            <span className="text-sm font-semibold">{item.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {item.isNew && <Badge>New</Badge>}
            <span className="font-mono text-xs text-site-soft">{item.tag}</span>
          </div>
        </CardHeader>
        <CardPreview className="h-[340px]">{Preview && <Preview />}</CardPreview>
        <CardFooter>{item.description}</CardFooter>
      </Card>
    </Link>
  )
}
