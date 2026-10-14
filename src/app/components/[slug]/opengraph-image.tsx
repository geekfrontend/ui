import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { components, getComponent } from "@/lib/catalog"

// Per-component share card — same layout language as src/app/opengraph-image.png
// ("OG / Default" in harke.dev.pen): light paper, pixel accent, URL pill.
export const alt = "harke/ui component"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"


const font = (file: string) => readFile(join(process.cwd(), "src/assets/fonts", file))

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getComponent(slug)
  const index = item ? components.indexOf(item) + 1 : 0
  // Geist has no ⌘ glyph — spell it out so Satori doesn't render a tofu box.
  const [geist, mono, pixel] = await Promise.all([
    font("Geist-SemiBold.ttf"),
    font("GeistMono-Regular.ttf"),
    font("PixelifySans-Bold.ttf"),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#fafaf9",
          color: "#111111",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#111111",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="-20 0 240 240" fill="#ffffff">
              <path d="M0 220v-200a20 20 0 0 1 20-20h24a20 20 0 0 1 20 20v44a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-44a20 20 0 0 1 20-20h24a20 20 0 0 1 20 20v200a20 20 0 0 1-20 20h-24a20 20 0 0 1-20-20v-52a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v52a20 20 0 0 1-20 20h-24a20 20 0 0 1-20-20z" />
            </svg>
          </div>
          <span>harke</span>
          <span style={{ color: "#8c8985" }}>/ui</span>
          <span style={{ marginLeft: "auto", fontFamily: "Geist Mono", fontSize: 22, color: "#8c8985" }}>
            {String(index).padStart(2, "0")} / {components.length}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontFamily: "Pixelify Sans", fontSize: 40, color: "#3366ff" }}>COMPONENT</div>
          <div style={{ fontSize: 96, letterSpacing: -3, lineHeight: 1 }}>{item?.name ?? "harke/ui"}</div>
          <div style={{ fontSize: 30, color: "#4f4d4a", maxWidth: 900 }}>{(item?.description ?? "").replaceAll("⌘", "Cmd ")}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {item?.isNew && (
            <div
              style={{
                display: "flex",
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(51,102,255,0.1)",
                color: "#3366ff",
                fontSize: 20,
              }}
            >
              New
            </div>
          )}
          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(41,41,41,0.1)",
              background: "#ffffff",
              fontFamily: "Geist Mono",
              fontSize: 20,
              color: "#6f6c69",
            }}
          >
            {item?.tag ?? "component"}
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              background: "#111111",
              color: "#ffffff",
              fontFamily: "Geist Mono",
              fontSize: 20,
            }}
          >
            ui.harke.dev/components/{slug}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, style: "normal", weight: 600 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
        { name: "Pixelify Sans", data: pixel, style: "normal", weight: 700 },
      ],
    },
  )
}
