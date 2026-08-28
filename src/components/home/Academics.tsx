import { getTranslations, getLocale } from "next-intl/server";
import { getSubjects } from "@/lib/content/queries";
import type { Locale } from "@/i18n/routing";

/**
 * The subject tracks.
 *
 * This section used to be a grade selector ("what grade is your child in?").
 * It was removed: the school accepts students at every grade, so any grade
 * control necessarily implies a range that does not exist. The tracks are
 * simply listed by group instead — plainer, and true.
 *
 * Server-rendered, no client JavaScript.
 */
export async function Academics() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("academics");
  const subjects = getSubjects(locale);

  const groups = [
    { id: "science", label: t("groupScience") },
    { id: "humanities", label: t("groupHumanities") },
    { id: "language", label: t("groupLanguage") },
    { id: "tech", label: t("groupTech") },
  ] as const;

  return (
    <section className="tone-paper relative" id="talim">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header data-stagger>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-5 max-w-[20ch] text-d2 tone-display">
            {t("title")}
          </h2>
          <p className="mt-7 measure text-lg tone-muted">{t("lead")}</p>
        </header>

        <div
          className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
          data-stagger
        >
          {groups.map((group) => {
            const items = subjects.filter((s) => s.group === group.id);
            return (
              <div key={group.id}>
                <p className="border-b border-[color:var(--tone-rule)] pb-4 text-[1rem] font-semibold uppercase tracking-[0.12em] tone-muted">
                  {group.label}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {items.map((subject) => (
                    <li
                      key={subject.id}
                      className="flex items-center gap-3 text-lg tone-display"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                      />
                      {subject.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
