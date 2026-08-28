import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://liderlarmaktabi.uz";

const PATHS = [
  "",
  "/haqimizda",
  "/talim",
  "/hayot",
  "/bitiruvchilar",
  "/qabul",
  "/yangiliklar",
  "/aloqa",
] as const;

/**
 * Every page in every language, with `alternates.languages` so Google treats
 * the three locales as translations of one page rather than duplicates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routing.locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
        ),
      },
    })),
  );
}
