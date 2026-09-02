"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { asset, SPLINE_GLOBE } from "@/lib/asset";
import { NATIONALITIES, DESTINATIONS } from "@/lib/content";
import { PassportIcon, PinIcon, ChevronDown, ArrowIcon } from "./Icons";

// Exact rotating words from the Framer design (rotatingWords attribute)
const WORDS = ["Visa", "journey", "Destination"];

export default function Hero() {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Typewriter effect: type a word, pause, delete it, then move to the next.
  useEffect(() => {
    const current = WORDS[wordIndex];
    let delay = deleting ? 55 : 110;
    if (!deleting && text === current) delay = 1600;
    else if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form");
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-28 pt-32 sm:pt-36">
      {/* World map backdrop (matches Framer: cover, centered, 0.8 opacity) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[630px] bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${asset("/assets/world-map.png")})` }}
      />
      {/* soft fade into the page at the bottom so content stays readable */}
      <div className="pointer-events-none absolute inset-x-0 top-[380px] -z-20 h-[320px] bg-gradient-to-b from-transparent to-white" />

      {/* drifting clouds (like the original design) — overlap the globe so they read as clouds */}
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-l pointer-events-none absolute left-[24%] top-[360px] z-[2] w-[200px] opacity-95 sm:w-[280px]"
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-r pointer-events-none absolute right-[24%] top-[320px] z-[2] w-[210px] opacity-95 sm:w-[300px]"
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className="drift-l pointer-events-none absolute left-1/2 top-[420px] z-[2] w-[340px] -translate-x-1/2 opacity-90 sm:w-[440px]"
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
              <span className="gradient-text">{text}</span>
              <span className="type-caret" aria-hidden="true" />{" "}
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

        {/* 3D Spline globe — large 3D sphere like the Framer design; a rectangular
            window shows the top ~45% (earth top hemisphere) with the lower part
            behind the search bar. */}
        <div className="relative mx-auto mt-2 h-[250px] w-full overflow-hidden sm:h-[330px]">
          <div className="absolute left-1/2 top-0 aspect-[1482/878] w-[1440px] max-w-none -translate-x-1/2">
            <iframe
              src={SPLINE_GLOBE}
              title="Interactive 3D globe"
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{ border: "none", background: "transparent" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div id="hero-form" className="container-x relative z-10 -mt-10 sm:-mt-10">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid w-full grid-cols-1 gap-2 rounded-[2rem] border border-black/5 bg-white p-4 shadow-bar sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-4 sm:rounded-[2.25rem] sm:p-4 sm:pl-8"
        >
          <Field icon={<PassportIcon className="h-5 w-5 text-brand-600" />} label="My passport">
            <Select value={nationality} onChange={setNationality} placeholder="Nationality" options={NATIONALITIES} />
          </Field>

          <Field icon={<PinIcon className="h-5 w-5 text-brand-600" />} label="Destination" divider>
            <Select value={destination} onChange={setDestination} placeholder="Destination" options={DESTINATIONS} />
          </Field>

          <button type="submit" className="btn-primary w-full !rounded-[53px] !px-8 !text-[17px] !font-bold sm:w-auto">
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
        <span className="block text-[17px] font-black leading-tight text-[#2e2e2e]">{label}</span>
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
        className={`w-full appearance-none bg-transparent pr-6 text-base outline-none ${
          value ? "text-ink" : "text-[#7b7b7b]"
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
