"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated figure that is HONEST in the DOM.
 *
 * `useState(value)` seeds the real string, so the server-rendered HTML — the
 * thing Google, a screen reader, and any no-JS visitor actually read — already
 * says "TOP-6" and "90%". The count-up is a purely visual layer applied after
 * hydration.
 *
 * Korowa's award-winning site ships the opposite: its DOM contains `0` and
 * `0.0` until JavaScript runs, so its best proof points are invisible to
 * crawlers. That bug is the reason this component exists.
 */
export function Counter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasRun.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Split "TOP-800" into "TOP-" + 800, "90%" into 90 + "%".
    const parts = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!parts) return;

    const [, prefix, digits, suffix] = parts;
    const target = Number(digits);
    // A year counting up from zero looks absurd; start it just below itself.
    const from = target > 1900 ? target - 34 : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast arrival, gentle settle
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -9 * progress);
          const current = Math.round(from + (target - from) * eased);
          setDisplay(`${prefix}${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(value); // always settle on the exact source string
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.55 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
