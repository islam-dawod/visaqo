"use client";

import { useEffect, useRef } from "react";

// Scroll-linked fade: the wrapped content stays fully visible while the section
// is on screen, then fades out gradually as it leaves the top of the viewport
// (like the section transitions in the Framer design). Entrance fade-in is still
// handled by the inner <Reveal> elements, whose opacity multiplies with this one.
export default function ScrollFade({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const fadeZone = vh * 0.5;
      let op = 1;
      if (r.bottom < fadeZone) op = Math.max(0, r.bottom / fadeZone);
      el.style.opacity = String(op);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className={`will-change-[opacity] ${className}`}>
      {children}
    </div>
  );
}
