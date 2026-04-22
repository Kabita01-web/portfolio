import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Web App',
    description: 'A full-stack e-commerce application with product listings, shopping cart, and user authentication. React frontend connected to a PHP REST API backend.',
    image: '🛒',
    tags: ['React', 'PHP', 'MySQL'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Task Dashboard UI',
    description: 'A clean task management dashboard with filters, status tracking, and a responsive layout. Focused on smooth interactions and component architecture.',
    image: '📋',
    tags: ['React', 'CSS', 'JavaScript'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Landing Page Template',
    description: 'A multi-section responsive landing page with animations, smooth scroll, and mobile-first design. Demonstrates strong UI layout and component skills.',
    image: '🌐',
    tags: ['React', 'CSS', 'Animations'],
    github: '#',
    liveDemo: '#',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] hover:border-[#22D3EE]/30">
      <div className="h-44 flex items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#334155]">
        <span className="text-6xl">{project.image}</span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-semibold px-3 py-1 bg-[#22D3EE]/10 text-[#22D3EE] rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">{project.title}</h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.liveDemo}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#22D3EE] mb-4">
          Things I've Built
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-8">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className="text-center mt-12 text-base text-[#94A3B8] italic">
          💡 Full MERN stack projects coming soon — backend integration in progress!
        </p>
      </div>
    </section>
  );
};

export default Projects;