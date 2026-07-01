import { motion as Motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProject } from "../data/projects";

const FeaturedProject = () => {
  return (
    <section id="projects" className="bg-[#09090B] px-6 pt-20 pb-20 text-white">
      
      <div className="mx-auto max-w-7xl">
        <Motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="text-sm font-medium text-orange-400">
            Featured Project
          </p>

          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Built with the <span className="text-orange-500">MERN Stack</span>
          </h2>
        </Motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="mb-5 inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              ⭐ Flagship Project
            </span>

            <h3 className="text-5xl font-extrabold">
              {featuredProject.title}
            </h3>

            <p className="mt-2 text-orange-400">
              {featuredProject.subtitle}
            </p>

            <p className="mt-7 leading-8 text-zinc-400">
              {featuredProject.description}
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredProject.features.map((feature, index) => (
                <Motion.div
                  key={feature}
                  className="flex items-center gap-3 text-zinc-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <CheckCircle2 size={18} className="text-orange-500" />
                  <span>{feature}</span>
                </Motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-[#18181B] px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Live Demo <ArrowUpRight size={18} />
              </a>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500"
              >
                GitHub <FaGithub size={18} />
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#18181B] p-3 shadow-2xl shadow-black/40">
              <img
                src={featuredProject.image}
                className="h-[420px] w-full rounded-2xl object-cover object-top transition duration-700 hover:scale-105"
                alt="WayMark project preview"
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;