import { getTranslations, getLocale } from "next-intl/server";
import { getStats } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";
import { Counter } from "@/components/ui/Counter";

/**
 * The proof strip. Every figure carries a caption saying what it measures —
 * a number without context ("75 acres") means nothing to a parent choosing
 * a school for their child.
 */
export async function ProofStrip() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("proof");
  const stats = getStats(locale);

  return (
    <section className="tone-navy grain relative" id="natijalar">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="eyebrow">{t("eyebrow")}</p>

        {/* A plain list, not a <dl>: a description list requires <dt> before
            <dd>, but the figure has to read first visually. Faking it with
            sr-only text makes every stat announce its label twice. */}
        <ul
          className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          data-stagger
        >
          {stats.map((stat) => (
            <li key={stat.id} className="border-t border-[color:var(--tone-rule)] pt-6">
              <Counter
                value={stat.value}
                className="block text-[clamp(2.75rem,1.4rem+4.2vw,4.25rem)] font-semibold leading-none tone-accent"
              />
              <p className="mt-5 text-lg font-semibold text-white">
                {stat.label}
              </p>
              {stat.note ? (
                <p className="mt-2 text-[1rem] tone-muted">{stat.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
