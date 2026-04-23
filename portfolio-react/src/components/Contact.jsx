import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const socialLinks = [
    { icon: <FaEnvelope />, link: "mailto:kabita@email.com", label: "Email" },
    { icon: <FaGithub />, link: "https://github.com/Kabita01-web", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container-main relative z-10">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span>Let's Work Together</span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="section-title mb-4">
            Open to <span className="text-accent">Freelance</span> Projects
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Looking for web development work — React frontends, full MERN stack 
            builds, or anything in between. Let's create something great together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card p-8 mb-10">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required 
                  className="w-full px-4 py-3 text-base text-text-primary bg-bg-primary border-2 border-black/5 dark:border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required 
                  className="w-full px-4 py-3 text-base text-text-primary bg-bg-primary border-2 border-black/5 dark:border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
              <textarea name="message" placeholder="Tell me about your project..." rows="5" value={formData.message} onChange={handleChange} required 
                className="w-full px-4 py-3 text-base text-text-primary bg-bg-primary border-2 border-black/5 dark:border-white/10 rounded-xl outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] resize-none"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <FaPaperPlane />
                </span>
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm text-text-muted mb-4">Or connect with me on:</p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="flex items-center justify-center w-12 h-12 rounded-xl bg-bg-primary text-text-secondary border border-black/5 dark:border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;