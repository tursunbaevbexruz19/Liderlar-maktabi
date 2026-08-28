"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal card rail.
 *
 * Touch already works — native scroll-snap does the job and never fights the
 * browser. What was missing was everything else:
 *
 *  - a MOUSE user on desktop had no way to move it at all (no wheel-hijack by
 *    design, so a trackpad worked and a mouse did not). Arrows fix that.
 *  - there was no affordance showing more cards existed, and no position
 *    feedback. The progress bar fixes both.
 *  - snapped cards did not line up with the section heading. `.rail-gutter`
 *    fixes that; see globals.css.
 *
 * Pointer-drag is enabled for mouse only. Touch is left entirely to the
 * browser, because intercepting touch here is how these rails start feeling
 * broken on Android.
 */
export function Rail({
  children,
  label,
  prevLabel,
  nextLabel,
}: {
  children: ReactNode;
  label: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure]);

  /** Scroll by exactly one card, so the rail always lands on a snap point. */
  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const amount = first
      ? first.getBoundingClientRect().width + gap
      : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const from = el.scrollLeft;
    const target = from + dir * amount;
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });

    // Same principle as the entrance motion: never let an animation decide
    // whether the control works. Smooth scrolling silently does nothing in a
    // throttled or non-compositing tab, which would leave the arrows dead —
    // so if nothing has moved shortly after, jump straight to the target.
    if (!reduce) {
      window.setTimeout(() => {
        const node = ref.current;
        if (node && Math.abs(node.scrollLeft - from) < 2) {
          node.scrollLeft = target;
        }
      }, 180);
    }
  };

  // Mouse drag. Touch is deliberately untouched.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: 0,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.abs(dx);
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    ref.current?.releasePointerCapture?.(e.pointerId);
  };

  // Suppress the click that follows a real drag, so dragging never opens a link.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  };

  return (
    <div>
      <div
        ref={ref}
        role="group"
        aria-label={label}
        className="drag-x rail-gutter flex gap-6 pb-4 [&>*]:select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {children}
      </div>

      {/* Progress + arrows, aligned to the same content gutter as the cards. */}
      <div className="rail-gutter mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full bg-[color:var(--tone-rule)]"
          aria-hidden
        >
          <div
            className="h-full w-1/3 origin-left rounded-full bg-gold-500 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${progress * 200}%)` }}
          />
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label={prevLabel}
            className="tap flex items-center justify-center rounded-full border border-[color:var(--tone-rule)] px-4 text-xl tone-display transition-all duration-300 hover:border-gold-500 disabled:pointer-events-none disabled:opacity-30"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label={nextLabel}
            className="tap flex items-center justify-center rounded-full border border-[color:var(--tone-rule)] px-4 text-xl tone-display transition-all duration-300 hover:border-gold-500 disabled:pointer-events-none disabled:opacity-30"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
