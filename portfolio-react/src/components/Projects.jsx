import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUtensils,
  FaBlog,
  FaBolt,
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaPalette,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import blogging from "../assets/blogging.png";
import bites from "../assets/bites.png";
import electrical from "../assets/electrical.png";

import Parallax from "./Parallax";

/* =========================================================
   TECH ICONS
========================================================= */

const techIcons = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Mongoose: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
};

/* =========================================================
   FEATURE STRIP DATA
========================================================= */

const features = [
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Optimized for all devices",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Well-structured & maintainable",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description: "Fast loading & optimized",
  },
  {
    icon: FaPalette,
    title: "Modern UI/UX",
    description: "Beautiful & user-friendly",
  },
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "Bites",
    icon: FaUtensils,

    description:
      "A full-stack MERN restaurant application featuring menu browsing, reservations, cart functionality, user authentication, and an admin dashboard for managing restaurant operations.",

    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],

    status: "In Progress",

    github: "https://github.com/Kabita01-web/Bites",

    demo: "https://bites-frontend-kaal.onrender.com/",

    image: bites,
  },

  {
    title: "BlogNest",
    icon: FaBlog,

    description:
      "A full-stack MERN blogging platform with a custom editorial design, authentication, featured posts, categories, responsive navigation, and a rich text editor powered by TipTap.",

    tags: ["React", "Node.js", "Express", "MongoDB"],

    status: "In Progress",

    github: "https://github.com/Kabita01-web/Blogging",

    demo: "https://blogging1-6raa.onrender.com/",

    image: blogging,
  },

  {
    title: "Electric Shop",
    icon: FaBolt,

    description:
      "A responsive electronics shop frontend featuring product listings, category browsing, shopping cart interactions, and a modern responsive interface.",

    tags: ["React", "Tailwind CSS"],

    status: "Frontend Only",

    github: "https://github.com/Kabita01-web/electricals.git",

    demo: null,

    image: electrical,
  },
];

/* =========================================================
   STATUS STYLES
========================================================= */

const statusStyles = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400",

  "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",

  "Frontend Only": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   BROWSER + PHONE MOCKUP
========================================================= */

const BrowserMockup = ({ image, alt, title }) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Screenshot */}
      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
          bg-slate-100
          dark:bg-slate-900
        "
      >
        {image ? (
          <img
            src={image}
            alt={alt}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-top
              transition-transform
              duration-700
              group-hover:scale-[1.02]
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <div className="text-center">
              <FaBolt
                className="
                  mx-auto
                  mb-4
                  text-3xl
                  text-accent
                "
              />

              <p className="text-sm text-text-muted">
                Project preview coming soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.article
      custom={index * 0.12}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="group card card-hover overflow-hidden flex flex-col h-full"
    >
      {/* Screenshot */}
      <BrowserMockup
        image={project.image}
        alt={`${project.title} website screenshot`}
      />

      {/* Content */}
      <div className="p-6 pt-2 flex flex-col flex-1">
        {/* Title Row */}
        <div className="flex items-start gap-3 mb-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0">
            <Icon size={19} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {project.title}
              </h3>

              <span
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => {
            const TechIcon = techIcons[tag];

            return (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-bg-tertiary text-text-secondary rounded-lg border border-black/5 dark:border-white/10"
              >
                {TechIcon && <TechIcon size={12} />}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-black/5 dark:border-white/10 mb-4" />

        {/* Links */}
        <div className="flex items-center gap-5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <FaGithub size={15} />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-text-muted">
              <FaGithub size={15} />
              <span>Private</span>
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt size={12} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-bg-primary relative overflow-hidden"
    >
      {/* Background glow */}
      <Parallax
        speed={0.2}
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
      >
        <div className="w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
      </Parallax>

      <div className="container-main relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span>Things I've Built</span>
            <span className="w-8 h-[2px] bg-accent" />
          </div>

          <h2 className="section-title">Featured Projects</h2>

          <p className="max-w-2xl mx-auto mt-4 text-text-secondary leading-relaxed">
            Real-world projects built with modern technologies and best
            practices.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* FEATURE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 card px-6 py-8 sm:px-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-accent/10 text-accent shrink-0">
                    <FeatureIcon size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {feature.title}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
