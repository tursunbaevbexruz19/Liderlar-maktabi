import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Spectral, Onest } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import "../globals.css";

/**
 * FONT SELECTION IS THE HIGHEST-RISK DECISION ON THIS SITE.
 *
 * Uzbek Latin needs U+02BB (ʻ) and U+02BC (ʼ) — the characters in "oʻzbek" and
 * "gʻalaba". Most of the fashionable 2026 sans fonts DO NOT CONTAIN THEM:
 * Manrope, Geist, Plus Jakarta Sans, Figtree, Instrument Sans, Bricolage
 * Grotesque, Outfit, Rubik and Golos Text all fail, so the school's own name
 * would render with a mismatched fallback glyph. Playfair and Onest were both
 * verified to contain them.
 *
 * Verified against the generated CSS: for these two families Google places
 * U+02BB–02BC in the BASE `latin` subset, so `latin-ext` is not what unlocks
 * them — having chosen a font that contains the glyph at all is. `latin-ext`
 * is kept for the rest of Latin Extended, and `cyrillic` for Russian; browsers
 * download only the subsets a given page actually uses.
 */
/**
 * Onest carries the entire site — headings included. Playfair was the first
 * choice and was wrong twice over: it is one of the most overused faces on the
 * web, and a serif at every heading size is the generic school-website look.
 *
 * Spectral appears ONLY as a single italic accent word inside a headline, so
 * just the italic 400 cut is loaded.
 */
const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
  preload: true,
});

const spectral = Spectral({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-spectral",
  display: "swap",
  preload: false, // accent only — never in the LCP path
});

/** Set NEXT_PUBLIC_SITE_URL in the deploy environment before launch. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://liderlarmaktabi.uz";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const title = `${t("school")} — ${t("region")}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${t("school")}`,
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        uz: "/uz",
        ru: "/ru",
        en: "/en",
        "x-default": "/uz",
      },
    },
    /**
     * This card is what renders when somebody pastes the link into Telegram —
     * the school's primary sharing channel, and the way most parents will first
     * meet this site. Without it the link appears as bare text.
     */
    openGraph: {
      type: "website",
      siteName: t("school"),
      title,
      description: t("description"),
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      url: `/${locale}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t("school") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("description"),
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <html lang={locale} className={`${onest.variable} ${spectral.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-paper"
        >
          {t("skip")}
        </a>
        <JsonLd locale={locale} siteUrl={SITE_URL} />
        <NextIntlClientProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileContactBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
