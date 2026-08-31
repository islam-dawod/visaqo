import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { DISCOUNTS } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function Discounts() {
  return (
    <section id="discounts" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
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

                {/* top row */}
                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <span className="rounded-pill bg-brand/85 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                    {d.percent} Off
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft transition-transform group-hover:rotate-[-45deg]">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>

                {/* bottom text */}
                <p className="absolute inset-x-7 bottom-7 max-w-[15rem] text-2xl font-semibold leading-snug text-white">
                  Get {d.percent} Discounts for {d.title}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal>
          <div
            id="contact"
            className="mt-8 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-600 p-8 text-center text-white shadow-soft sm:flex-row sm:p-10 sm:text-left"
          >
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Are you ready to book with us?
            </h3>
            <a
              href="#hero-form"
              className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-white px-8 py-3.5 text-sm font-semibold text-brand-600 transition-transform hover:-translate-y-0.5"
            >
              Book Now
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
