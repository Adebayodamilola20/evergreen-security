import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Course, FIREARMS_NARRATIVE, HQ } from "@/lib/company";

/** Narrative page for a single course, per the client's drop-down note. */
export default function CourseDetail({ course, trackLabel, trackHref }: { course: Course; trackLabel: string; trackHref: string }) {
  return (
    <>
      <PageHero
        eyebrow={trackLabel}
        title={course.title}
        intro={course.summary}
        crumbs={[
          { label: "Training Academy", href: "/training-academy" },
          { label: trackLabel, href: trackHref },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-5">
            {course.body.map((para) => (
              <p key={para} className="text-lg leading-relaxed text-gray-700">
                {para}
              </p>
            ))}
          </div>

          {course.modules && (
            <ul className="mt-8 space-y-3 rounded-2xl bg-rail p-8">
              {course.modules.map((module) => (
                <li key={module} className="flex gap-3 leading-relaxed text-primary/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {module}
                </li>
              ))}
            </ul>
          )}

          {course.track === "firearm" && (
            <div className="mt-10 rounded-2xl border-l-4 border-accent bg-gray-50 p-8">
              <h2 className="mb-4 text-xl font-bold text-primary">Firearms</h2>
              <p className="leading-relaxed text-gray-700">{FIREARMS_NARRATIVE}</p>
            </div>
          )}

          {course.needsClientCopy && (
            <p className="mt-10 rounded-xl bg-gray-50 p-6 text-sm leading-relaxed text-gray-600">
              For the full syllabus, prerequisites and current dates for this course, call the academy on{" "}
              <a href={`tel:${HQ.phone.replace(/\s/g, "")}`} className="font-semibold text-accent hover:underline">
                {HQ.phone}
              </a>
              .
            </p>
          )}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/training-academy/signup" className="btn-highlight rounded-full px-8 py-3.5 text-center">
              Sign up for this training
            </Link>
            <Link
              href={trackHref}
              className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-center font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Back to {trackLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
