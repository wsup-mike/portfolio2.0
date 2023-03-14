import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            className='flex flex-row item-center'
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
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
        </motion.div>
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
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-xs text-gray-500'>Get in touch</p>
        </motion.div>
    </header>

  )
}

export default Header