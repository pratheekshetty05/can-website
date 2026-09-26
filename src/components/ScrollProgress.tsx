"use client";

import { useEffect, useRef } from "react";

/** Slim fixed progress bar tied to page scroll. Skipped entirely under reduced motion. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      if (ref.current) ref.current.style.width = `${pct}%`;
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
      <div ref={ref} className="h-full w-0 bg-primary transition-[width] duration-100 ease-out" />
    </div>
  );
}
