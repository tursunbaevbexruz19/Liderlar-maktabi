import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/ui/PageHeader";
import { Statement } from "@/components/home/Statement";
import { Pillars } from "@/components/home/Pillars";
import { ProofStrip } from "@/components/home/ProofStrip";
import { RoadmapSection } from "@/components/home/sections";

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
  return { title: t("about") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tMeta = await getTranslations("meta");

  return (
    <>
      <PageHeader
        eyebrow={tMeta("region")}
        title={tNav("about")}
        lead={tMeta("description")}
      />
      <Statement />
      <RoadmapSection />
      <Pillars />
      <ProofStrip />
    </>
  );
}
