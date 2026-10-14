"use client"

import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn("grid size-9 place-items-center rounded-full pill-basic text-site-ink", className)}
    >
      <SunMoon className="size-[18px]" />
    </button>
  )
}
