export type IconKind = "search" | "book" | "heart" | "sprout" | "people" | "chalkboard" | "clipboard" | "home" | "fee";

const iconPaths: Record<IconKind, string> = {
  search: "M21 21l-4.3-4.3M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13ZM4 19.5V6.5M20 17H6.5a2.5 2.5 0 0 0 0 5H20",
  heart: "M12 21s-7.5-4.6-10-9.3C.5 8.2 2.4 5 6 5c2 0 3.5 1.1 4.5 2.4C11.5 6.1 13 5 15 5c3.6 0 5.5 3.2 4 6.7C19.5 16.4 12 21 12 21Z",
  sprout: "M12 21v-7m0 0c0-4 3-7 7-7-1 4-3 7-7 7Zm0 0C12 10 9 7 5 7c1 4 3 7 7 7Z",
  people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21c0-3.3 2.7-6 6-6s6 2.7 6 6M12 21c0-2.5 1.8-4.6 4.2-5.4A5.5 5.5 0 0 1 22 21",
  chalkboard: "M3 4h18v12H3V4Zm7 12-2 5m4-5 2 5M9 20h6",
  clipboard: "M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1ZM6 7h12v13H6V7Zm3 5h6m-6 4h6",
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  fee: "M12 2v20M17 6.5c0-1.9-2.2-3.5-5-3.5S7 4.6 7 6.5 9.2 9.5 12 9.5s5 1.1 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5",
};

export function Icon({ kind, className = "" }: { kind: IconKind; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={iconPaths[kind]} />
    </svg>
  );
}
