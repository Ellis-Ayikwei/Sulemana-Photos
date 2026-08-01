/** Rule-topped label/value pair used in the project detail credits block. */
export default function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-ink/[0.15] pt-2.5">
      <div className="mb-1 text-[10px] uppercase tracking-[0.14em] text-stone-500">
        {label}
      </div>
      <div className="text-sm text-ink">{value}</div>
    </div>
  );
}
