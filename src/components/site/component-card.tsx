import Link from "next/link"
import type { CatalogItem } from "@/lib/catalog"
import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader, CardPreview } from "@/components/ui/card"
import { ComponentPreview } from "@/components/site/previews"

export function ComponentCard({ item, index, children }: { item: CatalogItem; index: number; children?: React.ReactNode }) {
  return (
    <Link href={`/components/${item.slug}`} className="group min-w-0 outline-none">
      <Card className="h-full transition-transform group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-accent/40">
        <CardHeader>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-site-mute">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold">{item.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {item.isNew && <Badge>New</Badge>}
            <span className="font-mono text-xs text-site-soft">{item.tag}</span>
          </div>
        </CardHeader>
        <CardPreview>{children ?? <ComponentPreview slug={item.slug} />}</CardPreview>
        <CardFooter>{item.description}</CardFooter>
      </Card>
    </Link>
  )
}
