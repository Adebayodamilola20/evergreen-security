import Link from "next/link";
import { Course } from "@/lib/company";

/** Grid of course cards for one training track. */
export default function CourseListing({ courses, basePath }: { courses: Course[]; basePath: string }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link
          key={course.slug}
          href={`${basePath}/${course.slug}`}
          className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <div>
            <h2 className="mb-2.5 text-xl font-bold leading-tight text-primary">{course.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600">{course.summary}</p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
            Course details
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
