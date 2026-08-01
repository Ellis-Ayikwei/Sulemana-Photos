import Link from "next/link";
import { Aperture, ArrowUpRight, Camera, Film, Gem } from "lucide-react";
import Label from "@/components/ui/Label";
import { DISCIPLINES } from "@/data/services";
import { HOME_COPY } from "@/data/home";

const ICONS = {
  camera: Camera,
  aperture: Aperture,
  gem: Gem,
  film: Film,
} as const;

/** Four disciplines, each linking through to the services page. */
export default function Disciplines() {
  return (
    <section className="border-b border-ink/[0.12] px-7 py-[clamp(64px,8vw,96px)]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label>Services</Label>
            <h2 className="font-serif text-[clamp(26px,3.4vw,38px)]">
              {HOME_COPY.disciplinesHeading}
            </h2>
            <p className="mt-2.5 max-w-[440px] text-[15px] leading-relaxed text-stone-600">
              {HOME_COPY.disciplinesIntro}
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] no-underline"
          >
            Packages &amp; Pricing <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-ink/[0.15]">
          {DISCIPLINES.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <Link
                key={d.name}
                href="/services"
                className={`block px-6 pb-8 pt-7 no-underline ${
                  i > 0 ? "border-l border-ink/[0.12]" : ""
                }`}
              >
                <Icon size={26} strokeWidth={1.2} className="text-brass" />
                <div className="mt-[18px] font-serif text-[21px]">{d.name}</div>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-stone-600">
                  {d.copy}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
