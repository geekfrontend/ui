import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/site/theme-provider"
import { SearchProvider } from "@/components/site/command-menu"
import { site } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const pixelify = Pixelify_Sans({ variable: "--font-pixelify", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "harke/ui — Pixel-perfect UI, ready to copy", template: "%s — harke/ui" },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "React components",
    "Next.js",
    "Tailwind CSS",
    "Base UI",
    "shadcn registry",
    "UI library",
    "animated components",
    "harke",
  ],
  authors: [{ name: "Harke", url: site.links.home }],
  creator: "Harke",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    locale: "en_US",
    title: "harke/ui — Pixel-perfect UI, ready to copy",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "harke/ui — Pixel-perfect UI, ready to copy",
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
