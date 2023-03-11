import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div>
            {/* Social Icons */}
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/sonnysangha' fgColor='gray' bgColor='transparent'/>
        </div>
    </header>

  )
}

export default Header