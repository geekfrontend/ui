"use client"

import { cn } from "@/lib/utils"

// Numbers count up, bars grow in.
// TODO: build out — see "Preview / Stat Ticker" in harke.dev.pen for the design.
export type StatTickerProps = React.ComponentProps<"div">

export function StatTicker({ className, children, ...props }: StatTickerProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">StatTicker</span>}
      </div>
    </div>
  )
}
