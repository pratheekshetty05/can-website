"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ensureGsap, gsap, prefersReducedMotion } from "@/lib/gsapConfig";

/**
 * Word-by-word entrance for a short headline. Splits on spaces in plain
 * JS/React (no GSAP SplitText — that plugin's commercial license wasn't
 * confirmed, see the motion spec) so this stays fully free to ship.
 * `text` must be plain text; use `emphasize` to color-highlight one word
 * (e.g. "CAN") without breaking the stagger.
 */
export function KineticHeadline({
  text,
  emphasize,
  className = "",
  wordClassName = "",
}: {
  text: string;
  emphasize?: string;
  className?: string;
  /** Applied to every word span directly (not the outer wrapper). Needed for
   * effects like bg-clip-text gradients, which only paint against an
   * element's own text — they don't reach through this component's nested
   * per-word spans if applied to the outer element instead. */
  wordClassName?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    ensureGsap();
    const spans = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.set(spans, { opacity: 0, y: 14 });
    gsap.to(spans, { opacity: 1, y: 0, duration: 0.5, ease: "expo.out", stagger: 0.045, delay: 0.1 });
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
          <span data-word className={`inline-block ${wordClassName} ${emphasize && word.replace(/[.,!?]/g, "") === emphasize ? "text-primary" : ""}`}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
