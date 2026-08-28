"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

const LABELS: Record<string, string> = {
  uz: "OʻZ",
  ru: "РУ",
  en: "EN",
};

/**
 * Instant language switch that keeps the visitor on the same page.
 *
 * Rendered as three visible options rather than a dropdown: on a school site
 * the language choice is the single most common first action, and a parent
 * should not have to discover it behind a menu.
 */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-[color:var(--tone-rule)] p-1"
      role="group"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-current={active ? "true" : undefined}
            onClick={() =>
              router.replace(
                // @ts-expect-error -- pathname is a known route at runtime
                { pathname, params },
                { locale: code, scroll: false },
              )
            }
            className={`tap rounded-full px-3 text-[1rem] font-semibold transition-colors duration-200 ${
              compact ? "min-h-[40px]" : ""
            } ${
              active
                ? "bg-gold-500 text-navy-900"
                : "text-[color:var(--tone-muted)] hover:text-[color:var(--tone-display)]"
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
