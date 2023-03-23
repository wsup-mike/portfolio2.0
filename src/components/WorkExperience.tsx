// import React from 'react'
// import { motion } from 'framer-motion'
// import ExperienceCard from './ExperienceCard';

// type Props = {}

// function WorkExperience({}: Props) {
//   return (
//     <motion.div 
//         className='h-screen flex mx-auto relative overflow-hidden flex-col md:flex-row max-w-full px-5 md:px-40 justify-start items-center '
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1}}
//         transition={{ duration: 1.0 }}
//     >
        
//         <h3
//             // className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-md sm:text-2xl'
//             className='absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-sm sm:text-xl'
//         >Work Experience</h3>
//         <div className='w-full space-x-5 flex overflow-x-scroll py-5 px-10 snap-x snap-mandatory scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600 mt-36 md:mt-36 lg:mt-80 md:mb-20'>
//             <ExperienceCard />
//             <ExperienceCard />
//             <ExperienceCard />
//             <ExperienceCard />
//         </div>
//     </motion.div>
//   )
// }

// export default WorkExperience

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

function WorkExperience() {
  const firstCardRef = useRef(null);

  useEffect(() => {
    const firstCard = firstCardRef.current;
    const container = firstCard.parentElement;

    // Center the first card horizontally
    container.scrollLeft = firstCard.offsetLeft - (container.offsetWidth / 2) + (firstCard.offsetWidth / 2);
  }, []);

  return (
    <motion.div>
      {/* your existing code */}
      <div className="w-full space-x-5 flex overflow-x-scroll py-5 px-10 snap-x snap-mandatory scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600 mt-36 md:mt-36 lg:mt-80 md:mb-20">
        {/* Add a ref to the first card */}
        <div ref={firstCardRef}>
          <ExperienceCard />
        </div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
