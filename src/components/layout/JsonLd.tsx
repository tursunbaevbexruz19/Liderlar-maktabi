import { getTranslations } from "next-intl/server";

/**
 * Schema.org structured data.
 *
 * Makes the school eligible for a rich result in Google and, more usefully in
 * this market, gives Telegram and other link previewers a clean entity to read.
 *
 * Deliberately contains NO ratings, awards or aggregate figures — the same
 * honesty rule that governs the visible page applies here. Structured data is
 * a place people quietly inflate claims; this one only asserts what the school
 * can show.
 */
export async function JsonLd({
  locale,
  siteUrl,
}: {
  locale: string;
  siteUrl: string;
}) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const f = await getTranslations({ locale, namespace: "footer" });

  const data = {
    "@context": "https://schema.org",
    "@type": "School",
    name: t("school"),
    slogan: t("tagline"),
    description: t("description"),
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/brand/logo-640.png`,
    image: `${siteUrl}/og.png`,
    foundingDate: "1996",
    address: {
      "@type": "PostalAddress",
      addressRegion: f("address"),
      addressCountry: "UZ",
    },
    // TODO: add `telephone` and `sameAs` (Telegram / Instagram / YouTube)
    // once the school supplies the real handles and number.
  };

  return (
    <script
      type="application/ld+json"
      // Data is authored here, not user input — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
