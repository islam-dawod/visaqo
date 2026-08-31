"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { TESTIMONIALS } from "@/lib/content";
import { StarIcon, ArrowIcon } from "./Icons";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;
  const go = (dir: number) => setActive((a) => (a + dir + count) % count);

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 section-title">
            What Our Customer
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
        </Reveal>

        <Reveal className="relative mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="w-full shrink-0 px-2">
                  <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-card sm:p-10">
                    <div className="flex gap-1 text-brand-600">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <StarIcon key={s} className="h-5 w-5" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed text-ink-soft">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <img
                        src={asset("/assets/avatar.png")}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-ink">{t.name}</p>
                        <p className="text-sm text-ink-muted">{t.role}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-brand" : "w-2 bg-brand-100"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
