"use client";

import { useRef, useState } from "react";
import type { TrackView } from "@/lib/content/queries";

/**
 * "After school" — Medicine / IT / Study abroad.
 *
 * Was three static cards, which made it the flattest section left on the page.
 * Now a tablist: the parent picks the path they care about and reads only
 * that, which is also how they actually think about it — they have one child
 * and usually one direction in mind.
 *
 * Same accessibility contract as the history timeline: proper tab semantics,
 * arrow-key navigation, and EVERY panel stays in the DOM (hidden), so all
 * three paths are indexable and readable with JavaScript off.
 */
export function TracksPicker({
  tracks,
  labels,
}: {
  tracks: TrackView[];
  labels: { eyebrow: string; title: string; hint: string };
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (next: number) => {
    const i = (next + tracks.length) % tracks.length;
    setActive(i);
    tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      move(active + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      move(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      move(0);
    } else if (e.key === "End") {
      e.preventDefault();
      move(tracks.length - 1);
    }
  };

  return (
    <section className="tone-paper relative" id="yonalishlar">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
        <header data-stagger>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h2 className="mt-5 max-w-[18ch] text-d2 tone-display">
            {labels.title}
          </h2>
          <p className="mt-7 text-lg tone-muted">{labels.hint}</p>
        </header>

        <div
          role="tablist"
          aria-label={labels.title}
          onKeyDown={onKeyDown}
          className="mt-12 flex flex-wrap gap-3"
        >
          {tracks.map((track, index) => {
            const selected = index === active;
            return (
              <button
                key={track.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                id={`track-tab-${track.id}`}
                aria-selected={selected}
                aria-controls={`track-panel-${track.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`tap rounded-full border px-7 text-lg font-semibold transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  selected
                    ? "border-navy-700 bg-navy-700 text-paper"
                    : "border-[color:var(--tone-rule)] text-[color:var(--tone-muted)] hover:border-navy-700/50 hover:text-navy-700"
                }`}
              >
                {track.title}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              role="tabpanel"
              id={`track-panel-${track.id}`}
              aria-labelledby={`track-tab-${track.id}`}
              hidden={index !== active}
            >
              <div
                key={`${track.id}-${active}`}
                className="enter card grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16"
                style={{ "--enter-delay": "0s" } as React.CSSProperties}
              >
                <div>
                  <span
                    aria-hidden
                    className="text-[1rem] font-semibold tabular-nums tone-accent"
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-d3 tone-display">{track.title}</h3>
                  <p className="mt-5 measure text-lg tone-muted">
                    {track.body}
                  </p>
                </div>

                <ul className="flex flex-col gap-4 border-t border-[color:var(--tone-rule)] pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  {track.points.map((point) => (
                    <li key={point} className="flex gap-4 text-lg">
                      <span
                        aria-hidden
                        className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                      />
                      <span className="tone-display">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
