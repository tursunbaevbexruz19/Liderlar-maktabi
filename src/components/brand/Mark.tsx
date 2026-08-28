/**
 * The compact brand mark.
 *
 * The full circular lockup — figure, globe, laurel, wordmark, two rules —
 * turns to mud below about 120px, so it is reserved for the hero and the
 * footer. Everywhere else the brand is carried by this derived mark: the
 * circle, the gold arc, and the star the student is reaching for.
 *
 * Inline SVG, so it is sharp at any size, inherits theme colors, costs no
 * network request, and can be animated.
 */
export function Mark({
  className = "",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="currentColor"
        strokeWidth="1.75"
        opacity="0.9"
      />
      {/* The lit side of the globe */}
      <path
        d="M34.5 5.81 A21 21 0 0 1 42.19 34.5"
        stroke="var(--color-gold-500)"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      {/* The star being reached for */}
      <path
        d="M33.4 9.2 L34.6 14.1 L39.5 15.3 L34.6 16.5 L33.4 21.4 L32.2 16.5 L27.3 15.3 L32.2 14.1 Z"
        fill="var(--color-gold-500)"
        className={animated ? "star-idle" : undefined}
        style={{ transformOrigin: "33.4px 15.3px" }}
      />
    </svg>
  );
}

/**
 * The real school crest.
 *
 * `logo.png` is generated from the supplied `lidersirdayro.jpg`: near-white
 * pixels are made transparent so the crest sits correctly on the navy footer
 * as well as on paper. Served at 640px and 256px (see scripts in git history).
 *
 * At small sizes the wordmark inside the circle is illegible by design — that
 * is what the typographic wordmark beside it is for. Use `size="lg"` anywhere
 * the crest has room to be read properly.
 */
export function Crest({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`relative block ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-640.png"
        alt=""
        aria-hidden="true"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

/**
 * Header wordmark. The LEARN · GROW · LEAD line is deliberately NOT shown here
 * — in the header it costs ~90px of horizontal room, which is exactly what
 * pushed the Russian navigation off the bar. It lives in the hero and footer
 * where there is space for it.
 */
export function Wordmark({
  school,
  className = "",
}: {
  school: string;
  className?: string;
}) {
  return (
    <span
      className={`text-[1.0625rem] font-semibold uppercase tracking-[0.11em] sm:text-[1.125rem] ${className}`}
    >
      {school}
    </span>
  );
}
