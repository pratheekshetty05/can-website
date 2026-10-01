/** Simple illustrated cloud puff, reused across sky scenes (hero, flight path). */
export function CloudShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={`h-auto w-full ${className}`} aria-hidden="true">
      <ellipse cx="30" cy="38" rx="28" ry="18" fill="var(--color-surface)" />
      <ellipse cx="60" cy="28" rx="32" ry="22" fill="var(--color-surface)" />
      <ellipse cx="90" cy="38" rx="24" ry="16" fill="var(--color-surface)" />
    </svg>
  );
}
