"use client";

import Link from "next/link";
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
    cta: { label: "Browse Courses", href: "/courses" },
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json",
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&fit=crop",
  },
  {
    title: "Build stuff you're proud of",
    subtitle: "Less theory. More doing.",
    note: "Every course has hands-on projects so you're not just watching videos forever.",
    cta: { label: "Start Building", href: "/courses" },
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_fcfjwiyb.json",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80&fit=crop",
  },
  {
    title: "Your next skill is one click away",
    subtitle: "Learn at your own pace, seriously",
    note: "No deadlines. No pressure. Just good content you can come back to anytime.",
    cta: { label: "Get Started Free", href: "/register" },
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_tno6cg2w.json",
    bgImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1400&q=80&fit=crop",
  },
];

export function HeroSlider() {
  return (
    <div className="hero-shell overflow-hidden rounded-3xl border border-white/55 shadow-2xl shadow-violet-900/30">
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
                backgroundImage: `linear-gradient(to right, rgba(30,10,60,0.92) 50%, rgba(30,10,60,0.5)), url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-xl">
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                  {slide.title}
                </h1>
                <h2 className="mt-3 text-xl font-semibold text-violet-200 md:text-2xl">
                  {slide.subtitle}
                </h2>
                <p className="mt-4 text-violet-50/90">{slide.note}</p>
                <Link
                  href={slide.cta.href}
                  className="mt-6 inline-block rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-violet-900 shadow-lg transition hover:bg-violet-50"
                >
                  {slide.cta.label} →
                </Link>
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
