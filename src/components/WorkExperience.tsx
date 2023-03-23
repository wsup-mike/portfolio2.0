import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        className='h-screen flex mx-auto relative overflow-hidden flex-col md:flex-row max-w-full px-5 md:px-40 justify-start items-center lg:text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
    >
        
        <h3
            // className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-md sm:text-2xl'
            className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-sm sm:text-xl'
        >Work Experience</h3>
        <div className='w-full space-x-5 flex overflow-x-scroll py-5 px-10 snap-x snap-mandatory scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600 mt-36 md:mt-36 lg:mt-44 md:mb-20'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience

