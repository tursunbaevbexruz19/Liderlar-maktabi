import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { AdmissionsCta } from "@/components/home/AdmissionsCta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("news") };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const t = await getTranslations("common");

  return (
    <>
      <PageHeader eyebrow={tNav("news")} title={tNav("news")} />

      {/* PHASE 4 — news items become MDX files in content/news/. At 1–2 posts
          a month this needs no CMS; Payload comes later if staff must self-serve. */}
      <Section tone="sand">
        <p className="measure text-lg tone-muted">{t("todo")}</p>
      </Section>

      <AdmissionsCta />
    </>
  );
}
