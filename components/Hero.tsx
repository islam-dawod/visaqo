"use client";

import { useState } from "react";
import Globe from "./Globe";
import WorldMap from "./WorldMap";
import { NATIONALITIES, DESTINATIONS } from "@/lib/content";
import { PassportIcon, PinIcon, ChevronDown, ArrowIcon } from "./Icons";

export default function Hero() {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.querySelector("#process");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-40 sm:pt-40">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
        <WorldMap className="absolute inset-x-0 top-10 h-[520px] w-full" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Where Will Your Next{" "}
            <span className="gradient-text">Journey</span> Take You?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
            Plan smarter. Travel better. Create memories that last.
          </p>
        </div>

        {/* Globe */}
        <div className="relative mt-10 flex justify-center">
          <Globe className="h-[300px] w-[300px] sm:h-[380px] sm:w-[380px]" />
        </div>
      </div>

      {/* Search form */}
      <div id="hero-form" className="container-x relative -mt-20 sm:-mt-24">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-3 rounded-3xl border border-black/5 bg-white p-3 shadow-soft sm:grid-cols-[1fr_1fr_auto] sm:rounded-pill sm:p-2.5"
        >
          <Field
            icon={<PassportIcon className="h-5 w-5 text-brand-600" />}
            label="My passport"
          >
            <Select
              value={nationality}
              onChange={setNationality}
              placeholder="Nationality"
              options={NATIONALITIES}
            />
          </Field>

          <Field
            icon={<PinIcon className="h-5 w-5 text-brand-600" />}
            label="Destination"
            divider
          >
            <Select
              value={destination}
              onChange={setDestination}
              placeholder="Destination"
              options={DESTINATIONS}
            />
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
      className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 sm:rounded-pill ${
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
