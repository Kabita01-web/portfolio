import { motion, useReducedMotion } from "framer-motion";

/**
 * Wrap any section (or element inside one) to have it fade/slide in once
 * it scrolls into view. This is the "consistent motion language across
 * pages" piece — the toned-down alternative to full scroll-scrubbing:
 * it fires once per element, no scroll-position tracking, no pinning.
 *
 * Usage:
 *   <Reveal><h2>About</h2></Reveal>
 *   <Reveal delay={0.1}><p>...</p></Reveal>
 *
 * For a group of children that should stagger in together, use
 * <Reveal stagger> as the parent and <Reveal.Item> for each child —
 * see the RevealGroup example below.
 */
export default function Reveal({
  children,
  as: Tag = motion.div,
  delay = 0,
  y = 20,
  className,
  once = true,
  amount = 0.3,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Tag
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/**
 * For a row/grid of items (project cards, skill badges, etc.) that should
 * stagger in together rather than each independently re-triggering its
 * own viewport check. Wrap the container in <RevealGroup>, each child in
 * <RevealGroup.Item>.
 *
 * Usage:
 *   <RevealGroup className="grid grid-cols-3 gap-6">
 *     {items.map((item) => (
 *       <RevealGroup.Item key={item.id}>...</RevealGroup.Item>
 *     ))}
 *   </RevealGroup>
 */
const groupContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const groupItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function RevealGroup({
  children,
  className,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      variants={groupContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

RevealGroup.Item = function RevealGroupItem({ children, className }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={
        shouldReduceMotion
          ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
          : groupItem
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};
