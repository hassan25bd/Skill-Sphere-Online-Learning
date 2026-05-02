"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { courses } from "@/lib/courses";
import { Loader } from "@/components/loader";

const curriculum: Record<number, string[]> = {
  1: ["HTML, CSS & layout basics", "JavaScript fundamentals", "React components & hooks", "Node.js + Express backend", "Database basics with SQL", "Deploying your first app"],
  2: ["Design thinking and research", "Wireframing in Figma", "Typography and colour theory", "Prototyping & user testing", "Handing off to developers"],
  3: ["Understanding your audience", "SEO on-page and off-page", "Running Google & Meta ads", "Email campaigns that convert", "Tracking and reporting results"],
  4: ["SQL from zero to joins", "Aggregations and window functions", "Connecting to Power BI", "Building your first dashboard", "Telling stories with data"],
  5: ["After Effects workspace tour", "Keyframes and easing", "Text and shape animations", "Exporting for Instagram/TikTok", "Building a looping animation"],
  6: ["How PMs actually spend their time", "Writing a solid PRD", "Prioritisation frameworks", "Working with engineers & designers", "Roadmaps and stakeholder comms"],
};

const fallbackCurriculum = [
  "Introduction and setup",
  "Core concepts and fundamentals",
  "Hands-on practice project",
  "Intermediate workflows",
  "Final capstone and review",
];

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?redirect=/courses/${id}`);
    }
  }, [session, isPending, id, router]);

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    notFound();
  }

  if (isPending) {
    return <Loader label="Checking access..." />;
  }

  if (!session?.user) {
    return <Loader label="Redirecting to login..." />;
  }

  const lessons = curriculum[course.id] ?? fallbackCurriculum;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 md:px-8 md:py-14">
      <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-xl">
        <div className="relative h-[260px] w-full md:h-[360px]">
          <Image
            src={`${course.image}?w=1000&q=80&fit=crop`}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1000px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6">
            <p className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {course.category}
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold text-white drop-shadow md:text-3xl">
              {course.title}
            </h1>
          </div>
        </div>

        <div className="space-y-5 p-6 md:p-8">
          <p className="text-slate-700">{course.description}</p>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">👨‍🏫</span>
              <span><span className="font-semibold">Instructor:</span> {course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⏱️</span>
              <span><span className="font-semibold">Duration:</span> {course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <span><span className="font-semibold">Level:</span> {course.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span><span className="font-semibold">Rating:</span> {course.rating} / 5</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-900">What you&apos;ll cover</h2>
            <ol className="mt-4 space-y-2">
              {lessons.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
