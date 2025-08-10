import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cashTrailImage from '../assets/projectimages/Cash-Trail.jpg';
import nexaImage from '../assets/projectimages/NexaEstate.png';
import ProjectModal from '../projectcomponent/ProjectModal';
import BottomLine from './BottomLine';

const projects = [
  {
    id: 1,
    title: 'Cash Trail',
    image: cashTrailImage,
    description: 'Track your expenses and income with charts and insights',
    live: 'https://cash-trail-chi.vercel.app',
    github: 'https://github.com/AkashNeuly167/Cash-Trail',
    technologies: ['React.js', 'Tailwind CSS', 'Chart.js'],
  },
  {
    id: 2,
    title: 'Nexa Estate',
    image: nexaImage,
    description: 'Real estate UI to browse and filter properties',
    live: 'https://nexa-real-estate.vercel.app/',
    github: 'https://github.com/AkashNeuly167/Nexa-Real_Estate',
    technologies: ['React.js', 'Tailwind CSS', 'Redux'],
  }
];

const headingAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const gridAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [inView, animation]);

  return (
    <section className='py-20 bg-[#1a1a1a]'>
      {/* Heading with animation */}
      <motion.div
        ref={ref}
        className='text-center mb-12'
        initial="hidden"
        animate={animation}
        variants={headingAnimation}
      >
        <h3 className='text-blue-400'>Some of my recent projects</h3>
        <h1 className='text-4xl font-semibold text-white'>
          Featured <span className='text-orange-500'>Projects</span>
        </h1>
        <BottomLine />
      </motion.div>

      {/* Grid with animation */}
      <motion.div
        className='grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-5xl mx-auto px-4'
        initial="hidden"
        animate={animation}
        variants={gridAnimation}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='bg-base-100 shadow-lg rounded-lg hover:shadow-orange-500 transition-shadow duration-300 overflow-hidden cursor-pointer'
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-52 object-cover'
            />
            <div className='p-7'>
              <h2 className='text-2xl font-semibold mb-2 text-orange-400'>{project.title}</h2>
              <div className='flex gap-4 mt-4'>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-orange-500 underline'
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-orange-500 underline'
                  onClick={(e) => e.stopPropagation()}
                >
                  View Github
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
