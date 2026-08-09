import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { LEADERSHIP, LEADERSHIP_INTRO } from "@/lib/company";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The management team behind PGS, Inc. — veterans and seasoned security professionals leading operations, training, human resources and quality assurance.",
};

export default function LeadershipPage() {
  const [ceo, ...team] = LEADERSHIP;

  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Leadership"
        intro={LEADERSHIP_INTRO}
        crumbs={[{ label: "Who We Are", href: "/who-we-are" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured — the CEO */}
          <article className="mb-8 flex flex-col items-start gap-6 rounded-3xl bg-rail p-8 sm:flex-row sm:items-center md:mb-10 md:p-10">
            <span className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-navy text-white md:h-28 md:w-28">
              {ceo.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={ceo.photo} alt={ceo.name ?? ceo.role} className="h-full w-full object-cover" />
              ) : (
                <span className="text-2xl font-bold tracking-wide md:text-3xl">{ceo.tag}</span>
              )}
            </span>
            <div>
              <h2 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
                {ceo.name ?? ceo.role}
              </h2>
              {ceo.name ? <p className="mt-1 font-semibold text-accent">{ceo.role}</p> : null}
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{ceo.focus}</p>
            </div>
          </article>

          {/* The rest of the leadership team */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((leader) => (
              <article
                key={leader.role}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-navy text-white">
                  {leader.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={leader.photo} alt={leader.name ?? leader.role} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-lg font-bold tracking-wide">{leader.tag}</span>
                  )}
                </span>
                <h3 className="text-base font-bold leading-snug text-primary">
                  {leader.name ?? leader.role}
                </h3>
                {leader.name ? (
                  <p className="mt-0.5 text-sm font-semibold text-accent">{leader.role}</p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{leader.focus}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-gray-500">
            Backed by a wider team of licensed officers, certified instructors and administrative
            staff across Maryland, DC and Virginia.
          </p>
        </div>
      </section>
    </>
  );
}
