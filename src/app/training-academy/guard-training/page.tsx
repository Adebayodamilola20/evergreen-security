import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CourseListing from "@/components/CourseListing";
import { guardCourses } from "@/lib/company";

export const metadata: Metadata = {
  title: "Guard Training",
  description:
    "Unarmed guard certification at PGS Training Academy — MD Unarmed, DC SO, VA DCJS Unarmed, handcuff, OC spray, baton and CPR/First Aid.",
};

export default function GuardTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Academy"
        title="Guard Training"
        intro="Unarmed certification, defensive tool training and life-saving skills. Each instructor is certified in the area in which they are instructing."
        crumbs={[{ label: "Training Academy", href: "/training-academy" }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <CourseListing courses={guardCourses} basePath="/training-academy/guard-training" />
        </div>
      </section>
    </>
  );
}
