"use client";

import { useState, type ReactNode } from "react";

/**
 * YouTube facade.
 *
 * Renders a poster with a play button and only creates the iframe once someone
 * actually presses play. A raw YouTube embed is 600 KB–1.5 MB before anyone
 * watches anything; four of them on the alumni page would be 2.4–6 MB on a
 * connection that cannot afford it.
 *
 * IMPORTANT UI RULE APPLIED HERE: when there is no video yet, this renders a
 * plain label — NOT a button. The previous version styled the "watch"
 * indicator as a button in both cases, so a parent tapped a play control that
 * did nothing. A control that cannot act must not look like a control.
 */
export function VideoFacade({
  videoId,
  title,
  watchLabel,
  soonLabel,
  children,
}: {
  videoId?: string;
  title: string;
  watchLabel: string;
  soonLabel: string;
  /** The poster artwork. */
  children: ReactNode;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && videoId) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-navy-900">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  const badge = (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-paper/95 px-4 py-2.5 text-[1rem] font-semibold text-navy-900">
      <span
        aria-hidden
        className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500"
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      {videoId ? watchLabel : soonLabel}
    </span>
  );

  // No video yet: a plain, non-interactive caption.
  if (!videoId) {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem]">
        {children}
        <div className="absolute inset-x-0 bottom-0 p-4">{badge}</div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${watchLabel} — ${title}`}
      className="group/vid relative block w-full overflow-hidden rounded-[1.5rem] text-left"
    >
      {children}
      <span className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover/vid:bg-navy-900/15" />
      <span className="absolute inset-x-0 bottom-0 p-4">{badge}</span>
    </button>
  );
}
