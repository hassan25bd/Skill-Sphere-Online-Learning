import Image from "next/image";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { courses } from "@/lib/courses";

const curriculum = [
  "Introduction and setup",
  "Core concepts and fundamentals",
  "Hands-on practice project",
  "Intermediate workflows",
  "Final capstone and review",
];

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect(`/login?redirect=/courses/${id}`);
  }

  const course = courses.find((item) => item.id === Number(id));
  if (!course) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 md:px-8 md:py-14">
      <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-xl">
        <div className="relative h-[260px] w-full md:h-[360px]">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
        </div>

        <div className="space-y-4 p-6 md:p-8">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            {course.category}
          </p>
          <h1 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">{course.title}</h1>
          <p className="text-slate-700">{course.description}</p>
          <div className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <p>
              <span className="font-semibold">Instructor:</span> {course.instructor}
            </p>
            <p>
              <span className="font-semibold">Duration:</span> {course.duration}
            </p>
            <p>
              <span className="font-semibold">Level:</span> {course.level}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {course.rating}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              {curriculum.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
