"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";

/* =================================================================
   Hero-Hintergrund:
   - unendlich scrollendes Grid (sehr leise)
   - mehr Grid-Linien, die unter der Maus durchscheinen
   - Blur-Schicht überall, die NUR an der Mausposition wegfällt
     → Spotlight-Reveal-Effekt
   - drei weiche Farb-Glows
   ================================================================= */
export function InfiniteGridBg({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  /** Reveal-Maske für die helle Grid-Schicht:
   *  sichtbar (schwarz) an der Maus, transparent weiter weg. */
  const revealMask = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  /** Blur-Maske – INVERS:
   *  transparent an der Maus (= kein Blur dort), schwarz im Rest (= Blur aktiv). */
  const blurMask = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, transparent 0%, black 70%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`pointer-events-auto absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* schwach sichtbares Grid (Basis) */}
      <div className="absolute inset-0 z-0 opacity-[0.18]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* helleres Grid, das nur dort durchscheint, wo die Maus ist */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-60"
        style={{ maskImage: revealMask, WebkitMaskImage: revealMask }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Ambient-Glows */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute right-[-15%] top-[-25%] w-[45%] h-[45%] rounded-full bg-orange-400/30 blur-[120px]" />
        <div className="absolute right-[15%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute left-[-15%] bottom-[-25%] w-[45%] h-[45%] rounded-full bg-sky-400/35 blur-[120px]" />
      </div>

      {/* Blur-Schicht — alles dahinter unscharf, außer an der Maus */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maskImage: blurMask,
          WebkitMaskImage: blurMask,
        }}
      />
    </div>
  );
}

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
