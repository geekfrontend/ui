"use client"

import { cn } from "@/lib/utils"

// Stacked posts that fan out on hover.
// TODO: build out — see "Preview / Feed Stack" in harke.dev.pen for the design.
export type FeedStackProps = React.ComponentProps<"div">

export function FeedStack({ className, children, ...props }: FeedStackProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">FeedStack</span>}
      </div>
    </div>
  )
}
