import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean; //? optional! I may or may NOT pass this in!
    directionRight?: boolean;
}

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