import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { HeroSlider } from "@/components/hero-slider";
import { popularCourses, trendingCourses } from "@/lib/courses";

const learningTips = [
  "Study in short bursts — 25-30 mins then take a break. Your brain needs it.",
  "Don't just watch. Pause and actually try it out yourself before moving on.",
  "One small project per week. Doesn't have to be perfect, just build something.",
];

const topInstructors = [
  {
    name: "John Doe",
    specialty: "Web development (front + back)",
    avatar: "https://api.dicebear.com/9.x/personas/png?seed=JohnDoe&size=80",
  },
  {
    name: "Sarah Khan",
    specialty: "UX design & Figma",
    avatar: "https://api.dicebear.com/9.x/personas/png?seed=SarahKhan&size=80",
  },
  {
    name: "Alex Rivera",
    specialty: "Digital marketing",
    avatar: "https://api.dicebear.com/9.x/personas/png?seed=AlexRivera&size=80",
  },
  {
    name: "Priya Nair",
    specialty: "SQL & data analysis",
    avatar: "https://api.dicebear.com/9.x/personas/png?seed=PriyaNair&size=80",
  },
];

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-16 px-4 py-8 md:px-8 md:py-12">
      <HeroSlider />

      <section className="animate__animated animate__fadeInUp">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-slate-900">Popular right now</h2>
          <Link href="/courses" className="text-sm font-semibold text-brand hover:underline">
            See all courses
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </section>

      <section className="animate__animated animate__fadeInUp animate__delay-1s grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/55 bg-white/80 p-6 shadow-xl">
          <h3 className="font-display text-2xl font-bold text-slate-900">Tips that actually help</h3>
          <p className="mt-2 text-sm text-slate-600">A few things I wish someone told me earlier.</p>
          <ul className="mt-5 space-y-3">
            {learningTips.map((tip) => (
              <li key={tip} className="rounded-2xl bg-sky-50 px-4 py-3 text-sm text-slate-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/55 bg-white/80 p-6 shadow-xl">
          <h3 className="font-display text-2xl font-bold text-slate-900">The Instructors</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {topInstructors.map((instructor) => (
              <div key={instructor.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={instructor.avatar}
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

      <section className="animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="font-display text-3xl font-bold text-slate-900">Trending this week</h2>
        <p className="mt-2 text-slate-600">Courses people are picking up lately.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </section>
    </section>
  );
}
