import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("inline-flex items-center rounded-xs bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent", className)}
      {...props}
    />
  )
}
