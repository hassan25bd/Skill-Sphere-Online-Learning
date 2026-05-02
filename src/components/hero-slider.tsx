"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Start learning something new today",
    subtitle: "Real courses, taught by real people",
    note: "Web dev, design, marketing — pick what you actually want to learn and just start.",
  },
  {
    title: "Build stuff you're proud of 🛠️",
    subtitle: "Less theory. More doing.",
    note: "Every course has hands-on projects so you're not just watching videos forever.",
  },
  {
    title: "Your next skill is one click away",
    subtitle: "Learn at your own pace, seriously",
    note: "No deadlines. No pressure. Just good content you can come back to anytime.",
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
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                  {slide.title}
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
