import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent!");
        form.current.reset();
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-[#09090B] px-6 py-20 text-white scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            🟢 Available for Full-Stack Opportunities
          </span>

          <p className="mb-3 text-sm font-medium text-orange-400">Contact</p>

          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Let's Build Something Together.
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-zinc-400">
            I'm currently looking for Full Stack MERN opportunities. Whether you
            have a project, job opportunity, or simply want to connect, feel free
            to reach out.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4 text-zinc-300">
              <Mail className="text-orange-500" />
              <span>neulyakash167@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-zinc-300">
              <Phone className="text-orange-500" />
              <span>+91 6395996120</span>
            </div>

            <div className="flex items-center gap-4 text-zinc-300">
              <MapPin className="text-orange-500" />
              <span>Rishikesh, Uttarakhand</span>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/AkashNeuly167"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-neuly-45595b277/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </Motion.div>

        <Motion.form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-3xl border border-white/10 bg-[#18181B] p-8 shadow-2xl shadow-black/30"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <input
            name="user_name"
            placeholder="Your Name"
            required
            className="mb-5 w-full rounded-xl border border-white/10 bg-[#09090B] px-5 py-4 outline-none transition focus:border-orange-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="mb-5 w-full rounded-xl border border-white/10 bg-[#09090B] px-5 py-4 outline-none transition focus:border-orange-500"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell me about your project..."
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-[#09090B] px-5 py-4 outline-none transition focus:border-orange-500"
          />

          <button
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </Motion.form>
      </div>
    </section>
  );
};

export default Contact;