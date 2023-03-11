import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div>
        <div className='border border-red-500 w-[200px] h-[200px] rounded-full mt-52 animate-spin' />
        <div className='border border-blue-400 ' />
        <div />
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles