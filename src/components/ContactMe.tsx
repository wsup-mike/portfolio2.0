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
  
  // const onSubmit: SubmitHandler<Inputs> = (data) => {  // what to do with form data upon submission (Open in same tab)
  //   window.location.href = `mailto:coolsuedepumas@gmail.com?subject=${data.subject}&body=Please describe your project, time frame, budget and any provide other pertinent details here:`
  // };

  //This one opens email template in new tab instead:
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const mailtoLink = `mailto:coolsuedepumas@gmail.com?subject=${data.subject}&body=Please describe your project, time frame, budget and any provide other pertinent details here:`;
    window.open(mailtoLink, '_blank');
  };
  

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[10px] text-center text-lg'>Contact Me</h3>
  
        <div className='flex flex-col space-y-1 mt-36 border border-yellow-300 w-full p-6'>
            <h4 className='text-sm font-semibold text-center whitespace-normal'>
              Need an Apple or Android mobile app! <span className='decoration-[#f7ab0a]/30 underline'>Call direct or send me a message!</span>
            </h4>

            <div className='space-y-3'>
              <div className='flex items-center space-x-2 justify-center'>
                <PhoneIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse'/>
                <p className='text-xs'>+1 773 459 3603</p>
              </div>
              <div className='flex items-center space-x-2 justify-center'>
                <EnvelopeIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse'/>
                <p className='text-xs'>hello@wsupmike.com</p>
              </div>
              <div className='flex items-center space-x-2 justify-center'>
                <MapPinIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse'/>
                <p className='text-xs'>Chicago, IL USA</p>
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