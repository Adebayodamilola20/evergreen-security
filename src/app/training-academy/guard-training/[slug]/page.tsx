import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetail from "@/components/CourseDetail";
import { guardCourses, getCourse } from "@/lib/company";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guardCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return { title: course.title, description: course.summary };
}

export default async function GuardCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course || course.track !== "guard") notFound();

  return (
    <CourseDetail course={course} trackLabel="Guard Training" trackHref="/training-academy/guard-training" />
  );
}
