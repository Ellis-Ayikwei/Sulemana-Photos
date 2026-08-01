/** Small brass eyebrow that opens nearly every section. */
export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
      {children}
    </div>
  );
}
