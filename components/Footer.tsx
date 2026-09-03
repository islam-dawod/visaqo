import Logo from "./Logo";
import { VISA_SERVICES, QUICK_LINKS, CONTACT, FOOTER_TAGLINE } from "@/lib/content";
import { FacebookIcon, WhatsappIcon } from "./Icons";

/* Solid black contact icons (to match the Framer footer) */
function LocationFill() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] shrink-0">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}
function PhoneFill() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] shrink-0">
      <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.5 11.5 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.58 3.6a1 1 0 01-.25 1z" />
    </svg>
  );
}
function MailFill() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] shrink-0">
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7l8-5H4l8 5zm0 2L4 8v10h16V8l-8 5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#DCE6F4]">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Logo height={30} />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
              {FOOTER_TAGLINE}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-ink transition-colors hover:text-brand-600">
                <FacebookIcon className="h-8 w-8" />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-ink transition-colors hover:text-brand-600">
                <WhatsappIcon className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[17px] font-bold text-ink">Visa Services</h4>
            <ul className="mt-5 space-y-3.5">
              {VISA_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[15px] text-ink-soft transition-colors hover:text-brand-600">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[17px] font-bold text-ink">Quick Links</h4>
            <ul className="mt-5 space-y-3.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[15px] text-ink-soft transition-colors hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[17px] font-bold text-ink">Contact Info</h4>
            <ul className="mt-5 space-y-4 text-[15px] text-ink-soft">
              <li className="flex items-start gap-3">
                <span className="text-ink">
                  <LocationFill />
                </span>
                <span className="max-w-[220px]">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ink">
                  <PhoneFill />
                </span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-brand-600">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ink">
                  <MailFill />
                </span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-600">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
