import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import readingBook from "../assets/reading-book.json";

const qualifications = [
  {
    title: "Bachelor of Science in Informatiion Technology (B.Sc.IT)",
    year: "2021-2024",
    description:
      "Completed Bachelor of Science in Informatiion Technology (B.Sc.IT) at Omkarananda Institute of Management and Technology (2021-2024).Developed strong skills in web development, including front-end and back-end technologies, and gained practical experience in designing and implementing web-based applications."
  },
  {
    title: "SSC (12th , Commerce)",
    year: "2020 - 2021",
    description:
      "Completed SSC at D.B.S Sr. Sec. School (2020-2021).Developed foundational knowledge in core subjects and prepared for higher education."
  }
];

const QualificationCard = ({ title, year, description, index }) => (
  <motion.div
    className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-400"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.4,
      ease: "easeOut",
      delay: index * 0.1
    }}
    viewport={{ once: true }}
  >
    <h3 className="text-orange-500 text-xl font-semibold">{title}</h3>
    <p className="text-gray-400 text-sm mb-3">{year}</p>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Qualification = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 text-white">
      {/* Title */}
      <motion.h2
        className="text-center text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="text-orange-500">Qualification</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        {/* Lottie Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Lottie
            animationData={readingBook}
            loop
            autoplay
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </motion.div>

        {/* Qualification Cards */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {qualifications.map((q, index) => (
            <QualificationCard
              key={index}
              index={index}
              title={q.title}
              year={q.year}
              description={q.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
