"use client"

import { cn } from "@/lib/utils"

// An install command that flips to a check.
// TODO: build out — see "Preview / Copy Pill" in harke.dev.pen for the design.
export type CopyPillProps = React.ComponentProps<"div">

export function CopyPill({ className, children, ...props }: CopyPillProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">CopyPill</span>}
      </div>
    </div>
  )
}
