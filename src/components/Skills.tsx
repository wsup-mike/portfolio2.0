import { motion } from 'framer-motion';
import React from 'react'


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left lg:flex-row max-w-[2000px] lg:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3
            className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-2xl'
        >Skills</h3>
        <h3></h3>
    </motion.div>
  )
}

export default Skills