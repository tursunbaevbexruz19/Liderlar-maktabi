"use client";

import dynamic from "next/dynamic";

/**
 * The LEARN · GROW · LEAD band — the school's tagline travelling along a wave.
 * The one place on this site that uses a motion library.
 *
 * SIZING, because it is not obvious and it was wrong twice:
 *
 * The SVG has a fixed 1200×520 viewBox and scales to the container's WIDTH.
 * The ribbon occupies `(amplitude + ribbonWidth/2) × 2` viewBox units
 * vertically — with curviness 22 and ribbonWidth 96 that is ~193 units. At a
 * 1425px-wide container the scale factor is ×1.19, so the ribbon needs ~229px
 * of height. The band was 176px, which is why it was cropped top and bottom.
 * It is now 18rem (288px) on desktop, leaving real breathing room.
 *
 * The same width-driven scaling makes the type illegible on a phone (≈12px at
 * 375px wide), so below `md` the wave is replaced by a plain static strip.
 * A tagline nobody can read is not a design.
 */
const TextLoop = dynamic(() => import("@/components/ui/TextLoop"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const WORDS = ["LEARN", "GROW", "LEAD"] as const;

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L13.5 9.4 L21 12 L13.5 14.6 L12 22 L10.5 14.6 L3 12 L10.5 9.4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TaglineBand({ label }: { label: string }) {
  return (
    <section
      className="tone-paper relative overflow-hidden py-10 lg:py-14"
      aria-label={label}
    >
      {/* Phones: a legible static strip. */}
      <div className="flex items-center justify-center gap-4 bg-navy-700 py-6 text-paper md:hidden">
        {WORDS.map((word, i) => (
          <span key={word} className="flex items-center gap-4">
            <span className="text-[1.0625rem] font-bold tracking-[0.2em]">
              {word}
            </span>
            {i < WORDS.length - 1 ? (
              <Star className="h-3.5 w-3.5 text-gold-300" />
            ) : null}
          </span>
        ))}
      </div>

      {/* Tablet and up: the wave. */}
      <div className="hidden h-[15rem] w-full md:block lg:h-[18rem]">
        <TextLoop
          text="LEARN ✦ GROW ✦ LEAD"
          label={label}
          shape="wave"
          speed={58}
          separator="✦"
          curviness={22}
          fontSize={40}
          fontWeight={700}
          letterSpacing={7}
          color="#fcfbf8"
          ribbon
          ribbonColor="#123352"
          ribbonWidth={96}
          pauseOnHover
        />
      </div>
    </section>
  );
}
