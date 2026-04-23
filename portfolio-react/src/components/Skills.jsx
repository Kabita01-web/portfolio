import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPhp } from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-2xl" />,
    name: "React",
    description: "Building interactive UIs with components, hooks, and state management.",
    tags: ["useState", "useEffect", "JSX"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <SiExpress className="text-2xl" />,
    name: "Node & Express",
    description: "REST API development, routing, middleware, and server-side logic.",
    tags: ["REST APIs", "Middleware", "JWT"],
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <SiMongodb className="text-2xl" />,
    name: "MongoDB",
    description: "NoSQL database design with Mongoose schemas and queries.",
    tags: ["Mongoose", "CRUD", "Atlas"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <SiPhp className="text-2xl" />,
    name: "PHP",
    description: "Backend development with PHP-powered APIs and web apps.",
    tags: ["Backend", "APIs", "MySQL"],
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: <FaHtml5 className="text-2xl" />,
    name: "HTML & CSS",
    description: "Semantic markup and responsive design with modern CSS.",
    tags: ["Flexbox", "Grid", "Tailwind"],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: <FaJs className="text-2xl" />,
    name: "JavaScript",
    description: "ES6+, async/await, fetch API, and DOM manipulation.",
    tags: ["ES6+", "Async/Await", "fetch()"],
    color: "from-yellow-400 to-amber-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container-main relative z-10">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span>What I Work With</span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="section-title">My Tech Stack</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card card-hover p-6 group"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {skill.description}
              </p>
              
              {/* Tags */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;