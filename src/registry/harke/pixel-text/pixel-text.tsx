"use client"

import { cn } from "@/lib/utils"

// Headlines that resolve pixel by pixel.
// TODO: build out — see "Preview / Pixel Text" in harke.dev.pen for the design.
export type PixelTextProps = React.ComponentProps<"div">

export function PixelText({ className, children, ...props }: PixelTextProps) {
  return (
    <div className={cn("rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props}>
      <div className="grid min-h-40 place-items-center rounded-lg bg-site-surface elevation-panel">
        {children ?? <span className="font-mono text-xs text-site-mute">PixelText</span>}
      </div>
    </div>
  )
}
