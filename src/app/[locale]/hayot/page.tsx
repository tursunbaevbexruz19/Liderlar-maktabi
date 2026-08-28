import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { StudentLife } from "@/components/home/StudentLife";
import { ParliamentSection } from "@/components/home/sections";
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
  return { title: t("life") };
}

export default async function LifePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tLife = await getTranslations("life");

  return (
    <>
      <PageHeader eyebrow="GROW" title={tNav("life")} lead={tLife("lead")} />
      <StudentLife />
      <ParliamentSection />
      <AdmissionsCta />
    </>
  );
}
