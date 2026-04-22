import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors duration-300"
          onClick={closeMenu}
        >
          KB
        </a>

        <ul
          className={`md:flex gap-10 ${isOpen ? "flex flex-col absolute top-[60px] left-0 right-0 bg-[#1E293B] p-0 gap-0" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`block md:inline-block py-3 md:py-0 px-6 md:px-0 text-sm font-medium text-[#94A3B8] hover:text-[#22D3EE] transition-all duration-300 relative ${isOpen ? "border-b border-white/5" : ""}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#22D3EE] transition-all duration-300 hover:w-full hidden md:block"></span>
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden bg-none border-none text-[#F8FAFC] cursor-pointer p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
