import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/**
 * Three levels of commitment, not one "APPLY NOW".
 *
 * A family in this market will not expose themselves early — partly because
 * they do not want to be sold to, and partly because they do not want the
 * neighbourhood to know they were looking. Level 1 asks for nothing at all and
 * says so explicitly. That is the whole point of it.
 *
 * The footnote is the argument against tutoring, and it is the most
 * commercially important sentence on the page: it reframes the fee comparison
 * from "school vs free school" to "school vs what you are already spending".
 */
export async function AdmissionsCta() {
  const t = await getTranslations("admissions");

  const levels = [
    { n: 1, key: "l1", href: "/bitiruvchilar" },
    { n: 2, key: "l2", href: "/aloqa" },
    { n: 3, key: "l3", href: "/qabul" },
  ] as const;

  return (
    <section className="tone-navy grain relative" id="qabul">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header className="max-w-[46rem]" data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 text-d2 tone-display">{t("title")}</h2>
          <p className="mt-7 text-lg tone-muted">{t("lead")}</p>
        </header>

        <ol className="mt-16 grid gap-6 lg:grid-cols-3" data-stagger>
          {levels.map((level) => {
            const primary = level.n === 3;
            return (
              <li key={level.key}>
                <Link
                  href={level.href}
                  className={`group flex h-full flex-col rounded-[var(--radius-card)] border p-8 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 lg:p-10 ${
                    primary
                      ? "border-gold-500 bg-gold-500 text-navy-900"
                      : "border-[color:var(--tone-rule)] bg-navy-800/60 hover:border-gold-500/50"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`text-[1rem] font-semibold tabular-nums ${
                      primary ? "text-navy-900/70" : "tone-accent"
                    }`}
                  >
                    0{level.n}
                  </span>

                  <h3
                    className={`mt-6 text-d3 ${
                      primary ? "text-navy-900" : "tone-display"
                    }`}
                  >
                    {t(`${level.key}Title`)}
                  </h3>

                  <p
                    className={`mt-4 flex-1 text-lg ${
                      primary ? "text-navy-900/80" : "tone-muted"
                    }`}
                  >
                    {t(`${level.key}Body`)}
                  </p>

                  <span
                    className={`mt-8 inline-flex items-center gap-2 text-[1.0625rem] font-semibold ${
                      primary ? "text-navy-900" : "tone-display"
                    }`}
                  >
                    {t(`${level.key}Action`)}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        {/* The tutoring comparison — the sharpest commercial line on the site. */}
        <p
          className="mt-14 max-w-[44rem] border-l-2 border-gold-500 pl-6 text-lg tone-muted"
          data-reveal
        >
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
