import Link from "next/link";
import Reveal from "./Reveal";
import ScrollFade from "./ScrollFade";
import { PROCESS_STEPS } from "@/lib/content";
import { ArrowIcon } from "./Icons";

const nodeClass =
  "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-xl font-bold text-white shadow-soft";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-mist-lav to-white py-20 sm:py-28"
    >
      <ScrollFade className="container-x">
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
            <Link href="/form" className="btn-primary mt-8 !px-8 !py-4 !text-base">
              Start Your Application
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Right: flowchart (desktop) */}
          <Reveal className="hidden justify-center lg:flex">
            <div className="relative h-[460px] w-[560px] max-w-full">
              {/* soft glow */}
              <div className="pointer-events-none absolute right-2 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl" />

              {/* connectors */}
              <svg
                viewBox="0 0 560 460"
                fill="none"
                className="absolute inset-0 h-full w-full"
                stroke="#CBC4E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M180 63 V88" />
                <path d="M60 114 H4" strokeDasharray="4 5" stroke="#B9B0DE" />
                <path d="M290 114 H344 Q360 114 360 130 V143" />
                <path d="M360 173 V206 Q360 220 346 220" />
                <path d="M307 248 H154 Q140 248 140 262 V292" />
                <path d="M140 348 V368" />
              </svg>

              {/* Node 1 */}
              <div className="absolute left-[152px] top-[7px]">
                <span className={nodeClass}>1</span>
              </div>
              <p className="absolute left-[222px] top-[22px] font-medium text-ink">
                Select Your Destination
              </p>

              {/* Check pill */}
              <div className="absolute left-[60px] top-[88px] flex h-[52px] w-[230px] flex-col items-center justify-center rounded-2xl bg-brand-50 text-center leading-tight">
                <span className="text-sm font-semibold text-brand-accent">Check Visa Requirements</span>
                <span className="text-xs text-brand-accent/80">based on nationality</span>
              </div>

              {/* Yes pill */}
              <div className="absolute left-[332px] top-[143px] grid h-[30px] w-[56px] place-items-center rounded-full border border-brand/40 bg-white text-sm font-medium text-brand-accent">
                Yes
              </div>

              {/* Node 2 */}
              <div className="absolute left-[307px] top-[220px]">
                <span className={nodeClass}>2</span>
              </div>
              <p className="absolute left-[377px] top-[236px] font-medium text-ink">
                Upload Required Documents
              </p>

              {/* Node 3 */}
              <div className="absolute left-[112px] top-[292px]">
                <span className={nodeClass}>3</span>
              </div>
              <div className="absolute left-[182px] top-[300px]">
                <p className="font-medium text-ink">Submit Your Application</p>
                <p className="text-sm text-brand-accent">secure online form</p>
              </div>

              {/* Node 4 */}
              <div className="absolute left-[112px] top-[368px]">
                <span className={nodeClass}>4</span>
              </div>
              <div className="absolute left-[182px] top-[376px]">
                <p className="font-medium text-ink">Receive Your Visa Update</p>
                <p className="text-sm text-brand-accent">Track your application status</p>
              </div>
            </div>
          </Reveal>

          {/* Right: simple stack (mobile / tablet) */}
          <div className="relative space-y-4 lg:hidden">
            <div className="absolute bottom-6 left-7 top-6 w-px border-l-2 border-dashed border-brand-200" />
            {PROCESS_STEPS.map((s) => (
              <Reveal key={s.step}>
                <div className="relative flex gap-4">
                  <span className={`${nodeClass} z-10 shrink-0`}>{s.step}</span>
                  <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-card">
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="text-sm text-ink-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}
