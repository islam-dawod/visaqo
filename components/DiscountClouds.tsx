"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

// White clouds that slide in from the left and right when the section
// scrolls into view (like the original Framer design).
export default function DiscountClouds() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base =
    "pointer-events-none absolute select-none transition-transform duration-[1600ms] ease-out will-change-transform";
  const cloud = asset("/assets/cloud.png");

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden"
    >
      {/* big low clouds */}
      <img
        src={cloud}
        alt=""
        className={`${base} -bottom-16 -left-10 w-[460px] opacity-95 sm:w-[640px] ${
          inView ? "translate-x-0" : "-translate-x-[130%]"
        }`}
      />
      <img
        src={cloud}
        alt=""
        className={`${base} -bottom-12 -right-10 w-[480px] opacity-95 sm:w-[660px] ${
          inView ? "translate-x-0" : "translate-x-[130%]"
        }`}
      />
      {/* higher, lighter clouds */}
      <img
        src={cloud}
        alt=""
        style={{ transitionDelay: "160ms" }}
        className={`${base} bottom-24 left-[8%] w-[300px] opacity-70 sm:w-[420px] ${
          inView ? "translate-x-0" : "-translate-x-[170%]"
        }`}
      />
      <img
        src={cloud}
        alt=""
        style={{ transitionDelay: "160ms" }}
        className={`${base} bottom-32 right-[10%] w-[320px] opacity-70 sm:w-[440px] ${
          inView ? "translate-x-0" : "translate-x-[170%]"
        }`}
      />
    </div>
  );
}
