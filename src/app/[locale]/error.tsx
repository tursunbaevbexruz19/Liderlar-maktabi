"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

/**
 * Error boundary for the locale segment.
 *
 * Must be a client component — that is a Next.js requirement, since the reset
 * handler runs in the browser. Keeps the visitor on a branded page with a way
 * forward instead of the default unstyled error screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    // Surfaces the digest in the browser console so a production error can be
    // matched to a server log line.
    console.error(error);
  }, [error]);

  return (
    <section className="tone-paper relative">
      <div className="mx-auto flex w-full max-w-[86rem] flex-col items-center px-6 py-28 text-center sm:px-8 lg:px-10 lg:py-40">
        <p className="eyebrow">500</p>
        <h1 className="mt-5 max-w-[18ch] text-d2 tone-display">{t("title")}</h1>
        <p className="mt-7 max-w-[42ch] text-lg tone-muted">{t("body")}</p>

        <button
          type="button"
          onClick={reset}
          className="tap mt-10 inline-flex items-center justify-center rounded-full bg-navy-700 px-7 py-3.5 text-[1.0625rem] font-semibold text-paper transition-colors duration-300 hover:bg-navy-900"
        >
          {t("cta")}
        </button>

        {error.digest ? (
          <p className="mt-8 text-[1rem] tone-muted">#{error.digest}</p>
        ) : null}
      </div>
    </section>
  );
}
