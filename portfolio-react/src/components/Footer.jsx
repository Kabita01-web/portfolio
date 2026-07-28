import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { ArrowUp, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Kabita01-web",
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://linkedin.com/in/YOUR-LINKEDIN",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "https://twitter.com/YOUR_USERNAME",
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      icon: <FaEnvelope size={18} />,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:bg-[#EA4335]",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={footerVariants}
      className="relative mt-20 border-t border-black/5 bg-bg-secondary py-10 dark:border-white/10"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]"
      />

      <div className="container-main relative z-10">
        {/* Let's Work Together Section */}
        <motion.div
          variants={itemVariants}
          custom={0}
          className="mb-10 rounded-2xl border border-black/5 bg-gradient-to-br from-accent/5 to-accent/10 p-8 text-center dark:border-white/5"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={show ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center rounded-full bg-accent/20 p-3 mb-4"
          >
            <Sparkles className="h-6 w-6 text-accent" />
          </motion.div>

          <motion.h3
            variants={itemVariants}
            custom={0.1}
            className="text-2xl font-bold text-text-primary sm:text-3xl"
          >
            Let's Build Something <span className="text-accent">Amazing</span>
          </motion.h3>

          <motion.p
            variants={itemVariants}
            custom={0.2}
            className="mx-auto mt-2 max-w-lg text-text-secondary"
          >
            Have a project in mind? Let's collaborate and bring your ideas to
            life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            custom={0.3}
            className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                <span>Start a Project</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="mailto:your.email@example.com"
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-6 py-3 font-medium text-text-primary transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent dark:border-white/10 dark:bg-bg-primary/50"
              >
                <FaEnvelope className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Email Me</span>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <motion.div
            variants={itemVariants}
            custom={0.4}
            className="text-center sm:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-sm text-text-secondary"
            >
              © {currentYear}{" "}
              <span className="font-semibold text-text-primary">
                Kabita Bhurtel
              </span>
              . Crafted with ❤️ using React & Tailwind CSS.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mt-2 text-sm text-text-muted"
            >
              MERN Stack Developer • Building modern web experiences.
            </motion.p>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={itemVariants}
            custom={0.5}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  y: -4,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-bg-primary text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10`}
              >
                {social.icon}
              </motion.a>
            ))}

            {/* Back to Top Button */}
            <Magnetic strength={0.3}>
              <motion.button
                onClick={scrollToTop}
                aria-label="Back to top"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 flex items-center gap-2 rounded-full border border-black/5 bg-bg-primary px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/10"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUp size={16} />
                </motion.div>
                <span className="hidden sm:inline">Top</span>
              </motion.button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={show ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
