import React from 'react'
import { FaTimes } from 'react-icons/fa'

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 bg-opacity-50 flex items-center justify-center backdrop-blur-md  '>
      <div className='bg-[#1f1f1f] text-white max-w-[800px] h-[70vh]  w-full rounded-lg overflow-hidden shadow-lg relative'>
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black-80 shadow-md hover:shadow-lg transition duration-300 '
          onClick={onClose}
        >
          <FaTimes className=
          'text-white hover:text-orange-500 text-xl' />
        </button>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-60 object-cover'
        />

        {/* Project Info */}
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-orange-400 mb-2'>{project.title}</h2>
          <p className='text-gray-300 mb-4'>{project.description}</p>

          {/* Technologies */}
          <div className='mb-4'>
            <h3 className='text-white font-semibold mb-1'>Technologies:</h3>
            <ul className='flex flex-wrap gap-2 text-sm text-orange-300'>
              {project.technologies.map((tech, idx) => (
                <li key={idx} className='bg-[#2a2a2a] px-2 py-1 rounded'>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className='flex gap-4 mt-4'>
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition'
            >
              View Live
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition'
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
