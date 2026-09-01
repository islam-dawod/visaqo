import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@/components/Icons";

export default function FormThankYou() {
  return (
    <div id="top" className="bg-gradient-to-b from-mist-lav/40 to-white">
      <Navbar />
      <main className="grid min-h-[70vh] place-items-center px-5 pb-20 pt-36">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-10 text-center shadow-card sm:p-14">
          {/* passport glyph */}
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-12 sm:block">
            <div className="grid h-40 w-28 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <circle cx="12" cy="10" r="3" />
                <path d="M9 16h6" />
              </svg>
            </div>
          </div>

          <div className="mx-auto flex justify-center gap-1.5 text-[#F6B93B]">
            {Array.from({ length: 3 }).map((_, i) => (
              <StarIcon key={i} className="h-8 w-8" />
            ))}
          </div>
          <h1 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">
            Thank you for registering your details!
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Our team is reviewing your application and will contact you soon to provide
            the necessary support to complete your request. Check your email for more
            details!
          </p>
          <p className="mt-4 text-sm font-medium text-brand-600">
            Your data is kept strictly confidential.
          </p>
          <Link href="/" className="btn-primary mx-auto mt-8">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
