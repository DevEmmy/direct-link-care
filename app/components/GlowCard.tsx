import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function GlowCard({
  children,
  className = "p-6",
  delay,
  y,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <Reveal
      delay={delay}
      y={y}
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand/25 blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-brand/20 blur-2xl"
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </Reveal>
  );
}
