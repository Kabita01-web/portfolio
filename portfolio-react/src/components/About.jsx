const stats = [
  { number: '3+', label: 'Projects Completed' },
  { number: 'MERN', label: 'Tech Stack' },
  { number: 'Open', label: 'To Work' },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#22D3EE] mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-6">
            Building Modern Web <span className="text-[#22D3EE]">Experiences</span>
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed mb-4">
            I'm a Full Stack Web Developer specializing in the MERN stack (MongoDB,
            Express.js, React, Node.js). I love creating responsive, user-friendly
            web applications that solve real problems.
          </p>
          <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
            Currently, I'm focused on building my freelance career on Upwork, 
            working on exciting projects with clients worldwide. I'm always eager
            to learn new technologies and take on challenging tasks.
          </p>
          <div className="flex gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-bold text-[#22D3EE] leading-none">{stat.number}</span>
                <span className="text-sm text-[#94A3B8] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#1E293B] p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)] hover:border-[#22D3EE]/30">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Mission</h3>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Deliver high-quality web solutions that exceed client expectations and provide exceptional user experiences.
            </p>
          </div>
          <div className="bg-[#1E293B] p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)] hover:border-[#22D3EE]/30">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Approach</h3>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Clean code, modern design patterns, and responsive development are at the core of every project I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;