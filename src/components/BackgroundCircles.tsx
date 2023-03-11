import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        className='relative flex justify-center items-center'
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
            scale: [1,2,2,3,1],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration: 2.5,
        }}
    >
        <div className='absolute border border-gray-200 w-[200px] h-[200px] rounded-full mt-52 animate-ping' />
        <div className='absolute border border-gray-200 w-[300px] h-[300px] rounded-full mt-52 animate-ping ' />
        <div className='absolute border border-gray-200 w-[500px] h-[500px] rounded-full mt-52 animate-ping ' />
        <div className='absolute border opacity-20 border-blue-500 w-[650px] h-[650px] rounded-full mt-52 animate-ping ' />
        <div className='absolute border opacity-20 border-blue-500 w-[800px] h-[800px] rounded-full mt-52 animate-ping ' />
    </motion.div>
  )
}

export default BackgroundCircles