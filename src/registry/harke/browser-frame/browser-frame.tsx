"use client"

import { cn } from "@/lib/utils"

// A browser window with URL pill and scroll.
// TODO: build out — see "Preview / Browser Frame" in harke.dev.pen for the design.
export type BrowserFrameProps = React.ComponentProps<"div">

export function BrowserFrame({ className, children, ...props }: BrowserFrameProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">BrowserFrame</span>}
      </div>
    </div>
  )
}
