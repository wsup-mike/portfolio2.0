import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll snap-x snap-x-mandatory z-20'>
            {/* Projects here */}
            {projects.map((project) => (
                <div>
                    <p>This is project#:</p>
                    <p>{project}</p>

                </div>
            ))}
        </div>
        
        <div className='w-full absolute top-[30%] bg-[#0e2433] left-0 h-[250px] -skew-y-12'>

        </div>
    </div>
  )
}

export default Projects