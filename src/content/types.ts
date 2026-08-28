import type { Locale } from "@/i18n/routing";

/**
 * Every piece of prose on this site carries all three languages.
 *
 * This is a `type`, not an interface, so `satisfies` on the content files below
 * gives COMPILE-TIME proof that no record is missing a language. A forgotten
 * Russian translation is a failed build, not a blank space in front of a parent.
 */
export type Localized = Record<Locale, string>;

export type Milestone = {
  id: string;
  /** Displayed verbatim — may be a year or a range. */
  year: string;
  title: Localized;
  body: Localized;
  /** Optional headline figure for this moment in the school's history. */
  figure?: string;
  figureLabel?: Localized;
};

export type Pillar = {
  id: "learn" | "grow" | "lead";
  /** The English tagline word, shown as-is in all locales — it is brand, not copy. */
  word: string;
  native: Localized;
  title: Localized;
  body: Localized;
  href: string;
};

export type Stat = {
  id: string;
  /** Rendered into the DOM as the REAL value. Counters animate up from an
   *  offset — they never start from 0, so crawlers and no-JS users read the
   *  actual number. (This is the bug Korowa ships.) */
  value: string;
  label: Localized;
  note?: Localized;
};

export type Subject = {
  id: string;
  name: Localized;
  /** Grades this subject is offered as a specialization track. */
  grades: number[];
  group: "science" | "humanities" | "language" | "tech";
};

export type ParliamentRole = {
  id: string;
  role: Localized;
  /** TODO:CONFIRM — real student names needed. */
  holder: string;
  grade: string;
  /** What this person actually did this year. Proof the role is real. */
  did: Localized;
};

export type Alum = {
  id: string;
  /** TODO:CONFIRM — real names needed. */
  name: string;
  gradYear: string;
  now: Localized;
  destination: string;
  quote: Localized;
  /** YouTube id for the 2-minute story. Loaded via facade, never a raw iframe. */
  videoId?: string;
};

export type Track = {
  id: "medical" | "it" | "abroad";
  title: Localized;
  body: Localized;
  points: Localized[];
};
