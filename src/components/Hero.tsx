import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';


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
            <div className='z-20'>
                <h2 className='sm:text-sm md:text-md lg:text-xl text-gray-500 pb-2 tracking-[3px]'>
                    <em>Breed</em>: MORKIE (Origin: Fili-Peanut) {philippineFlag} {puppy}
                </h2>
                <h1 className='sm:text-lg md:text-4xl lg:text-6xl font-semibold px-10
                '>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a'/>
                </h1>
                <div className='pt-5 space-x-3 space-y-3'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero