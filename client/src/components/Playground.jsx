import React from 'react'
import { useAppContext } from '../hooks'
import CurrentCharacter from './CurrentCharacter'

export default function Playground () {
    const [ state, dispatch ] = useAppContext()
    const { data, currentPos } = state
    const currentCharacter = data[currentPos - 1]
    
    return (
        <div className="playground">
            <div className="player">
                <img src={ currentCharacter.full_img } alt={ currentCharacter.name } />
            </div>
        </div>
    )
}