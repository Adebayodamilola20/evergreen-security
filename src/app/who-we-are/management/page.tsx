import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { QUALITY_CONTROL, FINANCIAL_STABILITY, COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Management",
  description:
    "The PGS management approach — client relationships, quality control, and the financial structure and stamina behind every contract.",
};

export default function ManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Management"
        intro="Our management approach to client relationships, quality control, and the financial structure and stamina that sustains every contract."
        crumbs={[{ label: "Who We Are", href: "/who-we-are" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-primary">Quality Control</h2>
            <div className="space-y-6">
              {QUALITY_CONTROL.map((para) => (
                <p key={para} className="text-lg leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-rail p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              {COMPANY.shortName} Financial Stability Statement
            </h2>
            <div className="space-y-6">
              {FINANCIAL_STABILITY.map((para) => (
                <p key={para} className="leading-relaxed text-primary/85">
                  {para}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
