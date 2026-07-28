import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetail from "@/components/CourseDetail";
import { firearmCourses, getCourse } from "@/lib/company";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return firearmCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return { title: course.title, description: course.summary };
}

export default async function FirearmCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course || course.track !== "firearm") notFound();

  return (
    <CourseDetail course={course} trackLabel="Firearm Training" trackHref="/training-academy/firearm-training" />
  );
}
