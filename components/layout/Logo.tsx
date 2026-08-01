import Image from "next/image";
import { site } from "@/data/site";

/**
 * The header mark.
 *
 * Renders the real artwork once `site.logo` points at a file; until then it
 * falls back to a typographic lockup in the same stacked composition -
 * script wordmark with PHOTOS tucked underneath.
 */
export default function Logo() {
  if (site.logo) {
    // Sized by height so it always sits at a consistent fraction of the bar.
    return (
      <Image
        src={site.logo}
        alt={site.name}
        width={site.logoSize.width}
        height={site.logoSize.height}
        priority
        className="h-[clamp(34px,4.2vw,68px)] w-auto"
      />
    );
  }

  return (
    <span className="inline-flex flex-col leading-none">
      <span className="font-serif text-[clamp(22px,2.1vw,34px)] italic tracking-[0.01em] text-paper">
        {site.wordmark.first}
      </span>
      <span className="mt-[3px] self-end indent-[0.42em] text-[clamp(7px,0.62vw,10px)] tracking-[0.42em] text-paper">
        {site.wordmark.second}
      </span>
    </span>
  );
}
