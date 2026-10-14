import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { GitHubIcon, InstagramIcon, ThreadsIcon, TikTokIcon } from "@/components/icons/brand"

// UI / Footer · Feature — TRAE-style footer used on /feed.
export function FooterFeature() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="px-4 pt-24 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-[56px] md:leading-[1.1]">
            Get the code behind every post
            <br />
            <span className="text-[#6f6c69]">Follow @harke.dev</span>
          </h2>
          <div className="flex gap-2.5">
            <Button variant="primary" size="lg">
              <InstagramIcon /> Follow on Instagram
            </Button>
          </div>
        </div>
        <div className="mt-28 h-px bg-white/10" />
      </div>
      <div className="flex items-center justify-between px-4 py-8 text-[13px] text-[#8a8885] md:px-10">
        <p>©2026 harke.dev · Built on Base UI</p>
        <div className="flex items-center gap-5 text-white">
          <a href={site.links.instagram} aria-label="Instagram"><InstagramIcon /></a>
          <a href={site.links.tiktok} aria-label="TikTok"><TikTokIcon /></a>
          <a href={site.links.threads} aria-label="Threads"><ThreadsIcon /></a>
          <a href={site.links.github} aria-label="GitHub"><GitHubIcon /></a>
        </div>
      </div>
      <div className="h-24 overflow-hidden bg-accent md:h-[360px]">
        <p className="select-none text-center text-[118px] font-black leading-[0.85] tracking-[-0.08em] text-[#0a0a0a] md:text-[446px]">
          HARKE
        </p>
      </div>
    </footer>
  )
}
