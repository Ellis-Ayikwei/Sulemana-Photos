import Image from "next/image";
import Grain from "@/components/ui/Grain";
import { HERO } from "@/data/home";

/**
 * Full-bleed two-frame hero, sized to fill the viewport below the header.
 * Deliberately typeless — the work carries the fold on its own.
 */
export default function Hero() {
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

      {HERO.map((panel, i) => (
        <div
          key={panel.src ?? i}
          className={`relative overflow-hidden ${panel.gradient}`}
        >
          {panel.src ? (
            <Image
              src={panel.src}
              alt={panel.alt ?? ""}
              fill
              priority
              sizes={i === 0 ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 34vw"}
              className="object-cover"
            />
          ) : (
            <Grain opacity={0.3} />
          )}
        </div>
      ))}
    </section>
  );
}
