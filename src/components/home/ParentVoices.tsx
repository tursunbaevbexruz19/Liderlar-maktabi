import { getTranslations, getLocale } from "next-intl/server";
import { parentVoices } from "@/content/whyus";
import type { Locale } from "@/i18n/routing";

/**
 * "Ota-onalar / feedback" — from the founder's notes.
 *
 * A parent choosing a school trusts another parent far more than they trust
 * the school. Set large, because the quote IS the content — this is the one
 * section where the type should feel like a pull-quote in a magazine.
 *
 * NEEDED FROM THE SCHOOL: real quotes with written consent to publish.
 * The names are intentionally blank until then; the relation line ("mother of
 * a grade 9 student") carries the attribution on its own.
 */
export async function ParentVoices() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("parents");

  return (
    <section className="tone-navy grain relative" id="ota-onalar">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 max-w-[18ch] text-d2 tone-display">
            {t("title")}
          </h2>
          <p className="mt-7 measure text-lg tone-muted">{t("lead")}</p>
        </header>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3" data-stagger>
          {parentVoices.map((voice) => (
            <li key={voice.id} className="card flex flex-col p-8 lg:p-10">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 tone-accent"
                aria-hidden
              >
                <path
                  d="M12 2 L13.5 9.4 L21 12 L13.5 14.6 L12 22 L10.5 14.6 L3 12 L10.5 9.4 Z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="mt-7 flex-1">
                <p className="text-xl leading-[1.5] text-white lg:text-2xl">
                  {voice.quote[locale]}
                </p>
              </blockquote>

              <figcaption className="mt-8 border-t border-[color:var(--tone-rule)] pt-5 text-[1.0625rem] tone-muted">
                {voice.name ? (
                  <span className="block font-semibold text-white">
                    {voice.name}
                  </span>
                ) : null}
                {voice.relation[locale]}
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
