import { getTranslations, getLocale } from "next-intl/server";
import { getAlumni } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";
import { VideoFacade } from "@/components/ui/VideoFacade";

/**
 * Success Stories — ESMA's two-part alumni model: PORTRAITS plus a DESTINATION
 * WALL. "90% went to university" is an abstraction; a graduate with a face and
 * a named university is not.
 *
 * Names are blank until the school supplies them, so the card leads with what
 * the person DOES NOW. That reads as a complete story on its own, which is why
 * there is no placeholder text anywhere in this component.
 *
 * The 2-minute videos load through a facade — poster plus a play button that
 * swaps in the iframe on click. Four raw YouTube embeds would be 2.4–6 MB
 * before anyone pressed play.
 */
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-navy-800">
      <svg viewBox="0 0 320 400" className="h-full w-full" aria-hidden>
        <rect width="320" height="400" fill="var(--color-navy-800)" />
        <circle
          cx="160"
          cy="470"
          r="250"
          fill="none"
          stroke="var(--color-gold-500)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <circle
          cx="160"
          cy="500"
          r="310"
          fill="none"
          stroke="var(--color-gold-500)"
          strokeOpacity="0.16"
          strokeWidth="1.5"
        />
        <path
          d="M232 74 A250 250 0 0 0 286 8"
          stroke="var(--color-gold-500)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M160 300 C 180 260, 205 190, 226 116"
          stroke="var(--color-navy-200)"
          strokeWidth="1.5"
          strokeDasharray="1 9"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M230 78 L237 99 L258 106 L237 113 L230 134 L223 113 L202 106 L223 99 Z"
          fill="var(--color-gold-300)"
        />
      </svg>
    </div>
  );
}

export async function SuccessStories() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("alumni");
  const alumni = getAlumni(locale);

  const destinations = [
    ...new Set(alumni.map((a) => a.destination).filter(Boolean)),
  ];

  return (
    <section className="tone-sand relative" id="bitiruvchilar">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header className="mx-auto max-w-[46rem] text-center" data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 text-d2 tone-display">{t("title")}</h2>
          <p className="mx-auto mt-7 max-w-[38rem] text-lg tone-muted">
            {t("lead")}
          </p>
        </header>

        <ul
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          data-stagger
        >
          {alumni.map((alum) => (
            <li key={alum.id} className="group flex flex-col">
              <VideoFacade
                videoId={alum.videoId}
                title={alum.now}
                watchLabel={t("watch")}
                soonLabel={t("videoSoon")}
              >
                <Portrait />
              </VideoFacade>

              {/* Leads with what they DO, not with a name we don't have yet. */}
              <h3 className="mt-6 text-2xl tone-display">{alum.now}</h3>

              {alum.name ? (
                <p className="mt-2 text-lg font-semibold tone-display">
                  {alum.name}
                </p>
              ) : null}

              <p className="mt-2 text-[1rem] tone-accent">
                {t("classOf", { year: alum.gradYear })}
              </p>

              {alum.destination ? (
                <p className="mt-1 text-[1.0625rem] tone-muted">
                  {alum.destination}
                </p>
              ) : null}

              <blockquote className="mt-6 border-l-2 border-gold-500 pl-5">
                <p className="text-[1.125rem] tone-muted">
                  <em className="accent not-italic">“</em>
                  {alum.quote}
                </p>
              </blockquote>
            </li>
          ))}
        </ul>

        <p className="mt-14 measure text-lg tone-muted" data-reveal>
          {t("note")}
        </p>

        {/* Stands in for admission statistics until documents exist. Saying
            this out loud converts better here than an unverifiable percentage. */}
        <p
          className="mt-6 max-w-[44rem] border-l-2 border-gold-500 pl-6 text-[1.0625rem] tone-muted"
          data-reveal
        >
          {t("placeholder")}
        </p>

        {destinations.length > 0 ? (
          <div className="mt-20">
            <p className="eyebrow">{t("destinationsTitle")}</p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {destinations.map((destination) => (
                <li
                  key={destination}
                  className="rounded-full border border-[color:var(--tone-rule)] bg-paper px-6 py-3.5 text-[1.0625rem] font-medium tone-display"
                >
                  {destination}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
