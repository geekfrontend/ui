"use client"

import { cn } from "@/lib/utils"

// A snapping grid paper canvas.
// TODO: build out — see "Preview / Grid Paper" in harke.dev.pen for the design.
export type GridPaperProps = React.ComponentProps<"div">

export function GridPaper({ className, children, ...props }: GridPaperProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">GridPaper</span>}
      </div>
    </div>
  )
}
