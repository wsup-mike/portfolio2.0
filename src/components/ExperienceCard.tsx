import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <img 
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='/assets/netflix.jpg'
        />
    </article>
  )
}

export default ExperienceCard