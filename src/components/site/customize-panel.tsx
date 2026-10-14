"use client"

// Customize panel (React Bits style). Each control maps 1:1 to a component prop.
export type Control =
  | { type: "slider"; prop: string; label: string; min: number; max: number; step?: number; unit?: string }
  | { type: "segmented"; prop: string; label: string; options: string[] }
  | { type: "switch"; prop: string; label: string }

export function CustomizePanel<T extends Record<string, unknown>>({
  controls,
  value,
  onChange,
}: {
  controls: Control[]
  value: T
  onChange: (next: T) => void
}) {
  const set = (prop: string, v: unknown) => onChange({ ...value, [prop]: v })
  return (
    <div className="rounded-2xl bg-ui-card p-2 elevation-wrapper">
      <div className="grid gap-5 rounded-lg bg-site-surface p-5 elevation-panel md:grid-cols-2">
        {controls.map((c) => (
          <label key={c.prop} className="flex flex-col gap-2.5 text-[13px] font-medium">
            <span className="flex justify-between">
              {c.label}
              {c.type === "slider" && (
                <span className="rounded-xs bg-site-surface-2 px-1.5 font-mono text-[11px] text-site-body">
                  {String(value[c.prop])}{c.unit}
                </span>
              )}
            </span>
            {c.type === "slider" && (
              <input
                type="range" min={c.min} max={c.max} step={c.step ?? 1}
                value={Number(value[c.prop])}
                onChange={(e) => set(c.prop, Number(e.target.value))}
                className="accent-accent"
              />
            )}
            {c.type === "segmented" && (
              <span className="inline-flex w-fit gap-0.5 rounded-full bg-site-surface-2 p-[3px]">
                {c.options.map((o) => (
                  <button
                    key={o} type="button" onClick={() => set(c.prop, o)}
                    className={`rounded-full px-3.5 py-1 text-xs ${value[c.prop] === o ? "bg-site-surface elevation-raised" : "text-site-soft"}`}
                  >
                    {o}
                  </button>
                ))}
              </span>
            )}
            {c.type === "switch" && (
              <input type="checkbox" checked={Boolean(value[c.prop])} onChange={(e) => set(c.prop, e.target.checked)} />
            )}
          </label>
        ))}
      </div>
    </div>
  )
}
