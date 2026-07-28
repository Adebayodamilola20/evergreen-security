import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { ACADEMY, HQ } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact the Training Academy",
  description:
    "Contact PGS Training Academy about course dates, prerequisites, group bookings and certification renewals.",
};

export default function AcademyContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Academy"
        title="Contact Us"
        intro="Talk to the academy about course dates, prerequisites, group bookings and certification renewals."
        crumbs={[{ label: "Training Academy", href: "/training-academy" }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-6 text-2xl font-bold text-primary">{ACADEMY.name}</h2>

              <dl className="space-y-6 text-gray-700">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Address</dt>
                  <dd className="mt-2 leading-relaxed">
                    {HQ.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Phone</dt>
                  <dd className="mt-2">
                    <a href={`tel:${HQ.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                      {HQ.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Fax</dt>
                  <dd className="mt-2">{HQ.fax}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Email</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${HQ.email}`} className="break-all text-accent hover:underline">
                      {HQ.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">
                    Virginia DCJS Training School
                  </dt>
                  <dd className="mt-2">{ACADEMY.vaSchoolNumber}</dd>
                </div>
              </dl>

              <Link
                href="/training-academy/signup"
                className="btn-highlight mt-10 inline-block rounded-full px-8 py-3.5"
              >
                Sign up for training
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
