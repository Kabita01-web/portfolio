import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import kabitaPhoto from "../assets/kabita.JPG";
import Magnetic from "./Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skillBadges = [
  {
    label: "React",
    Icon: FaCode,
    position: "absolute -left-4 md:-left-8 top-1/4",
    delay: 0.9,
  },
  {
    label: "Node.js",
    Icon: FaServer,
    position: "absolute -right-3 md:-right-7 bottom-1/3",
    delay: 1.05,
  },
  {
    label: "MongoDB",
    Icon: FaDatabase,
    position: "absolute -bottom-3 md:-bottom-5 left-1/4",
    delay: 1.2,
  },
];

const AboutMeIntro = () => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  // Cursor-following tilt: raw mouse position → spring-smoothed →
  // mapped to a small rotation range. Springs make the tilt settle
  // naturally instead of snapping directly to the cursor.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about-intro"
      className="relative overflow-hidden bg-bg-primary px-4 py-24 md:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]"
      />

      <div className="container-main relative z-10 grid items-center gap-14 md:grid-cols-2 md:gap-16">
        {/* Left — bio + CTAs */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="section-label"
          >
            <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
            About Me
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.1}
            className="mb-6 text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl"
          >
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Working Software
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.2}
            className="mb-4 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
          >
            I'm Kabita — a full-stack developer who turns ideas into working
            software. I specialize in the{" "}
            <span className="font-medium text-accent">MERN stack</span>,
            building everything from polished React interfaces to robust Node.js
            backends.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.3}
            className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
          >
            I got into development because I saw how many small businesses were
            stuck with outdated websites. Now I help them go digital — building
            tools that actually solve real problems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.4}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic>
              {/* TODO: add your real resume file to /public/resume.pdf
                  for this to actually download something */}
              <a
                href="/resume.pdf"
                download
                className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              >
                Download CV
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                className="btn-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              >
                View Projects
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right — photo with cursor tilt, floating badges, rotating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex justify-center"
        >
          <div className="relative" style={{ perspective: 1000 }}>
            {/* Slowly rotating dashed ring behind the photo */}
            <div
              aria-hidden="true"
              className={`absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/20 md:h-80 md:w-80 ${
                shouldReduceMotion ? "" : "animate-[spin_30s_linear_infinite]"
              }`}
            />

            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={
                shouldReduceMotion
                  ? undefined
                  : { rotateX, rotateY, transformStyle: "preserve-3d" }
              }
              className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-accent/20 dark:border-white/10 md:h-80 md:w-80"
            >
              <img
                src={kabitaPhoto}
                alt="Kabita Bhurtel - Full Stack Developer"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              />
            </motion.div>

            {/* Floating skill badges — gentle up/down loop via CSS animation,
                staggered entrance via Framer Motion */}
            {skillBadges.map(({ label, Icon, position, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className={`card ${position} ${shouldReduceMotion ? "" : "animate-float"} p-3 shadow-lg`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon aria-hidden="true" className="text-base" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeIntro;
