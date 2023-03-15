import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* Projects here */}
            {projects.map((project, i) => (
                <div className='w-screen  h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                    <p className='text-4xl font-semibold text-center'>This is project#:</p>
                    <p>{project}</p>
                    <span className=''>Case Study {i+1} of {projects.length}</span>
                </div>
            ))}
        </div>
        
        <div className='w-full absolute top-[30%] bg-[#0e2433] left-0 h-[250px] -skew-y-12'>

        </div>
    </div>
  )
}

export default Projects