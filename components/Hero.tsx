"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { asset, SPLINE_GLOBE } from "@/lib/asset";
import { NATIONALITIES, DESTINATIONS, COUNTRY_MAP } from "@/lib/content";
import { ChevronDown, ArrowIcon } from "./Icons";
import FlagImg from "./FlagImg";

// Exact rotating words from the Framer design (rotatingWords attribute)
const WORDS = ["Visa", "journey", "Destination"];

export default function Hero() {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const router = useRouter();

  // The map view appears as soon as EITHER country is chosen; the first pin shows
  // immediately, the second appears once the other country is selected.
  const mapActive = Boolean(nationality || destination);

  // Cycle the rotating word; each new word animates its letters in (Framer style).
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form");
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-28 pt-32 sm:pt-36">
      {/* World map backdrop (matches Framer: cover, centered, 0.8 opacity).
          Hidden once the route map takes over so the two maps never overlap. */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-20 h-[630px] bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          mapActive ? "opacity-0" : "opacity-80"
        }`}
        style={{ backgroundImage: `url(${asset("/assets/world-map.png")})` }}
      />
      {/* soft fade into the page at the bottom so content stays readable */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-[380px] -z-20 h-[320px] bg-gradient-to-b from-transparent to-white transition-opacity duration-500 ${
          mapActive ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* drifting clouds (like the original design) — overlap the globe so they read as clouds */}
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className={`drift-l pointer-events-none absolute left-[24%] top-[360px] z-[2] w-[200px] opacity-95 transition-opacity duration-500 sm:w-[280px] ${
          mapActive ? "!opacity-0" : ""
        }`}
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className={`drift-r pointer-events-none absolute right-[24%] top-[320px] z-[2] w-[210px] opacity-95 transition-opacity duration-500 sm:w-[300px] ${
          mapActive ? "!opacity-0" : ""
        }`}
      />
      <img
        src={asset("/assets/cloud.png")}
        alt=""
        aria-hidden="true"
        className={`drift-l pointer-events-none absolute left-1/2 top-[420px] z-[2] w-[340px] -translate-x-1/2 opacity-90 transition-opacity duration-500 sm:w-[440px] ${
          mapActive ? "!opacity-0" : ""
        }`}
        style={{ animationDelay: "2s", animationDuration: "24s" }}
      />

      {/* Flat route map — covers the whole hero (edge to edge, up behind the navbar)
          so there is no seam at the top. Sits behind the heading and search bar. */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${
          mapActive ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {mapActive && <RouteMap from={nationality} to={destination} />}
      </div>

      <div className="container-x relative z-10">
        {/* Heading — collapses away once a route is selected (like the Framer design) */}
        <div
          className={`relative z-10 mx-auto max-w-[900px] overflow-hidden text-center transition-all duration-500 lg:ml-[3%] lg:mr-auto ${
            mapActive ? "max-h-0 opacity-0" : "max-h-[260px] opacity-100"
          }`}
        >
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
              <span key={wordIndex}>
                {WORDS[wordIndex].split("").map((ch, i) => (
                  <span
                    key={i}
                    className="word-letter"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    {ch}
                  </span>
                ))}
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

        {/* Media window: the 3D globe. When a country is chosen it fades out while the
            full-hero route map (above) takes over; the empty height keeps the hero tall
            enough for the map. */}
        <div
          className={`relative mx-auto mt-2 w-full overflow-hidden transition-[height] duration-500 ${
            mapActive ? "h-[440px] sm:h-[600px]" : "h-[240px] sm:h-[300px] lg:h-[420px]"
          }`}
        >
          {/* 3D Spline globe — smaller sphere, more of it visible, shifted left */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              mapActive ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Mobile/tablet: a big wide frame shows a rounded top cap (fits the narrow screen).
                Desktop: a square frame shows the whole rounded earth, smaller and shifted left. */}
            <div className="absolute left-1/2 top-0 aspect-[1482/878] w-[1400px] max-w-none -translate-x-1/2 sm:w-[1000px] lg:left-[32%] lg:aspect-square lg:w-[700px]">
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
      </div>

      {/* Search bar */}
      <div id="hero-form" className="container-x relative z-10 -mt-10 sm:-mt-10">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid w-full grid-cols-1 gap-5 rounded-[2rem] border border-black/5 bg-white p-6 shadow-bar sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:gap-6 sm:rounded-[2.25rem] sm:p-7 sm:px-8"
        >
          <CountrySelect
            label="My passport"
            placeholder="Nationality"
            value={nationality}
            onChange={setNationality}
            options={NATIONALITIES}
          />

          <CountrySelect
            label="Destination"
            placeholder="Destination"
            value={destination}
            onChange={setDestination}
            options={DESTINATIONS}
          />

          <button
            type="submit"
            className="btn-primary h-[54px] w-full !rounded-[53px] !px-8 !text-[17px] !font-bold sm:w-auto"
          >
            Get Start My Application
            <ArrowIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- Search field: bold label on top + custom flag dropdown ---------- */
function CountrySelect({
  label,
  placeholder,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{
    top?: number;
    bottom?: number;
    left: number;
    width: number;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const meta = value ? COUNTRY_MAP[value] : null;

  // Position the menu in a portal on <body> so it is never clipped by the hero's
  // overflow-hidden or covered by the neighbouring field / next section. Flips above
  // the field when there isn't enough room below (the search bar sits low on screen).
  useEffect(() => {
    if (!open) return;
    const place = () => {
      const el = triggerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const menuMax = 300;
      const spaceBelow = window.innerHeight - r.bottom;
      if (spaceBelow < menuMax && r.top > spaceBelow) {
        setPos({ bottom: window.innerHeight - r.top + 8, left: r.left, width: r.width });
      } else {
        setPos({ top: r.bottom + 8, left: r.left, width: r.width });
      }
    };
    place();
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  return (
    <div className="relative">
      <span className="mb-2.5 block text-[15px] font-bold text-ink">{label}</span>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-[54px] w-full items-center gap-2.5 rounded-2xl border border-black/10 bg-white px-4 text-left transition-colors hover:border-black/20"
      >
        {meta && <FlagImg code={meta.code} />}
        <span className={`truncate text-base ${value ? "text-ink" : "text-[#8b8b8b]"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-ink-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && pos && typeof document !== "undefined" &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: pos.top,
              bottom: pos.bottom,
              left: pos.left,
              width: pos.width,
              zIndex: 1000,
            }}
            className="max-h-72 overflow-auto rounded-2xl border border-black/5 bg-white p-1.5 shadow-xl"
          >
            {options.map((o) => {
              const m = COUNTRY_MAP[o];
              return (
                <button
                  key={o}
                  type="button"
                  onClick={() => {
                    onChange(o);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-brand-50 ${
                    o === value ? "bg-brand-50 font-medium" : ""
                  }`}
                >
                  {m && <FlagImg code={m.code} />}
                  <span className="truncate text-ink-soft">{o}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
}

/* ---------- Flat world map with progressive From / To pins ---------- */
function RouteMap({ from, to }: { from: string; to: string }) {
  const a = from ? COUNTRY_MAP[from] : null;
  const b = to ? COUNTRY_MAP[to] : null;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Full-ratio map, centre-cropped exactly like the Framer design
          (background-size: cover; background-position: 50% 50%). */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="relative w-full">
          <img
            src={asset("/assets/world-map.png")}
            alt="World map showing your visa route"
            className="block w-full select-none opacity-90"
            draggable={false}
          />

          {/* connecting route line — only once both ends exist */}
          {a && b && (
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#9aa3af"
                strokeWidth="0.22"
                strokeDasharray="0.7 0.9"
                strokeLinecap="round"
              />
            </svg>
          )}

          {a && <Pin x={a.x} y={a.y} color="#e23b3b" label={`From: ${from}`} />}
          {b && <Pin x={b.x} y={b.y} color="#1c1c1c" label={`To: ${to}`} />}
        </div>
      </div>
    </div>
  );
}

function Pin({
  x,
  y,
  color,
  label,
}: {
  x: number;
  y: number;
  color: string;
  label: string;
}) {
  return (
    <div
      className="pin-pop absolute flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -100%)" }}
    >
      <span className="mb-1 whitespace-nowrap rounded-md bg-[#1c1c1c] px-2 py-1 text-[11px] font-medium leading-none text-white shadow-sm">
        {label}
      </span>
      <svg width="22" height="30" viewBox="0 0 24 32" className="block drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]">
        <path
          d="M12 0C5.4 0 0 5.3 0 11.8 0 20.6 12 32 12 32s12-11.4 12-20.2C24 5.3 18.6 0 12 0z"
          fill={color}
        />
        <circle cx="12" cy="11.5" r="4.2" fill="#fff" />
      </svg>
    </div>
  );
}
