"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { LottiePlayer } from "./lottie-player";

const slides = [
  {
    title: "Start learning something new today",
    subtitle: "Real courses, taught by real people",
    note: "Web dev, design, marketing — pick what you actually want to learn and just start.",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json",
    bgImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400&q=80&fit=crop",
  },
  {
    title: "Build stuff you're proud of",
    subtitle: "Less theory. More doing.",
    note: "Every course has hands-on projects so you're not just watching videos forever.",
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_fcfjwiyb.json",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&fit=crop",
  },
  {
    title: "Your next skill is one click away",
    subtitle: "Learn at your own pace, seriously",
    note: "No deadlines. No pressure. Just good content you can come back to anytime.",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80&fit=crop",
  },
];

export function HeroSlider() {
  return (
    <div className="hero-shell overflow-hidden rounded-3xl border border-white/55 shadow-2xl shadow-cyan-900/30">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <section
              className="grid min-h-[280px] grid-cols-1 items-center gap-4 rounded-2xl px-6 py-10 text-white md:min-h-[360px] md:grid-cols-2 md:px-14"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(5,47,75,0.93) 50%, rgba(5,47,75,0.55)), url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-xl">
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                  {slide.title}
                </h1>
                <h2 className="mt-3 text-xl font-semibold text-cyan-100 md:text-2xl">
                  {slide.subtitle}
                </h2>
                <p className="mt-4 text-cyan-50/90">{slide.note}</p>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <LottiePlayer src={slide.lottieUrl} className="h-64 w-64 drop-shadow-2xl" />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
