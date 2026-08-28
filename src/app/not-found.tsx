import Link from "next/link";

/**
 * Global 404, for paths that never reach a locale segment.
 *
 * Every real route lives under `[locale]`, so this file has no layout above it
 * and must render its own <html>. Deliberately dependency-free — no fonts, no
 * translations, no components — because it has to work even when routing has
 * failed. Defaults to Uzbek, the default locale.
 */
export default function GlobalNotFound() {
  return (
    <html lang="uz">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#fcfbf8",
          color: "#16273d",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <main>
          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a67b34",
            }}
          >
            404
          </p>
          <h1
            style={{
              margin: "1rem 0 0",
              fontSize: "clamp(2rem, 1rem + 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#123352",
            }}
          >
            Sahifa topilmadi
          </h1>
          <p style={{ margin: "1.25rem 0 0", fontSize: "1.1875rem", color: "#5d6b7c" }}>
            Bu manzilda sahifa yoʻq.
          </p>
          <Link
            href="/uz"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 48,
              marginTop: "2rem",
              padding: "0 1.75rem",
              borderRadius: 999,
              backgroundColor: "#123352",
              color: "#fcfbf8",
              fontSize: "1.0625rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Bosh sahifa
          </Link>
        </main>
      </body>
    </html>
  );
}
