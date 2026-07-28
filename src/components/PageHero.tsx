import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

/** Shared masthead for every inner page. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  /** Optional photo backdrop. Falls back to the mesh treatment alone. */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-16 md:pt-44 md:pb-20">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-brand-dark/90" />
        </>
      )}
      <div className="mesh-navy pointer-events-none absolute inset-0" />
      <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.05]" />

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
              {crumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>

        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
      </div>
    </section>
  );
}
