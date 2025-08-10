import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAtom, FaPalette } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import BottomLine from "../components/BottomLine";

// Simple animation variants
const headingAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionBodyAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    setViewDiv(inView);
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <FaAtom />,
      description:
        "As a Front-end developer, I would love to develop any front-end application using React and its libraries."
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <FaServer />,
      description:
        "Familiar with Node.js, Express.js, MongoDB & React and I can develop basic full-stack MERN apps."
    },
    {
      id: 3,
      title: "Web Design",
      icon: <FaPalette />,
      description:
        "I design clean, responsive UIs using HTML, modern CSS (including Tailwind CSS) with a focus on accessibility and user experience."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#1a1a1a] text-white">
      {/* Heading */}
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <p className="text-blue-400">What I Provide</p>
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Services</span>
        </h2>

        <BottomLine />

      </motion.div>

      {/* Service Cards */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg text-center hover:shadow-orange-500 cursor-pointer duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl text-orange-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
