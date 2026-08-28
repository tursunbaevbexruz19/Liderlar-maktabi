import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { Academics } from "@/components/home/Academics";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Tracks } from "@/components/home/Tracks";
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
  return { title: t("academics") };
}

export default async function AcademicsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tPillars = await getTranslations("pillars");

  return (
    <>
      <PageHeader
        eyebrow="LEARN"
        title={tNav("academics")}
        lead={tPillars("title")}
      />
      <Academics />
      <ProofStrip />
      <Tracks />
      <AdmissionsCta />
    </>
  );
}
