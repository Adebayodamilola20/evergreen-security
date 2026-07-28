"use client";

import { ReactNode } from "react";

/**
 * Card grid on desktop, snap carousel on phones. `cols` is the desktop
 * column count; below md the children always become swipeable cards.
 */
export default function SwipeRow({
  children,
  cols = 4,
  className = "",
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div className={`swipe-row swipe-row-${cols} ${className}`}>{children}</div>
  );
}

/** "Swipe →" affordance. Renders on mobile only (see .swipe-hint in CSS). */
export function SwipeHint({ className = "" }: { className?: string }) {
  return (
    <p className={`swipe-hint ${className}`}>
      Swipe
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
      </svg>
    </p>
  );
}
