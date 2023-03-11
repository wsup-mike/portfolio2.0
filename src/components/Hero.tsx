import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

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
        <div>
            <BackgroundCircles />
            <h1>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a'/>
            </h1>
        </div>
    )
}

export default Hero