// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaShoppingCart,
  FaRocket,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Services = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture and scalable code.",
      color: "from-cyan-400 to-blue-500",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Frontend Development",
      description:
        "Fast, responsive, and user-friendly interfaces built with React and modern UI frameworks like Tailwind CSS.",
      color: "from-purple-400 to-pink-500",
      tags: ["React", "Tailwind", "Responsive"],
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Backend & API Development",
      description:
        "Secure and efficient REST APIs using Node.js and Express, optimized for performance and scalability.",
      color: "from-green-400 to-emerald-500",
      tags: ["REST API", "Node.js", "Express"],
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Database Design & Management",
      description:
        "Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity.",
      color: "from-green-500 to-teal-500",
      tags: ["MongoDB", "Mongoose", "Optimization"],
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Authentication & Authorization",
      description:
        "Implementation of secure login systems using JWT, role-based access control, and best security practices.",
      color: "from-red-400 to-rose-500",
      tags: ["JWT", "RBAC", "Security"],
    },
    {
      icon: <FaShoppingCart className="text-2xl" />,
      title: "E-Commerce Development",
      description:
        "Product listings, cart systems, checkout flows, and payment gateway integrations for demo or real projects.",
      color: "from-orange-400 to-amber-500",
      tags: ["Cart", "Payments", "Checkout"],
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Performance Optimization",
      description:
        "Improving load times, API response speed, and overall application performance for better user experience.",
      color: "from-yellow-400 to-orange-500",
      tags: ["Speed", "Optimization", "UX"],
    },
    {
      icon: <FaCloudUploadAlt className="text-2xl" />,
      title: "Deployment & Hosting Support",
      description:
        "Deploying applications on cloud platforms with proper environment setup and production-ready configuration.",
      color: "from-sky-400 to-cyan-500",
      tags: ["Cloud", "Deployment", "DevOps"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="section-padding relative bg-bg-secondary">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[80px]"
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="section-label mb-4 justify-center">
            <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
            <span>What I Do</span>
            <span aria-hidden="true" className="h-[2px] w-8 bg-accent" />
          </div>
          <h2 className="section-title">Services I Provide</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary md:text-lg">
            I offer design and development services focused on building fast,
            modern, and user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="card card-hover group p-6 transition-shadow duration-300 hover:shadow-xl md:p-7"
            >
              {/* Icon */}
              <div
                aria-hidden="true"
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors duration-300 group-hover:bg-accent/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-text-secondary">
            Have a project in mind? Let's bring your ideas to life!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            Let's Work Together
            <svg
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
