import Logo from "./Logo";
import { VISA_SERVICES, QUICK_LINKS, CONTACT, FOOTER_TAGLINE } from "@/lib/content";
import { PinIcon, PhoneIcon, MailIcon, FacebookIcon, WhatsappIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-gradient-to-b from-white to-mist-blue">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo height={32} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {FOOTER_TAGLINE}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-brand-600"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-brand-600"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-ink">Visa Services</h4>
            <ul className="mt-4 space-y-2.5">
              {VISA_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-ink-muted transition-colors hover:text-brand-600">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-ink">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-muted transition-colors hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-ink">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-3">
                <PinIcon className="h-5 w-5 shrink-0 text-brand-600" />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-brand-600">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-600">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} VisaQo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
