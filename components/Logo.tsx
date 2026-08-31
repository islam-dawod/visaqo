// VisaQo wordmark — recreated as text + a small globe glyph.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="text-xl font-extrabold tracking-tight text-ink">VISA</span>
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand to-brand-600" />
        <span className="relative text-[11px] font-bold text-white">Q</span>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-brand-600">o</span>
    </span>
  );
}
