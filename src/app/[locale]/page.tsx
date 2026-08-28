import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Pillars } from "@/components/home/Pillars";
import { TaglineBand } from "@/components/home/TaglineBand";
import { WhyUs } from "@/components/home/WhyUs";
import { StudentLife } from "@/components/home/StudentLife";
import { SuccessStories } from "@/components/home/SuccessStories";
import { ParentVoices } from "@/components/home/ParentVoices";
import { Tracks } from "@/components/home/Tracks";
import { AdmissionsCta } from "@/components/home/AdmissionsCta";
import { Academics } from "@/components/home/Academics";
import { Faq } from "@/components/home/Faq";
import {
  RoadmapSection,
  ParliamentSection,
} from "@/components/home/sections";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tTagline = await getTranslations("tagline");

  return (
    <>
      {/*
        Tone rhythm — paper, sand, navy, alternating and never repeating twice.
        This alternation is what carries the design; it costs nothing, needs no
        JavaScript, and never fails to load.
      */}
      <Hero /> {/* paper */}
      <Statement /> {/* sand  */}
      <ProofStrip /> {/* navy  */}
      <Pillars /> {/* paper */}
      <TaglineBand label={tTagline("label")} /> {/* paper — the one motion moment */}
      <RoadmapSection /> {/* sand  */}
      <Academics /> {/* paper */}
      <WhyUs /> {/* sand  */}
      <ParliamentSection /> {/* navy  */}
      <StudentLife /> {/* paper */}
      <SuccessStories /> {/* sand  */}
      <ParentVoices /> {/* navy  */}
      <Tracks /> {/* paper */}
      <Faq /> {/* sand  */}
      <AdmissionsCta /> {/* navy  */}
    </>
  );
}
