"use client";

import { useState } from "react";
import Link from "next/link";
import FormShell from "@/components/FormShell";
import { ArrowIcon, BoltIcon } from "@/components/Icons";

const OPTIONS = [
  { id: "standard", title: "Standard", sub: "Get it in 4 days", price: 25 },
  { id: "rush", title: "Rush", sub: "Get it in 3 days", price: 35 },
  { id: "super", title: "Super Rush", sub: "Get it in 2 days", price: 45, fastest: true },
];

export default function FormProcessingTime() {
  const [selected, setSelected] = useState("super");
  const price = OPTIONS.find((o) => o.id === selected)?.price ?? 45;

  return (
    <FormShell active={1}>
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Left: options */}
        <div>
          <h1 className="text-3xl font-semibold text-brand-600 sm:text-4xl">
            Choose your processing time
          </h1>
          <p className="mt-2 text-ink-muted">
            We&apos;ll help you find the right visa and requirement for your journey
          </p>

          <div className="mt-8 space-y-4">
            {OPTIONS.map((o) => {
              const active = selected === o.id;
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSelected(o.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 bg-white p-5 text-left transition-colors ${
                    active ? "border-brand bg-brand-50/40" : "border-black/10 hover:border-brand/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full border-2 ${
                        active ? "border-brand" : "border-black/25"
                      }`}
                    >
                      {active && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{o.title}</p>
                      <p className="text-sm text-ink-muted">{o.sub}</p>
                    </div>
                  </div>
                  {o.fastest && (
                    <span className="inline-flex items-center gap-1 rounded-pill bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600">
                      <BoltIcon className="h-3.5 w-3.5" /> Fastest
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: trip summary */}
        <aside className="h-fit rounded-3xl border border-black/5 bg-white p-6 shadow-card">
          <h2 className="font-semibold text-brand-600">Trip summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <Row label="Destination" value="India" />
            <Row label="Visa Type" value="Tourist-30 Days" />
            <Row label="Processing Time" value={OPTIONS.find((o) => o.id === selected)?.sub.replace("Get it in ", "") ?? ""} />
            <Row label="Travelers" value="1 Traveler" />
          </dl>
          <div className="my-5 h-px bg-black/10" />
          <div className="flex items-center justify-between">
            <span className="font-semibold text-brand-600">Subtotal</span>
            <div className="text-right">
              <p className="text-lg font-bold text-brand-600">${price.toFixed(2)}</p>
              <p className="text-xs text-ink-muted">Service Fee</p>
            </div>
          </div>
          <Link href="/form-3" className="btn-primary mt-6 w-full">
            Save and Continue
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </FormShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}
