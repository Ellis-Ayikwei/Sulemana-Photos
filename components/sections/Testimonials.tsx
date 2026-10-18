import Label from "@/components/ui/Label";
import {
  TESTIMONIALS,
  TESTIMONIALS_ARE_PLACEHOLDER,
} from "@/data/testimonials";

/** Dark quote band, shared by the home and services pages. */
export default function Testimonials() {
  return (
    <section className="bg-ink px-7 py-[72px] text-paper">
      <div className="mx-auto max-w-[1100px]">
        <Label>What Clients Say</Label>
        <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border-t border-paper/[0.18] pt-5">
              <blockquote className="mb-[18px] font-serif text-[19px] italic leading-[1.55]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-xs uppercase tracking-[0.08em] text-brass-light">
                  {t.name}
                </div>
                <div className="mt-0.5 text-xs text-stone-300">{t.org}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {TESTIMONIALS_ARE_PLACEHOLDER && (
          <div className="mt-8 text-xs text-stone-500">
            Placeholder quotes - swap in real client feedback before launch.
          </div>
        )}
      </div>
    </section>
  );
}
