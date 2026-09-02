"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          className={`mx-auto flex h-[63px] max-w-[640px] items-center justify-between gap-8 rounded-[50px] px-9 shadow-[0_2px_14px_-8px_rgba(0,0,0,0.18)] backdrop-blur-[40px] transition-colors duration-300 ${
            scrolled
              ? "bg-[rgba(226,226,226,0.7)]"
              : "bg-[rgba(222,222,222,0.4)]"
          }`}
        >
          <Link href="/" aria-label="VisaQo home" className="shrink-0">
            <Logo height={24} />
          </Link>

          <ul className="hidden items-center gap-[22px] md:flex">
            {NAV_LINKS.map((l) => {
              const active = l.href === pathname;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[15px] font-medium text-ink decoration-2 underline-offset-[6px] hover:underline ${
                      active ? "underline" : "no-underline"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
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
          <div className="mx-auto mt-2 max-w-2xl rounded-3xl border border-black/5 bg-white p-3 shadow-card md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-brand-50 hover:text-brand-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
