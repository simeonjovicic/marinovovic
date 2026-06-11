"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Verschiebung in px über den gesamten Scroll-Bereich (negativ = nach oben). */
  amount?: number;
};

/**
 * Sanfter Parallax-Wrapper: verschiebt Kinder relativ zur
 * Scroll-Position des Elements im Viewport.
 */
export function Parallax({ children, className, amount = -40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount * -1, amount]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
