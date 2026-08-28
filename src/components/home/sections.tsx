import { getTranslations, getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getMilestones, getParliament } from "@/lib/content/queries";
import { Roadmap } from "./Roadmap";
import { Parliament } from "./Parliament";

/**
 * Server wrappers for the two interactive sections.
 *
 * The client components take plain data only — message formatting cannot cross
 * the client boundary, so it happens here.
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

export async function ParliamentSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("parliament");

  return (
    <Parliament
      roles={getParliament(locale)}
      labels={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        lead: t("lead"),
        hint: t("hint"),
      }}
    />
  );
}
