import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8 bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1 text-center md:text-left animate-[fadeInUp_0.8s_ease_forwards]">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#22D3EE] mb-6 px-4 py-2 bg-[#22D3EE]/10 rounded-full">
            Available for freelance work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight mb-2">
            Hi, I'm <span className="text-[#22D3EE]">Kabita</span> Bhurtel
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-6">
            Full Stack Web Developer
          </p>
          <p className="text-base text-[#94A3B8] leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            I build modern web applications using the MERN stack — from responsive
            React frontends to Node.js/Express backends with MongoDB. Currently
            growing toward full MERN freelance work on Upwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <a 
              href="#projects" 
              className="inline-block px-8 py-[14px] text-sm font-semibold text-[#0F172A] bg-[#22D3EE] border-2 border-[#22D3EE] rounded-lg hover:bg-transparent hover:text-[#22D3EE] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-block px-8 py-[14px] text-sm font-semibold text-[#F8FAFC] bg-transparent border-2 border-[#94A3B8] rounded-lg hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1E293B] text-[#94A3B8] text-xl hover:bg-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1E293B] text-[#94A3B8] text-xl hover:bg-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1E293B] text-[#94A3B8] text-xl hover:bg-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#0891b2] flex items-center justify-center text-4xl md:text-5xl font-bold text-[#0F172A] z-10 shadow-[0_20px_60px_rgba(34,211,238,0.3)] animate-[float_4s_ease-in-out_infinite]">
              KB
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-72 md:h-72 border border-dashed border-[#22D3EE]/30 rounded-full animate-[spin_18s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border border-dashed border-[#22D3EE]/30 rounded-full animate-[spin_28s_linear_infinite_reverse]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;