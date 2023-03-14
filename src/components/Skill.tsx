import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Skill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            src='/assets/ReactIcon.png'
            className=''
        />
    </div>
  )
}

export default Skill