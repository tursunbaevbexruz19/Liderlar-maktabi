"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Sticky contact bar, phones only.
 *
 * In this market a parent will call or message on Telegram long before they
 * fill in a form, and they will do it from a phone. Making them scroll back to
 * the header to find that is the single cheapest conversion loss on the site.
 *
 * Hidden until the visitor is past the hero, so it never covers the headline
 * on first paint.
 */
export function MobileContactBar() {
  const t = useTranslations("nav");
  const tAdm = useTranslations("admissions");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--tone-rule)] bg-paper/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="tone-paper flex items-center gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="tel:+998000000000"
          tabIndex={show ? 0 : -1}
          className="tap flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--tone-rule)] px-4 text-[1.0625rem] font-semibold text-navy-700"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none">
            <path
              d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 7.2 2 2 0 0 1 6.5 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          {t("contact")}
        </a>

        <Link
          href="/qabul"
          tabIndex={show ? 0 : -1}
          className="tap flex flex-1 items-center justify-center rounded-full bg-navy-700 px-4 text-[1.0625rem] font-semibold text-paper"
        >
          {tAdm("l3Action")}
        </Link>
      </div>
    </div>
  );
}
