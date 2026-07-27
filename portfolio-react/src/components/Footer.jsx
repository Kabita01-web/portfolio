import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-black/5 bg-bg-secondary py-10 dark:border-white/10">
      <div className="container-main">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary">
              © {currentYear}{" "}
              <span className="font-semibold text-text-primary">
                Kabita Bhurtel
              </span>
              . Crafted with React & Tailwind CSS.
            </p>

            <p className="mt-2 text-sm text-text-muted">
              MERN Stack Developer • Building modern web experiences.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kabita01-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-bg-primary text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-bg-primary text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://twitter.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-bg-primary text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10"
            >
              <FaTwitter size={18} />
            </a>

            {/* Back to Top — the one Footer element that behaves like a
                primary CTA, so it's the natural spot for the magnetic pull */}
            <Magnetic strength={0.25}>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="ml-2 flex items-center gap-2 rounded-full border border-black/5 bg-bg-primary px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10"
              >
                <ArrowUp size={16} />
                <span className="hidden sm:inline">Top</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
