import { site } from "@/lib/site"

// UI / Footer — default footer for every page except /feed.
export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-site-line px-4 py-6 text-[13px] text-site-soft md:flex-row md:items-center md:justify-between md:px-10">
      <p>Built by Harke on Base UI · pixel-perfect UI for the web</p>
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        <a href={site.links.home}>harke.dev</a>
        <span aria-disabled="true" title="Coming soon" className="flex cursor-not-allowed items-center gap-1.5 select-none">
          <span className="text-site-mute opacity-60">mobile.harke.dev</span>
          <span className="rounded-full bg-site-surface-2 px-[7px] py-px font-mono text-[10px] text-site-mute">Soon</span>
        </span>
        <a href={site.links.github}>GitHub</a>
        <a href="/changelog">Changelog</a>
        <a href={site.links.license}>License</a>
      </nav>
    </footer>
  )
}
