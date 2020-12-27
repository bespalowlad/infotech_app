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
                    <img src={ currentCharacter.full_img } alt={ currentCharacter.name } />
                    <h3>{ currentCharacter.name }</h3>
                </>
            )}
        </div>
    )
}