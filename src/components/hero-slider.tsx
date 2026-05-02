"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Upgrade Your Skills Today",
    subtitle: "Learn from Industry Experts",
    note: "From web development to growth marketing, go hands-on with practical courses.",
  },
  {
    title: "Career-Ready Learning Tracks",
    subtitle: "Build Projects That Matter",
    note: "Master real tools, follow guided roadmaps, and ship portfolio-ready outcomes.",
  },
  {
    title: "Grow Faster With SkillSphere",
    subtitle: "Learn. Practice. Get Hired.",
    note: "Join cohort-style programs and a supportive learner community.",
  },
];

export function HeroSlider() {
  return (
    <div className="hero-shell overflow-hidden rounded-3xl border border-white/55 bg-gradient-to-br from-[#052f4b] via-[#0e4f72] to-[#20a6b6] p-3 text-white shadow-2xl shadow-cyan-900/30">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <section className="grid min-h-[280px] items-center rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(0,0,0,0.25))] px-6 py-10 md:min-h-[360px] md:px-16">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-100">SkillSphere Learning Hub</p>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                  {slide.title} <span className="inline-block">🚀</span>
                </h1>
                <h2 className="mt-3 text-xl font-semibold text-cyan-100 md:text-2xl">{slide.subtitle}</h2>
                <p className="mt-4 text-cyan-50/90">{slide.note}</p>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
