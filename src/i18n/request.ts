import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

type Dict = { [key: string]: string | Dict };

/**
 * Overlay `override` on top of `base`, keeping any key the override is missing.
 *
 * This is the fallback chain uz -> ru -> en made concrete: Uzbek is always the
 * base layer, so an untranslated key renders the Uzbek string rather than
 * `home.hero.title`. A parent must never see a raw message key on screen.
 */
function overlay(base: Dict, override: Dict): Dict {
  const out: Dict = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const existing = out[key];
    out[key] =
      typeof value === "object" && typeof existing === "object"
        ? overlay(existing, value)
        : value;
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const base = (await import("../../messages/uz.json")).default as Dict;
  const messages =
    locale === "uz"
      ? base
      : overlay(base, (await import(`../../messages/${locale}.json`)).default);

  return {
    locale,
    messages,
    timeZone: "Asia/Tashkent",
  };
});
