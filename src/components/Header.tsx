import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid' 

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-2 flex items-start justify-between max-w-6xl mx-auto z-20'>
        <motion.div 
            className='flex flex-row items-center space-x-2 md:space-x-4'
            initial={{ // the animation's starting point
                x: -500, //start 500 pixels from left
                opacity: 0, // starts completely invisible
                scale: 0.5, // starts at half of original size
            }}
            animate={{
                x: 0, // once fully animated, ends at initial starting point
                opacity: 1, // becomes 100% opaque
                scale: 1, // becomes fully enlarged to full size
            }}
            transition={{
                duration: 1.0,
            }}
        >
            {/* Social Icons */}
            <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>
            <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>
            <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>
            <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>
            <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>


            {/* <SocialIcon url='https://www.youtube.com/sonnysangha' className='border border-white scale-50 sm:scale-100 ' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/sonnysangha' className='border border-white  scale-50 sm:scale-100' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' className='border border-white  scale-50 sm:scale-100' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' className='border border-white  scale-50 sm:scale-100' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' className='border border-white  scale-50 sm:scale-100' fgColor='gray' bgColor='transparent'/> */}
        </motion.div>

        <Link href='#contact'>
            <motion.div 
                className='flex flex-row items-center text-gray-300 cursor-pointer'
                initial={{ // the animation's starting point
                    x: 500, //start 500 pixels from right
                    opacity: 0, // starts completely invisible
                    scale: 0.5, // starts at half of original size
                }}
                animate={{
                    x: 0, // once fully animated, ends at initial starting point
                    opacity: 1, // becomes 100% opaque
                    scale: 1, // becomes fully enlarged to full size
                }}
                transition={{
                    duration: 1.0,
                }}
            >
                {/* <Link href="#contactme"> */}
                <EnvelopeIcon className='h-6 md:h-8 w-6 md:w-8 text-gray-500 border border-white'/>
                    {/* <SocialIcon 
                        className='cursor-pointer border border-white  scale-50 sm:scale-100'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    /> */}
                    <p className='uppercase hidden md:inline-flex text-xs text-gray-500'>Get in touch</p>
                {/* </Link> */}
            </motion.div>
        </Link>
    </header>

  )
}

export default Header