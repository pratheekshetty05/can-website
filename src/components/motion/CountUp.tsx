"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ensureGsap, gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsapConfig";

/**
 * Animates a number from 0 to `value` on scroll-enter. `value` must be the
 * plain numeric part; `prefix`/`suffix` render the rest ("22", "+" separately).
 */
export function CountUp({ value, prefix = "", suffix = "", className = "" }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    ensureGsap();
    const counter = { n: 0 };
    el.textContent = `${prefix}0${suffix}`;
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          n: value,
          duration: 1.1,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
          },
        });
      },
    });
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
