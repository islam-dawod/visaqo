"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { DISCOUNTS } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import DiscountClouds from "./DiscountClouds";

export default function Discounts() {
  // Cards expand on CLICK (image or the arrow), not on hover.
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="discounts"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-[#DCEBFB] to-[#AFD2F1] py-20 sm:py-28"
    >
      {/* drifting clouds entering from the sides */}
      <DiscountClouds />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Exclusive Deals &amp; <span className="gradient-text">Discounts</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            Unlock exclusive deals and discounts on our curated travel packages.
            From early bird offers to last-minute deals, we&apos;ve got something
            for everyone.
          </p>
        </Reveal>

        <Reveal className="mt-14 flex flex-col gap-6 md:flex-row">
          {DISCOUNTS.map((d, i) => {
            const isActive = active === i;
            return (
              <article
                key={d.percent}
                onClick={() => setActive(isActive ? null : i)}
                className={`group relative h-[300px] cursor-pointer overflow-hidden rounded-[36px] shadow-card transition-[flex-grow] duration-500 ease-out sm:h-[420px] md:flex-1 ${
                  isActive ? "md:flex-[2.6]" : "md:flex-1"
                }`}
              >
                <img
                  src={asset(d.image)}
                  alt={`${d.title} discount`}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                    isActive ? "scale-105" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" />

                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <span className="rounded-pill bg-brand/85 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                    {d.percent} Off
                  </span>
                  <button
                    type="button"
                    aria-label={isActive ? "Collapse" : "Expand"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(isActive ? null : i);
                    }}
                    className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft"
                  >
                    <ArrowIcon
                      className={`h-4 w-4 transition-transform duration-500 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Title + (when open) description & Book Now */}
                <div className="absolute inset-x-7 bottom-7">
                  <h3 className="text-2xl font-semibold leading-snug text-white">
                    Get {d.percent} Discounts for {d.title}
                  </h3>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`mt-3 flex items-end justify-between gap-5 transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p className="max-w-md text-sm leading-relaxed text-white/90">
                          {d.desc}
                        </p>
                        <Link
                          href="/form"
                          onClick={(e) => e.stopPropagation()}
                          className="btn-primary shrink-0 !px-6 !py-3 !text-sm"
                        >
                          Book Now
                          <ArrowIcon className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>

        {/* CTA — text over the clouds */}
        <Reveal>
          <div id="contact" className="relative z-10 mt-24 text-center sm:mt-28">
            <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem]">
              Are you ready to book with us?
            </h3>
            <Link href="/form" className="btn-primary mx-auto mt-8">
              Book Now
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
