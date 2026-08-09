import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY, COMPANY, HQ } from "@/lib/company";

export const metadata: Metadata = {
  title: "Gallery",
  description: `${COMPANY.name} officers on post, on patrol and in training across Maryland, DC and Virginia.`,
};

// Kept true to the company copy — no invented figures.
const HIGHLIGHTS = [
  "Armed & unarmed officers",
  "A-rated training academy",
  "DC · Maryland · Virginia",
  "Response team 24/7",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="On the ground with PGS"
        intro="Officers on post, on patrol and in training — a look at the people and the standard behind every PGS contract."
        image="/assets/bingo6.jpg"
      />

      <section className="section-padding relative overflow-hidden bg-white">
        <div className="mesh-light pointer-events-none absolute inset-0" />
        <div className="dot-grid pointer-events-none absolute inset-0 text-primary/[0.04]" />

        <div className="container-custom relative">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-4 flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent/60" />
              A look inside PGS
              <span className="h-px w-6 bg-accent/60" />
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">The standard, in the field</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              From residential posts to commercial access control, mobile patrol to the training
              room — a look at the officers and the discipline behind every PGS contract.
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-rail px-4 py-1.5 text-xs font-semibold text-primary/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GalleryGrid items={GALLERY} />

          <p className="mt-8 text-center text-xs text-gray-400">
            Tap any photo to view it full screen.
          </p>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-navy text-white">
        <div className="mesh-navy pointer-events-none absolute inset-0" />
        <div className="container-custom relative">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Want this standard on your site?</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                Our response and escalation team is available 24 hours a day, 7 days a week. Tell us
                about your location and we&apos;ll build the detail around it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90"
              >
                Contact us
              </Link>
              <a
                href={`tel:${HQ.phone.replace(/\s/g, "")}`}
                className="rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                {HQ.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
