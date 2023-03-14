import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean; //? optional! I may or may NOT pass this in!
    directionRight?: boolean;
}

function Skill({ directionLeft, directionRight }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            src='/assets/ReactIcon.png'
            className='rounded border border-gray-500 object-cover w-12 h-12 lg:w-24 lg:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1.5 }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}

        />
    </div>
  )
}

export default Skill