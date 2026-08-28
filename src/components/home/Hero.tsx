import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Crest } from "@/components/brand/Mark";

/**
 * The hero.
 *
 * The stage below the headline now shows the SCHOOL'S ACTUAL CREST, large
 * enough to read, instead of the abstract SVG that was there before. It sits
 * on a soft two-point gradient built from the sampled brand colours.
 *
 * NOTE ON CLAIMS: the badge deliberately carries no statistic. The previous
 * "TOP-6 in the national ranking" line came from reading "ТОП 6" in the
 * founder's handwritten timeline and matches no published ranking I could
 * find, so it has been removed from the message files entirely rather than
 * left dormant — an unverifiable ranking in this market converts negatively.
 * It comes back only with a photographed source and a year.
 */
function HeroStage() {
  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-[color:var(--tone-rule)] bg-sand sm:rounded-[2.5rem]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_16%,var(--color-gold-100),transparent_58%),radial-gradient(ellipse_at_20%_92%,color-mix(in_oklab,var(--color-navy-500)_18%,transparent),transparent_62%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_100%,color-mix(in_oklab,var(--color-gold-500)_12%,transparent),transparent_70%)]"
      />

      <div className="relative flex items-center justify-center px-6 py-12 sm:py-16 lg:py-20">
        <Crest className="h-[13rem] w-[13rem] sm:h-[16rem] sm:w-[16rem] lg:h-[19rem] lg:w-[19rem]" />
      </div>
    </div>
  );
}

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="tone-paper grain relative overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-[56rem] flex-col items-center text-center">
          <p
            className="enter inline-flex items-center gap-2.5 rounded-full border border-gold-500/40 bg-white/60 px-5 py-2.5 text-[1rem] font-semibold tone-accent"
            style={{ "--enter-delay": "0s" } as React.CSSProperties}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M12 2 L13.5 9.4 L21 12 L13.5 14.6 L12 22 L10.5 14.6 L3 12 L10.5 9.4 Z"
                fill="currentColor"
              />
            </svg>
            {t("eyebrow")}
          </p>

          <h1 className="mt-8 text-d1 tone-display">
            <span className="hero-line">
              <span>{t("titleA")}</span>
            </span>
            <span className="hero-line">
              <span>
                <em className="accent accent-gold">{t("titleHighlight")}</em>{" "}
                {t("titleB")}
              </span>
            </span>
          </h1>

          <p
            className="enter mt-8 max-w-[46rem] text-lg tone-muted lg:text-xl"
            style={{ "--enter-delay": "0.18s" } as React.CSSProperties}
          >
            {t("lead")}
          </p>

          <div
            className="enter mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            style={{ "--enter-delay": "0.26s" } as React.CSSProperties}
          >
            <Button href="/qabul">{t("ctaApply")}</Button>
            <Button href="/haqimizda" variant="outline">
              {t("ctaTour")}
            </Button>
          </div>
        </div>

        <div
          className="enter mt-16 w-full lg:mt-20"
          style={{ "--enter-delay": "0.14s" } as React.CSSProperties}
        >
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
