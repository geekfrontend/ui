"use client"

import { cn } from "@/lib/utils"

// A dark card lit by your cursor.
// TODO: build out — see "Preview / Spotlight Card" in harke.dev.pen for the design.
export type SpotlightCardProps = React.ComponentProps<"div">

export function SpotlightCard({ className, children, ...props }: SpotlightCardProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">SpotlightCard</span>}
      </div>
    </div>
  )
}
