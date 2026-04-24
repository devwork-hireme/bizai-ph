"use client";

import { useRef, RefObject } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface Props {
  sectionRef: RefObject<HTMLElement | null>;
  card1Ref: RefObject<HTMLDivElement | null>;
  card2Ref: RefObject<HTMLDivElement | null>;
  card3Ref: RefObject<HTMLDivElement | null>;
  card4Ref: RefObject<HTMLDivElement | null>;
}

function SpineNode({
  label,
  cardRef,
}: {
  label: string;
  cardRef: RefObject<HTMLDivElement | null>;
}) {
  const inView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      animate={
        inView
          ? {
              borderColor: "#e8b84b",
              background: "rgba(232,184,75,0.08)",
              boxShadow: "0 0 24px rgba(232,184,75,0.2)",
              scale: 1,
            }
          : {
              borderColor: "rgba(232,184,75,0.25)",
              background: "#181818",
              boxShadow: "none",
              scale: 0.9,
            }
      }
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "2px solid rgba(232,184,75,0.25)",
        background: "#181818",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        zIndex: 2,
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          color: "#e8b84b",
          letterSpacing: "2px",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function RoadmapSpine({ sectionRef, card1Ref, card2Ref, card3Ref, card4Ref }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="roadmap-spine"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "0",
      }}
    >
      {/* Animated vertical line */}
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "2px",
          background: "linear-gradient(to bottom, #e8b84b, rgba(232,184,75,0.2))",
          transformOrigin: "top",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, #e8b84b, rgba(232,184,75,0.2))",
            scaleY,
            transformOrigin: "top",
          }}
        />
      </div>

      {/* Nodes + UNLOCKS connectors */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          padding: "22px 0",
        }}
      >
        <SpineNode label="01" cardRef={card1Ref} />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "8px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#888480",
            transform: "rotate(90deg)",
            whiteSpace: "nowrap",
          }}
        >
          UNLOCKS
        </span>
        <SpineNode label="02" cardRef={card2Ref} />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "8px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#888480",
            transform: "rotate(90deg)",
            whiteSpace: "nowrap",
          }}
        >
          UNLOCKS
        </span>
        <SpineNode label="03" cardRef={card3Ref} />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "8px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#888480",
            transform: "rotate(90deg)",
            whiteSpace: "nowrap",
          }}
        >
          UNLOCKS
        </span>
        <SpineNode label="04" cardRef={card4Ref} />
      </div>
    </div>
  );
}
