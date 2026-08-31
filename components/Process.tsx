import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/content";
import { MapIcon, UploadIcon, FormIcon, BellIcon } from "./Icons";

const iconMap = { map: MapIcon, upload: UploadIcon, form: FormIcon, bell: BellIcon };

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-[#0F1020] py-20 text-white sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/10 !text-brand-100">VisaQo Process</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your Visa Process,{" "}
            <span className="bg-gradient-to-r from-[#9C86FF] to-[#C4B6FF] bg-clip-text text-transparent">
              Simplified
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            We simplify the visa application process so you can focus on planning
            your trip — not paperwork.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Reveal key={s.step} delay={i * 90}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]">
                  <span className="absolute right-5 top-5 text-5xl font-extrabold text-white/5">
                    {s.step}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#hero-form" className="btn-primary">
            Start Your Application
          </a>
        </Reveal>
      </div>
    </section>
  );
}
