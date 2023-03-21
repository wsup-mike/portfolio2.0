import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        className='h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-center mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
    >
        <h3
            className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-xs sm:text-2xl'
        >Work Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience