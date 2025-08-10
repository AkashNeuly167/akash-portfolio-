import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGithub
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiAdobephotoshop, SiFirebase
} from "react-icons/si";
import Lottie from "lottie-react";
import man from "../assets/man.json";

const SkillSection = ({ title, items }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-cyan-400 text-lg font-semibold mb-3">{title}</h3>
    <div className="flex gap-4 flex-wrap">
      {items.map(({ title, icon }) => (
        <div
          key={title}
          className="bg-[#2a2a2a] rounded-md w-12 h-12 flex items-center justify-center shadow-md 
             cursor-pointer transform transition-transform duration-300 
             hover:-translate-y-2 hover:shadow-xl"
          title={title}
        >
          <span className="text-3xl">{icon}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const MySkill = () => {
  const skills = {
    languages: [
      { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { title: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { title: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    ],
    frameworks: [
      { title: "React", icon: <FaReact className="text-cyan-400" /> },
      { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { title: "ExpressJS", icon: <SiExpress className="text-gray-400" /> },
    ],
    tools: [
      { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { title: "GitHub", icon: <FaGithub className="text-white" /> },
      { title: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { title: "Photoshop", icon: <SiAdobephotoshop className="text-cyan-800" /> },
    ],
  };

  return (
    <section className="bg-[#1a1a1a] py-20 text-white">
      {/* Title */}
      <motion.h2
        className="text-center text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="text-orange-500">Skills</span>
      </motion.h2>

      {/* Skills + Animation */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        
        {/* Skills */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pr-10">
          <SkillSection title="Languages:" items={skills.languages} />
          <SkillSection title="Library & Frameworks:" items={skills.frameworks} />
          <SkillSection title="Tools & Technologies:" items={skills.tools} />
        </div>

        {/* Lottie Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Lottie
            animationData={man}
            loop
            autoplay
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkill;
