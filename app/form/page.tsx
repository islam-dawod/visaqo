"use client";

import { useState } from "react";
import Link from "next/link";
import FormShell from "@/components/FormShell";
import Flag from "@/components/Flag";
import { ChevronDown, CalendarIcon, MinusIcon, PlusIcon, ArrowIcon } from "@/components/Icons";

const VISA_INFO = [
  { icon: CalendarIcon, label: "Valid for", value: "30 days after arrival" },
  { icon: PlaneRow, label: "Number of entries", value: "Single entry" },
  { icon: CalendarIcon, label: "Max stay", value: "30 days per entry" },
];

function PlaneRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4.5a1.8 1.8 0 013.6 0v5l7 4v2l-7-2.2V19l2 1.4V22l-3.8-1L8 22v-1.6L10 19v-5.7L3 15.5v-2l7-4v-5z" />
    </svg>
  );
}

export default function FormTripDetails() {
  const [travelers, setTravelers] = useState(1);

  return (
    <FormShell active={0}>
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Left: form */}
        <div>
          <h1 className="text-3xl font-semibold text-brand-600 sm:text-4xl">
            Tell us about your trip
          </h1>
          <p className="mt-2 text-ink-muted">
            We&apos;ll help you find the right visa and requirement for your journey
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <label className="field-label">Your passport</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Flag country="egypt" />
                </span>
                <select className="field-input appearance-none pl-12 pr-10" defaultValue="eg">
                  <option value="eg">Cairo, Egypt</option>
                  <option value="sd">Khartoum, Sudan</option>
                  <option value="sa">Riyadh, Saudi Arabia</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>

            <div>
              <label className="field-label">Your Destination</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Flag country="india" />
                </span>
                <select className="field-input appearance-none pl-12 pr-10" defaultValue="in">
                  <option value="in">India</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>

            <div>
              <label className="field-label">Number of Travelers</label>
              <div className="inline-flex items-center gap-3 rounded-pill bg-brand-50 p-1.5">
                <button
                  type="button"
                  onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:text-brand-600"
                  aria-label="Decrease travelers"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-6 text-center font-semibold text-ink">{travelers}</span>
                <button
                  type="button"
                  onClick={() => setTravelers((n) => Math.min(9, n + 1))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft"
                  aria-label="Increase travelers"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: visa card */}
        <aside className="h-fit rounded-3xl border-t-4 border-brand bg-white p-6 shadow-card">
          <h2 className="text-lg font-semibold text-brand-600">India e-Arrival Card</h2>
          <ul className="mt-5 space-y-4">
            {VISA_INFO.map((r) => (
              <li key={r.label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.label}</p>
                  <p className="text-sm text-ink-muted">{r.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/form-1" className="btn-primary mt-6 w-full">
            Start Your Application
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </FormShell>
  );
}
