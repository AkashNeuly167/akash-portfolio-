import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroanimation from "../assets/hero-animation.json";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-28 overflow-x-hidden">
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl text-gray-400">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-2">
          Akash Neuly
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl font-semibold text-orange-500 mb-4"
            cursor={true}
            sequence={[
              "A Front-end Developer", 2000,
              "A MERN Stack Learner", 2000,
              "A UI/UX Enthusiast", 2000
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-400 mb-6 max-w-xl">
          I craft clean, responsive user interfaces using React.js, JavaScript, and Tailwind CSS. 
          Currently expanding my skills in the MERN stack and exploring cloud technologies.
        </p>
        <div className="flex gap-4">
          <a href="/Aakash_Neuly.pdf" download>
            <button className="primary-button">
              <span>My Resume</span>
              <span><FaDownload /></span>
            </button>
          </a>
          <Link to="/about">
            <button className="border border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded text-orange-500 flex items-center gap-2">
              ABOUT ME <RiFolderInfoFill />
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Animation */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          className="w-80 h-80 md:w-[450px] md:h-[450px]"
          animationData={heroanimation}
          loop={true}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
