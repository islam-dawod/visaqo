import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/content";
import { MapIcon, UploadIcon, FormIcon, BellIcon, ArrowIcon } from "./Icons";

const iconMap = { map: MapIcon, upload: UploadIcon, form: FormIcon, bell: BellIcon };

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-gradient-to-b from-white via-mist-lav to-white py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <Reveal>
            <span className="eyebrow">VISA Qo Process</span>
            <h2 className="mt-4 section-title">
              Your Visa Process,
              <br />
              <span className="gradient-text">Simplified</span>
            </h2>
            <p className="mt-4 max-w-md text-ink-muted">
              We simplify the visa application process so you can focus on planning
              your trip — not paperwork.
            </p>
            <a href="#hero-form" className="btn-primary mt-8">
              Start Your Application
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Right: connected steps */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {PROCESS_STEPS.map((s, i) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <Reveal key={s.step} delay={i * 90} className={i % 2 === 1 ? "sm:mt-8" : ""}>
                    <div className="group relative h-full rounded-3xl border border-black/5 bg-white p-6 shadow-card">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-4xl font-extrabold text-brand-100">{s.step}</span>
                      </div>
                      <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-muted">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
