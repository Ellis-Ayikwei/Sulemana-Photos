/**
 * Shared class strings for elements that repeat across pages.
 *
 * Kept as whole literals rather than composed at runtime so Tailwind's
 * scanner can see every utility name in this file.
 */

/** The two CTA treatments used site-wide. */
export const btn = {
  solid:
    "inline-flex cursor-pointer items-center gap-2 border-none bg-ink px-7 py-3.5 text-xs uppercase tracking-[0.14em] text-paper no-underline",
  outline:
    "inline-flex cursor-pointer items-center gap-2 border border-ink bg-transparent px-7 py-3.5 text-xs uppercase tracking-[0.14em] text-ink no-underline",
} as const;

/** Form inputs on the contact page. */
export const input =
  "border border-ink/25 bg-paper px-3.5 py-3 font-sans text-sm text-ink outline-none focus-visible:border-brass";

/** The 1100px content column that most sections sit in. */
export const container = "mx-auto max-w-[1100px]";
