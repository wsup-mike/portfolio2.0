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
            className='rounded border border-gray-500 object-cover w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 filter group-hover:grayscale transition duration-700 ease-in-out'
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
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-700 ease-in-out group-hover:bg-white h-12 w-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>10</p>
            </div>
        </div>
    </div>
  )
}

export default Skill