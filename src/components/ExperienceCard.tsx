import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <motion.div
        className='h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
    >Experience Card</motion.div>
  )
}

export default ExperienceCard