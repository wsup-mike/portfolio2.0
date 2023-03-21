import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
        <motion.div 
            className=' h-screen flex-col relative flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.0 }}
        >
            <h3 className='absolute h-screen flex top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img 
                src='./assets/cortez.JPG'
                className='w-42 h-32 rounded-full -mb-20 md:mb-0 flex-shrink-0 object-cover md:rounded-lg md:w-70 md:h-55 lg:w-[600px] lg:h-[450px]'
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0, 
                    opacity: 1
                }}
                transition={{
                    duration: 1.0,
                }}
            />
            <div className='space-y-2 px-0 md:px-10'>
                <h4 className='sm:text-md md:text-xl lg:text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background info</h4>
                <p className='text-base'>
                    Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.
                </p>
            </div>
        </motion.div> 
    
  )
}

export default About