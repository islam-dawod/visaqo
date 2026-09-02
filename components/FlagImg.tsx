// Small country flag rendered from flagcdn (SVG). Falls back gracefully if a
// code is missing. Used by the hero passport / destination pickers.
export default function FlagImg({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`inline-block h-4 w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-black/10 ${className}`}
    />
  );
}
