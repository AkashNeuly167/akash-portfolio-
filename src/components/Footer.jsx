// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/YourUsername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-400 transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/YourUsername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-400 transition-colors duration-300"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 w-5/6 mx-auto mb-4" />

      {/* Footer Text */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 text-sm">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300">
          Developed by Akash Neuly
        </p>
      </div>
    </footer>
  );
};

export default Footer;
