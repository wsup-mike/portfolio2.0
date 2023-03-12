import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';



type Props = {}

function Hero({}: Props) {
    const peanut = '/assets/peanut.jpg'
    const philippineFlag = String.fromCodePoint(0x1F1F5, 0x1F1ED);
    
    const puppy = String.fromCodePoint(0x1F436);
    const [text, count] = useTypewriter({
        words: [
            "Wsup, Im Peanut!", 
            "I love going to the park...a LOT!", 
            "<LoveFrenchFries />", 
            "Gizzards are my thing..."
        ],
        loop: true,
        delaySpeed: 2000,
    })


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src={peanut} className='h-32 w-32 relative rounded-full mx-auto object-cover' alt="Peanuts picture!" />
            <div>
                <h2 className='text-sm text-gray-500 pb-2 tracking-[3px]'>
                    <em>Breed</em>: MORKIE (Origin: Fili-Peanut) {philippineFlag} {puppy}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10
                '>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a'/>
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero