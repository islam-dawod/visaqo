// Stylized 3D-looking globe built from SVG gradients (self-contained, no image assets).
export default function Globe({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ocean" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#7FC7FF" />
          <stop offset="45%" stopColor="#2E8BE6" />
          <stop offset="100%" stopColor="#0B4FA6" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#6C4CF1" stopOpacity="0" />
          <stop offset="100%" stopColor="#6C4CF1" stopOpacity="0.28" />
        </radialGradient>
        <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FBF7A" />
          <stop offset="100%" stopColor="#2E9E5B" />
        </linearGradient>
        <clipPath id="sphere">
          <circle cx="260" cy="260" r="200" />
        </clipPath>
      </defs>

      {/* outer glow */}
      <circle cx="260" cy="260" r="250" fill="url(#glow)" />

      {/* ocean sphere */}
      <circle cx="260" cy="260" r="200" fill="url(#ocean)" />

      {/* landmasses */}
      <g clipPath="url(#sphere)" fill="url(#land)">
        <path d="M150 120c40-18 90-8 96 24 5 26-24 34-30 58-6 26 16 44 4 66-12 22-46 20-64-2-18-24-14-64-24-96-8-28-26-40 18-50z" />
        <path d="M300 150c30-8 66 0 70 26 3 22-22 30-24 52-2 22 20 38 8 58-12 20-42 16-54-6-12-24-6-56-8-84-2-22 0-40 8-46z" />
        <path d="M210 300c34-12 74-4 84 24 8 24-14 42-8 66 6 22-16 44-40 40-24-4-34-34-40-64-6-32-24-56 4-66z" />
        <path d="M330 320c26-6 54 4 56 28 2 20-18 30-16 50 1 18-18 30-36 22-16-8-18-34-18-58 0-26-8-56 14-42z" />
      </g>

      {/* meridians */}
      <g clipPath="url(#sphere)" fill="none" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.5">
        <ellipse cx="260" cy="260" rx="200" ry="70" />
        <ellipse cx="260" cy="260" rx="200" ry="130" />
        <ellipse cx="260" cy="260" rx="70" ry="200" />
        <ellipse cx="260" cy="260" rx="140" ry="200" />
        <line x1="60" y1="260" x2="460" y2="260" />
      </g>

      {/* specular highlight */}
      <ellipse cx="195" cy="185" rx="95" ry="60" fill="#ffffff" opacity="0.18" />
      <circle cx="260" cy="260" r="200" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  );
}
