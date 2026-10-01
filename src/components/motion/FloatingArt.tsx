"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap, gsap, prefersReducedMotion } from "@/lib/gsapConfig";

/** Gentle infinite bob loop for a hero illustration; static under reduced motion. */
export function FloatingArt({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !ref.current) return;
    ensureGsap();
    gsap.to(ref.current, { y: -16, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }, []);

  return (
    <div ref={ref} className="relative w-full will-change-transform">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={900}
        priority
        sizes="(min-width: 1024px) 440px, (min-width: 640px) 340px, 260px"
        className="h-auto w-full object-contain drop-shadow-xl"
      />
    </div>
  );
}
