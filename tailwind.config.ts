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
          50: "#F1EDFE",
          100: "#E6DEFC",
        },
        ink: {
          DEFAULT: "#0F1020",
          soft: "#3A3B4A",
          muted: "#6B6C7B",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "53px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(76, 57, 190, 0.25)",
        card: "0 10px 40px -12px rgba(15, 16, 32, 0.12)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
