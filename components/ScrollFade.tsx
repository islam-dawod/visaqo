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
      // As the section scrolls up past the top of the viewport, the whole section
      // shrinks and fades away over ~0.8 of a screen height of scrolling (like the
      // Framer transition where the section becomes smaller and disappears).
      let op = 1;
      let scale = 1;
      if (r.top < 0) {
        const p = Math.min(1, -r.top / (vh * 0.8));
        op = 1 - p;
        scale = 1 - p * 0.2;
      }
      el.style.opacity = String(op);
      el.style.transform = `scale(${scale})`;
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
    <div
      ref={ref}
      className={`origin-center will-change-[opacity,transform] ${className}`}
    >
      {children}
    </div>
  );
}
