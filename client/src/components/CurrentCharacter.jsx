import React from 'react'
import { useAppContext } from '../hooks'

export default function CurrentCharacter () {
    const context = useAppContext()
    const { data, currentPos } = context[0]
    const currentCharacter = data[currentPos - 1]
    
    return (
        <div className="current-character">
            { currentPos && (
                <>
                    <div 
                        className="current-character-img" 
                        style={{ backgroundImage: `url(${currentCharacter.full_img})` }}
                        role="img"
                    ></div>
                    <h3>{ currentCharacter.name }</h3>
                </>
            )}
        </div>
    )
}