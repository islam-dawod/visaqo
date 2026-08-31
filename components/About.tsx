import Reveal from "./Reveal";
import { FEATURES } from "@/lib/content";
import { GlobeIcon, ShieldIcon, BoltIcon } from "./Icons";

const iconMap = { globe: GlobeIcon, shield: ShieldIcon, bolt: BoltIcon };

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-50 to-transparent" />
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-8 aspect-[3/4] rounded-3xl bg-gradient-to-br from-brand to-brand-600 shadow-soft" />
                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#1B1C39] to-[#333569] shadow-card" />
                <div className="col-span-2 flex items-center justify-between rounded-3xl border border-black/5 bg-white p-5 shadow-card">
                  <div>
                    <p className="text-2xl font-extrabold text-ink">190+</p>
                    <p className="text-xs text-ink-muted">Destinations covered</p>
                  </div>
                  <div className="h-10 w-px bg-black/10" />
                  <div>
                    <p className="text-2xl font-extrabold text-ink">50k+</p>
                    <p className="text-xs text-ink-muted">Applications handled</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={100}>
            <div>
              <span className="eyebrow">About VisaQo</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Your Visa Journey,{" "}
                <span className="gradient-text">Made Simple.</span>
              </h2>
              <p className="mt-4 max-w-lg text-ink-muted">
                VisaQo is a modern visa booking platform designed to make
                international travel simple and stress-free. We help travelers
                understand visa requirements, submit applications easily, and
                track their progress — all in one place.
              </p>

              <ul className="mt-8 space-y-4">
                {FEATURES.map((f) => {
                  const Icon = iconMap[f.icon as keyof typeof iconMap];
                  return (
                    <li key={f.title} className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-ink">{f.title}</h3>
                        <p className="text-sm text-ink-muted">{f.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <a href="#hero-form" className="btn-primary mt-8">
                Start Your Application
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
