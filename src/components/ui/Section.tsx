import type { ReactNode } from "react";

type Tone = "paper" | "sand" | "navy";

/**
 * Every section declares a surface tone. Text, rules and accent colors travel
 * with it via CSS custom properties, so a section can be moved or re-toned
 * without touching a single child component.
 *
 * The rhythm paper → sand → navy → paper is what buys the "expensively
 * designed" read for zero kilobytes of JavaScript.
 */
export function Section({
  tone = "paper",
  id,
  className = "",
  children,
  grain = false,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  grain?: boolean;
}) {
  return (
    <section
      id={id}
      className={`tone-${tone} relative ${grain ? "grain" : ""} ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + display heading + optional lead paragraph. Used by every section. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={align === "center" ? "mx-auto text-center" : ""}
      data-stagger
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`mt-4 text-d2 tone-display ${
          align === "center" ? "mx-auto" : ""
        } max-w-[20ch]`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-6 measure text-lg tone-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
