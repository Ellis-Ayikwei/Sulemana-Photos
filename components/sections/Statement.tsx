import { HOME_COPY } from "@/data/home";

/** Dark pull-quote band — a typographic breather between image sections. */
export default function Statement() {
  return (
    <section className="bg-ink px-7 py-[clamp(64px,9vw,120px)] text-paper">
      <div className="mx-auto max-w-[900px] text-center">
        <span aria-hidden="true" className="mx-auto mb-8 block h-px w-12 bg-brass" />
        <p className="font-serif text-[clamp(22px,3.1vw,40px)] italic leading-[1.35]">
          {HOME_COPY.statement}
        </p>
        <div className="mt-7 text-[11px] uppercase tracking-[0.22em] text-brass-light">
          Sulemana
        </div>
      </div>
    </section>
  );
}
