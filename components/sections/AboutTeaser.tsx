import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Label from "@/components/ui/Label";
import { PORTRAIT } from "@/data/about";
import { HOME_COPY } from "@/data/home";
import { CLIENTS } from "@/data/site";

const STATS: [string, string][] = [
  ["10+", "Years shaping brands"],
  [String(CLIENTS.length), "Long-standing clients"],
  ["1", "Point of view"],
];

/**
 * Studio-grey band pairing the cut-out portrait with a short bio.
 * Mirrors the About page: here the portrait bleeds off the LEFT edge.
 */
export default function AboutTeaser() {
  return (
    <section className="flex flex-col gap-7 overflow-hidden bg-studio-left px-[clamp(22px,4.5vw,90px)] pt-[clamp(48px,6vw,80px)] nav:flex-row nav:items-stretch nav:gap-[clamp(32px,5vw,76px)] nav:pb-0">
      <div className="-mx-[clamp(22px,4.5vw,90px)] flex items-end justify-center nav:mx-0 nav:-ml-[clamp(22px,4.5vw,90px)] nav:flex-none nav:self-end">
        <Image
          src={PORTRAIT.src}
          alt={PORTRAIT.alt}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          sizes="(max-width: 900px) 70vw, 40vw"
          className="h-auto max-h-[44vh] w-auto max-w-full object-contain object-bottom nav:h-[clamp(400px,42vw,600px)] nav:max-h-none nav:max-w-none"
        />
      </div>

      <div className="flex flex-col justify-center pb-[clamp(48px,6vw,80px)] nav:flex-1 nav:py-[clamp(56px,6vw,88px)]">
        <Label>Behind the Lens</Label>
        <h2 className="mb-[18px] font-serif text-[clamp(26px,3.4vw,38px)]">Sulemana.</h2>
        <p className="max-w-[520px] text-[15.5px] leading-[1.8] text-stone-700">
          {HOME_COPY.aboutTeaser}
        </p>

        <div className="mb-[30px] mt-8 flex flex-wrap gap-9 border-t border-ink/[0.15] pt-[22px]">
          {STATS.map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-[28px]">{n}</div>
              <div className="mt-0.5 text-[11.5px] text-stone-600">{l}</div>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-flex w-fit items-center gap-1.5 border-b border-brass pb-1 text-xs uppercase tracking-[0.12em] no-underline"
        >
          Read the full story <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
