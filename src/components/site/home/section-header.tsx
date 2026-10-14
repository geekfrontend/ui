import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow, title, description, href, cta,
}: {
  eyebrow: string
  title: string
  description: string
  href: string
  cta?: string
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs tracking-[0.5px] text-accent">{eyebrow}</p>
        <h2 className="text-4xl font-semibold tracking-[-1px]">{title}</h2>
        <p className="text-base text-site-soft">{description}</p>
      </div>
      {cta && (
        <Link href={href} className={cn(buttonVariants({ variant: "basic", size: "sm" }), "w-fit gap-1.5 px-3.5 [&_svg]:size-3.5")}>
          {cta}
          <ArrowRight />
        </Link>
      )}
    </div>
  )
}
