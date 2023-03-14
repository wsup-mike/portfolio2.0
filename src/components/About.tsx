import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex-col relative flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
            src='./assets/cortez.JPG'
            className='w-60 h-45 rounded-full'
            initial={{
                x: -200,
                // opacity: 0,
            }}
            whileInView={{x: 0}}
            transition={{
                duration: 1.2,
            }}
            // animate={{
            //     x: 0,
            //     opacity: 1,
            // }}
        />
    </div> // now snap to center will snap this component 2 center
  )
}

export default About