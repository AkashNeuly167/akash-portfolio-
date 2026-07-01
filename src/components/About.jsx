import { motion as Motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";

const highlights = [
  { icon: <MapPin size={20} />, label: "Rishikesh, India" },
  { icon: <GraduationCap size={20} />, label: "B.Sc IT Graduate" },
  { icon: <Briefcase size={20} />, label: "Open to Full-Stack Roles" },
  { icon: <Rocket size={20} />, label: "Building MERN Projects" },
];

const About = () => {
  return (
    <section id="about"   className="bg-[#09090B] px-6 py-16 md:py-24 text-white  scroll-mt-10 ">
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
          <p className="text-sm font-medium text-orange-400">About Me</p>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Who I <span className="text-orange-500">Am</span>
          </h2>
        </Motion.div>

        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <Motion.div
            className="rounded-3xl border border-white/10 bg-[#18181B] p-8 md:p-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <h3 className="text-2xl font-bold leading-snug md:text-3xl">
              Full Stack MERN Developer focused on building clean, usable web apps.
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              I am Akash Neuly, a B.Sc IT graduate from Rishikesh, Uttarakhand.
              I build responsive full-stack applications using React, Tailwind CSS,
              Node.js, Express.js, MongoDB, and REST APIs.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              My strongest project is WayMark, a travel community platform with
              JWT authentication, image uploads, interactive maps, likes, comments,
              follows, notifications, bucket lists, search, and Swagger API documentation.
            </p>
          </Motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Motion.div
                key={item.label}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#18181B] p-5 text-zinc-300 transition hover:border-orange-500/50"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <span className="rounded-xl bg-orange-500/10 p-3 text-orange-400">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;