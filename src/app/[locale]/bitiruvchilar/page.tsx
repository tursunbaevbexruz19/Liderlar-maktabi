import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { SuccessStories } from "@/components/home/SuccessStories";
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
  return { title: t("alumni") };
}

export default async function AlumniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tAlumni = await getTranslations("alumni");

  return (
    <>
      <PageHeader
        eyebrow="LEAD"
        title={tNav("alumni")}
        lead={tAlumni("lead")}
      />
      <SuccessStories />
      <Tracks />
      <AdmissionsCta />
    </>
  );
}
