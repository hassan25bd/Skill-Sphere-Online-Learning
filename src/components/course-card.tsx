import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-lg shadow-sky-900/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-5">
        <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          {course.category}
        </p>
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{course.title}</h3>
        <p className="text-sm text-slate-600">Instructor: {course.instructor}</p>
        <p className="text-sm font-semibold text-amber-600">Rating: {course.rating}</p>
        <div className="pt-2">
          <Link href={`/courses/${course.id}`} className="btn btn-sm bg-brand text-white hover:bg-brand-dark">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
