import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { WHO_WE_ARE, PILLARS, COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "PGS, Inc. is an experience-based, low-risk, best-value and innovative custom security solution organization serving government agencies, institutions and corporate bodies.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow={COMPANY.legalName}
        title="Who We Are"
        intro="An experience-based, low-risk, best-value and innovative custom security solution organization."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {WHO_WE_ARE.map((para) => (
                  <p key={para} className="text-lg leading-relaxed text-gray-700">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-gray-100 bg-rail p-8">
                <h2 className="mb-3 text-2xl font-bold text-primary">Management</h2>
                <p className="mb-6 leading-relaxed text-primary/80">
                  How we approach client relationships, quality control and the financial structure and stamina behind
                  every contract we hold.
                </p>
                <Link href="/who-we-are/management" className="btn-highlight inline-flex items-center rounded-full px-7 py-3">
                  Read about our management
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-28">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl bg-rail p-6">
                    <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary/70">
                      {pillar.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-primary/90">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
