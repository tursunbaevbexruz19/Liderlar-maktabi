import { getTranslations } from "next-intl/server";

/**
 * The manifesto, followed by the honesty block.
 *
 * This section is the site's positioning in two moves. First the promise —
 * five parents' phone numbers over one big number. Then the thing that makes
 * it credible: an explicit statement that this site publishes no ranking it
 * cannot document.
 *
 * In a market where every competitor advertises figures nobody can check,
 * refusing to is a position no competitor will copy, because copying it means
 * giving up their own numbers.
 */
export async function Statement() {
  const t = await getTranslations("statement");

  return (
    <section className="tone-sand relative">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[52rem] text-center" data-stagger>
          <hr className="rule mx-auto w-16" />
          <p className="mt-12 text-d3 tone-display">{t("body")}</p>
        </div>

        <div
          className="card mx-auto mt-16 max-w-[46rem] p-8 lg:p-10"
          data-reveal
        >
          <p className="eyebrow">{t("honestyTitle")}</p>
          <p className="mt-5 text-lg tone-muted">{t("honesty")}</p>
        </div>
      </div>
    </section>
  );
}
