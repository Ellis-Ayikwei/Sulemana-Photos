import type { Metadata } from "next";
import Image from "next/image";
import { BIO, PORTRAIT } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creative Director, Designer, Photographer and Cinematographer with over a decade shaping brands out of Accra, Ghana.",
};

/**
 * Full-bleed studio-grey panel: serif copy on the left, the cut-out portrait
 * anchored bottom-right so it bleeds off the section edge.
 *
 * The copy renders at font-weight 600, which Georgia resolves to its bold
 * cut — that is what gives the layout its weight. Drop to `font-normal`
 * to lighten it.
 */
export default function AboutPage() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] flex-col gap-8 overflow-hidden bg-studio px-[clamp(22px,4.5vw,90px)] pt-[clamp(40px,6vw,88px)] nav:flex-row nav:items-stretch nav:gap-[clamp(24px,4vw,72px)] nav:pb-0">
      <div className="flex max-w-[68ch] flex-col justify-center nav:flex-1 nav:pb-[clamp(40px,6vw,88px)]">
        {BIO.map((para, i) => (
          <p
            key={para.slice(0, 40)}
            className={`font-serif text-[clamp(15px,1.32vw,21px)] font-semibold leading-[1.5] text-[#101010] ${
              i > 0 ? "mt-[1.15em]" : ""
            }`}
          >
            {para}
          </p>
        ))}
      </div>

      <div className="-mx-[clamp(22px,4.5vw,90px)] flex items-end justify-center nav:mx-0 nav:-mr-[clamp(22px,4.5vw,90px)] nav:flex-none nav:self-end">
        <Image
          src={PORTRAIT.src}
          alt={PORTRAIT.alt}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          priority
          sizes="(max-width: 900px) 90vw, 50vw"
          className="h-auto max-h-[62vh] w-auto max-w-full object-contain object-bottom nav:h-[calc(100svh-var(--nav-h)-clamp(28px,4vw,64px))] nav:max-h-none nav:max-w-none"
        />
      </div>
    </section>
  );
}
