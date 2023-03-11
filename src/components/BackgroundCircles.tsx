import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-gray-200 border-t-4 w-[200px] h-[200px] rounded-full mt-52 animate-ping' />
        <div className='absolute border border-gray-200 border-t-4 w-[300px] h-[300px] rounded-full mt-52 animate-ping' />
        <div className='absolute border border-gray-200 border-t-4 w-[500px] h-[500px] rounded-full mt-52 animate-ping' />
        
        <div />
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles