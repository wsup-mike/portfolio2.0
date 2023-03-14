import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        className='h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
    
    >
        <h3
            className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-2xl'
        >Work Experience</h3>
        <div>
            {/* ExperienceCard */}
            {/* ExperienceCard */}
            {/* ExperienceCard */}
            {/* ExperienceCard */}
        </div>
    </motion.div>
  )
}

export default WorkExperience