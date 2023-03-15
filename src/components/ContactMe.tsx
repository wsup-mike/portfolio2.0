import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact Me</h3>
        
        <div>
            <h4>Need to tweak your Apple or Android mobile app! Call now!</h4>
        </div>
    </div>
  )
}

export default ContactMe