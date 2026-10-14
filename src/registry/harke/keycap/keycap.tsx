"use client"

import { cn } from "@/lib/utils"

// 3D keys that press down. ⌘K included.
// TODO: build out — see "Preview / Keycap" in harke.dev.pen for the design.
export type KeycapProps = React.ComponentProps<"div">

export function Keycap({ className, children, ...props }: KeycapProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">Keycap</span>}
      </div>
    </div>
  )
}
