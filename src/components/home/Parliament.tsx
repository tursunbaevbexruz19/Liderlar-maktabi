"use client";

import { useState } from "react";
import type { ParliamentView } from "@/lib/content/queries";

/**
 * The Student Parliament.
 *
 * This section is the PROOF of the school's central claim. "We train leaders"
 * is an assertion; five named students who each run something is evidence.
 * None of the eight reference school sites presents student government as a
 * real organisation — this is the clearest competitive gap on the site.
 *
 * Sticky card-stack on scroll (pure CSS `position: sticky`, no GSAP), each
 * card openable to show what that person actually did this year.
 *
 * Note: there is no Vice President. The founder crossed it out.
 */
export function Parliament({
  roles,
  labels,
}: {
  roles: ParliamentView[];
  labels: {
    eyebrow: string;
    title: string;
    lead: string;
    hint: string;
  };
}) {
  const [open, setOpen] = useState<string | null>(roles[0]?.id ?? null);

  return (
    <section className="tone-navy grain relative" id="parlament">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <header data-stagger>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h2 className="mt-4 max-w-[18ch] text-d2 tone-display">
            {labels.title}
          </h2>
          <p className="mt-6 measure text-lg tone-muted">{labels.lead}</p>
          <p className="mt-6 text-[1rem] tone-accent">{labels.hint}</p>
        </header>

        <ol className="mt-14 flex flex-col gap-5">
          {roles.map((role, index) => {
            const isOpen = open === role.id;
            return (
              <li
                key={role.id}
                className="sticky"
                style={{ top: `calc(6rem + ${index * 1.1}rem)` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : role.id)}
                  aria-expanded={isOpen}
                  className={`w-full rounded-2xl border p-7 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-9 ${
                    isOpen
                      ? "border-gold-500/70 bg-navy-800"
                      : "border-[color:var(--tone-rule)] bg-navy-900 hover:border-gold-500/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-5">
                      <span className="text-[1.0625rem] font-semibold tone-accent">
                        0{index + 1}
                      </span>
                      <span>
                        <span className="block text-d3 leading-tight tone-display">
                          {role.role}
                        </span>
                        {role.holder ? (
                          <span className="mt-2 block text-lg tone-muted">
                            {role.holder}
                          </span>
                        ) : null}
                      </span>
                    </div>

                    <span
                      aria-hidden
                      className={`mt-2 shrink-0 text-2xl tone-accent transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "mt-6 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="measure text-lg text-white/85">{role.did}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
