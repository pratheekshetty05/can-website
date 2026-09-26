import Link from "next/link";

export function StickyCTA() {
  return (
    <Link
      href="/for-professionals#refer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
    >
      Refer a child
      <span aria-hidden="true">→</span>
    </Link>
  );
}
