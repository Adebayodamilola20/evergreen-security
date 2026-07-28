import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CAREER_INTRO, CAREER_REQUIREMENTS, COMPANY, APPLICATION_PDF } from "@/lib/company";

export const metadata: Metadata = {
  title: "Career",
  description:
    "PGS, Inc. is an equal opportunity employer offering rewarding full-time and part-time career opportunities to qualified security professionals.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build a career in security service delivery"
        intro={`${COMPANY.name} offers rewarding and exciting career opportunities to qualified individuals willing to expand their career and views on security.`}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {CAREER_INTRO.map((para) => (
                  <p key={para} className="text-lg leading-relaxed text-gray-700">
                    {para}
                  </p>
                ))}
              </div>

              <h2 className="mb-6 mt-12 text-2xl font-bold text-primary">
                Minimum requirements to become a Professional Security Officer with {COMPANY.shortName}
              </h2>
              <ul className="space-y-4">
                {CAREER_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex gap-3.5 leading-relaxed text-gray-700">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="rounded-2xl bg-navy p-8 text-white">
                  <h2 className="mb-3 text-xl font-bold">Apply online</h2>
                  <p className="mb-7 leading-relaxed text-white/70">
                    Complete the full employment application in your browser — general information, certifications,
                    eligibility, employment history, education and references.
                  </p>
                  <Link
                    href="/career/apply"
                    className="inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    Fill out the employment form
                  </Link>
                </div>

                <div className="rounded-2xl bg-rail p-8">
                  <h2 className="mb-3 text-xl font-bold text-primary">Prefer paper?</h2>
                  <p className="mb-6 leading-relaxed text-primary/75">
                    Download the application form, complete it by hand and return it to the corporate office.
                  </p>
                  <a
                    href={APPLICATION_PDF}
                    download
                    className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                    </svg>
                    Download application form (PDF)
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-100 p-8">
                  <h2 className="mb-3 text-xl font-bold text-primary">Equal opportunity employer</h2>
                  <p className="leading-relaxed text-gray-600">
                    We do not discriminate in hiring or employment on the basis of race, sex, age, religion, national
                    origin, sexual orientation, personal appearance, political affiliation, marital status, family
                    responsibilities, disability or status as a veteran.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
