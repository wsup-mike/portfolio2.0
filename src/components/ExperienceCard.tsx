import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='/assets/netflix.jpg'
        />
    </article>
  )
}

export default ExperienceCard