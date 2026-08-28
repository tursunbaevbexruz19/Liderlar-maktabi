import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",

  // Always prefix. Symmetric routes mean symmetric content files, clean
  // hreflang, and no duplicate indexing of the default locale at both / and /uz.
  localePrefix: "always",

  // Deliberately OFF. Uzbek Android handsets very frequently report ru-RU or
  // en-US regardless of the owner's actual language, so Accept-Language
  // detection would send Uzbek-speaking parents to the Russian site. The
  // visible switcher always wins.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
