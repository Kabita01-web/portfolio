import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Wraps an element so it moves at a different vertical speed than normal
 * scroll — the "depth" effect. Best on decorative elements (background
 * blobs, images), not on text or interactive content, since offsetting
 * text from its container looks broken rather than intentional.
 *
 * Usage:
 *   <Parallax speed={0.3}>
 *     <div className="absolute ... bg-accent/5 blur-[150px]" />
 *   </Parallax>
 *
 * speed: 0 = no movement (locked to normal scroll), 0.5 = moves at half
 * the page's scroll speed (drifts up as you scroll down), negative values
 * drift the opposite direction.
 */
export default function Parallax({ children, speed = 0.3, className }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0→1 as the element crosses the viewport) to a
  // vertical offset. Range is deliberately modest (±80px at speed=1) —
  // large parallax shifts feel gimmicky rather than subtle.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-80 * speed}px`, `${80 * speed}px`],
  );

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? undefined : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
