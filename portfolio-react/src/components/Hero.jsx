import { motion } from "framer-motion";
import kabitaPhoto from "../assets/kabita.JPG";
import Magnetic from "./Magnetic";

// Single fadeUp used everywhere below. Note this uses whileInView, not
// animate="visible" — whileInView fires whenever the element enters the
// viewport, regardless of exactly when/how it mounted. animate="visible"
// only fires once, tied to mount timing, which is fragile when a parent
// like IntroScreen is controlling when this component actually mounts.
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { number: "3", label: "Projects Delivered" },
  { number: "100%", label: "On-Time Delivery" },
  { number: "Open", label: "For Freelance" },
];

const skillTags = ["React", "Node.js", "Express", "MongoDB"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg-primary px-4 pt-28 pb-20 md:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]"
      />

      <div className="container-main relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left column */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2"
            >
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-accent">
                Available for Work
              </span>
            </motion.div>

            {/* Heading — no more per-word splitting. Each line is one
                fadeUp block, staggered by delay like everything else.
                Simpler, and one less place for silent failures to hide. */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.1}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Hey, I&apos;m Kabita,
              <br />
              <span className="font-serif italic text-text-secondary">
                a Full-Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                MERN Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.2}
              className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
            >
              I build modern, responsive web applications using the MERN stack —
              crafting seamless frontend experiences with React and powerful
              backends with Node.js &amp; Express.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.3}
              className="mb-8 flex flex-wrap gap-2"
            >
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-accent"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.4}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="btn-primary group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                >
                  <span>View My Work</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="btn-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                >
                  Get In Touch
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            custom={0.15}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-black/5 shadow-2xl shadow-accent/10 dark:border-white/10">
              <img
                src={kabitaPhoto}
                alt="Kabita Bhurtel - Full Stack Developer"
                className="h-full w-full object-cover object-top"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/5 pt-6 dark:border-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  custom={0.25 + i * 0.1}
                >
                  <p className="text-xl font-bold text-accent md:text-2xl">
                    {stat.number}
                  </p>
                  <p className="text-xs leading-snug text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
