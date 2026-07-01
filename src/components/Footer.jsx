import {  Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-[#09090B] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">
            AKASH<span className="text-orange-500">.</span>
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            © {new Date().getFullYear()} Akash Neuly. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5 text-zinc-400">
          <a
            href="https://github.com/AkashNeuly167"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-orange-500"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-neuly-45595b277/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-orange-500"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:neulyakash167@gmail.com"
            className="transition hover:text-orange-500"
          >
            <Mail size={20} />
          </a>

          <button
            onClick={scrollTop}
            className="rounded-full border border-white/10 p-2 transition hover:border-orange-500 hover:text-orange-500"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;