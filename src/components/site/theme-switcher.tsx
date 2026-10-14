"use client"

import { useId, useState, useSyncExternalStore } from "react"
import { flushSync } from "react-dom"
import { Monitor, MoonStar, Sun } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// UI / Theme Switcher — see "State · Theme switch" on UI — States in harke.dev.pen.
const options = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
    thumb: "bg-linear-to-b from-[#ffc24d] to-[#ff8a00] shadow-[0_2px_8px_rgb(255_138_0/35%),inset_0_1px_0_rgb(255_255_255/45%)]",
    active: "text-white",
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonStar,
    thumb: "bg-linear-to-b from-[#4d7dff] to-[#1a2b80] shadow-[0_2px_8px_rgb(51_102_255/35%),inset_0_1px_0_rgb(255_255_255/30%)]",
    active: "text-white",
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
    thumb: "bg-site-ink shadow-[0_2px_8px_var(--ui-shade),inset_0_1px_0_rgb(255_255_255/20%)]",
    active: "text-site-bg",
  },
] as const

type Option = (typeof options)[number]["value"]

const noop = () => () => {}
const useMounted = () => useSyncExternalStore(noop, () => true, () => false)

const systemTheme = () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

export function ThemeSwitcher({ variant = "icon", className }: { variant?: "icon" | "segmented"; className?: string }) {
  const id = useId()
  const segmented = variant === "segmented"
  const { theme, resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const [ripple, setRipple] = useState<{ value: Option; key: number } | null>(null)
  const current = mounted ? (theme as Option | undefined) : undefined

  const select = (value: Option, e: React.MouseEvent<HTMLButtonElement>) => {
    if (value === theme) return
    setRipple({ value, key: Date.now() })

    const next = value === "system" ? systemTheme() : value
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (next === resolvedTheme || reduced || !document.startViewTransition) {
      setTheme(value)
      return
    }

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(value))
    })
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: "ease-out", pseudoElement: "::view-transition-new(root)" },
      )
    })
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "flex items-center rounded-full bg-site-surface elevation-raised",
        segmented ? "gap-1 p-1" : "gap-0.5 p-[3px]",
        className,
      )}
    >
      {options.map(({ value, label, icon: Icon, thumb, active }) => {
        const selected = current === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={segmented ? undefined : label}
            title={segmented ? undefined : label}
            onClick={(e) => select(value, e)}
            className={cn(
              "relative grid place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
              segmented ? "h-[38px] flex-1" : "size-[30px]",
            )}
          >
            {selected && (
              <motion.span
                layoutId={`${id}-thumb`}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
                className={cn("absolute inset-0 rounded-full", thumb)}
              />
            )}
            {ripple?.value === value && (
              <motion.span
                key={ripple.key}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onAnimationComplete={() => setRipple(null)}
                className="pointer-events-none absolute -inset-px rounded-full border-2 border-accent bg-accent-soft"
              />
            )}
            <motion.span
              key={selected ? `${value}-on` : value}
              initial={selected ? { rotate: -90, scale: 0.6 } : false}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className={cn(
                "relative flex items-center gap-1.5 text-[13px] font-medium",
                selected ? active : "text-site-soft hover:text-site-ink",
              )}
            >
              <Icon className="size-[15px]" />
              {segmented && label}
            </motion.span>
          </button>
        )
      })}
    </div>
  )
}
