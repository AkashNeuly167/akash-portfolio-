import { motion as Motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={22} />,
    skills: ["React", "Vite", "Tailwind", "Redux", "Router", "Axios"],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Swagger"],
  },
  {
    title: "Database & Cloud",
    icon: <Database size={22} />,
    skills: ["MongoDB", "Mongoose", "Cloudinary", "Firebase"],
  },
  {
    title: "Tools",
    icon: <Wrench size={22} />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
];

const MySkill = () => {
  return (
    <section id="skills" className="bg-[#09090B] px-6 py-20 text-white scroll-mt-20 ">
      <div className="mx-auto max-w-6xl">
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
          <p className="text-sm font-medium text-orange-400">Tech Stack</p>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Skills & <span className="text-orange-500">Tools</span>
          </h2>
        </Motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Motion.div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-[#18181B] p-6 text-left transition hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                {group.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold">{group.title}</h3>

              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkill;