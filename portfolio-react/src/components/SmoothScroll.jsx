import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Wrap your app (or just the scrollable page container) once, near the root.
 * This doesn't render any UI itself — it just replaces native scroll
 * physics with eased/inertial scrolling for everything inside it.
 *
 * Usage (e.g. in App.jsx):
 *   <SmoothScroll>
 *     <Navbar />
 *     <Hero />
 *     <About />
 *     ...
 *   </SmoothScroll>
 *
 * Respects prefers-reduced-motion by not initializing Lenis at all —
 * the page just falls back to normal native scrolling, which is the
 * correct behavior rather than a "reduced" version of eased scroll.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1, // lower = snappier, higher = floatier; 1.1 is a moderate middle
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Lenis' documented default easeOutExpo curve
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    let frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
