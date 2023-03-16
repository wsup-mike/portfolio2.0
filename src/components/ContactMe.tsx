import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact Me</h3>
  
        <div className='flex flex-col space-y-10'>
            <h4 className='text-xl font-semibold text-center'>
              Need an Apple or Android mobile app! <span className='decoration-[#f7ab0a]/30 underline'>Send me a message!</span>
            </h4>

            <div className='space-y-6'>
              <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#f7ab0a] h-5 w-5 animate-pulse'/>
                <p>+1 773 459 3603</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#f7ab0a] h-5 w-5 animate-pulse'/>
                <p>hello@wsupmike.com</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#f7ab0a] h-5 w-5 animate-pulse'/>
                <p>Chicago, IL USA</p>
              </div>
            </div>

            {/* Form here */}
            <form className='flex flex-col space-y-2 w-fit mx-auto'> 
              <div className='flex space-x-2'>
                <input placeholder='Full Name' className='contactInput' type='text' />
                <input placeholder='Email' className='contactInput' type='text' />
              </div>

              <input placeholder='Subject' className='contactInput' type='text' />

              <textarea placeholder='Message' className='contactInput'  />

              <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold'>Submit Here</button>

            </form>
        </div>
    </div>
  )
}

export default ContactMe