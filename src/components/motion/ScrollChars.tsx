"use client";

import { useEffect, useRef } from "react";
import { ensureGsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsapConfig";

/**
 * Character-by-character scroll-linked reveal (each char opacity 0.2 -> 1 as
 * the paragraph crosses the viewport). Full text is exposed once via
 * aria-label; individual char spans are aria-hidden so screen readers get
 * one clean read instead of one-char-at-a-time noise.
 */
export function ScrollChars({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-char]"));

    if (prefersReducedMotion()) {
      chars.forEach((c) => (c.style.opacity = "1"));
      return;
    }

    ensureGsap();
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 30%",
      scrub: true,
      onUpdate: (self) => {
        const lit = Math.floor(self.progress * chars.length);
        chars.forEach((c, i) => {
          c.style.opacity = i <= lit ? "1" : "0.2";
        });
      },
    });

    return () => st.kill();
  }, [text]);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} data-char aria-hidden="true" style={{ opacity: 0.2, transition: "opacity 0.05s linear" }}>
          {ch}
        </span>
      ))}
    </p>
  );
}
