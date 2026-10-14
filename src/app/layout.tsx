import type { Metadata } from "next"
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/site/theme-provider"
import { SearchProvider } from "@/components/site/command-menu"
import { site } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const pixelify = Pixelify_Sans({ variable: "--font-pixelify", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "harke/ui", template: "%s — harke/ui" },
  description: site.description,
  metadataBase: new URL(site.url),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pixelify.variable}`}>
        <ThemeProvider>
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
