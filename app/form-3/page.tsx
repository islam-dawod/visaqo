"use client";

import { useState } from "react";
import Link from "next/link";
import FormShell from "@/components/FormShell";
import { CalendarIcon, ArrowIcon } from "@/components/Icons";

export default function FormPayment() {
  const [saveCard, setSaveCard] = useState(true);

  return (
    <FormShell active={2}>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-brand-600 sm:text-4xl">
          Payment Method
        </h1>
        <p className="mt-2 text-ink-muted">
          Enter your card details to complete the payment securely.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card">
          <div className="flex items-center gap-2 bg-gradient-to-r from-brand to-brand-600 px-6 py-4 text-white">
            <span className="font-semibold">Card Details</span>
            <span className="text-sm text-white/75">(Credit / Debit)</span>
          </div>

          <div className="space-y-5 p-6">
            <div>
              <label className="field-label">Cardholder Name</label>
              <input className="field-input" placeholder="As shown on card" />
            </div>
            <div>
              <label className="field-label">Card Number</label>
              <input
                className="field-input"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div>
              <label className="field-label">Expiration date</label>
              <div className="relative">
                <input className="field-input pr-11" placeholder="mm/yy" />
                <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={saveCard}
                onClick={() => setSaveCard((v) => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  saveCard ? "bg-brand" : "bg-black/20"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                    saveCard ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
              <span className="text-sm text-ink-soft">Save card for future payment</span>
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link href="/form-4" className="btn-primary w-full max-w-md justify-center">
            Complete payment
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <p className="max-w-md text-center text-xs text-ink-muted">
            By submitting payment I acknowledge that I have read and accept the VisaQo
            Terms of Service, Privacy policy, and Refund Policy.
          </p>
        </div>
      </div>
    </FormShell>
  );
}
