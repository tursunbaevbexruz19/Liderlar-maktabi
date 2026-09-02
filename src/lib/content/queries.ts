import type { Locale } from "@/i18n/routing";
import { milestones } from "@/content/milestones";
import { pillars } from "@/content/pillars";
import { stats } from "@/content/stats";
import { parliament } from "@/content/parliament";
import { alumni } from "@/content/alumni";
import { tracks } from "@/content/tracks";
import { subjects } from "@/content/academics";
import type { Localized } from "@/content/types";

/**
 * THE CONTENT BOUNDARY.
 *
 * Components import from this file and NEVER from `@/content/*` directly.
 * Today these functions read typed TS modules. When the school needs to edit
 * content itself, they will query a CMS instead — and not one component
 * changes. This is the whole reason the indirection exists.
 */

const pick = (value: Localized, locale: Locale) => value[locale];

/** Flattens `Localized` fields down to plain strings for one locale. */
export function getMilestones(locale: Locale) {
  return milestones.map((m) => ({
    id: m.id,
    year: m.year,
    title: pick(m.title, locale),
    body: pick(m.body, locale),
    figure: m.figure,
    figureLabel: m.figureLabel ? pick(m.figureLabel, locale) : undefined,
  }));
}

export function getPillars(locale: Locale) {
  return pillars.map((p) => ({
    id: p.id,
    word: p.word,
    native: pick(p.native, locale),
    title: pick(p.title, locale),
    body: pick(p.body, locale),
    href: p.href,
  }));
}

export function getStats(locale: Locale) {
  return stats.map((s) => ({
    id: s.id,
    value: s.value,
    label: pick(s.label, locale),
    note: s.note ? pick(s.note, locale) : undefined,
  }));
}

export function getParliament(locale: Locale) {
  return parliament.map((r) => ({
    id: r.id,
    role: pick(r.role, locale),
    holder: r.holder,
    did: pick(r.did, locale),
  }));
}

export function getAlumni(locale: Locale) {
  return alumni.map((a) => ({
    id: a.id,
    name: a.name,
    gradYear: a.gradYear,
    now: pick(a.now, locale),
    destination: a.destination,
    quote: pick(a.quote, locale),
    videoId: a.videoId,
  }));
}

export function getTracks(locale: Locale) {
  return tracks.map((t) => ({
    id: t.id,
    title: pick(t.title, locale),
    body: pick(t.body, locale),
    points: t.points.map((p) => pick(p, locale)),
  }));
}

export function getSubjects(locale: Locale) {
  return subjects.map((s) => ({
    id: s.id,
    name: pick(s.name, locale),
    group: s.group,
  }));
}

export type MilestoneView = ReturnType<typeof getMilestones>[number];
export type PillarView = ReturnType<typeof getPillars>[number];
export type StatView = ReturnType<typeof getStats>[number];
export type ParliamentView = ReturnType<typeof getParliament>[number];
export type AlumView = ReturnType<typeof getAlumni>[number];
export type TrackView = ReturnType<typeof getTracks>[number];
export type SubjectView = ReturnType<typeof getSubjects>[number];
