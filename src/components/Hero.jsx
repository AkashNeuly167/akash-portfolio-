import {
  Mail,
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] px-6 pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%)]" />
      <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <Motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Available for Full-Stack Roles
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Full Stack <br />
            <span className="text-orange-500">MERN Developer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build responsive, production-ready web applications using React,
            Node.js, Express, and MongoDB with clean UI, secure APIs, and smooth
            user experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="/Akash neuly Resume (3).pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/AkashNeuly167"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-neuly-45595b277/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:neulyakash167@gmail.com"
              className="rounded-full border border-white/10 p-3 transition hover:border-orange-500 hover:text-orange-500"
            >
              <Mail size={20} />
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/10 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#18181B] p-4 shadow-2xl shadow-black/40">
            <div className="rounded-2xl border border-white/10 bg-[#09090B] p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="rounded-2xl bg-[#111111] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">WayMark</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-400">
                    <Sparkles size={14} />
                    Featured
                  </span>
                </div>

                <p className="mb-6 leading-7 text-zinc-400">
                  Travel community platform with memories, maps, image uploads,
                  follows, likes, comments, notifications, and bucket lists.
                </p>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  {["JWT Auth", "Cloudinary", "React Leaflet", "MongoDB"].map(
                    (item, index) => (
                      <Motion.div
                        key={item}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.12,
                        }}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300"
                      >
                        {item}
                      </Motion.div>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 font-medium text-orange-400">
                  <MapPin size={20} />
                  <span>Interactive travel memory map</span>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;