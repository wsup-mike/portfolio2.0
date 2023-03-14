import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='/assets/netflix.jpg'
            initial={{
                y: -100,
                opacity: 0,
            }}
            whileInView={{ 
                y: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer</h4>
            <p className='font-bold text-2xl mt-1'>Netflix</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
            </div>
            <p>Dates of Employment</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points here</li>
                <li>Summary points here</li>
                <li>Summary points here</li>
                <li>Summary points here</li>
                <li>Summary points here</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard