// Small circular flag chips rendered with CSS (reliable across platforms).
const FLAGS: Record<string, string[]> = {
  egypt: ["#CE1126", "#FFFFFF", "#000000"],
  india: ["#FF9933", "#FFFFFF", "#138808"],
  sudan: ["#D21034", "#FFFFFF", "#000000"],
};

export default function Flag({
  country,
  className = "",
}: {
  country: string;
  className?: string;
}) {
  const colors = FLAGS[country.toLowerCase()] ?? ["#6C4CF1", "#A392F5", "#5A39E4"];
  return (
    <span
      className={`inline-block h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 ${className}`}
      aria-hidden="true"
      style={{
        background: `linear-gradient(180deg, ${colors[0]} 0 33.3%, ${colors[1]} 33.3% 66.6%, ${colors[2]} 66.6% 100%)`,
      }}
    />
  );
}
