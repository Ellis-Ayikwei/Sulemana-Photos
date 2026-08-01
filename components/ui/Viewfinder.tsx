/**
 * Viewfinder corner brackets — the signature motif, reused across
 * the hero, the section markers, and every portfolio frame.
 *
 * Inherits `currentColor`, so set the colour on the wrapping element.
 * `tight` pulls the brackets inward, used as the hover state on tiles.
 */
export default function Viewfinder({
  className = "",
  tight = false,
}: {
  className?: string;
  tight?: boolean;
}) {
  const o = tight ? 6 : 0;
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g stroke="currentColor" strokeWidth="1.4" fill="none">
        <path d={`M ${4 + o},18 V ${4 + o} H 18`} />
        <path d={`M ${100 - 18},${4 + o} H ${96 - o} V 18`} />
        <path d={`M ${96 - o},${100 - 18} V ${96 - o} H ${100 - 18}`} />
        <path d={`M 18,${96 - o} H ${4 + o} V ${100 - 18}`} />
      </g>
    </svg>
  );
}
