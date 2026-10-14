"use client"

import { cn } from "@/lib/utils"

// Embossed card with a glare that follows the cursor.
// TODO: build out — see "Preview / Raised Card" in harke.dev.pen for the design.
export type RaisedCardProps = React.ComponentProps<"div">

export function RaisedCard({ className, children, ...props }: RaisedCardProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">RaisedCard</span>}
      </div>
    </div>
  )
}
