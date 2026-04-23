import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-bg-secondary border-t border-black/5 dark:border-white/10">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary">
              © {currentYear} <span className="font-semibold text-text-primary">Kabita Bhurtel</span>. All rights reserved.
            </p>
            <p className="text-xs text-text-muted mt-1">
              Full Stack Developer · MERN Stack
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a href="https://github.com/Kabita01-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-primary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-primary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-primary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;