import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div>
        <div className='border border-red-500 w-[200px] h-[200px] rounded-full' />
        <div className='border border-blue-400 h-[180px] w-[180px]' />
        <div />
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles