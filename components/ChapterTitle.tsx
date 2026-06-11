"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type ChapterTitleProps = {
  kicker: string;
  title: string;
  className?: string;
};

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Cinematic Kapitel-Headline: Kicker tippt ein, Titel schiebt sich
 * aus einer Maske nach oben, eine Linie zieht sich auf —
 * dazu leichtes Parallax beim Durchscrollen.
 */
export function ChapterTitle({ kicker, title, className = "" }: ChapterTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-2 md:gap-3 ${className}`}
      style={reduce ? undefined : { y }}
    >
      <motion.span
        className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]"
        initial={reduce ? false : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {kicker}
      </motion.span>

      <div className="overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          initial={reduce ? false : { y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        className="h-[3px] bg-gradient-to-r from-[#FF4D2D] to-transparent rounded-full mt-2 md:mt-3 origin-left"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        style={{ width: "min(14rem, 40%)" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
