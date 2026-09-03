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
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the block is entering from the bottom, 1 once it has left the top.
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.max(0, Math.min(1, progress));
      // Clouds stay fully IN while the block is around the middle of the screen,
      // then slide OUT to the sides as it approaches either edge — so they keep
      // moving in/out with the scroll without vanishing while the section is read.
      const d = Math.abs(p - 0.5);
      const conv = Math.max(0, Math.min(1, (d - 0.12) / 0.34));

      cloudsRef.current.forEach((c) => {
        if (!c) return;
        const dir = Number(c.dataset.dir); // -1 = left, 1 = right
        const depth = Number(c.dataset.depth); // how far it travels (%)
        c.style.transform = `translate3d(${dir * conv * depth}%, 0, 0)`;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
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
