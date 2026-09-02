import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ArrowIcon,
  PassportIcon,
  PlaneIcon,
  FormIcon,
  MailIcon,
  GlobeIcon,
  ShieldIcon,
  MapIcon,
  IdIcon,
  BellIcon,
  CheckCircleIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Process — Your Visa Journey, Simplified",
  description:
    "VisaQo simplifies the visa process by bringing the important steps together and guiding you from your initial application through to the final decision.",
};

const STEPS = [
  {
    n: "01",
    title: "Select Your Destination",
    sub: "Tell Us Where You Want to Go",
    body: "Start by selecting your nationality and the country you wish to visit. This allows us to identify the relevant visa service and provide information based on your destination and purpose of travel. You may also be asked to provide details such as:",
    list: ["Country of residence", "Purpose of travel", "Intended travel dates", "Number of travelers"],
    tag: "Check Visa Requirements",
  },
  {
    n: "02",
    title: "Complete Your Application",
    sub: "Tell Us About Your Trip",
    body: "Complete our secure online application form with your personal and travel information. Depending on the visa you are applying for, we may ask about:",
    list: ["Personal information", "Passport details", "Employment or business information", "Travel history", "Financial circumstances", "Family information", "Previous visa applications", "Your planned trip"],
  },
  {
    n: "03",
    title: "Upload Your Documents",
    sub: "Everything You Need, Organized in One Place",
    body: "Upload the supporting documents required for your application. Documents vary depending on your nationality, destination, visa category, and personal circumstances, but may include:",
    list: ["Passport", "Personal photograph", "Bank statements", "Employment documents", "Business documents", "Travel itinerary", "Accommodation information", "Invitation letters", "Previous visas", "Supporting financial documents"],
  },
  {
    n: "04",
    title: "Application Preparation & Review",
    sub: "Making Sure Your Application Is Ready",
    body: "Once we receive your information and documents, your application moves into the preparation stage. Depending on the service you selected, Visa Qo may assist with:",
    list: ["Preparing application forms", "Organizing supporting documents", "Reviewing information for completeness", "Identifying missing documentation", "Providing application guidance"],
  },
  {
    n: "05",
    title: "Submission & Appointment Guidance",
    sub: "Moving Your Application Forward",
    body: "Once your application is ready, we will guide you through the applicable submission process. Depending on your destination, this may involve:",
    list: ["Online application submission", "Embassy or consulate procedures", "Visa application centre appointments", "Biometrics", "Interviews", "Passport submission", "Government or visa-centre fees"],
  },
  {
    n: "06",
    title: "Follow Your Application",
    sub: "Stay Informed",
    body: "After submission, your application is reviewed by the relevant immigration authority, embassy, or consulate. Where available in your service, Visa Qo can help you understand updates such as:",
    list: ["Biometrics request", "Interview request", "Additional-document request", "Passport request", "Administrative processing", "Final decision"],
  },
];

const REASONS = [
  { icon: MapIcon, title: "Clear Requirements", desc: "Understand what information and documents are required for your selected visa service." },
  { icon: FormIcon, title: "Convenient Online Process", desc: "Complete your application and provide your documents through a structured process." },
  { icon: CheckCircleIcon, title: "Application Support", desc: "Receive assistance throughout the stages covered by your selected service." },
  { icon: IdIcon, title: "Document Guidance", desc: "Know what documents you may need and identify missing information before moving forward." },
  { icon: GlobeIcon, title: "Multiple Destinations", desc: "Access visa support for a growing range of international destinations." },
  { icon: BellIcon, title: "Application Updates", desc: "Stay informed about relevant next steps throughout your application journey." },
];

const CHECKLIST = [
  { icon: PassportIcon, title: "Your Passport", desc: "Make sure your passport is valid and that your personal details are clearly visible." },
  { icon: PlaneIcon, title: "Travel Information", desc: "Know your intended destination, travel purpose, and approximate travel dates." },
  { icon: FormIcon, title: "Supporting Documents", desc: "Have your financial, employment, business, family, or travel documents available where relevant." },
  { icon: MailIcon, title: "Contact Information", desc: "Use an active email address and telephone number so important updates can reach you." },
];

const FAQ = [
  { q: "How long does the visa process take?", a: "Processing times vary depending on the destination, visa category, time of year, applicant circumstances, and the relevant immigration authority. Visa Qo cannot guarantee government processing times." },
  { q: "Does Visa Qo guarantee visa approval?", a: "No. Visa Qo helps applicants prepare and manage their application process, but all visa decisions are made by the relevant government authority." },
  { q: "Can Visa Qo submit my application for me?", a: "This depends on the destination and visa category. Some systems allow authorized assistance, while others require applicants to complete certain steps personally. We will explain the applicable procedure for your selected service." },
  { q: "Will I need to attend an appointment?", a: "Some visa applications require biometrics, an interview, passport submission, or an appointment at a visa application centre. Requirements vary by destination." },
  { q: "What happens if additional documents are requested?", a: "If the relevant authority requests additional information and this assistance is included within your service, our team can help you understand what has been requested and the next steps." },
  { q: "Can I apply as a family or group?", a: "Yes. Family and group applications may be available depending on the destination and visa type." },
];

export default function ProcessPage() {
  return (
    <div id="top">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-mist-lav to-white pb-16 pt-36 sm:pt-40">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Our Process</span>
              <h1 className="mt-5 section-title">
                Your Visa Journey, <span className="gradient-text">Simplified</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
                Visa applications can involve different requirements, forms, documents,
                appointments, and procedures depending on your nationality and
                destination. Visa Qo brings the important steps together and guides you
                from your initial application through to the final decision.
              </p>
              <p className="mt-4 font-medium text-brand-600">
                Simple steps. Clear guidance. One convenient process.
              </p>
              <Link href="/form" className="btn-primary mx-auto mt-8 !px-8 !py-4 !text-[17px]">
                Start Your Application
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* How It Works — steps */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">How It Works</h2>
            </Reveal>
            <div className="mx-auto mt-12 max-w-4xl space-y-6">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={(i % 2) * 60}>
                  <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
                    <div className="flex items-start gap-5">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-lg font-bold text-white shadow-soft">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                        <p className="text-brand-600">{s.sub}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-ink-muted">{s.body}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {s.list.map((li) => (
                        <li key={li} className="flex items-center gap-2.5 text-sm text-ink-soft">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {li}
                        </li>
                      ))}
                    </ul>
                    {s.tag && (
                      <span className="mt-5 inline-flex rounded-pill bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600">
                        {s.tag}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final Decision */}
        <section className="py-8">
          <div className="container-x">
            <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#0F1020] p-8 text-white sm:p-12">
              <h2 className="text-2xl font-semibold sm:text-3xl">The Final Decision</h2>
              <p className="mt-2 text-lg text-white/70">Your Application. Their Decision.</p>
              <p className="mt-5 text-white/75">
                The final decision on every visa application is made exclusively by the
                relevant embassy, consulate, immigration authority, or government agency.
                Visa Qo provides application support and guidance but does not issue
                visas and cannot guarantee approval. Processing times, appointment
                availability, government requirements, and final decisions remain under
                the control of the relevant authorities.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why Apply */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                Why Apply With <span className="gradient-text">Visa Qo?</span>
              </h2>
              <p className="mt-4 text-ink-muted">A more organized way to apply.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 60}>
                  <div className="h-full rounded-3xl border border-black/5 bg-white p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <r.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Before You Start */}
        <section className="bg-gradient-to-b from-mist-blue to-white py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">Before You Start</h2>
              <p className="mt-4 text-ink-muted">
                To make the process easier, we recommend having the following available:
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CHECKLIST.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-semibold text-ink">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-5 section-title">Frequently Asked Questions</h2>
            </Reveal>
            <div className="mt-12">
              <FaqAccordion items={FAQ} />
            </div>
          </div>
        </section>

        {/* Ready to start */}
        <section className="pb-20">
          <div className="container-x">
            <Reveal className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-600 p-10 text-center text-white shadow-soft sm:p-14">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Your Next Destination Starts Here
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/85">
                Select your nationality and destination to discover the visa service
                available for your trip. From understanding the requirements to
                preparing your application, Visa Qo helps make the process clearer from
                the very beginning.
              </p>
              <Link
                href="/form"
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-pill bg-white px-8 py-4 text-[17px] font-bold text-brand-600 transition-transform hover:-translate-y-0.5"
              >
                Start Your Application
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-ink-muted">
              <strong className="text-ink-soft">Important Notice:</strong> Visa Qo is an
              independent visa-support service and is not an embassy, consulate,
              immigration authority, or government agency. Government fees may be
              separate from Visa Qo service fees. Visa approval, appointment
              availability, processing times, and entry into any destination are
              determined solely by the relevant authorities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
