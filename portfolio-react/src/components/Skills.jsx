import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPhp } from 'react-icons/si';

const skills = [
  {
    icon: <FaReact className="text-2xl" />,
    name: 'React',
    description: 'Building interactive UIs with components, hooks, and state management.',
    tags: ['useState', 'useEffect', 'JSX'],
  },
  {
    icon: <SiExpress className="text-2xl" />,
    name: 'Node & Express',
    description: 'REST API development, routing, middleware, and server-side logic.',
    tags: ['REST APIs', 'Middleware', 'JWT'],
  },
  {
    icon: <SiMongodb className="text-2xl" />,
    name: 'MongoDB',
    description: 'NoSQL database design with Mongoose schemas and queries.',
    tags: ['Mongoose', 'CRUD', 'Atlas'],
  },
  {
    icon: <SiPhp className="text-2xl" />,
    name: 'PHP',
    description: 'Backend development with PHP-powered APIs and web apps.',
    tags: ['Backend', 'APIs', 'MySQL'],
  },
  {
    icon: <FaHtml5 className="text-2xl" />,
    name: 'HTML & CSS',
    description: 'Semantic markup and responsive design with modern CSS.',
    tags: ['Flexbox', 'Grid', 'Responsive'],
  },
  {
    icon: <FaJs className="text-2xl" />,
    name: 'JavaScript',
    description: 'ES6+, async/await, fetch API, and DOM manipulation.',
    tags: ['ES6+', 'Async/Await', 'fetch()'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-[#1E293B]">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#22D3EE] mb-4">
          What I Work With
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-8">
          My Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-[#0F172A] p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)] hover:border-[#22D3EE]/30"
            >
              <div className="text-[#22D3EE] mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">{skill.name}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 bg-[#22D3EE]/10 text-[#22D3EE] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;