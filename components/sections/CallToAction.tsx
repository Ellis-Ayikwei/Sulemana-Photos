import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { HOME_COPY } from "@/data/home";
import { site } from "@/data/site";
import { btn } from "@/lib/ui";

/** Closing band — the last thing above the footer. */
export default function CallToAction() {
  return (
    <section className="px-7 py-[clamp(64px,9vw,110px)] text-center">
      <div className="mx-auto max-w-[640px]">
        <h2 className="mb-[18px] font-serif text-[clamp(26px,3.8vw,44px)] leading-[1.15]">
          {HOME_COPY.ctaHeading}
        </h2>
        <p className="mb-[34px] text-[15px] leading-[1.75] text-stone-600">
          {HOME_COPY.ctaCopy}
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <Link href="/contact" className={btn.solid}>
            Book a Shoot <ArrowUpRight size={14} />
          </Link>
          <a href={`mailto:${site.email}`} className={btn.outline}>
            <Mail size={14} /> {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
