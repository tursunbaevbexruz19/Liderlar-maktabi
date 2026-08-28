# Liderlar Maktabi — website

Trilingual (Oʻzbek · Русский · English) site for Liderlar Maktabi, Sirdaryo.
Next.js 16 · TypeScript · Tailwind v4 · next-intl.

---

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it redirects to `/uz`.

```bash
npm run build   # production build; fails on any TypeScript error
npm start       # serve the production build
```

---

## Where things live

```
messages/uz.json         UI chrome only — buttons, labels, navigation
messages/ru.json         Russian overrides
messages/en.json         English overrides
src/content/*.ts         All prose: history, staff, alumni, subjects, tracks
src/lib/content/queries.ts   THE boundary — components read only from here
src/components/home/     Homepage sections
src/app/[locale]/        Pages
src/app/globals.css      Design tokens, type scale, motion system
MEDIA.md                 Photography shot list
```

### Two rules that keep this maintainable

1. **`messages/*.json` is for interface text only** — a button label, a menu
   item, a form field. Real prose (a history entry, an alumnus's story) goes in
   `src/content/`. Mixing the two is why school websites rot.

2. **Components never import from `src/content/` directly.** They import from
   `src/lib/content/queries.ts`. When the school moves to a CMS, only that one
   file changes — no component is touched.

---

## Editing text

Every content record carries all three languages:

```ts
title: {
  uz: "Avtobaza oʻrnida",
  ru: "На месте автобазы",
  en: "It began at a bus depot",
}
```

If you forget a language, **`npm run build` fails with a type error.** That is
deliberate: a missing translation should stop a deploy, not appear as a blank
space in front of a parent.

### Uzbek Latin — important

Use the real characters `oʻ` and `gʻ` (U+02BB), not an apostrophe `'` and not a
backtick.

Both fonts here were chosen specifically because they contain these glyphs.
**Most popular web fonts do not** — Manrope, Geist, Plus Jakarta Sans, Figtree,
Outfit and Rubik all fail, and would render the school's own name with a
mismatched fallback character. If you ever swap a font, test `oʻzbek` and
`gʻalaba` first.

Copy-paste reference: **ʻ** (U+02BB) and **ʼ** (U+02BC).

---

## `TODO:CONFIRM`

Placeholders wherever the founder's notes were unclear. Find them all with:

```bash
grep -rn "TODO:CONFIRM" src/ messages/
```

Currently open:
- Official school name in all three languages
- The four alumni names and what each does now
- The five Student Parliament holders' names
- What happened in 2008; what the 2026 milestone labels say
- Whether "90%" means *any* university or a *target* university
- Phone number, full address, Telegram and Instagram handles

---

## Design decisions worth knowing before you change things

- **Base font size is 18px mobile / 20px desktop, and nothing renders below
  16px.** The audience is parents aged 35–55 reading on mid-range Android
  phones. Do not "tidy" the type down to 16px.
- **Gold is an accent, never a surface.** Hairlines, numerals, active states,
  the star. If gold covers more than ~3% of a screen, something is wrong.
- **Motion is CSS-driven** (`animation-timeline: view()`), so it costs no
  JavaScript and degrades to "simply visible" in browsers without support and
  for anyone who prefers reduced motion. There is no animation library in the
  bundle.
- **Statistics render their real values in the HTML** and animate from an
  offset. Never build a counter that starts from `0` in the DOM — crawlers and
  screen readers would read "0" for the school's best proof points.
- **No scroll-jacking, no custom cursor, no WebGL, no preloader.** All four are
  common in award-winning school sites and all four are hostile to this
  audience's devices.

---

## Before this goes live

**Blocking — the site is wrong without these:**

1. **`NEXT_PUBLIC_SITE_URL`** — set to the real domain in the deploy
   environment. It drives `sitemap.xml`, `robots.txt`, canonical URLs and the
   Open Graph card. Currently defaults to `https://liderlarmaktabi.uz`.
2. **Phone number, address, Telegram and Instagram handles.** The footer,
   contact page, mobile contact bar and structured data all carry placeholders
   (`+998 __ ___ __ __`). Search for `+998000000000`.
3. **Parent testimonials.** The three quotes in `src/content/whyus.ts` are
   placeholders written in the school's voice. **Do not publish invented
   testimonials.** Replace with real quotes and written consent, or delete the
   section.

**The honesty rule — this is the site's whole position, don't break it:**

No ranking, percentage or league-table claim goes on this site without a
photographed document behind it. "TOP-6", "90% admission" and "TOP-800" were
removed for exactly this reason. In this market an unverifiable number
converts *negatively* — a parent asks a relative, the relative can't confirm
it, and the site's credibility goes with it. The proof strip carries only
facts a visiting parent can check in an afternoon.

**What moves the needle most, in order:**

1. Alumni videos with real names and written permission to publish
2. Where recent graduates actually ended up, by name and institution
3. Three to five current parents who will take a phone call from a prospective family
4. The fee — what is included, and specifically whether Grade 11 exam
   preparation is inside it. The site currently argues against paying for
   tutors on the school's behalf; that argument needs this answer.
5. Real photography — see `MEDIA.md`
6. What actually happened in 2008, 2009 and 2016

## Still to build

| Phase | What |
|---|---|
| 5 | Admissions form → durable storage → Telegram notification |
| 4 | News as MDX files in `content/news/` |
| 7 | Lighthouse mobile pass against the budget in the plan |

**Admissions form warning:** write the application to a database *first*, then
notify Telegram. Telegram is the notification channel, not the database — if it
rate-limits (20 messages/minute per group) or goes down, a family's application
must not disappear.
