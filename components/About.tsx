import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import { FEATURES } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-gradient-to-b from-mist-blue to-white py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Person over blob */}
          <Reveal className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Soft lilac circle behind the person (always visible) */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[0%] -z-10 aspect-square w-[100%] -translate-x-1/2 rounded-full bg-[#AE9BF3] opacity-60 blur-[10px]"
              />
              <img
                src={asset("/assets/about-person.png")}
                alt="A VisaQo travel specialist"
                className="relative mx-auto w-full max-w-[380px] drop-shadow-xl"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={100}>
            <span className="eyebrow">About visa Q.o</span>
            <h2 className="mt-4 section-title">
              Your Visa Journey,
              <br />
              Made <span className="gradient-text">Simple.</span>
            </h2>
            <p className="mt-4 max-w-lg text-ink-muted">
              Visa Qo is a modern visa booking platform designed to make
              international travel simple and stress-free. We help travelers
              understand visa requirements, submit applications easily, and track
              their progress — all in one place.
            </p>

            <ul className="mt-7 space-y-3.5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                  <span className="font-medium text-ink-soft">{f.title}</span>
                </li>
              ))}
            </ul>

            <Link href="/form" className="btn-primary mt-8 !px-8 !py-4 text-base">
              Start Your Application
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
