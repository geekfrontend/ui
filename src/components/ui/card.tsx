import { cn } from "@/lib/utils"

// UI / Card — raised wrapper (ui-card + gloss) holding a white panel.
export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2 rounded-2xl bg-ui-card p-2 elevation-wrapper", className)} {...props} />
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center justify-between px-2 pt-1 pb-0.5", className)} {...props} />
}

export function CardPreview({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex h-[220px] items-center justify-center overflow-hidden rounded-lg bg-site-surface elevation-panel", className)}
      {...props}
    />
  )
}

export function CardFooter({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("px-2 pt-0.5 pb-1 text-[13px] leading-[1.45] text-site-soft", className)} {...props} />
}
