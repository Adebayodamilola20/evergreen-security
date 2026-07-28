import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ACADEMY,
  ACADEMY_PILLARS,
  TRAINING_STANDARDS,
  WHO_SHOULD_TRAIN,
  ACADEMY_JOURNEY,
  CERTIFICATION_CATALOGUE,
  guardCourses,
  firearmCourses,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Training Academy",
  description:
    "PGS Training Academy (PGSTA) delivers value-based, field-based training for aspiring security officers and continuous training for officers across the DMV area.",
};

// The academy runs as its own sub-site with its own home page and menu boxes.
const menuBoxes = [
  {
    label: "Guard Training",
    href: "/training-academy/guard-training",
    blurb: "Unarmed certification, defensive tools and life-saving skills.",
    items: guardCourses.map((c) => c.title),
  },
  {
    label: "Firearm Training",
    href: "/training-academy/firearm-training",
    blurb: "Armed certification across Maryland, DC and Virginia.",
    items: firearmCourses.map((c) => c.title),
  },
  {
    label: "Sign Up For Training",
    href: "/training-academy/signup",
    blurb: "Pick a scheduled session and register online.",
    items: [],
  },
  {
    label: "Contact Us",
    href: "/training-academy/contact",
    blurb: "Speak to the academy about dates, prerequisites and group bookings.",
    items: [],
  },
];

export default function TrainingAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow={`${ACADEMY.name} · ${ACADEMY.abbreviation}`}
        title="Build an exciting career in security service delivery"
        intro="A flagship of value-based resource and knowledge/field-based training for aspiring security officers, and continuous training for officers across the DMV area."
      />

      {/* The academy's own menu boxes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {menuBoxes.map((box) => (
              <Link
                key={box.href}
                href={box.href}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-rail p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-primary">{box.label}</h2>
                  <p className="mb-5 leading-relaxed text-primary/70">{box.blurb}</p>
                  {box.items.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {box.items.map((item) => (
                        <li key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  Open
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the academy */}
      <section className="section-padding border-y border-gray-100 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">About the Academy</h2>
              <div className="space-y-6">
                {ACADEMY.intro.map((para) => (
                  <p key={para} className="text-lg leading-relaxed text-gray-700">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl bg-navy p-7 text-white lg:sticky lg:top-28">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Security Cert / Training
                </h2>
                <ul className="space-y-3">
                  {CERTIFICATION_CATALOGUE.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-sm leading-snug text-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50">
                  Virginia courses are delivered under DCJS Training School {ACADEMY.vaSchoolNumber}.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What sets the academy apart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
              WHY PGSTA
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
              What sets this academy apart
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ACADEMY_PILLARS.map((pillar, index) => (
              <article key={pillar.title} className="rounded-2xl border border-gray-100 bg-rail p-8 md:p-10">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-xl font-bold leading-tight text-primary">{pillar.title}</h3>
                <p className="leading-relaxed text-primary/75">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training standards */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white/80">
                  THE STANDARD
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">What every officer completes</h2>
                <p className="mt-5 leading-relaxed text-white/70">
                  These are not optional extras. They are the baseline an officer must hold before deployment — and, for
                  several of them, must renew every year to keep.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <dl className="divide-y divide-white/10">
                {TRAINING_STANDARDS.map((standard) => (
                  <div key={standard.title} className="py-7 first:pt-0 last:pb-0">
                    <dt className="mb-2.5 text-xl font-bold">{standard.title}</dt>
                    <dd className="leading-relaxed text-white/70">{standard.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Who should train */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
              WHO TRAINS HERE
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
              Whether you are starting or renewing
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_SHOULD_TRAIN.map((group) => (
              <div key={group.title} className="rounded-2xl border-t-4 border-t-accent bg-gray-50 p-7">
                <h3 className="mb-3 text-lg font-bold leading-tight text-primary">{group.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{group.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding border-t border-gray-100 bg-gray-50">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
              HOW IT WORKS
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
              From enquiry to certification
            </h2>
          </div>

          <ol className="space-y-4">
            {ACADEMY_JOURNEY.map((stage) => (
              <li
                key={stage.step}
                className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm sm:flex-row sm:items-start sm:gap-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {stage.step}
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-primary">{stage.title}</h3>
                  <p className="leading-relaxed text-gray-600">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/training-academy/signup" className="btn-highlight rounded-full px-8 py-3.5 text-center">
              Sign up for training
            </Link>
            <Link
              href="/training-academy/contact"
              className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-center font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Ask the academy a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
