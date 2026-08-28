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
  return { title: t("contact") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const t = await getTranslations("footer");
  const tMeta = await getTranslations("meta");

  return (
    <>
      <PageHeader
        eyebrow={tMeta("region")}
        title={tNav("contact")}
        lead={t("address")}
      />

      <Section tone="sand">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          <div className="border-t border-[color:var(--tone-rule)] pt-6">
            <p className="eyebrow">{t("phone")}</p>
            <a
              href="tel:+998000000000"
              className="tap mt-3 flex items-center text-d3 tone-display"
            >
              {t("phoneNumber")}
            </a>
            <p className="mt-2 text-[1rem] tone-muted">{t("addressNote")}</p>
          </div>

          <div className="border-t border-[color:var(--tone-rule)] pt-6">
            <p className="eyebrow">{tNav("contact")}</p>
            <p className="mt-3 text-lg tone-display">{t("address")}</p>
          </div>

          <div className="border-t border-[color:var(--tone-rule)] pt-6">
            <p className="eyebrow">{t("social")}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {["Telegram", "Instagram", "YouTube"].map((name) => (
                <li
                  key={name}
                  className="tap inline-flex items-center rounded-full border border-[color:var(--tone-rule)] px-5 text-[1.0625rem] font-medium tone-display"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <AdmissionsCta />
    </>
  );
}
