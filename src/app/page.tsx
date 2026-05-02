import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { HeroSlider } from "@/components/hero-slider";
import { popularCourses, trendingCourses } from "@/lib/courses";

const learningTips = [
  "Use 50/10 deep-focus cycles for complex modules.",
  "Take micro-notes right after each lesson to improve retention.",
  "Build one mini-project every week from what you learn.",
];

const topInstructors = [
  { name: "John Doe", specialty: "Full-Stack Engineering" },
  { name: "Sarah Khan", specialty: "UX Research & Interface Design" },
  { name: "Alex Rivera", specialty: "Growth Marketing" },
  { name: "Priya Nair", specialty: "Analytics & SQL" },
];

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-16 px-4 py-8 md:px-8 md:py-12">
      <HeroSlider />

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-slate-900">Popular Courses</h2>
          <Link href="/courses" className="text-sm font-semibold text-brand hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/55 bg-white/80 p-6 shadow-xl">
          <h3 className="font-display text-2xl font-bold text-slate-900">Learning Tips</h3>
          <p className="mt-2 text-sm text-slate-600">Study smarter with focused learning habits.</p>
          <ul className="mt-5 space-y-3">
            {learningTips.map((tip) => (
              <li key={tip} className="rounded-2xl bg-sky-50 px-4 py-3 text-sm text-slate-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/55 bg-white/80 p-6 shadow-xl">
          <h3 className="font-display text-2xl font-bold text-slate-900">Top Instructors</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {topInstructors.map((instructor) => (
              <div key={instructor.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://i.postimg.cc/q7fM6Q8N/avatar.png"
                    alt={instructor.name}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{instructor.name}</p>
                    <p className="text-xs text-slate-600">{instructor.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl font-bold text-slate-900">Trending Courses</h2>
        <p className="mt-2 text-slate-600">Fresh picks learners are enrolling in this week.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </section>
  );
}
