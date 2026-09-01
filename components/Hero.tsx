"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { asset, SPLINE_GLOBE } from "@/lib/asset";
import { NATIONALITIES, DESTINATIONS } from "@/lib/content";
import { PassportIcon, PinIcon, ChevronDown, ArrowIcon } from "./Icons";

const WORDS = ["Destination", "Journey", "Adventure"];

export default function Hero() {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form");
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-28 pt-32 sm:pt-36">
      {/* World map backdrop */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[720px] bg-contain bg-top bg-no-repeat opacity-[0.5]"
        style={{ backgroundImage: `url(${asset("/assets/world-map.png")})` }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white/40 via-white/70 to-white" />

      {/* drifting clouds (like the original design) — overlap the globe so they read as clouds */}
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-l pointer-events-none absolute left-[14%] top-[360px] z-[2] w-[200px] opacity-95 sm:w-[280px]"
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-r pointer-events-none absolute right-[34%] top-[320px] z-[2] w-[210px] opacity-95 sm:w-[300px]"
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-l pointer-events-none absolute left-[38%] top-[420px] z-[2] w-[340px] -translate-x-1/2 opacity-90 sm:w-[440px]"
        style={{ animationDelay: "2s", animationDuration: "24s" }}
      />

      <div className="container-x relative">
        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-semibold text-ink" style={{ letterSpacing: "-0.03em" }}>
            <span
              className="block"
              style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.625rem)", lineHeight: 1.1 }}
            >
              Where Will Your Next
            </span>
            <span
              className="block"
              style={{ fontSize: "clamp(2.5rem, 6.2vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span key={wordIndex} className="gradient-text animate-[floaty_0.6s_ease]">
                {WORDS[wordIndex]}
              </span>{" "}
              Take You?
            </span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-ink-muted"
            style={{ fontSize: "clamp(1.05rem, 1.9vw, 1.6rem)", fontWeight: 400 }}
          >
            Plan smarter. Travel better. Create memories that last.
          </p>
        </div>

        {/* 3D Spline globe — a circular mask guarantees a perfectly round globe
            regardless of how the Spline scene frames it; the window clips the
            lower part so only the rounded top hemisphere shows (like the design). */}
        <div className="relative mx-auto mt-8 flex h-[215px] w-full justify-center overflow-hidden sm:mt-12 sm:h-[250px]">
          <div className="h-[380px] w-[380px] shrink-0 -translate-x-16 overflow-hidden rounded-full sm:h-[460px] sm:w-[460px] sm:-translate-x-28">
            <iframe
              src={SPLINE_GLOBE}
              title="Interactive 3D globe"
              className="pointer-events-none h-full w-full scale-[1.15]"
              style={{ border: "none", background: "transparent" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div id="hero-form" className="container-x relative z-10 -mt-14 sm:-mt-16">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-2 rounded-[2rem] border border-black/5 bg-white p-3 shadow-bar sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:rounded-pill sm:p-2.5 sm:pl-6"
        >
          <Field icon={<PassportIcon className="h-5 w-5 text-brand-600" />} label="My passport">
            <Select value={nationality} onChange={setNationality} placeholder="Nationality" options={NATIONALITIES} />
          </Field>

          <Field icon={<PinIcon className="h-5 w-5 text-brand-600" />} label="Destination" divider>
            <Select value={destination} onChange={setDestination} placeholder="Destination" options={DESTINATIONS} />
          </Field>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Get Start My Application
            <ArrowIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
  divider,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  divider?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-2 ${
        divider ? "sm:border-l sm:border-black/10" : ""
      }`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50">
        {icon}
      </span>
      <div className="min-w-0 flex-1 text-left">
        <span className="block text-xs font-semibold text-ink">{label}</span>
        {children}
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none bg-transparent pr-6 text-sm font-medium outline-none ${
          value ? "text-ink" : "text-ink-muted"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
    </div>
  );
}
