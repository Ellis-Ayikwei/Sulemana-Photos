"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";

/** Accordion; the first item opens by default. */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.q} className="border-t border-ink/[0.15]">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent py-[18px] text-left"
            >
              <span className="text-[15px] text-ink">{item.q}</span>
              <span aria-hidden="true" className="shrink-0 text-lg leading-none text-brass">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <p
                id={panelId}
                className="mb-5 max-w-[640px] text-sm leading-[1.7] text-stone-600"
              >
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
