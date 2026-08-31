import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { DISCOUNTS } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function Discounts() {
  return (
    <section id="discounts" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Discounts</span>
          <h2 className="mt-4 section-title">
            Exclusive Deals &amp; <span className="gradient-text">Discounts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Unlock exclusive deals and discounts on our curated travel packages.
            From early bird offers to last-minute deals, we&apos;ve got something
            for everyone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {DISCOUNTS.map((d, i) => (
            <Reveal key={d.percent} delay={i * 100}>
              <article className="group relative h-72 overflow-hidden rounded-[2rem] shadow-card sm:h-80">
                <img
                  src={asset(d.image)}
                  alt={d.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                  <span className="inline-flex w-fit rounded-full bg-white/20 px-4 py-1.5 text-2xl font-extrabold backdrop-blur-sm sm:text-3xl">
                    {d.percent} Off
                  </span>
                  <p className="mt-3 max-w-[16rem] text-lg font-semibold leading-snug">
                    Get {d.percent} Discounts for {d.title}
                  </p>
                </div>
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
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
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
