"use client";

import { useEffect, useState } from "react";
import HeroSlideshow from "./HeroSlideshow";
import { HERO_INTERVAL, type HeroPanel, type HeroSlide } from "@/data/home";

/**
 * The hero frames on one clock, taking turns: every half interval exactly
 * one panel changes, so the two sides never swap together. Rotation stops
 * for visitors who prefer reduced motion.
 */
export default function HeroRotator({
  panels,
}: {
  panels: (HeroPanel & { slides: HeroSlide[] })[];
}) {
  const [indices, setIndices] = useState(() => panels.map(() => 0));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let turn = 0;
    const timer = setInterval(() => {
      // Hold still while the tab is hidden rather than racing ahead.
      if (document.hidden) return;
      const p = turn % panels.length;
      turn++;
      setIndices((prev) =>
        prev.map((idx, i) => {
          const n = panels[i].slides.length;
          return i === p && n > 1 ? (idx + 1) % n : idx;
        }),
      );
    }, HERO_INTERVAL / panels.length);

    return () => clearInterval(timer);
  }, [panels]);

  return (
    <section
      aria-label="Featured work"
      className="relative grid grid-cols-1 gap-1 bg-paper [grid-auto-rows:minmax(300px,44vh)] nav:h-[calc(100svh-var(--nav-h))] nav:min-h-[460px] nav:grid-cols-[1.94fr_1fr] nav:[grid-auto-rows:unset]"
    >
      {/* thin accent stripe down the left edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-1.5 bg-accent"
      />

      {panels.map((panel, i) => (
        <HeroSlideshow
          key={panel.folder}
          slides={panel.slides}
          gradient={panel.gradient}
          index={indices[i]}
          hold={HERO_INTERVAL}
          sizes={panel.sizes}
        />
      ))}
    </section>
  );
}
