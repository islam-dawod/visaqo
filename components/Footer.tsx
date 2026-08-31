import Logo from "./Logo";
import { VISA_SERVICES, QUICK_LINKS, CONTACT } from "@/lib/content";
import { PinIcon, PhoneIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#0F1020] text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="rounded-xl bg-white px-3 py-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Your trusted partner for visa applications. Making travel dreams
              come true for travelers worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Visa Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {VISA_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Info
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-3">
                <PinIcon className="h-5 w-5 shrink-0 text-brand-100" />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-100" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-brand-100" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} VisaQo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
