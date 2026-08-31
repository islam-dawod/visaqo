import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const somar = localFont({
  src: [
    { path: "../public/fonts/SomarSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/SomarSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/SomarSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/SomarSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-somar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VisaQo — Your Visa Journey, Made Simple",
  description:
    "VisaQo is a modern visa booking platform that helps travelers understand requirements, submit applications easily, and track progress — all in one place.",
  keywords: ["visa", "visa booking", "tourist visa", "VisaQo", "Sudan visa"],
  openGraph: {
    title: "VisaQo — Your Visa Journey, Made Simple",
    description: "Plan smarter. Travel better. Create memories that last.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${somar.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
