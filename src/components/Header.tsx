import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row item-center'>
            {/* Social Icons */}
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
        </div>
        <div>
            
        </div>
    </header>

  )
}

export default Header