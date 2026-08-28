/**
 * Inner-page masthead. Deliberately quiet: the homepage hero carries the
 * brand, inner pages just need to say where you are.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="tone-paper grain relative overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[86rem] px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
        <p className="eyebrow enter" style={{ "--enter-delay": "0s" } as React.CSSProperties}>
          {eyebrow}
        </p>
        <h1 className="mt-6 text-d1 tone-display">
          <span className="hero-line">
            <span>{title}</span>
          </span>
        </h1>
        {lead ? (
          <p
            className="enter mt-8 measure text-lg tone-muted lg:text-xl"
            style={{ "--enter-delay": "0.2s" } as React.CSSProperties}
          >
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
