"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Crest, Wordmark } from "@/components/brand/Mark";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Four top-level items, not six.
 *
 * The previous six-item bar consumed 1265px of a 1265px container at the xl
 * breakpoint — zero slack — and the Russian labels ("Школьная жизнь") are
 * longer than the Uzbek ones, so the navigation overflowed. Admissions is the
 * CTA button; News and Contact live in the footer and the closing CTA triad,
 * which is where a parent actually looks for them.
 */
const NAV = [
  { key: "about", href: "/haqimizda" },
  { key: "academics", href: "/talim" },
  { key: "life", href: "/hayot" },
  { key: "alumni", href: "/bitiruvchilar" },
] as const;

const MOBILE_NAV = [
  ...NAV,
  { key: "admissions", href: "/qabul" },
  { key: "news", href: "/yangiliklar" },
  { key: "contact", href: "/aloqa" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`tone-paper sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-[color:var(--tone-rule)] bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[86rem] items-center gap-6 px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-navy-700"
          onClick={() => setOpen(false)}
        >
          <Crest className="h-12 w-12 shrink-0" priority />
          <Wordmark school={tMeta("school")} className="hidden sm:inline" />
          <span className="sr-only sm:hidden">{tMeta("school")}</span>
        </Link>

        {/* Centred pill navigation */}
        <nav
          aria-label={t("menu")}
          className="hidden flex-1 justify-center xl:flex"
        >
          <div className="pill-nav">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`tap flex items-center whitespace-nowrap rounded-full px-5 text-[1.0625rem] font-medium transition-colors duration-300 ${
                    active
                      ? "bg-navy-700 text-paper"
                      : "text-ink/80 hover:text-navy-700"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
          <div className="hidden sm:block">
            <LanguageSwitcher compact />
          </div>

          <Link
            href="/qabul"
            className="tap hidden items-center whitespace-nowrap rounded-full bg-navy-700 px-6 text-[1.0625rem] font-semibold text-paper transition-colors duration-300 hover:bg-navy-900 lg:inline-flex"
          >
            {t("apply")}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="tap flex items-center justify-center whitespace-nowrap rounded-full border border-[color:var(--tone-rule)] px-5 text-[1.0625rem] font-semibold text-navy-700 xl:hidden"
          >
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>

      {/* Mobile menu — large targets, generous type. Built for a thumb. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="tone-paper fixed inset-x-0 bottom-0 top-[84px] z-40 overflow-y-auto border-t border-[color:var(--tone-rule)] bg-paper xl:hidden"
      >
        <nav
          aria-label={t("menu")}
          className="mx-auto flex w-full max-w-[86rem] flex-col px-6 py-6 sm:px-8"
        >
          {MOBILE_NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-[color:var(--tone-rule)] py-5 text-2xl font-semibold tracking-[-0.02em] text-navy-700"
            >
              {t(item.key)}
              <span aria-hidden className="tone-accent text-xl">
                →
              </span>
            </Link>
          ))}

          <div className="mt-10 flex flex-col gap-5">
            <Link
              href="/qabul"
              onClick={() => setOpen(false)}
              className="tap inline-flex items-center justify-center rounded-full bg-navy-700 px-7 py-4 text-[1.0625rem] font-semibold text-paper"
            >
              {t("apply")}
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
