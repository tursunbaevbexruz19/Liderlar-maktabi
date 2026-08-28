"use client";

import { useState } from "react";
import type { SubjectView } from "@/lib/content/queries";

/**
 * "What grade is your child in?"
 *
 * The single most useful control on the site for a parent, and nothing in the
 * competitive set has it. It reconfigures the section in place rather than
 * navigating away, so a parent comparing two grades can flip between them.
 *
 * Every subject stays in the DOM at every setting — the filter only hides, so
 * the full curriculum is indexable and available with JavaScript off.
 */
export function Academics({
  subjects,
  grades,
  labels,
}: {
  subjects: SubjectView[];
  grades: readonly number[];
  labels: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    /** Pre-rendered on the server — ICU formatting can't cross the client boundary. */
    gradeLabels: Record<number, string>;
    subjectsFor: Record<number, string>;
    groups: Record<string, string>;
  };
}) {
  const [grade, setGrade] = useState<number | null>(null);

  const visible = (subject: SubjectView) =>
    grade === null || subject.grades.includes(grade);

  const groups = ["science", "humanities", "language", "tech"] as const;

  return (
    <section className="tone-paper relative" id="talim">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header data-stagger>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h2 className="mt-4 max-w-[20ch] text-d2 tone-display">
            {labels.title}
          </h2>
          <p className="mt-6 measure text-lg tone-muted">{labels.lead}</p>
        </header>

        {/* Grade selector — big, obvious targets. */}
        <div className="mt-12 flex flex-wrap gap-3" role="group">
          <button
            type="button"
            onClick={() => setGrade(null)}
            aria-pressed={grade === null}
            className={`tap rounded-full border px-6 text-[1.0625rem] font-semibold transition-all duration-300 ${
              grade === null
                ? "border-navy-700 bg-navy-700 text-paper"
                : "border-[color:var(--tone-rule)] text-[color:var(--tone-muted)] hover:border-navy-700/50 hover:text-navy-700"
            }`}
          >
            {labels.all}
          </button>

          {grades.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setGrade(value)}
              aria-pressed={grade === value}
              aria-label={labels.gradeLabels[value]}
              className={`tap rounded-full border px-6 text-xl font-semibold transition-all duration-300 ${
                grade === value
                  ? "border-gold-500 bg-gold-500 text-navy-900"
                  : "border-[color:var(--tone-rule)] text-[color:var(--tone-muted)] hover:border-gold-500/60 hover:text-navy-700"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <p
          className="mt-8 min-h-[1.75rem] text-xl font-semibold tone-display"
          aria-live="polite"
        >
          {grade === null ? "" : labels.subjectsFor[grade]}
        </p>

        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const items = subjects.filter((s) => s.group === group);
            const anyVisible = items.some(visible);

            return (
              <div key={group} className={anyVisible ? "" : "opacity-35"}>
                <p className="border-b border-[color:var(--tone-rule)] pb-3 text-[1rem] font-semibold uppercase tracking-[0.12em] tone-muted">
                  {labels.groups[group]}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {items.map((subject) => (
                    <li
                      key={subject.id}
                      className={`flex items-center gap-3 rounded-lg py-2.5 text-lg transition-all duration-300 ${
                        visible(subject)
                          ? "tone-display"
                          : "tone-muted opacity-40"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                          visible(subject) ? "bg-gold-500" : "bg-transparent"
                        }`}
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
