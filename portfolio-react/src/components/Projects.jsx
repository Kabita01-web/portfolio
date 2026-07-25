import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// TODO: import your real screenshots once added to src/assets/
// import bitesImg from "../assets/bites-screenshot.png";
// import blognestImg from "../assets/blognest-screenshot.png";
// import electricShopImg from "../assets/electric-shop-screenshot.png";

const projects = [
  {
    title: "Bites",
    description:
      "Full-stack MERN restaurant application. Built a MongoDB-backed menu system (migrated from static JSON), a reservation system with conflict-safe booking, an admin dashboard for managing reservations, and email confirmations via Nodemailer. Cart/ordering flow is in active development.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    status: "In Progress",
    github: "https://github.com/Kabita01-web/Bites", // confirm this is correct
    demo: null, // TODO: add live demo URL if deployed
    image: null, // TODO: bitesImg
  },
  {
    title: "BlogNest",
    description:
      "Full-stack MERN blogging platform with a custom editorial UI. Built authentication flows, a homepage with featured-post layout, a responsive navbar with active-link behavior, and a rich text editor using TipTap. Currently fixing CORS configuration ahead of deployment.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TipTap"],
    status: "In Progress",
    github: "https://github.com/Kabita01-web/Blogging", // confirm this is correct
    demo: null, // TODO: add live demo URL once deployed to Render
    image: null, // TODO: blognestImg
  },
  {
    title: "Electric Shop", // TODO: confirm real project name
    description:
      "Frontend for an electronics e-commerce concept — product listings, cart UI, and responsive layout.", // TODO: replace with accurate description
    tags: ["React"], // TODO: confirm actual tags
    status: "Frontend Only",
    github: null, // TODO: add repo URL
    demo: null, // TODO: add live demo URL if any
    image: null, // TODO: electricShopImg
  },
];

const statusStyles = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400",
  "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Frontend Only": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg-primary relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

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
            <span>Things I've Built</span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index * 0.1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="card card-hover overflow-hidden flex flex-col"
            >
              {/* Screenshot area */}
              <div className="aspect-video bg-bg-secondary flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm text-text-muted px-4 text-center">
                    Screenshot coming soon
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-text-muted">
                      <FaGithub /> Private
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
