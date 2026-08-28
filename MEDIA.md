# MEDIA.md — the shot list

Every image the site needs, with the exact slot, ratio and weight budget.
Give this list to a photographer and it can be shot in one day.

**Nothing here is blocking.** Every slot currently renders a deliberate
generated composition (inline SVG built from the crest), not a grey box or a
broken-image icon. The site looks finished today; real photography makes it
better, not functional.

---

## Rules that apply to every image

| | |
|---|---|
| Format | Shoot RAW/JPEG, deliver **JPEG or PNG**. `next/image` converts to AVIF/WebP automatically — do **not** pre-convert. |
| Colour | Real people, real rooms, natural light. **No stock photography.** The crest says "local child, world stage" — a stock photo of a foreign campus contradicts the entire brand. |
| Faces | Get written parental consent for every recognisable student before publication. |
| Delivery | Drop files into `public/media/` using the exact filenames below. |
| Max weight | Deliver full-resolution; the build handles compression. Budgets below are the *output* budget after optimisation. |

---

## 1. Brand assets — **needed first**

| File | Spec | Notes |
|---|---|---|
| `public/brand/logo.png` | The full circular lockup, ≥1200×1200, transparent background | Used in the hero and footer only. **Please save the logo file here** — the compact header mark is currently drawn as inline SVG from the crest's geometry, and I sampled the navy/gold by eye. With the real file I can match the exact hex values. |
| `public/brand/logo.svg` | Vector version, if one exists | Strongly preferred over PNG. |

---

## 2. Homepage

| Slot | File | Ratio | Output budget | What to shoot |
|---|---|---|---|---|
| Hero | `hero.jpg` | 1:1 or 4:5 | ≤120 KB @1200px | One student, mid-action, natural light. Not a posed group. Not a building exterior. Leave clean space at the top-right — the gold arc and star sit there. |
| History — 1994 | `history-1994.jpg` | 3:2 | ≤90 KB | Archive photo of the building as the bus depot, if one exists. Even a poor-quality scan is powerful here. |
| History — 1996 | `history-1996.jpg` | 3:2 | ≤90 KB | Earliest classroom or first-cohort photo. |
| History — 2009 / 2016 | `history-2009.jpg`, `history-2016.jpg` | 3:2 | ≤90 KB each | Whatever marked the TOP-6 years — award, ceremony, cohort. |
| History — 2026 | `history-2026.jpg` | 3:2 | ≤90 KB | Today's students. Ideally a graduate's child — that image *is* the "third generation" story. |

## 3. Student life — 5 tiles

`life-sport.jpg`, `life-competitions.jpg`, `life-events.jpg`,
`life-travel.jpg`, `life-volunteering.jpg`

4:3 · ≤110 KB each · candid, mid-activity, not lined up for the camera.

## 4. Student Parliament — 5 portraits

`parliament-president.jpg`, `parliament-events.jpg`,
`parliament-volunteers.jpg`, `parliament-media.jpg`,
`parliament-media-assistant.jpg`

3:4 portrait · ≤80 KB each · **shoot all five in the same place, same light, same
day.** Consistency is what makes a portrait grid look designed rather than
assembled. Eye level, plain background, no crossed arms.

## 5. Alumni — 4 portraits + 4 videos

`alum-1.jpg` … `alum-4.jpg` — 3:4 · ≤80 KB each. Shoot them where they are now
(hospital, office, campus), not back at school.

**Videos:** 2 minutes each, per the founder's notes.
- Upload to **YouTube as Unlisted**, then put the video ID in
  `src/content/alumni.ts`. The page loads a poster image and only fetches the
  player when someone presses play — four raw embeds would cost 2.4–6 MB before
  anyone watched anything.
- Vertical or horizontal both fine. Phone footage is acceptable; **clean audio
  is not optional.** Use a clip-on mic or record in a quiet room.
- One question per video: *"What did this school give you that you only
  understood later?"*

## 6. Optional but high value

**Parent audio testimonials** — 30–45 seconds, MP3. Roughly 50× lighter than
video and noticeably more intimate. Three or four is plenty.

---

## What to do first

1. `public/brand/logo.png` — unblocks exact brand colour matching
2. Hero
3. The five Parliament portraits — this section is the site's main proof
4. The four alumni portraits and videos
5. Everything else
