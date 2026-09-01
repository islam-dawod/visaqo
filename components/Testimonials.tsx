"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { TESTIMONIALS } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill={i < rating ? "#F6B93B" : "none"}
          stroke={i < rating ? "#F6B93B" : "#D8D5E0"}
          strokeWidth="1.6"
          strokeLinejoin="round"
        >
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.3l1.4-6.8L2.2 9.8l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;
  const go = (dir: number) => setActive((a) => (a + dir + count) % count);

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 section-title">What Our Customer</h2>
          <p className="mt-2 text-xl text-ink-muted sm:text-2xl">Say About US</p>
        </Reveal>

        <Reveal className="relative mx-auto mt-12 max-w-4xl">
          {/* Card carousel */}
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="w-full shrink-0">
                  <div className="mx-2 flex flex-col items-center rounded-[2rem] bg-[#F6F5F3] px-6 py-10 text-center sm:px-16 sm:py-12">
                    <img
                      src={asset("/assets/avatar.png")}
                      alt={t.name}
                      className="h-20 w-20 rounded-full object-cover ring-4 ring-white"
                    />
                    <figcaption className="mt-4">
                      <p className="text-lg font-semibold text-ink">{t.name}</p>
                      <p className="text-sm text-ink-muted">{t.role}</p>
                    </figcaption>
                    <div className="mt-3">
                      <Stars rating={t.rating} />
                    </div>
                    <blockquote className="mt-5 max-w-xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                      {t.quote}
                    </blockquote>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Side arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 grid h-11 w-11 -translate-y-1/2 -translate-x-1/2 place-items-center rounded-full bg-white text-ink-soft shadow-card transition-colors hover:text-brand-600 sm:h-12 sm:w-12"
          >
            <Chevron dir="left" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 grid h-11 w-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white text-ink-soft shadow-card transition-colors hover:text-brand-600 sm:h-12 sm:w-12"
          >
            <Chevron dir="right" />
          </button>
        </Reveal>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === active ? "bg-brand-600" : "bg-brand-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
