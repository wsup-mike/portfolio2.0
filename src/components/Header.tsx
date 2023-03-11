import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header className='flex-row'>
        <div className='flex flex-row item-center'>
            {/* Social Icons */}
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
        </div>
        <div>
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex'>Get in touch</p>
        </div>
    </header>

  )
}

export default Header