import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CourseListing from "@/components/CourseListing";
import { firearmCourses } from "@/lib/company";

export const metadata: Metadata = {
  title: "Firearm Training",
  description:
    "Armed certification at PGS Training Academy — MD Armed, DC SPO and VA DCJS Armed, with 40 additional hours of weapons training renewed annually.",
};

export default function FirearmTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Academy"
        title="Firearm Training"
        intro="Armed officers receive 40 additional hours of weapons training and must renew annually, on both semi-automatic weapons and revolvers."
        crumbs={[{ label: "Training Academy", href: "/training-academy" }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <CourseListing courses={firearmCourses} basePath="/training-academy/firearm-training" />
        </div>
      </section>
    </>
  );
}
