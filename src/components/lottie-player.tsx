"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function LottiePlayer({ src, className }: { src: string; className?: string }) {
  const [animData, setAnimData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data: object) => setAnimData(data))
      .catch(() => {/* silently ignore fetch failures */});
  }, [src]);

  if (!animData) return null;

  return <Lottie animationData={animData} loop autoplay className={className} />;
}
