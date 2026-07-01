import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const Project = () => {
  return (
    <section className="bg-[#09090B] px-6 pb-20 text-white scroll-mt-5">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="text-sm font-medium text-orange-400">Other Work</p>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            More <span className="text-orange-500">Projects</span>
          </h2>
        </Motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#18181B] transition hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -8 }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-orange-600"
                  >
                    Live Demo <ArrowUpRight size={17} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500"
                  >
                    GitHub <FaGithub size={17} />
                  </a>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;