import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: <FaEnvelope />, link: 'mailto:kabita@email.com', label: 'Email' },
    { icon: <FaGithub />, link: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, link: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-[#1E293B] text-center">
      <div className="max-w-[800px] mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#22D3EE] mb-4">
          Let's Work Together
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] leading-tight mb-4">
          Open to <span className="text-[#22D3EE]">Freelance</span> Projects
        </h2>
        <p className="text-base text-[#94A3B8] leading-relaxed mb-12 max-w-lg mx-auto">
          Looking for web development work — React frontends, full MERN stack
          builds, or anything in between. Let's create something great together.
        </p>

        <form className="max-w-md mx-auto mb-10" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-base text-[#F8FAFC] bg-[#0F172A] border-2 border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-[#64748B] focus:border-[#22D3EE] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.1)]"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-base text-[#F8FAFC] bg-[#0F172A] border-2 border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-[#64748B] focus:border-[#22D3EE] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.1)]"
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-base text-[#F8FAFC] bg-[#0F172A] border-2 border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-[#64748B] focus:border-[#22D3EE] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.1)] resize-none min-h-[140px]"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full px-8 py-4 text-base font-semibold text-[#0F172A] bg-[#22D3EE] border-none rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#06b6d4] hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(34,211,238,0.3)]"
          >
            Send Message
          </button>
        </form>

        <div>
          <p className="text-sm text-[#94A3B8] mb-4">Or connect with me on:</p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0F172A] text-[#94A3B8] text-xl border border-white/10 transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#0F172A] hover:border-[#22D3EE] hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;