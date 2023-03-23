import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600 mt-20 md:mt-28 border border-yellow-300'>
                {/* Projects here */}
                {projects.map((project, i) => (
                    <div className='w-screen  flex-shrink-0 snap-center flex flex-col space-y-1 items-center  p-5 px-10 sm:px-32 md:px-52'>
                        <motion.img 
                            className='w-28 h-20 sm:w-44 sm:h-28 md:w-52 md:h-36'
                            src='/assets/phoneMockup.png' 
                        />
                        {/* <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.3 }}
                            whileInView={{ 
                                y: 0,
                                opacity: 1,
                            }}
                            className='w-40 h-25' 
                            src='/assets/phoneMockup.png' 
                        /> */}
                        <p className='text-lg font-semibold text-center'>This is project#:</p>
                        <p>{project}</p>
                        <span className=''>Case Study {i+1} of {projects.length}</span>
                        <p className='text-center text-sm sm:text-left'>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                        </p>
                    </div>
                ))}
            </div>
            
            <div className='w-full absolute top-[30%] bg-[#0e2433] left-0 h-[250px] -skew-y-12'>

            </div>
        </div>
    )
}

export default Projects