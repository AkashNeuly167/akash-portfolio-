import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white px-6 py-4 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="text-lg sm:text-xl font-extrabold tracking-wide">
          <NavLink to="/" className=" text-orange-400 hover:text-white transition-colors duration-300"
          >
            𝐀𝐤𝐚𝐬𝐡 𝐍𝐞𝐮𝐥𝐲

          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-orange-400 transition-colors duration-300"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-2"> {/* Added pr-2 so it’s not sticking to edge */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-none text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-sm">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
