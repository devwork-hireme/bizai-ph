"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface Props {
  value: number;
  suffix: string;
  duration?: number;
}

export default function AnimatedStat({ value, suffix, duration = 1.5 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, color: "#e8b84b" }}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
