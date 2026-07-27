import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🎯",
    title: "What I Do",
    description: "Full-stack MERN development, end to end.",
  },
  {
    icon: "⚡",
    title: "How I Work",
    description: "Clean code, daily updates, zero ghosting.",
  },
  {
    icon: "🌟",
    title: "Looking For",
    description: "Freelance projects with real impact.",
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Sits between <Hero /> and <About /> as its own section — About.jsx is
 * untouched. Usage:
 *
 *   <Hero />
 *   <Highlights />
 *   <About />
 */
const Highlights = () => {
  return (
    <section className="relative bg-bg-primary px-4 py-14 md:px-8">
      <div className="container-main">
        <div className="grid gap-5 sm:grid-cols-3">
          {highlights.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index * 0.12}
              className="card card-hover flex items-center gap-4 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                {icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
