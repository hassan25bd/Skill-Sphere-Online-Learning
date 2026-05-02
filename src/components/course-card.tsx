"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-lg shadow-sky-900/5 transition hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 w-full">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-5">
        <p className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          {course.category}
        </p>
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{course.title}</h3>
        <p className="text-sm text-slate-600">by {course.instructor}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">{course.duration}</p>
          <p className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            {"★".repeat(Math.floor(course.rating))}{"☆".repeat(5 - Math.floor(course.rating))}
            <span className="ml-1 text-slate-600">{course.rating}</span>
          </p>
        </div>
        <div className="pt-2">
          <Link href={`/courses/${course.id}`} className="btn btn-sm bg-brand text-white hover:bg-brand-dark">
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
