"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  duration = 1.4,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\d+)(.*)$/);

  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!isInView || !match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const start = performance.now();
    const durationMs = duration * 1000;
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return <span ref={ref}>{display}</span>;
}
