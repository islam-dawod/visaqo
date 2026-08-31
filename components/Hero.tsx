"use client";

import { useEffect, useState } from "react";
import { asset, SPLINE_GLOBE } from "@/lib/asset";
import { NATIONALITIES, DESTINATIONS } from "@/lib/content";
import { PassportIcon, PinIcon, ChevronDown, ArrowIcon } from "./Icons";

const WORDS = ["Destination", "Adventure", "Journey", "Escape"];

export default function Hero() {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-28 pt-32 sm:pt-36">
      {/* World map backdrop */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[720px] bg-contain bg-top bg-no-repeat opacity-[0.5]"
        style={{ backgroundImage: `url(${asset("/assets/world-map.png")})` }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white/40 via-white/70 to-white" />

      {/* floating clouds */}
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="floaty pointer-events-none absolute left-[-60px] top-[360px] -z-10 w-64 opacity-80"
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="floaty pointer-events-none absolute right-[-40px] top-[300px] -z-10 w-72 opacity-70"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container-x relative">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
            Where Will Your Next
            <br />
            <span className="relative inline-block min-w-[4ch] align-baseline">
              <span key={wordIndex} className="gradient-text inline-block animate-[floaty_0.6s_ease]">
                {WORDS[wordIndex]}
              </span>
            </span>{" "}
            Take You?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted sm:text-lg">
            Plan smarter. Travel better. Create memories that last.
          </p>
        </div>

        {/* 3D Spline globe (top band cropped to sit under the heading) */}
        <div className="relative mx-auto mt-2 h-[240px] w-full max-w-[640px] overflow-hidden sm:h-[300px]">
          <iframe
            src={SPLINE_GLOBE}
            title="Interactive 3D globe"
            className="pointer-events-none absolute inset-x-0 -top-[150px] h-[560px] w-full"
            style={{ border: "none", background: "transparent" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Search bar */}
      <div id="hero-form" className="container-x relative -mt-6 sm:-mt-8">
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
