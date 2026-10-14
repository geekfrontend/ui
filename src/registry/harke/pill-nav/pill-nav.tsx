"use client"

import { cn } from "@/lib/utils"

// Pill navigation with a sliding indicator.
// TODO: build out — see "Preview / Pill Nav" in harke.dev.pen for the design.
export type PillNavProps = React.ComponentProps<"div">

export function PillNav({ className, children, ...props }: PillNavProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">PillNav</span>}
      </div>
    </div>
  )
}
