import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-[#0F172A] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-[#94A3B8]">
            © {currentYear} Kabita Bhurtel. All rights reserved.
          </p>
          <p className="text-xs text-[#64748B] mt-1">
            Full Stack Developer · MERN Stack
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B] text-[#94A3B8] text-lg transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#0F172A] hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B] text-[#94A3B8] text-lg transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#0F172A] hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B] text-[#94A3B8] text-lg transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#0F172A] hover:-translate-y-1"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;