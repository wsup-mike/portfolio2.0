import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[260px] md:w-[300px] md:h-[350px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-500 overflow-hidden border border-yellow-400'>
        <motion.img 
            className='w-[100px] h-[100px] rounded-full  object-cover object-center'
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
            <h4 className='text-xs font-light'>Software Engineer</h4>
            <p className='font-bold text-xs'>Netflix</p>
            <div className='flex space-x-1 my-2'>
                <img 
                    className='w-6 h-5 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-6 h-5 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-6 h-5 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-6 h-5 rounded'
                    src='/assets/ReactIcon.png'
                />
                <img 
                    className='w-6 h-5 rounded'
                    src='/assets/ReactIcon.png'
                />
            </div>
            <p className='pt-1 text-xs text-gray-400'>Jun 2018 -  Aug 2019</p>
            <ul className='space-y-4 ml-2 text-xs mt-2 px-1 overflow-y-auto scrollbar-track-transparent'>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
                <li>Summary points here. Summary points here. Summary points here. Summary points here</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard