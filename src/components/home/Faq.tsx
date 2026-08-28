import { getTranslations, getLocale } from "next-intl/server";
import { faq } from "@/content/faq";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

/**
 * FAQ, built on native <details>/<summary>.
 *
 * No JavaScript at all: the browser gives us the open/close behaviour, full
 * keyboard support and correct screen-reader semantics for free, and every
 * answer is present in the DOM whether or not it is expanded — so all of it is
 * indexable and readable with JS disabled.
 *
 * Consistent with the rule the rest of the site follows: never let JavaScript
 * decide whether a parent can read something.
 */
export async function Faq() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("faq");
  const tAdm = await getTranslations("admissions");

  return (
    <section className="tone-sand relative" id="savollar">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <header data-stagger>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-5 max-w-[14ch] text-d2 tone-display">
              {t("title")}
            </h2>
            <p className="mt-7 measure text-lg tone-muted">{t("lead")}</p>

            <Link
              href="/aloqa"
              className="tap mt-8 inline-flex items-center gap-2 text-[1.0625rem] font-semibold tone-display underline decoration-gold-500 decoration-2 underline-offset-[6px]"
            >
              {tAdm("l2Action")}
              <span aria-hidden className="tone-accent">
                →
              </span>
            </Link>
          </header>

          <div className="flex flex-col" data-stagger>
            {faq.map((item) => (
              <details
                key={item.id}
                name="faq"
                className="group border-b border-[color:var(--tone-rule)] first:border-t"
              >
                <summary className="tap flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold tone-display [&::-webkit-details-marker]:hidden">
                  {item.q[locale]}
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl leading-none tone-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="measure pb-7 text-lg tone-muted">
                  {item.a[locale]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
