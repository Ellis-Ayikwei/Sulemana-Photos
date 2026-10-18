import type { Metadata } from "next";
import Link from "next/link";
import Label from "@/components/ui/Label";
import Testimonials from "@/components/sections/Testimonials";
import { ADDONS, PACKAGES } from "@/data/services";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Portrait sessions, wedding coverage and brand campaigns. Packages and add-ons, quoted in Ghana cedis.",
};

export default function ServicesPage() {
  return (
    <section className="px-7 pt-[72px]">
      <div className={container}>
        <Label>Services &amp; Pricing</Label>
        <h1 className="mb-4 max-w-[620px] font-serif text-[clamp(30px,5vw,48px)]">
          Coverage built around how you&rsquo;ll actually use it.
        </h1>
        <p className="mb-12 max-w-[560px] text-[15px] leading-[1.7] text-stone-600">
          Every package below is a starting point - sessions are shaped around
          your date, location, and how the final images and film will be used.
          Prices are quoted in Ghana cedis.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-0 border border-ink/[0.15]">
          {PACKAGES.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-col p-8 ${
                p.featured ? "bg-ink text-paper" : "bg-transparent text-ink"
              } ${i > 0 ? "border-l border-ink/[0.15]" : ""}`}
            >
              {p.featured && (
                <div className="mb-3 text-[10px] uppercase tracking-[0.14em] text-brass-light">
                  Most Booked
                </div>
              )}
              <div className="mb-1.5 font-serif text-2xl">{p.name}</div>
              <div className="mb-1 text-[22px]">{p.price}</div>
              <div
                className={`mb-[22px] text-xs ${
                  p.featured ? "text-stone-300" : "text-stone-500"
                }`}
              >
                {p.duration}
              </div>

              <div className="mb-7 grid flex-1 gap-2.5">
                {p.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[13.5px]">
                    <span aria-hidden="true" className="mt-0.5 text-brass">
                      -
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`border bg-transparent px-5 py-3 text-center text-[11px] uppercase tracking-[0.14em] no-underline ${
                  p.featured ? "border-paper text-paper" : "border-ink text-ink"
                }`}
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-start gap-10 border-t border-ink/[0.12] pt-8">
          <div className="min-w-[200px]">
            <Label>Add-ons</Label>
            <p className="text-[13px] leading-relaxed text-stone-600">
              Available on any package.
            </p>
          </div>
          <div className="flex flex-1 flex-wrap gap-2.5">
            {ADDONS.map((a) => (
              <span
                key={a}
                className="border border-ink/20 px-4 py-2 text-xs text-stone-700"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Testimonials />
      </div>
    </section>
  );
}
