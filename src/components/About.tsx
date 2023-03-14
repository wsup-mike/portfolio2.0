import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex-col relative flex text-center md:text-left md:flex-row'>About</div> // now snap to center will snap this component 2 center
  )
}

export default About