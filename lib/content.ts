// Central content for the VisaQo landing page.

export const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Process", href: "/process" },
  { label: "Discounts", href: "/#discounts" },
  { label: "Contact us", href: "/#contact" },
];

export const NATIONALITIES = [
  "Sudan",
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Jordan",
  "Morocco",
  "Nigeria",
  "Kenya",
  "India",
  "Pakistan",
  "United Kingdom",
  "United States",
];

export const DESTINATIONS = [
  "United Kingdom",
  "United States",
  "Schengen (Europe)",
  "Canada",
  "United Arab Emirates",
  "Turkey",
  "Saudi Arabia",
  "Malaysia",
  "Australia",
  "Qatar",
];

// Per-country metadata used by the hero search:
//  - code: ISO 3166-1 alpha-2 (for flag images)
//  - x/y : position on /assets/world-map.png as a percentage (for route pins)
export type CountryMeta = { code: string; x: number; y: number };

export const COUNTRY_MAP: Record<string, CountryMeta> = {
  Sudan: { code: "sd", x: 56, y: 62 },
  Egypt: { code: "eg", x: 55, y: 55 },
  "Saudi Arabia": { code: "sa", x: 60, y: 57 },
  "United Arab Emirates": { code: "ae", x: 62, y: 57 },
  Qatar: { code: "qa", x: 61, y: 56 },
  Kuwait: { code: "kw", x: 60, y: 55 },
  Jordan: { code: "jo", x: 57, y: 53 },
  Morocco: { code: "ma", x: 45, y: 55 },
  Nigeria: { code: "ng", x: 49, y: 65 },
  Kenya: { code: "ke", x: 56, y: 69 },
  India: { code: "in", x: 65, y: 56 },
  Pakistan: { code: "pk", x: 63, y: 54 },
  "United Kingdom": { code: "gb", x: 48, y: 44 },
  "United States": { code: "us", x: 18, y: 46 },
  "Schengen (Europe)": { code: "eu", x: 51, y: 46 },
  Canada: { code: "ca", x: 20, y: 38 },
  Turkey: { code: "tr", x: 56, y: 50 },
  Malaysia: { code: "my", x: 75, y: 66 },
  Australia: { code: "au", x: 82, y: 79 },
};

export const FEATURES = [
  {
    title: "Global Destinations",
    desc: "Apply for visas to 190+ countries with requirements tailored to your nationality.",
    icon: "globe",
  },
  {
    title: "Secure & Reliable Process",
    desc: "Bank-grade security keeps your documents and personal data fully protected.",
    icon: "shield",
  },
  {
    title: "Fast Application Handling",
    desc: "Our specialists review and submit your application quickly and accurately.",
    icon: "bolt",
  },
];

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Select Your Destination",
    desc: "Check visa requirements based on your nationality.",
    tag: "Check Visa Requirements · based on nationality",
    icon: "map",
  },
  {
    step: "2",
    title: "Upload Required Documents",
    desc: "Add your passport and supporting files in a few clicks.",
    tag: "",
    icon: "upload",
  },
  {
    step: "3",
    title: "Submit Your Application",
    desc: "secure online form",
    tag: "",
    icon: "form",
  },
  {
    step: "4",
    title: "Receive Your Visa Update",
    desc: "Track your application status",
    tag: "",
    icon: "bell",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maxin Will",
    role: "Customer",
    quote: "Everything was organized in one place, making travel planning simple and efficient.",
    rating: 4,
  },
  {
    name: "Sara Ibrahim",
    role: "Customer",
    quote: "The team guided me through every document, and tracking my application gave me real peace of mind.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Customer",
    quote: "VisaQo made my UK visa application effortless — clear steps and a fast approval.",
    rating: 5,
  },
];

export const DISCOUNTS = [
  {
    percent: "24%",
    title: "Group Traveler",
    image: "/assets/discount-group.png",
  },
  {
    percent: "30%",
    title: "Previous Traveler",
    image: "/assets/discount-previous.png",
  },
];

export const VISA_SERVICES = [
  "Tourist Visas",
  "Business Visas",
  "Student Visas",
  "Work Visas",
  "Religious Visas",
  "Express Visas",
];

export const QUICK_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "How It Works", href: "/process" },
  { label: "Discounts", href: "/#discounts" },
  { label: "FAQ", href: "/#" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Privacy Policy", href: "/#" },
];

export const CONTACT = {
  address: "Street 15, Block 23, New Extension, Khartoum",
  phone: "+249 123 456 789",
  email: "info@visa-booking.com",
};

export const FOOTER_TAGLINE =
  "Your trusted partner for visa applications. Making travel dreams come true for Sudanese travelers worldwide.";
