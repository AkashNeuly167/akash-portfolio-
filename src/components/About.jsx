import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import memeimage from '../assets/meme.jpg';
import BottomLine from './BottomLine';
import { FaDownload } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="bg-[#1a1a1a] text-white pt-28 pb-20 px-4 md:px-10">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-400">Something About Myself</p>
        <h2 className="text-4xl font-bold">
          About <span className="text-orange-500">Me</span>
        </h2>
        <BottomLine />
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl bg-gradient-to-b from-orange-500 to-yellow-400">
            <img
              src={memeimage}
              alt="Akash Neuly"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold">Akash Neuly</h3>
          <h4 className="text-xl font-bold text-orange-500">
            A Front-end Developer
          </h4>

          {/* Description */}
          <p className="text-gray-300">
            I am a B.Sc. IT graduate and a passionate Front-End Developer focused on creating responsive and user-friendly web applications. I specialize in using React.js, JavaScript, and Tailwind CSS to build clean and interactive UIs.
          </p>

          <p className="text-gray-300">
            I'm a self-taught developer focused on frontend and UI design, currently mastering the MERN stack. I have basic backend knowledge (Node.js, Express.js) and aim to explore cloud computing next.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <span className="text-orange-500 font-semibold">Name:</span> Akash Neuly
            </div>
            <div>
              <span className="text-orange-500 font-semibold">Phone:</span> +91 63959 96120
            </div>
            <div>
              <span className="text-orange-500 font-semibold">Email:</span> neulyakash167@example.com
            </div>
            <div>
              <span className="text-orange-500 font-semibold">Location:</span> Rishikesh (Uttarakhand) India
            </div>
          </div>

          {/* Resume Button */}
          <a href="/public/Akash_Neuly.pdf" download>
            <motion.button
              className="primary-button mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <span><FaDownload /></span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
