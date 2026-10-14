import { site } from "@/lib/site"
import { HarkeMark, InstagramIcon, ThreadsIcon, TikTokIcon } from "@/components/icons/brand"

// "UI — Home" › Feed band — dark strip pointing at the socials.
export function FeedBand() {
  const ghost = "flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-[#fafaf9] hover:bg-white/5"
  return (
    <section className="px-4 pt-24 pb-[72px] md:px-10">
      <div className="flex flex-col gap-6 rounded-2xl bg-[#111111] bg-[linear-gradient(to_bottom,rgb(255_255_255/8%),transparent_60%)] px-6 py-7 shadow-[0_1px_2px_rgb(0_0_0/12%),0_12px_28px_rgb(0_0_0/14%),inset_0_1px_0_rgb(255_255_255/15%)] md:px-8 lg:flex-row lg:items-center lg:justify-between dark:border dark:border-ui-ring dark:bg-ui-card">
        <div className="flex items-center gap-5">
          <span className="grid size-14 shrink-0 place-items-center rounded-[14px] bg-accent text-white">
            <HarkeMark size={30} />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold tracking-[-0.3px] text-[#fafaf9]">A new component with every post.</p>
            <p className="text-sm text-[#8c8985]">Watch it get sliced on Instagram, TikTok and Threads, then grab the code here.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <a href={site.links.instagram} className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-site-ink pill-basic">
            <InstagramIcon /> @harke.dev
          </a>
          <a href={site.links.tiktok} className={ghost}>
            <TikTokIcon /> TikTok
          </a>
          <a href={site.links.threads} className={ghost}>
            <ThreadsIcon /> Threads
          </a>
        </div>
      </div>
    </section>
  )
}
