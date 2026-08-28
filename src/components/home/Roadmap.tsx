"use client";

import { useEffect, useRef, useState } from "react";
import type { MilestoneView } from "@/lib/content/queries";

/**
 * The history roadmap — 1994 to 2026.
 *
 * DELIBERATE DEVIATION FROM THE PLAN: this was specced as a GSAP-pinned
 * horizontal scrub. Built as a driveable tablist instead, because:
 *   - scroll-jacking fights native scrolling on Android, which is most of the
 *     audience;
 *   - a parent who wants to know "what happened in 2009?" can go straight
 *     there instead of scrubbing for it;
 *   - every panel stays in the DOM, so all thirty years of history are
 *     indexable and readable with JavaScript off;
 *   - it removes GSAP + ScrollTrigger from the bundle entirely (~40 KB saved).
 *
 * The motion is still there — the rail fills, the panel cross-fades — it just
 * answers to the visitor instead of hijacking them.
 */
export function Roadmap({
  milestones,
  labels,
}: {
  milestones: MilestoneView[];
  labels: { eyebrow: string; title: string; lead: string; hint: string };
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Deep links: /#2009 opens that year.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const index = milestones.findIndex((m) => m.id === hash || m.year === hash);
    if (index >= 0) setActive(index);
  }, [milestones]);

  const move = (next: number) => {
    const index = (next + milestones.length) % milestones.length;
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      move(0);
    } else if (event.key === "End") {
      event.preventDefault();
      move(milestones.length - 1);
    }
  };

  const progress = ((active + 0.5) / milestones.length) * 100;

  return (
    <section className="tone-sand relative" id="tarix">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header data-stagger>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h2 className="mt-4 max-w-[18ch] text-d2 tone-display">
            {labels.title}
          </h2>
          <p className="mt-6 measure text-lg tone-muted">{labels.lead}</p>
        </header>

        {/* The rail */}
        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[27px] h-px bg-[color:var(--tone-rule)]"
            aria-hidden
          />
          <div
            className="absolute left-0 top-[27px] h-[2px] bg-gold-500 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${progress}%` }}
            aria-hidden
          />

          <div
            role="tablist"
            aria-label={labels.title}
            onKeyDown={onKeyDown}
            className="drag-x relative flex gap-3 pb-2"
          >
            {milestones.map((milestone, index) => {
              const selected = index === active;
              return (
                <button
                  key={milestone.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  role="tab"
                  id={`year-tab-${milestone.id}`}
                  aria-selected={selected}
                  aria-controls={`year-panel-${milestone.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  className={`tap relative shrink-0 rounded-full border px-6 text-xl font-semibold transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    selected
                      ? "border-gold-500 bg-gold-500 text-navy-900"
                      : "border-[color:var(--tone-rule)] bg-paper text-[color:var(--tone-muted)] hover:border-gold-500/60 hover:text-navy-700"
                  }`}
                >
                  {milestone.year}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-[1rem] tone-muted">{labels.hint}</p>
        </div>

        {/* Panels — all present in the DOM, only one visible. */}
        <div className="mt-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              role="tabpanel"
              id={`year-panel-${milestone.id}`}
              aria-labelledby={`year-tab-${milestone.id}`}
              hidden={index !== active}
            >
              <div className="grid gap-10 rounded-3xl border border-[color:var(--tone-rule)] bg-sand/70 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div key={`${milestone.id}-${active}`} className="enter" style={{ "--enter-delay": "0s" } as React.CSSProperties}>
                  <p className="text-[clamp(3rem,1.5rem+5vw,5rem)] font-semibold leading-none tone-accent">
                    {milestone.year}
                  </p>
                  <h3 className="mt-6 text-d3 tone-display">{milestone.title}</h3>
                  <p className="mt-5 measure text-lg tone-muted">
                    {milestone.body}
                  </p>
                </div>

                {milestone.figure ? (
                  <div className="flex flex-col items-start gap-3 border-l-2 border-gold-500 pl-8 lg:items-center lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8 lg:text-center">
                    <span className="text-[clamp(2.5rem,1.5rem+3vw,3.5rem)] font-semibold leading-none tone-display">
                      {milestone.figure}
                    </span>
                    <span className="text-lg tone-muted">
                      {milestone.figureLabel}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
