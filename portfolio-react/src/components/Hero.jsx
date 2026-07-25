import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import kabitaPhoto from "../assets/kabita.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 bg-bg-primary relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="container-main grid md:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">
              Available for Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Kabita
            </span>{" "}
            Bhurtel
          </motion.h1>

          {/* Role Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary border border-black/5 dark:border-white/10 mb-6"
          >
            <span className="text-xl">⚛️</span>
            <span className="text-base font-medium text-text-primary">
              Full Stack Web Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto md:mx-0 mb-8"
          >
            I build modern, responsive web applications using the MERN stack —
            crafting seamless frontend experiences with React and powerful
            backends with Node.js & Express.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          >
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <svg
                className="w-4 h-4"
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
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex items-center gap-4 justify-center md:justify-start"
          >
            <span className="text-sm text-text-muted">Connect:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Kabita01-web"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-secondary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-secondary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-secondary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Image Section */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-3xl blur-2xl scale-90"></div>

            {/* Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border border-accent/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-accent/15 animate-[spin_25s_linear_infinite]"></div>

            {/* Main Image Container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 border-4 border-white dark:border-white/10">
              <img
                src={kabitaPhoto}
                alt="Kabita Bhurtel - Full Stack Developer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Skill Badges */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-4 md:-left-6 top-1/4 card p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <FaCode className="text-lg" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">
                    React
                  </p>
                  <p className="text-[10px] text-text-muted">Frontend</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -right-3 md:-right-5 bottom-1/3 card p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <FaServer className="text-lg" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">
                    Node.js
                  </p>
                  <p className="text-[10px] text-text-muted">Backend</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-3 md:-bottom-4 left-1/4 card p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <FaDatabase className="text-lg" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">
                    MongoDB
                  </p>
                  <p className="text-[10px] text-text-muted">Database</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
