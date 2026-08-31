# VisaQo

A modern visa booking landing page — *Your Visa Journey, Made Simple.*

VisaQo helps travelers understand visa requirements, submit applications easily,
and track their progress — all in one place. This is the marketing website,
rebuilt from the original Framer design as a clean, self-contained codebase.

## Tech stack

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 3.4**
- **Plus Jakarta Sans** (via `next/font`)
- Zero external image dependencies — the globe, world map, and icons are all
  inline SVG.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Create an optimized production build  |
| `npm run start` | Serve the production build            |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Page composition
  globals.css       Design tokens + Tailwind layers
components/
  Navbar.tsx        Sticky pill navigation
  Hero.tsx          Headline + interactive search bar + globe
  About.tsx         "Made Simple" feature list
  Process.tsx       4-step process (dark section)
  Testimonials.tsx  Customer quotes
  Discounts.tsx     Deal cards + booking CTA
  Footer.tsx        Services, links, contact
  Globe.tsx         SVG 3D-style globe
  WorldMap.tsx      SVG world-map backdrop
  Icons.tsx         Inline SVG icon set
lib/
  content.ts        All page copy and data
```

## Design

- **Primary gradient:** `#6C4CF1 → #5A39E4`
- **Ink:** `#0F1020`
- **Pill radius:** `53px`

## Notes

The section imagery is rendered with SVG/CSS so the site is fully portable and
has no third-party asset dependencies. The original Framer photography can be
dropped into `public/` and wired into the components if desired.
