"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ProgramItem = { number: string; category: string; name: string; href: string; image: string };

/**
 * Plain click-to-expand accordion — no scroll-driven animation, no locking.
 * Height transition via the CSS grid-template-rows 0fr/1fr trick, which
 * animates smoothly without measuring pixel heights in JS.
 */
export function ProgramsAccordion({ items }: { items: ProgramItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.number}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              aria-controls={`program-panel-${item.number}`}
              className="flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
            >
              <span className="font-fun shrink-0 text-2xl font-black text-primary sm:text-3xl">{item.number}</span>
              <span className="flex-1">
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted">{item.category}</span>
                <span className="font-fun block text-lg font-semibold text-ink sm:text-xl">{item.name}</span>
              </span>
              <span aria-hidden="true" className={`shrink-0 text-2xl text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            <div id={`program-panel-${item.number}`} className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
              <div className="overflow-hidden">
                <div className="grid gap-5 pb-6 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:pb-8">
                  <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
                    <Image src={item.image} alt="" fill sizes="(min-width: 640px) 50vw, 90vw" className="object-cover" />
                  </div>
                  <div>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
                      View service →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
