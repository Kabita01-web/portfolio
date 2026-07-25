import { motion } from "framer-motion";

const stats = [
  { number: "3", label: "Projects Delivered", icon: "🚀" },
  { number: "100%", label: "On-Time Delivery", icon: "⏰" },
  { number: "Open", label: "For Freelance", icon: "💼" },
];

const featureCards = [
  {
    icon: "🎯",
    title: "What I Do",
    description:
      "Full-stack MERN development. I take your idea and turn it into a working web app — from polished React UIs to Node.js APIs and MongoDB databases.",
  },
  {
    icon: "⚡",
    title: "How I Work",
    description:
      "Clean code, daily updates, and zero ghosting. I believe in building trust through transparency and delivering quality work on time.",
  },
  {
    icon: "🌟",
    title: "What I'm Looking For",
    description:
      "Freelance projects where I can make a real impact. Whether it's a startup MVP or a business tool, I'm here to build something great.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-bg-primary">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]"
      />

      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">
              <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
              About Me
            </div>
            <h2 className="section-title mb-6">
              Building Modern Web{" "}
              <span className="text-accent">Experiences</span>
            </h2>

            {/* Two short paragraphs — readable and personal */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                I'm Kabita — a full-stack developer who turns ideas into working
                software. I specialize in the{" "}
                <span className="font-medium text-accent">MERN stack</span>,
                building everything from polished React interfaces to robust
                Node.js backends.
              </p>
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                I got into development because I saw how many small businesses
                were stuck with outdated websites. Now I help them go digital —
                building tools that actually solve real problems.
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-5 border-t border-black/5 pt-8 dark:border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-2xl">
                    {stat.icon}
                  </span>
                  <div>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl font-bold text-accent">
                      {stat.number}
                    </dd>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <div className="flex flex-col gap-5">
            {featureCards.map(({ icon, title, description }, index) => (
              <motion.div
                key={title}
                custom={index * 0.1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="card card-hover p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                    {icon}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-text-primary">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
