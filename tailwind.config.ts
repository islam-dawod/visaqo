import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C4CF1",
          600: "#5A39E4",
          accent: "#5B3FE9",
          50: "#F1EEFE",
          100: "#E7E1FC",
          200: "#D6CCFA",
        },
        ink: {
          DEFAULT: "#0B1B2E",
          soft: "#3A3B4A",
          muted: "#858585",
        },
        mist: {
          blue: "#F3F7FC",
          lav: "#F4F1FD",
        },
      },
      fontFamily: {
        sans: ["var(--font-somar)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "53px",
      },
      boxShadow: {
        soft: "0 24px 70px -24px rgba(76, 57, 190, 0.28)",
        card: "0 14px 44px -16px rgba(20, 19, 38, 0.14)",
        bar: "0 30px 60px -24px rgba(20, 19, 38, 0.18)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
