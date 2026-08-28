import { getTranslations, getLocale } from "next-intl/server";
import { getTracks } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";
import { Section, SectionHead } from "@/components/ui/Section";

/** Medical / IT / Study abroad — the three destinations from the notes. */
export async function Tracks() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("tracks");
  const tracks = getTracks(locale);

  return (
    <Section tone="paper" id="yonalishlar">
      <SectionHead eyebrow={t("eyebrow")} title={t("title")} />

      <div className="mt-16 grid gap-8 lg:grid-cols-3" data-stagger>
        {tracks.map((track, index) => (
          <article
            key={track.id}
            className="card card-hover flex flex-col p-9 lg:p-10"
          >
            <span className="text-[1.0625rem] font-semibold tone-accent">
              0{index + 1}
            </span>
            <h3 className="mt-6 text-d3 tone-display">{track.title}</h3>
            <p className="mt-4 text-lg tone-muted">{track.body}</p>

            <ul className="mt-8 flex flex-col gap-3 border-t border-[color:var(--tone-rule)] pt-6">
              {track.points.map((point) => (
                <li key={point} className="flex gap-3 text-[1.0625rem]">
                  <span aria-hidden className="tone-accent">
                    ·
                  </span>
                  <span className="tone-display">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
