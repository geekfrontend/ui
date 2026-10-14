"use client"

import { cn } from "@/lib/utils"

// A terminal that types itself, line by line.
// TODO: build out — see "Preview / Terminal Card" in harke.dev.pen for the design.
export type TerminalCardProps = React.ComponentProps<"div">

export function TerminalCard({ className, children, ...props }: TerminalCardProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">TerminalCard</span>}
      </div>
    </div>
  )
}
