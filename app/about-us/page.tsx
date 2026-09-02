import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  GlobeIcon,
  ShieldIcon,
  BoltIcon,
  IdIcon,
  CheckCircleIcon,
  MapIcon,
  FormIcon,
  BellIcon,
  ArrowIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About VisaQo — Making Visa Applications Simpler",
  description:
    "VisaQo is a modern visa support and application platform created to make international travel easier to understand and manage.",
};

const SERVICES = [
  "Visa requirement guidance",
  "Application form assistance",
  "Document preparation and review",
  "Application submission support",
  "Appointment and interview guidance",
  "Application status updates",
  "Travel-related guidance connected to the visa process",
];

const STAGES = [
  { icon: MapIcon, title: "Choose Your Destination", desc: "Tell us your nationality and where you would like to travel." },
  { icon: IdIcon, title: "Understand the Requirements", desc: "We identify the relevant visa category and provide guidance on the documents and information normally required." },
  { icon: FormIcon, title: "Prepare Your Application", desc: "Submit the required information and documents so your application can be prepared and reviewed." },
  { icon: BellIcon, title: "Follow Your Application", desc: "Receive relevant updates and guidance as your application progresses." },
];

const REASONS = [
  { icon: GlobeIcon, title: "Global Visa Support", desc: "We assist travelers applying for visas to multiple international destinations and keep expanding the destinations and services available." },
  { icon: MapIcon, title: "Clear Guidance", desc: "Visa requirements can be confusing. We organize the process into clear steps and explain what applicants need to prepare." },
  { icon: ShieldIcon, title: "Secure Process", desc: "We take the handling of personal information and application documents seriously, using appropriate systems and procedures." },
  { icon: BoltIcon, title: "Convenient Online Experience", desc: "Begin and manage much of the visa application process online, without unnecessary paperwork or complicated procedures." },
  { icon: CheckCircleIcon, title: "Dedicated Support", desc: "When questions arise, our support team is available to provide guidance and help you understand the next steps." },
];

export default function AboutUsPage() {
  return (
    <div id="top">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-mist-blue to-white pb-16 pt-36 sm:pt-40">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">About Visa Qo</span>
              <h1 className="mt-5 section-title">
                Making Visa Applications <span className="gradient-text">Simpler</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
                Visa Qo is a modern visa support and application platform created to
                make international travel easier to understand and manage.
              </p>
            </Reveal>
            <Reveal delay={100} className="mx-auto mt-8 max-w-3xl space-y-4 text-ink-soft">
              <p>
                Visa procedures can often feel complicated. Requirements differ from
                one country to another, documents need to be prepared carefully, and
                applicants may not always know where to begin. Our goal is to simplify
                that process.
              </p>
              <p>
                Visa Qo helps travelers understand the requirements for their
                destination, prepare the necessary information and documents, complete
                their application process, and stay informed throughout each stage.
                Whether you are planning a holiday, visiting family, attending a
                business event, studying abroad, or travelling for another eligible
                purpose, our platform is designed to provide a clear and structured
                application experience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">What We Do</h2>
              <p className="mt-4 text-ink-muted">
                We provide visa application support for travelers applying to
                destinations around the world. Depending on the destination and visa
                category, our services may include:
              </p>
            </Reveal>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-card">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <CheckCircleIcon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-ink-soft">{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mx-auto mt-8 max-w-3xl text-center text-ink-muted">
              Our objective is to reduce confusion and help applicants move through the
              process with greater clarity and confidence.
            </Reveal>
          </div>
        </section>

        {/* Structured Process */}
        <section className="bg-gradient-to-b from-white via-mist-lav to-white py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">A Simple, Structured Process</span>
              <h2 className="mt-5 section-title">Four Simple Stages</h2>
              <p className="mt-4 text-ink-muted">
                Applying for a visa should not require navigating complicated
                information on your own.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STAGES.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-soft">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <span className="text-4xl font-extrabold text-brand-100">{i + 1}</span>
                    </div>
                    <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">
                Why Choose <span className="gradient-text">Visa Qo?</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 70}>
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

        {/* Mission & Commitment */}
        <section className="bg-gradient-to-b from-mist-blue to-white py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Our Mission</h2>
              <p className="mt-4 text-ink-muted">
                To make visa applications easier to understand, easier to manage, and
                more accessible to travelers worldwide. International travel should
                begin with excitement about the destination, not confusion about
                paperwork.
              </p>
              <p className="mt-3 text-ink-muted">
                By combining technology, structured processes, and professional
                application support, Visa Qo aims to create a smoother experience from
                the moment a traveler decides to apply until the application process is
                completed.
              </p>
            </Reveal>
            <Reveal delay={100} className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Our Commitment</h2>
              <p className="mt-4 text-ink-muted">
                Every visa application is different. Requirements may vary depending on
                nationality, destination, travel purpose, personal circumstances, and
                the rules of the relevant immigration or consular authority.
              </p>
              <p className="mt-3 text-ink-muted">
                Visa Qo is committed to transparency throughout the process. We do not
                guarantee visa approvals, as all visa decisions remain solely with the
                relevant embassy, consulate, immigration authority, or government agency.
                Our responsibility is to help applicants prepare and manage their
                application as effectively and clearly as possible.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-600 p-10 text-center text-white shadow-soft sm:p-14">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Wherever You Want to Go, Start With Visa Qo
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/85">
                From discovering visa requirements to preparing your application, Visa
                Qo brings the important steps together in one convenient place. Your
                journey starts before the flight — let us help make the first step
                simpler.
              </p>
              <Link
                href="/form"
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-pill bg-white px-8 py-4 text-[17px] font-bold text-brand-600 transition-transform hover:-translate-y-0.5"
              >
                Start Your Application
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
