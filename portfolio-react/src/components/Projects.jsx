import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full-stack e-commerce application with product listings, shopping cart, and user authentication. React frontend connected to a PHP REST API backend.",
    image: "🛒",
    tags: ["React", "PHP", "MySQL"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Task Dashboard UI",
    description: "A clean task management dashboard with filters, status tracking, and a responsive layout. Focused on smooth interactions and component architecture.",
    image: "📋",
    tags: ["React", "CSS", "JavaScript"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Landing Page Template",
    description: "A multi-section responsive landing page with animations, smooth scroll, and mobile-first design. Demonstrates strong UI layout and component skills.",
    image: "🌐",
    tags: ["React", "CSS", "Animations"],
    github: "#",
    liveDemo: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="card card-hover overflow-hidden group">
      {/* Image Area */}
      <div className="h-48 flex items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-tertiary relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">{project.image}</span>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-secondary to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-lg">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>
        
        {/* Links */}
        <div className="flex gap-4">
          <a href={project.github} className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={project.liveDemo} className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg-primary relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container-main relative z-10">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span>Things I've Built</span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 bg-bg-secondary rounded-2xl border border-black/5 dark:border-white/10">
          <p className="text-base text-text-secondary">
            💡 <span className="font-medium text-text-primary">Full MERN stack projects coming soon</span> — backend integration in progress!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;