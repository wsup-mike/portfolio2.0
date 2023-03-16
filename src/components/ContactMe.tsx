import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact Me</h3>
  
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
              Need an Apple or Android mobile app! <span className='decoration-[#f7ab0a]/30 underline'>Send me a message!</span>
            </h4>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default ContactMe