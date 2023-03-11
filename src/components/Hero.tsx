import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Wsup, Im Mike", 
            "Adventurer-who-loves-@SushiStation.tsx", 
            "<LoveFrenchFries />", 
            "Global-Citizen-Generosity-minded"
        ],
        loop: true,
        delaySpeed: 2000,
    })


    return (
        <div>Hero</div>
    )
}

export default Hero