import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#09090B]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-extrabold tracking-[0.2em] text-white"
        >
          AKASH<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/AkashNeuly Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-orange-500/40 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
          >
            Resume <Download size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 p-2 text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#09090B] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-zinc-300 transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/AkashNeuly Resume.pdf"
            download
            onClick={closeMenu}
            className="flex w-fit items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Resume <Download size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;