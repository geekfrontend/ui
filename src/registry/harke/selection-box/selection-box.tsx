"use client"

import { cn } from "@/lib/utils"

// Figma-style selection with handles and size.
// TODO: build out — see "Preview / Selection Box" in harke.dev.pen for the design.
export type SelectionBoxProps = React.ComponentProps<"div">

export function SelectionBox({ className, children, ...props }: SelectionBoxProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">SelectionBox</span>}
      </div>
    </div>
  )
}
