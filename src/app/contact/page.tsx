import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { COMPANY, HQ } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact PGS, Inc. at 5900 Princess Garden Parkway, Suite 410, Lanham, MD 20706. Phone 301 459 4000, fax 301 459 3000, info@policeguardservices.com.",
};

const mapQuery = encodeURIComponent(HQ.lines.join(", "));

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to PGS"
        intro="Our response and escalation team is available 24 hours a day, 7 days a week to respond to questions or concerns."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-8 text-2xl font-bold text-primary">{COMPANY.legalName}</h2>

              <dl className="space-y-7 text-gray-700">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Address</dt>
                  <dd className="mt-2 text-lg leading-relaxed">
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
                    <a
                      href={`tel:${HQ.phone.replace(/\s/g, "")}`}
                      className="text-lg font-semibold text-accent hover:underline"
                    >
                      {HQ.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Fax</dt>
                  <dd className="mt-2 text-lg">{HQ.fax}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">Email</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${HQ.email}`} className="break-all text-lg text-accent hover:underline">
                      {HQ.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 rounded-2xl bg-rail p-7">
                <h3 className="mb-3 text-lg font-bold text-primary">Response &amp; escalation</h3>
                <p className="leading-relaxed text-primary/80">
                  Our response and escalation team is available 24 hours a day, 7 days a week to respond to questions
                  or concerns — so a live issue on your site never waits for office hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100">
        <iframe
          title={`Map showing ${HQ.label}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
