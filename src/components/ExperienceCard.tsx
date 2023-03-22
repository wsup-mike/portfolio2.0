import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[220px] md:w-[250px] lg:w-[900px] snap-center bg-[#292929] p-2 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-500 overflow-hidden border border-yellow-400'>
        <motion.img 
            className='w-10 h-10 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
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
            <h4 className='text-lg font-light'>Software Engineer</h4>
            <p className='font-bold text-2xl mt-1'>Netflix</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    className='w-11 h-10 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-11 h-10 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-11 h-10 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-11 h-10 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-11 h-10 rounded'
                    src='/assets/ReactIcon.png'
                />
            </div>
            <p className='uppercase py-5 text-gray-400'>Dates of Employment</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard