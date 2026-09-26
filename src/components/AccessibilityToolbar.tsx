"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type FontSize = "normal" | "large" | "xlarge";
type Prefs = { fontsize: FontSize; contrast: boolean; motion: boolean };

const KEY = "can-a11y";
const EVENT = "can-a11y-change";
const defaults: Prefs = { fontsize: "normal", contrast: false, motion: false };

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): Prefs {
  if (!raw) return defaults;
  try {
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

function apply(p: Prefs) {
  const html = document.documentElement;
  if (p.fontsize === "normal") delete html.dataset.fontsize;
  else html.dataset.fontsize = p.fontsize;
  if (p.contrast) html.dataset.contrast = "high";
  else delete html.dataset.contrast;
  if (p.motion) html.dataset.motion = "reduced";
  else delete html.dataset.motion;
}

export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const prefs = parse(raw);

  useEffect(() => {
    apply(prefs);
  }, [prefs.fontsize, prefs.contrast, prefs.motion]); // eslint-disable-line react-hooks/exhaustive-deps

  function update(next: Partial<Prefs>) {
    const p = { ...prefs, ...next };
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility options"
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark"
      >
        <span className="sr-only">Accessibility options</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="1.5" fill="currentColor" />
          <path d="M4 8h16M12 8v6M12 14l-4 6M12 14l4 6" />
        </svg>
      </button>
      {open && (
        <div id="a11y-panel" className="mt-3 w-72 rounded-card border border-line bg-surface p-4 shadow-xl">
          <p className="mb-3 font-semibold">Display options</p>
          <fieldset className="mb-4">
            <legend className="mb-2 text-sm text-muted">Text size</legend>
            <div className="flex gap-2" role="group">
              {(["normal", "large", "xlarge"] as FontSize[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={prefs.fontsize === s}
                  onClick={() => update({ fontsize: s })}
                  className={`flex-1 rounded-lg border px-2 py-2 text-sm font-medium ${prefs.fontsize === s ? "border-primary bg-primary text-white" : "border-line hover:bg-surface-2"}`}
                >
                  {s === "normal" ? "A" : s === "large" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="mb-3 flex items-center justify-between gap-3">
            <span>High contrast</span>
            <input type="checkbox" className="h-5 w-5" checked={prefs.contrast} onChange={(e) => update({ contrast: e.target.checked })} />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>Reduce motion</span>
            <input type="checkbox" className="h-5 w-5" checked={prefs.motion} onChange={(e) => update({ motion: e.target.checked })} />
          </label>
        </div>
      )}
    </div>
  );
}
