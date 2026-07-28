// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-2xl" />,
    name: "React",
    description: "Building auth-aware UIs and rich editing experiences.",
    tags: ["Auth Flows", "TipTap Editor", "Route Guards"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <SiExpress className="text-2xl" />,
    name: "Node & Express",
    description: "REST APIs, middleware, and server-side email delivery.",
    tags: ["Middleware", "Nodemailer/SMTP", "Cookie-based Auth"],
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <SiMongodb className="text-2xl" />,
    name: "MongoDB",
    description: "Schema design for real-world constraints, not just CRUD.",
    tags: ["Mongoose Schemas", "Partial Unique Index", "Migrations"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <FaHtml5 className="text-2xl" />,
    name: "HTML & CSS",
    description: "Semantic markup and responsive, editorial-quality layout.",
    tags: ["Responsive Design", "Typography Systems", "Tailwind"],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: <FaJs className="text-2xl" />,
    name: "JavaScript",
    description: "Debugging real production issues, not just writing syntax.",
    tags: ["CORS Debugging", "ESM Timing Bugs", "Async Flows"],
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: <SiTailwindcss className="text-2xl" />,
    name: "Tailwind Css",
    description: "Utility-first styling for fast, consistent UI development.",
    tags: ["Responsive Utilities", "Custom Themes", "JIT Compiler"],
    color: "from-sky-400 to-cyan-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-bg-secondary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[80px]"
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="section-label mb-4 justify-center">
            <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
            <span>What I Work With</span>
            <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
          </div>
          <h2 className="section-title">My Tech Stack</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index * 0.08}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="card card-hover group p-6 transition-shadow duration-300 hover:shadow-xl md:p-7"
            >
              <div
                aria-hidden="true"
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-text-primary">
                {skill.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors duration-300 group-hover:bg-accent/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
