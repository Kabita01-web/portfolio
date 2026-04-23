import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5">
      <div className="container-main">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" onClick={closeMenu} className="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-300">
            KB
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={closeMenu} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="flex items-center justify-center w-10 h-10 rounded-xl bg-bg-secondary text-text-primary hover:text-accent border border-black/5 dark:border-white/10 hover:border-accent transition-all duration-300" aria-label="Toggle theme">
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-bg-secondary text-text-primary" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-black/5 dark:border-white/5 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="container-main py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={closeMenu} className="block py-3 px-4 text-base font-medium text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-xl transition-all duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;