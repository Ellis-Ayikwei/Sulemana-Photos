import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import Disciplines from "@/components/sections/Disciplines";
import AboutTeaser from "@/components/sections/AboutTeaser";
import CallToAction from "@/components/sections/CallToAction";
import Testimonials from "@/components/sections/Testimonials";
import Frame from "@/components/ui/Frame";
import Label from "@/components/ui/Label";
import { HOME_COPY } from "@/data/home";
import { CLIENTS } from "@/data/site";
import { WORK } from "@/data/work";
import { btn, container } from "@/lib/ui";

export default function HomePage() {
  const selected = WORK.slice(0, HOME_COPY.selectedWorkCount);

  return (
    <>
      <Hero />

      {/* headline, sitting below the full-bleed hero */}
      <section className="border-b border-ink/[0.12] px-7 pb-12 pt-16">
        <div className={`${container} flex flex-wrap items-end justify-between gap-10`}>
          <div>
            <Label>{HOME_COPY.eyebrow}</Label>
            <h1 className="max-w-[640px] font-serif text-[clamp(32px,5.5vw,58px)] leading-[1.05]">
              {HOME_COPY.headline}
            </h1>
            <p className="mt-5 max-w-[480px] text-base leading-[1.7] text-stone-600">
              {HOME_COPY.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className={btn.solid}>
              View Portfolio <ArrowUpRight size={14} />
            </Link>
            <Link href="/contact" className={btn.outline}>
              Book a Shoot
            </Link>
          </div>
        </div>
      </section>

      {/* clients strip */}
      <section className="border-y border-ink/[0.12] px-7 py-10">
        <div className={`${container} flex flex-wrap items-center justify-between gap-7`}>
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-[13px] uppercase tracking-[0.08em] text-stone-500"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      <Statement />

      <Disciplines />

      {/* selected work */}
      <section className="px-7 py-20">
        <div className={container}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <Label>Selected Work</Label>
              <h2 className="font-serif text-[34px]">{HOME_COPY.selectedWorkHeading}</h2>
            </div>
            <Link
              href="/portfolio"
              className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] no-underline"
            >
              Full Portfolio <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-1">
            {selected.map((w) => (
              <Frame
                key={w.slug}
                title={w.title}
                client={w.client}
                cat={w.cat}
                src={w.cover}
                alt={w.coverAlt}
                media={w.media}
                big
                href={`/portfolio/${w.slug}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 360px"
              />
            ))}
          </div>
        </div>
      </section>

      <AboutTeaser />

      <Testimonials />

      <CallToAction />
    </>
  );
}
