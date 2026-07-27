import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const message = "Welcome to my Portfolio";
const letters = message.split("");

const letterContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
};
const letterItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Wrap your whole app in this at the root (App.jsx).
 *
 * Sequencing: `children` (Hero, Navbar, etc.) are NOT mounted until the
 * overlay's exit animation has FULLY finished — via AnimatePresence's
 * onExitComplete callback, not a manually-guessed timeout. This means
 * Hero's own entrance animation starts only once the black screen is
 * completely gone, rather than overlapping with its fade-out.
 *
 * Usage:
 *   <IntroScreen>
 *     <Navbar />
 *     <Hero />
 *     ...
 *   </IntroScreen>
 */
export default function IntroScreen({ children }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [contentMounted, setContentMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const holdTime = shouldReduceMotion ? 400 : 2400;
    const timer = setTimeout(() => setOverlayVisible(false), holdTime);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    document.body.style.overflow = overlayVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayVisible]);

  return (
    <>
      <AnimatePresence onExitComplete={() => setContentMounted(true)}>
        {overlayVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black px-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]"
            />

            <div className="relative flex flex-col items-center">
              <motion.h1
                variants={shouldReduceMotion ? undefined : letterContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center text-center font-[Poppins,sans-serif] text-3xl font-black uppercase tracking-wide text-white sm:text-5xl md:text-6xl"
              >
                {letters.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={
                      shouldReduceMotion
                        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                        : letterItem
                    }
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: shouldReduceMotion ? 0.1 : 1.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 h-[2px] w-24 origin-center bg-gradient-to-r from-transparent via-white to-transparent sm:w-32"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {contentMounted && children}
    </>
  );
}
