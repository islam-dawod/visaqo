import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VisaQo — Your Visa Journey, Made Simple",
  description:
    "VisaQo is a modern visa booking platform that helps travelers understand requirements, submit applications easily, and track progress — all in one place.",
  keywords: [
    "visa",
    "visa booking",
    "tourist visa",
    "business visa",
    "student visa",
    "VisaQo",
    "Sudan visa",
  ],
  openGraph: {
    title: "VisaQo — Your Visa Journey, Made Simple",
    description:
      "Plan smarter. Travel better. Submit and track your visa application in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
