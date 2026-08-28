import { getTranslations, getLocale } from "next-intl/server";
import { lifeCategories } from "@/content/life";
import type { Locale } from "@/i18n/routing";

/**
 * Student life, as a drag-scroll rail.
 *
 * DRAG, never wheel-hijack: a horizontal section that steals the scroll wheel
 * is the most common way these sites break on Android. Native scroll-snap does
 * the whole job with zero JavaScript.
 *
 * The tiles are generated compositions, not stock photos. When the school's
 * photography arrives, each tile takes an <Image> in the same slot — see
 * MEDIA.md for the shot list.
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

        {/* The crest's concentric arcs, used as texture */}
        <g fill="none" stroke="#fff" strokeOpacity="0.17" strokeWidth="1.25">
          <circle cx="342" cy="58" r="150" />
          <circle cx="342" cy="58" r="112" />
          <circle cx="342" cy="58" r="74" />
          <circle cx="342" cy="58" r="36" />
        </g>

        {/* The star, small and low — a mark, not a mascot */}
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

      {/* Bleeds off the right edge — signals "there is more" without a label. */}
      <div className="drag-x mt-14 flex gap-6 px-6 pb-24 sm:px-8 lg:px-10 lg:pb-36">
        {lifeCategories.map((category, index) => (
          <article
            key={category.id}
            className="group w-[78vw] shrink-0 sm:w-[44vw] lg:w-[24rem]"
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
              <h3 className="text-2xl tone-display">{category.title[locale]}</h3>
            </div>

            <p className="mt-3 text-lg tone-muted">{category.body[locale]}</p>
          </article>
        ))}

        {/* Trailing spacer so the last card can scroll clear of the edge. */}
        <div aria-hidden className="w-2 shrink-0 sm:w-8" />
      </div>
    </section>
  );
}
