import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex-col relative flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
            src='./assets/cortez.JPG'
            className='w-60 h-45 rounded-full -mb-20 md:mb-0 flex-shrink-0 object-cover md:rounded-lg md:w-70 md:h-55 lg:w-[600px] lg:h-[450px]'
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0, 
                opacity: 1
            }}
            transition={{
                duration: 1.0,
            }}
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a little background info</h4>
        </div>
    </div> // now snap to center will snap this component 2 center
  )
}

export default About