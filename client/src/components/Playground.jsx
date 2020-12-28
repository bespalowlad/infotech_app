import React from 'react'
import { useAppContext } from '../hooks'

export default function Playground () {
    const [ state, dispatch ] = useAppContext()
    const { data, currentPos } = state
    const currentCharacter = data[currentPos - 1]
    const randomCharacter = data[Math.floor(Math.random() * data.length)]
    
    return (
        <div className="playground">
            <div 
                className="player active" 
                style={{ backgroundImage: `url(${currentCharacter.full_img})` }}
                role="img"
            ></div>
            <div 
                className="player active" 
                style={{ backgroundImage: `url(${randomCharacter.full_img})` }}
                role="img"
            ></div>
        </div>
    )
}