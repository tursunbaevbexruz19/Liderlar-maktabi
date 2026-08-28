import { getTranslations, getLocale } from "next-intl/server";
import { lifeCategories } from "@/content/life";
import type { Locale } from "@/i18n/routing";
import { Rail } from "@/components/ui/Rail";

/**
 * Out-of-class activities.
 *
 * The cards now sit in a <Rail>, which aligns them with the section heading
 * and gives mouse users arrows — previously they were 24px out of alignment
 * and unreachable without a trackpad.
 *
 * Tiles are generated compositions, not stock photos. When the school's
 * photography arrives each one takes an <Image> in the same slot; see MEDIA.md.
 */
function Tile({
  hue,
  index,
}: {
  hue: "navy" | "gold" | "mixed";
  index: number;
}) {
  const fills = {
    navy: ["var(--color-navy-700)", "var(--color-navy-500)"],
    gold: ["var(--color-gold-500)", "var(--color-gold-300)"],
    mixed: ["var(--color-navy-700)", "var(--color-gold-500)"],
  }[hue];

  const gid = `life-grad-${index}`;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={fills[0]} />
            <stop offset="100%" stopColor={fills[1]} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${gid})`} />
        <g fill="none" stroke="#fff" strokeOpacity="0.17" strokeWidth="1.25">
          <circle cx="342" cy="58" r="150" />
          <circle cx="342" cy="58" r="112" />
          <circle cx="342" cy="58" r="74" />
          <circle cx="342" cy="58" r="36" />
        </g>
        <path
          d="M58 232 L64 250 L82 256 L64 262 L58 280 L52 262 L34 256 L52 250 Z"
          fill="#fff"
          fillOpacity="0.92"
        />
      </svg>
    </div>
  );
}

export async function StudentLife() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("life");
  const tc = await getTranslations("common");

  return (
    <section className="tone-paper relative" id="hayot">
      <div className="mx-auto w-full max-w-[86rem] px-6 pt-24 sm:px-8 lg:px-10 lg:pt-36">
        <header data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 max-w-[16ch] text-d2 tone-display">
            {t("title")}
          </h2>
          <p className="mt-7 measure text-lg tone-muted">{t("lead")}</p>
        </header>
      </div>

      <div className="mt-14 pb-24 lg:pb-36">
        <Rail
          label={t("title")}
          prevLabel={tc("prev")}
          nextLabel={tc("next")}
        >
          {lifeCategories.map((category, index) => (
            <article
              key={category.id}
              className="group w-[80vw] shrink-0 sm:w-[44vw] lg:w-[24rem]"
            >
              <div className="overflow-hidden rounded-[1.5rem] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                <Tile hue={category.hue} index={index} />
              </div>

              <div className="mt-6 flex items-baseline gap-4">
                <span
                  aria-hidden
                  className="text-[1rem] font-semibold tabular-nums tone-accent"
                >
                  0{index + 1}
                </span>
                <h3 className="text-2xl tone-display">
                  {category.title[locale]}
                </h3>
              </div>

              <p className="mt-3 text-lg tone-muted">{category.body[locale]}</p>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}
