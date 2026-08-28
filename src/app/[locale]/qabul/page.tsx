import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { Tracks } from "@/components/home/Tracks";
import { ProofStrip } from "@/components/home/ProofStrip";
import { AdmissionsCta } from "@/components/home/AdmissionsCta";
import { Faq } from "@/components/home/Faq";

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
  return { title: t("admissions") };
}

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("hero");

  return (
    <>
      <PageHeader
        eyebrow={tNav("admissions")}
        title={tNav("apply")}
        lead={tHero("lead")}
      />
      {/* PHASE 5 — the application form lands here. It must write to durable
          storage FIRST and only then notify Telegram: if Telegram 429s or is
          down, a family's application must not vanish mid-admissions season. */}
      <ProofStrip />
      <Tracks />
      <Faq />
      <AdmissionsCta />
    </>
  );
}
