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

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden"
    >
      {/* big low clouds */}
      <img ref={set(0)} data-dir="-1" data-depth="150" src={cloud} alt="" className={`${base} -bottom-16 -left-10 w-[460px] opacity-95 sm:w-[640px]`} />
      <img ref={set(1)} data-dir="1" data-depth="150" src={cloud} alt="" className={`${base} -bottom-12 -right-10 w-[480px] opacity-95 sm:w-[660px]`} />
      {/* higher, lighter clouds travel a little further */}
      <img ref={set(2)} data-dir="-1" data-depth="190" src={cloud} alt="" className={`${base} bottom-24 left-[8%] w-[300px] opacity-70 sm:w-[420px]`} />
      <img ref={set(3)} data-dir="1" data-depth="190" src={cloud} alt="" className={`${base} bottom-32 right-[10%] w-[320px] opacity-70 sm:w-[440px]`} />
    </div>
  );
}
