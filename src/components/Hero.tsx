import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';


type Props = {}

function Hero({}: Props) {
    const peanut = '/assets/peanut.jpg'
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
                <h2 >
                    MORKIE (Origin: Fili-Peanut)
                </h2>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor='#f7ab0a'/>
                </h1>
            </div>
        </div>
    )
}

export default Hero