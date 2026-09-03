"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";

// White clouds that slide IN as the section reaches the middle of the viewport
// and slide back OUT as it leaves — driven continuously by the scroll position
// (a parallax like the original Framer design).
export default function DiscountClouds() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the block is entering from the bottom, 1 once it has left the top.
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, progress));
      // Continuous: right/left clouds converge to the centre as the section reaches
      // the middle of the screen, and diverge back to the sides as it moves away —
      // so they move on EVERY scroll step (and reverse when scrolling back up).
      const conv = Math.abs(p - 0.5) * 2;

      cloudsRef.current.forEach((c) => {
        if (!c) return;
        const dir = Number(c.dataset.dir); // -1 = left, 1 = right
        const depth = Number(c.dataset.depth); // how far it travels (%)
        c.style.transform = `translate3d(${dir * conv * depth}%, 0, 0)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const cloud = asset("/assets/cloud.png");
  const base = "pointer-events-none absolute select-none will-change-transform";
  const set = (i: number) => (el: HTMLImageElement | null) => {
    cloudsRef.current[i] = el;
  };

  // A dense band: many overlapping clouds spread across the width. When the
  // section is centred they converge into a thick white layer; scrolling away
  // slides them back out to the sides.
  const clouds = [
    // low, big, opaque band
    { pos: "-bottom-16 left-[-8%] w-[440px] sm:w-[600px]", op: "opacity-100", dir: -1, depth: 150 },
    { pos: "-bottom-14 left-[16%] w-[420px] sm:w-[560px]", op: "opacity-95", dir: -1, depth: 150 },
    { pos: "-bottom-16 left-[40%] w-[440px] sm:w-[600px]", op: "opacity-100", dir: 1, depth: 150 },
    { pos: "-bottom-14 right-[-8%] w-[440px] sm:w-[600px]", op: "opacity-95", dir: 1, depth: 150 },
    // middle layer
    { pos: "bottom-10 left-[4%] w-[320px] sm:w-[460px]", op: "opacity-90", dir: -1, depth: 175 },
    { pos: "bottom-16 left-[28%] w-[340px] sm:w-[480px]", op: "opacity-80", dir: -1, depth: 175 },
    { pos: "bottom-10 right-[4%] w-[320px] sm:w-[460px]", op: "opacity-90", dir: 1, depth: 175 },
    { pos: "bottom-16 right-[26%] w-[320px] sm:w-[460px]", op: "opacity-80", dir: 1, depth: 175 },
    // top wisps
    { pos: "bottom-28 left-[14%] w-[260px] sm:w-[380px]", op: "opacity-70", dir: -1, depth: 210 },
    { pos: "bottom-32 right-[16%] w-[260px] sm:w-[380px]", op: "opacity-70", dir: 1, depth: 210 },
  ];

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-1/4 overflow-hidden"
    >
      {clouds.map((c, i) => (
        <img
          key={i}
          ref={set(i)}
          data-dir={c.dir}
          data-depth={c.depth}
          src={cloud}
          alt=""
          className={`${base} ${c.pos} ${c.op}`}
        />
      ))}
    </div>
  );
}
