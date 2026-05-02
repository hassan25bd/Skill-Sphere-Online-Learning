"use client";

import { useEffect, useMemo, useState } from "react";
import { CourseCard } from "@/components/course-card";
import { Loader } from "@/components/loader";
import type { Course } from "@/lib/courses";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadCourses() {
      setLoading(true);
      const res = await fetch("/api/courses", { cache: "no-store" });
      const data = (await res.json()) as Course[];
      setCourses(data);
      setLoading(false);
    }

    void loadCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    if (!query.trim()) return courses;
    const normalized = query.toLowerCase();
    return courses.filter((course) => course.title.toLowerCase().includes(normalized));
  }, [courses, query]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold text-slate-900">All Courses</h1>
          <p className="mt-2 text-slate-600">Explore every skill-based program available on SkillSphere.</p>
        </div>
        <label className="w-full md:w-80">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Search by title</span>
          <input
            type="text"
            placeholder="e.g. Web Development"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="input input-bordered w-full border-slate-300 bg-white"
          />
        </label>
      </div>

      {loading ? (
        <Loader label="Loading all courses..." />
      ) : (
        <>
          <p className="mt-7 text-sm text-slate-600">
            Showing {filteredCourses.length} of {courses.length} courses.
          </p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
