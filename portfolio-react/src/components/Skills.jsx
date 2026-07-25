// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPhp } from "react-icons/si";

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
    <section id="skills" className="section-padding bg-bg-secondary relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span>What I Work With</span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="section-title">My Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index * 0.08}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="card card-hover p-6 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-lg"
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
