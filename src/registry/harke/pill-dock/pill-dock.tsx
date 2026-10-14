"use client"

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export type DockItem = { label: string; icon: React.ReactNode; href?: string; onClick?: () => void }

const springs = {
  soft: { stiffness: 120, damping: 18 },
  snappy: { stiffness: 260, damping: 22 },
  bouncy: { stiffness: 320, damping: 12 },
}

export type PillDockProps = {
  items: DockItem[]
  magnification?: number
  baseSize?: number
  distance?: number
  gap?: number
  spring?: keyof typeof springs
  showLabels?: boolean
  className?: string
}

export function PillDock({
  items,
  magnification = 1.6,
  baseSize = 36,
  distance = 140,
  gap = 8,
  spring = "snappy",
  showLabels = true,
  className,
}: PillDockProps) {
  const mouseX = useMotionValue(Infinity)
  return (
    <nav
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{ gap }}
      className={cn(
        "flex items-end rounded-full bg-ui-card p-2 elevation-wrapper",
        className,
      )}
    >
      {items.map((item) => (
        <DockIcon
          key={item.label}
          item={item}
          mouseX={mouseX}
          baseSize={baseSize}
          magnification={magnification}
          distance={distance}
          spring={springs[spring]}
          showLabel={showLabels}
        />
      ))}
    </nav>
  )
}

function DockIcon({
  item, mouseX, baseSize, magnification, distance, spring, showLabel,
}: {
  item: DockItem
  mouseX: MotionValue<number>
  baseSize: number
  magnification: number
  distance: number
  spring: { stiffness: number; damping: number }
  showLabel: boolean
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const offset = useTransform(mouseX, (x) => {
    const r = ref.current?.getBoundingClientRect()
    return r ? x - (r.left + window.scrollX) - r.width / 2 : Infinity
  })
  const target = useTransform(offset, [-distance, 0, distance], [baseSize, baseSize * magnification, baseSize])
  const size = useSpring(target, spring)

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={item.label}
      onClick={item.onClick}
      style={{ width: size, height: size }}
      className="group relative grid place-items-center rounded-full bg-site-surface text-site-ink elevation-raised outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {item.icon}
      {showLabel && (
        <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-full bg-site-ink px-2.5 py-0.5 text-[11px] font-medium text-site-bg opacity-0 transition-opacity group-hover:opacity-100">
          {item.label}
        </span>
      )}
    </motion.button>
  )
}
