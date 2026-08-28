import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Crest } from "@/components/brand/Mark";

/**
 * 404 inside a locale. Renders through the locale layout, so it keeps the
 * header, footer and language switcher — a visitor who lands on a dead link
 * can carry on rather than hitting a bare stack of text.
 */
export default async function NotFound() {
  const t = await getTranslations("notFound");
  const tAdm = await getTranslations("admissions");

  return (
    <section className="tone-paper grain relative">
      <div className="relative z-10 mx-auto flex w-full max-w-[86rem] flex-col items-center px-6 py-28 text-center sm:px-8 lg:px-10 lg:py-40">
        <Crest className="h-28 w-28 opacity-90" />
        <p className="eyebrow mt-10">404</p>
        <h1 className="mt-5 max-w-[16ch] text-d2 tone-display">{t("title")}</h1>
        <p className="mt-7 max-w-[42ch] text-lg tone-muted">{t("body")}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/">{t("cta")}</Button>
          <Button href="/aloqa" variant="outline">
            {tAdm("l2Action")}
          </Button>
        </div>
      </div>
    </section>
  );
}
