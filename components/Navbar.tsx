"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="container-x">
        <nav
          className={`mx-auto flex max-w-3xl items-center justify-between rounded-pill border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border-black/5 bg-white/90 shadow-card backdrop-blur-md"
              : "border-white/40 bg-white/70 backdrop-blur"
          }`}
        >
          <a href="#top" className="pl-1">
            <Logo />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#hero-form" className="btn-primary hidden md:inline-flex !px-5 !py-2.5">
            Get Started
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-w-3xl rounded-3xl border border-black/5 bg-white p-4 shadow-card md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-brand-50 hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a href="#hero-form" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
