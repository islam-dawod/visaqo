import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/content";
import { MapIcon, UploadIcon, FormIcon, BellIcon, ArrowIcon } from "./Icons";

const iconMap = { map: MapIcon, upload: UploadIcon, form: FormIcon, bell: BellIcon };

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-gradient-to-b from-white via-mist-lav to-white py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left copy */}
          <Reveal>
            <span className="eyebrow">VISA Qo PROCESS</span>
            <h2 className="mt-5 section-title">
              Your Visa Process,
              <br />
              <span className="gradient-text">Simplified</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-muted">
              We simplify the visa application process so you can focus on planning
              your trip — not paperwork.
            </p>
            <a href="#hero-form" className="btn-primary mt-8">
              Start Your Application
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Right: connected flow */}
          <div className="relative">
            <ol className="relative space-y-5 before:absolute before:left-[27px] before:top-6 before:bottom-6 before:w-px before:border-l-2 before:border-dashed before:border-brand-200">
              {PROCESS_STEPS.map((s, i) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <Reveal key={s.step} delay={i * 90}>
                    <li className="relative flex gap-5">
                      {/* node */}
                      <div className="relative z-10 shrink-0">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-brand-accent shadow-card">
                          {s.step}
                        </span>
                      </div>
                      {/* card */}
                      <div className="flex-1 rounded-2xl border border-black/5 bg-white p-5 shadow-card">
                        <h3 className="font-semibold text-ink">{s.title}</h3>
                        <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
                        {s.tag && (
                          <span className="mt-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-ink-soft">
                            {s.tag}
                          </span>
                        )}
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
