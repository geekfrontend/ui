import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div className="flex flex-col items-center gap-5">
        <p className="font-pixel text-[160px] leading-[0.9] font-bold tracking-wide text-accent md:text-[220px]">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">This page got sliced off.</h1>
        <p className="text-site-soft">The link might be old, or the component was renamed.</p>
        <Link href="/" className={buttonVariants({ variant: "neutral" })}>Back home</Link>
      </div>
    </main>
  )
}
