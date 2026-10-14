import { cn } from "@/lib/utils"

export function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn("inline-flex h-[22px] items-center rounded-xs bg-site-surface-2 px-1.5 font-sans text-[11px] text-site-soft", className)}
      {...props}
    />
  )
}
