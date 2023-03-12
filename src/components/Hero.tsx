import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Wsup, Im Mike!", 
            "Adventurer-who-loves-@SushiStation.tsx", 
            "<LoveFrenchFries />", 
            "Global-Citizen-Generosity-minded"
        ],
        loop: true,
        delaySpeed: 2000,
    })


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src="../assets/peanut.jpg" className='h-32 w-32' alt="Peanuts picture!" />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#f7ab0a'/>
            </h1>
        </div>
    )
}

export default Hero