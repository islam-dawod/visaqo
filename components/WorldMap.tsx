// Soft, stylized world-map backdrop rendered as inline SVG (fully self-contained).
export default function WorldMap({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="#0F1020" opacity="0.05">
        {/* North America */}
        <path d="M120 150c40-30 120-40 180-25 25 6 40 30 30 55-8 20-40 25-45 45-6 24 15 45 5 70-8 20-35 25-60 20-40-8-70-45-85-90-15-45-10-95 -25-130 0 0 0 0 0 0z" />
        {/* South America */}
        <path d="M330 400c25-15 60-10 75 15 12 20 5 50 20 70 14 19 12 50-5 70-16 19-45 20-60 5-18-18-20-55-30-85-11-33-30-60-5-90z" />
        {/* Europe */}
        <path d="M690 150c35-12 80-8 100 15 14 16 6 40-10 50-18 11-45 6-58 22-12 15 0 40-18 50-16 9-40-2-48-22-10-26-6-60 8-85 8-14 15-20 26-30z" />
        {/* Africa */}
        <path d="M720 300c40-15 90-8 108 25 12 22 2 50 16 72 13 21 8 52-12 68-19 15-48 12-62-6-16-22-16-58-26-90-11-35-42-58-24-95 1-2 0 0 0 0z" />
        {/* Asia */}
        <path d="M900 140c70-25 170-25 235 5 40 18 55 60 35 92-16 26-56 30-70 60-13 27 6 60-14 82-18 20-52 16-68-6-20-28-14-72-34-104-22-35-66-48-96-78-20-20-16-40 12-53z" />
        {/* Australia */}
        <path d="M1120 470c40-18 95-12 118 18 15 20 8 50-12 62-24 15-60 10-84-4-27-16-52-56-22-76z" />
      </g>

      {/* dotted overlay for texture */}
      <g fill="#6C4CF1" opacity="0.06">
        {Array.from({ length: 24 }).map((_, r) =>
          Array.from({ length: 48 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={15 + c * 30} cy={15 + r * 30} r="1.6" />
          ))
        )}
      </g>
    </svg>
  );
}
