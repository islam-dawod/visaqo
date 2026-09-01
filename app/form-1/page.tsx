import Link from "next/link";
import FormShell from "@/components/FormShell";
import Flag from "@/components/Flag";
import { ChevronDown, CalendarIcon, PlusIcon, ArrowIcon } from "@/components/Icons";

export default function FormPersonalInfo() {
  return (
    <FormShell active={1}>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-brand-600 sm:text-4xl">
          Personal information
        </h1>
        <p className="mt-2 text-ink-muted">
          Enter the details as they appear on your passport.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card">
          {/* card header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-brand to-brand-600 px-6 py-4 text-white">
            <span className="font-semibold">Traveler #1</span>
            <button className="inline-flex items-center gap-2 rounded-pill bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/30">
              <PlusIcon className="h-4 w-4" />
              Add traveler
            </button>
          </div>

          {/* fields */}
          <div className="grid gap-5 p-6 sm:grid-cols-2">
            <div>
              <label className="field-label">First name</label>
              <input className="field-input" placeholder="As shown on passport" />
            </div>
            <div>
              <label className="field-label">Last name</label>
              <input className="field-input" placeholder="As shown on passport" />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label">Email address</label>
              <input type="email" className="field-input" placeholder="example@example.com" />
              <p className="mt-1.5 text-xs text-ink-muted">
                Your approval status/link will be sent to this email address.
              </p>
            </div>
            <div>
              <label className="field-label">Date of birth</label>
              <div className="relative">
                <input className="field-input pr-11" placeholder="dd/mm/yyyy" />
                <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>
            <div>
              <label className="field-label">Your Passport</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Flag country="egypt" />
                </span>
                <select className="field-input appearance-none pl-12 pr-10" defaultValue="eg">
                  <option value="eg">Cairo, Egypt</option>
                  <option value="sd">Khartoum, Sudan</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>
            <div>
              <label className="field-label">Passport number</label>
              <input className="field-input" placeholder="Enter your passport number" />
            </div>
            <div>
              <label className="field-label">Passport expiration date</label>
              <div className="relative">
                <input className="field-input pr-11" placeholder="dd/mm/yyyy" />
                <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link href="/form" className="text-sm font-semibold text-ink-muted transition-colors hover:text-brand-600">
            ← Back
          </Link>
          <Link href="/form-2" className="btn-primary">
            Save and Continue
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </FormShell>
  );
}
