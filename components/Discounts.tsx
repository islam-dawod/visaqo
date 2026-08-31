import Reveal from "./Reveal";
import { DISCOUNTS } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function Discounts() {
  return (
    <section id="discounts" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Discounts</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Exclusive Deals &{" "}
            <span className="gradient-text">Discounts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-muted">
            Unlock exclusive deals on our curated travel packages. From early-bird
            offers to last-minute deals, we&apos;ve got something for everyone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {DISCOUNTS.map((d, i) => (
            <Reveal key={d.percent} delay={i * 100}>
              <article
                className={`relative flex items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${d.tone} p-8 text-white shadow-soft`}
              >
                <div className="relative z-10 max-w-[70%]">
                  <p className="text-4xl font-extrabold sm:text-5xl">{d.percent} Off</p>
                  <p className="mt-2 text-lg font-semibold">{d.title}</p>
                  <p className="mt-1 text-sm text-white/75">{d.desc}</p>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
                <div className="pointer-events-none absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-white/5" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal>
          <div id="contact" className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-black/5 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-card sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Are you ready to book with us?
              </h3>
              <p className="mt-2 text-ink-muted">
                Start your application today and let VisaQo handle the rest.
              </p>
            </div>
            <a href="#hero-form" className="btn-primary shrink-0">
              Book Now
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
