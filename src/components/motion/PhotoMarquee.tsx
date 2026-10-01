"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsapConfig";

const triple = (arr: string[]) => [...arr, ...arr, ...arr];

/** Two rows of centre photos that drift opposite directions as the page scrolls. */
export function PhotoMarquee({ row1, row2 }: { row1: string[]; row2: string[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    const r1 = row1Ref.current;
    const r2 = row2Ref.current;
    if (!section || !r1 || !r2) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        r1.style.transform = `translateX(${offset - 200}px)`;
        r2.style.transform = `translateX(${-(offset - 200)}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-bg pb-10 pt-24 sm:pt-32 md:pt-40">
      <div ref={row1Ref} className="flex gap-3 will-change-transform">
        {triple(row1).map((src, i) => (
          <div key={`r1-${i}`} className="relative h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl sm:h-[230px] sm:w-[360px] md:h-[270px] md:w-[420px]">
            <Image src={src} alt="" fill sizes="420px" loading="lazy" className="object-cover" />
          </div>
        ))}
      </div>
      <div ref={row2Ref} className="mt-3 flex gap-3 will-change-transform">
        {triple(row2).map((src, i) => (
          <div key={`r2-${i}`} className="relative h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl sm:h-[230px] sm:w-[360px] md:h-[270px] md:w-[420px]">
            <Image src={src} alt="" fill sizes="420px" loading="lazy" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
