import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Crest } from "@/components/brand/Mark";

const NAV = [
  { key: "about", href: "/haqimizda" },
  { key: "academics", href: "/talim" },
  { key: "life", href: "/hayot" },
  { key: "alumni", href: "/bitiruvchilar" },
  { key: "admissions", href: "/qabul" },
  { key: "news", href: "/yangiliklar" },
  { key: "contact", href: "/aloqa" },
] as const;

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tMeta = await getTranslations("meta");

  return (
    <footer className="tone-navy grain relative">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4 text-white">
              <Crest className="h-20 w-20 shrink-0" />
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-semibold uppercase tracking-[0.12em]">
                  {tMeta("school")}
                </span>
                <span className="mt-2 text-[1rem] font-medium tracking-[0.28em] tone-accent">
                  LEARN · GROW · LEAD
                </span>
              </span>
            </div>
            <p className="mt-8 measure-tight text-lg tone-muted">
              {tMeta("description")}
            </p>
          </div>

          <nav aria-label={tNav("menu")} className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="tap flex items-center text-lg text-[color:var(--tone-muted)] transition-colors duration-200 hover:text-white"
              >
                {tNav(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-6">
            <div>
              <p className="eyebrow">{t("phone")}</p>
              <a
                href="tel:+998000000000"
                className="tap mt-2 flex items-center text-xl font-semibold text-white"
              >
                {t("phoneNumber")}
              </a>
            </div>
            <div>
              <p className="eyebrow">{tNav("contact")}</p>
              <p className="mt-2 text-lg tone-muted">{t("address")}</p>
            </div>
            <div>
              <p className="eyebrow">{t("social")}</p>
              <div className="mt-2 flex gap-3">
                {["Telegram", "Instagram", "YouTube"].map((name) => (
                  <span
                    key={name}
                    className="tap inline-flex items-center rounded-full border border-[color:var(--tone-rule)] px-4 text-[1rem] font-medium text-[color:var(--tone-muted)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The crest's laurel, flattened into a rule. */}
        <div className="mt-16 flex items-center gap-4">
          <hr className="rule flex-1" />
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
            <path
              d="M12 2 L13.5 9.4 L21 12 L13.5 14.6 L12 22 L10.5 14.6 L3 12 L10.5 9.4 Z"
              fill="var(--color-gold-300)"
            />
          </svg>
          <hr className="rule flex-1" />
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[1rem] tone-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {tMeta("school")}. {t("rights")}
          </p>
          <p>{tMeta("region")}</p>
        </div>
      </div>
    </footer>
  );
}
