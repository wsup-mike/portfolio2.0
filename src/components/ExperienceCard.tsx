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
        <div>
            <h4>Software Engineer</h4>
            <p>Netflix</p>
            <div>
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
                {/* Tech Used - icons */}
            </div>
            <p>Dates of Employment</p>
            <ul>
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