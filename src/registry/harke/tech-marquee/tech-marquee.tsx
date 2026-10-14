"use client"

import { cn } from "@/lib/utils"

// An endless strip of stack pills.
// TODO: build out — see "Preview / Tech Marquee" in harke.dev.pen for the design.
export type TechMarqueeProps = React.ComponentProps<"div">

export function TechMarquee({ className, children, ...props }: TechMarqueeProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">TechMarquee</span>}
      </div>
    </div>
  )
}
