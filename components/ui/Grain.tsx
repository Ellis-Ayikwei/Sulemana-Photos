"use client";

import { useId } from "react";

/**
 * Film-grain texture overlay.
 *
 * Client-side because each instance needs a collision-free filter id —
 * `useId` guarantees that and stays stable across hydration. React's ids
 * contain characters that are illegal in `url(#…)`, so they are stripped.
 */
export default function Grain({ opacity = 0.35 }: { opacity?: number }) {
  const id = `grain-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay"
    >
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
