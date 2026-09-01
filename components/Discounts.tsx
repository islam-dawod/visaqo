import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { DISCOUNTS } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import DiscountClouds from "./DiscountClouds";

export default function Discounts() {
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {DISCOUNTS.map((d, i) => (
            <Reveal key={d.percent} delay={i * 100}>
              <article className="group relative h-[380px] overflow-hidden rounded-[44px] shadow-card sm:h-[420px]">
                <img
                  src={asset(d.image)}
                  alt={`${d.title} discount`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />

                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <span className="rounded-pill bg-brand/85 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                    {d.percent} Off
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft transition-transform group-hover:rotate-[-45deg]">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>

                <p className="absolute inset-x-7 bottom-7 max-w-[15rem] text-2xl font-semibold leading-snug text-white">
                  Get {d.percent} Discounts for {d.title}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

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
