import React, { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import BottomLine from './BottomLine';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MdSend } from 'react-icons/md';

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
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully');
          form.current.reset();
        },
        () => {
          setLoading(false);
          toast.error('Failed to send message, please try again');
        }
      );
  };

  return (
    <section
      id="contact"
      className="pt-32 pb-20 px-6 md:px-20 bg-[#1a1a1a] text-white"
    >
     

      {/* Section heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-blue-400">Get in Touch</h3>
        <h1 className="text-4xl font-semibold">
          Contact <span className="text-orange-500">Me</span>
        </h1>
        <BottomLine />
        <p className="text-gray-400 mt-2">
          Whether you have a question or just want to say hi, my inbox is open for all.
        </p>
      </motion.div>

      {/* Main container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-[#2a2a2a] p-8 shadow-lg space-y-6 rounded"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Full Name"
              className="w-full p-4 rounded bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email Address"
              className="w-full p-4 rounded bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          <textarea
            name="message"
            required
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:border-orange-500"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="primary-button"
            >
              <span>Send</span>
              <span><MdSend /></span>
            </button>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2 text-white p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>

          <div className="space-y-4 text-[17px]">
            <div className="flex items-center gap-4">
              <span>👤</span>
              <span className="text-orange-500 font-medium">Akash Neuly</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📞</span>
              <span className="text-orange-500 font-medium">+91 6395996120</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📧</span>
              <span className="text-orange-500 font-medium">neulyakash167@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📍</span>
              <span className="text-orange-500 font-medium">Rishikesh, Uttarakhand</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <h3 className="text-lg text-white whitespace-nowrap">Social</h3>
              <div className="w-10 h-1 bg-gray-600"></div>
              <div className="flex gap-4 text-2xl text-white">
                <a href="https://www.linkedin.com/in/akash-neuly-45595b277/" 
                target='_blank' className="hover:text-orange-500 transition">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/AkashNeuly167"
                target='_blank' className="hover:text-orange-500 transition">
                  <FaGithub />
                </a>
                <a href="https://wa.me/916395996120"
                target='_blank' className="hover:text-orange-500 transition">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
