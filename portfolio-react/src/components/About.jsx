const stats = [
  { number: "3+", label: "Projects Completed", icon: "🚀" },
  { number: "MERN", label: "Tech Stack", icon: "⚛️" },
  { number: "Open", label: "To Work", icon: "💼" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-primary relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <div className="section-label">
              <span className="w-8 h-[2px] bg-accent"></span>
              About Me
            </div>
            <h2 className="section-title mb-6">
              Building Modern Web{" "}
              <span className="text-accent">Experiences</span>
            </h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I'm a Full Stack Web Developer specializing in the MERN stack
                (MongoDB, Express.js, React, Node.js). I love creating
                responsive, user-friendly web applications that solve real
                problems.
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I'm actively building my freelance career and open to working
                with clients worldwide — whether through freelance platforms or
                direct collaboration. I'm always eager to learn new technologies
                and take on challenging projects.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8 mt-8 border-t border-black/5 dark:border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <span className="text-2xl font-bold text-accent">
                      {stat.number}
                    </span>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex flex-col gap-5">
            <div className="card card-hover p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Mission
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Deliver high-quality web solutions that exceed client
                    expectations and provide exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-hover p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                  💡
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Approach
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Clean code, modern design patterns, and responsive
                    development are at the core of every project I build.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-hover p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                  🌟
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Vision
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    To become a sought-after MERN stack developer, creating
                    impactful web solutions for businesses globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
