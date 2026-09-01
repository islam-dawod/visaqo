import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GlobeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function MapIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function UploadIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
      <path d="M12 3v13M7 8l5-5 5 5" />
    </svg>
  );
}

export function FormIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

export function BellIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 01-3.4 0" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.3l1.4-6.8L2.2 9.8l6.9-.7L12 2z" />
    </svg>
  );
}

export function PassportIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M9 15.5h6" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5c0 9 6 15 15 15l1-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5-4 1z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function PlaneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M10 4.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5l7 4v2l-7-2.2V19l2 1.4V22l-3.8-1L8 22v-1.6L10 19v-5.7L3 15.5v-2l7-4v-5z" />
    </svg>
  );
}

export function IdIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M13 9h5M13 13h5M5.5 15.5c.6-1.3 1.7-2 3-2s2.4.7 3 2" />
    </svg>
  );
}

export function CheckCircleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

export function MinusIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CalendarIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

export const ICONS = {
  globe: GlobeIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
  map: MapIcon,
  upload: UploadIcon,
  form: FormIcon,
  bell: BellIcon,
} as const;

export type IconName = keyof typeof ICONS;
