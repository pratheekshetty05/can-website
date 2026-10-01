"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { ensureGsap, gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsapConfig";

/**
 * Scroll-triggered grid reveal. `bounce` swaps power2.out for a back.out(1.4)
 * overshoot — reserved for card grids per the motion spec, never body text.
 */
export function StaggerGrid({
  children,
  className = "",
  itemSelector = ":scope > *",
  bounce = false,
}: {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  bounce?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) return;
      ensureGsap();
      const items = ref.current.querySelectorAll(itemSelector);
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: bounce ? 16 : 24, scale: bounce ? 0.92 : 1 });
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: bounce ? 0.4 : 0.5,
            ease: bounce ? "back.out(1.4)" : "power2.out",
            stagger: bounce ? 0.06 : 0.08,
          });
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
