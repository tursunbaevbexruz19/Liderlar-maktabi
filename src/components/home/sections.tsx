import { getTranslations, getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import {
  getMilestones,
  getParliament,
  getSubjects,
  getGrades,
} from "@/lib/content/queries";
import { Roadmap } from "./Roadmap";
import { Academics } from "./Academics";
import { Parliament } from "./Parliament";

/**
 * Server wrappers for the three interactive sections.
 *
 * The client components take plain data only — ICU-formatted strings are
 * rendered here, on the server, because message formatting can't cross the
 * client boundary. Keeping the wrappers in one file means the homepage and the
 * inner pages compose the same sections without duplicating this plumbing.
 */

export async function RoadmapSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("roadmap");

  return (
    <Roadmap
      milestones={getMilestones(locale)}
      labels={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        lead: t("lead"),
        hint: t("hint"),
      }}
    />
  );
}

export async function AcademicsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("academics");
  const grades = getGrades();

  const gradeLabels = Object.fromEntries(
    grades.map((g) => [g, t("gradeLabel", { grade: g })]),
  );
  const subjectsFor = Object.fromEntries(
    grades.map((g) => [g, t("subjectsFor", { grade: g })]),
  );

  return (
    <Academics
      subjects={getSubjects(locale)}
      grades={grades}
      labels={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        lead: t("lead"),
        all: t("allGrades"),
        gradeLabels,
        subjectsFor,
        groups: {
          science: t("groupScience"),
          humanities: t("groupHumanities"),
          language: t("groupLanguage"),
          tech: t("groupTech"),
        },
      }}
    />
  );
}

export async function ParliamentSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("parliament");

  const roles = getParliament(locale).map((role) => ({
    ...role,
    gradeText: t("gradeLabel", { grade: role.grade }),
  }));

  return (
    <Parliament
      roles={roles}
      labels={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        lead: t("lead"),
        hint: t("hint"),
      }}
    />
  );
}
