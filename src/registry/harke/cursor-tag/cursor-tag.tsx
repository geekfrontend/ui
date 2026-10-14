"use client"

import { cn } from "@/lib/utils"

// Multiplayer cursors with name pills.
// TODO: build out — see "Preview / Cursor Tag" in harke.dev.pen for the design.
export type CursorTagProps = React.ComponentProps<"div">

export function CursorTag({ className, children, ...props }: CursorTagProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">CursorTag</span>}
      </div>
    </div>
  )
}
