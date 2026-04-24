"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function MagneticButton({ children, className, onClick, style }: Props) {
  const btnRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (isMobile.current) return;

    function onMouseMove(e: MouseEvent) {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < 80) {
        x.set(distX * 0.3);
        y.set(distY * 0.3);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    function onMouseLeave() {
      x.set(0);
      y.set(0);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={btnRef}
      style={{ x: springX, y: springY, display: "inline-flex", ...style }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
