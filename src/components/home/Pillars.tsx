import { getTranslations, getLocale } from "next-intl/server";
import { getPillars } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Section, SectionHead } from "@/components/ui/Section";

/**
 * LEARN · GROW · LEAD.
 *
 * This is not an invented framework — it is already on the school's crest.
 * Using it as the site's spine means the website and the physical brand say
 * exactly the same thing.
 */
export async function Pillars() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("pillars");
  const pillars = getPillars(locale);

  return (
    <Section tone="paper" id="yolimiz">
      <SectionHead eyebrow={t("eyebrow")} title={t("title")} />

      <ol className="mt-16 grid gap-8 lg:grid-cols-3" data-stagger>
        {pillars.map((pillar, index) => (
          <li key={pillar.id}>
            <Link
              href={pillar.href}
              className="card card-hover group flex h-full flex-col p-9 lg:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.9375rem] font-bold tracking-[0.32em] tone-accent">
                  {pillar.word}
                </span>
                <span className="text-[1.0625rem] tone-muted">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-8 text-d3 tone-display">{pillar.title}</h3>

              <p className="mt-5 flex-1 text-lg tone-muted">{pillar.body}</p>

              <span className="mt-8 inline-flex items-center gap-2 text-[1.0625rem] font-semibold tone-display">
                {t("more")}
                <span
                  aria-hidden
                  className="tone-accent transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
