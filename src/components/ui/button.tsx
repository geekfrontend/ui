import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Pill Style buttons — UI / Button / Neutral · Primary · Basic
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] font-medium transition-[filter,transform,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg disabled:pointer-events-none disabled:bg-site-surface-2 disabled:text-site-mute disabled:shadow-none disabled:bg-none active:translate-y-px [&_svg]:size-4",
  {
    variants: {
      variant: {
        neutral: "bg-site-ink text-site-bg ring-1 ring-pill-ring pill-gloss hover:brightness-110",
        primary: "bg-accent text-white ring-1 ring-accent pill-gloss hover:brightness-110",
        basic: "bg-site-surface text-site-ink ring-1 ring-site-border shadow-[0_1px_3px_rgb(14_18_27/12%)] hover:bg-site-surface-2",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-3.5",
        lg: "h-11 px-5 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "neutral", size: "md" },
  },
)

export type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
