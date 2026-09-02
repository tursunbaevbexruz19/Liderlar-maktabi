import { getTranslations, getLocale } from "next-intl/server";
import { getTracks } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";
import { TracksPicker } from "./TracksPicker";

/** Medicine / IT / Study abroad — the three destinations after school. */
export async function Tracks() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("tracks");

  return (
    <TracksPicker
      tracks={getTracks(locale)}
      labels={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        hint: t("finderCta"),
      }}
    />
  );
}
