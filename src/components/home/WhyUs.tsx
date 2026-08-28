import { getTranslations, getLocale } from "next-intl/server";
import { reasons } from "@/content/whyus";
import type { Locale } from "@/i18n/routing";

/**
 * "Nimaga bizni tanlash" — why choose us. Straight from the founder's notes,
 * and the single most important section for a parent comparing schools.
 *
 * Written as DIFFERENCES, not features. "Modern classrooms" is something every
 * school claims; "leadership is a real job here, not a slogan" is something
 * only this school can say.
 */
export async function WhyUs() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("why");

  return (
    <section className="tone-sand relative" id="nimaga">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header className="mx-auto max-w-[46rem] text-center" data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 text-d2 tone-display">
            {t("titleA")} <em className="accent accent-gold">{t("titleAccent")}</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[38rem] text-lg tone-muted">
            {t("lead")}
          </p>
        </header>

        <ol className="mt-20 grid gap-x-16 gap-y-16 sm:grid-cols-2" data-stagger>
          {reasons.map((reason) => (
            <li key={reason.id} className="flex gap-6 sm:gap-8">
              <span
                aria-hidden
                className="shrink-0 pt-1 text-[1.0625rem] font-semibold tabular-nums tone-accent"
              >
                {reason.figure}
              </span>
              <div className="border-t border-[color:var(--tone-rule)] pt-5">
                <h3 className="text-d3 tone-display">
                  {reason.title[locale]}
                </h3>
                <p className="mt-4 measure text-lg tone-muted">
                  {reason.body[locale]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
