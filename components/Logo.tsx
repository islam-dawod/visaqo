import { asset } from "@/lib/asset";

export default function Logo({
  className = "",
  height = 26,
}: {
  className?: string;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/assets/logo.png")}
      alt="VisaQo"
      height={height}
      style={{ height }}
      className={`w-auto ${className}`}
    />
  );
}
