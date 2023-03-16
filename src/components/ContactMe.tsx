import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}


type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string,
};

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>(); // 2 handlers for setting up form
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {  // what to do with form data upon submission
    window.location.href = `mailto:coolsuedepumas@gmail.com?subject=${data.subject}&body=Please describe your project, time frame, budget and any provide other pertinent details here:`
  };


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
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'> 
              <div className='flex space-x-2'>
                <input {...register('firstName')} placeholder='First Name' className='contactInput' type='text' />
                <input {...register('lastName')} placeholder='Last Name' className='contactInput' type='text' />
              </div>
              <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
              <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

              <textarea {...register('message')} placeholder='Message' className='contactInput' />

              <button 
                className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold'
                type='submit'
              >
                Submit Here
              </button>

            </form>
        </div>
    </div>
  )
}

export default ContactMe