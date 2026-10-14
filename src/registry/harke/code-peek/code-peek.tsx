"use client"

import { cn } from "@/lib/utils"

// Lift the preview to peek at the code.
// TODO: build out — see "Preview / Code Peek" in harke.dev.pen for the design.
export type CodePeekProps = React.ComponentProps<"div">

export function CodePeek({ className, children, ...props }: CodePeekProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">CodePeek</span>}
      </div>
    </div>
  )
}
