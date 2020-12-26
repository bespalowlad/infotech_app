import React from 'react'
import CellOfCharacter from './CellOfCharacter'
import { useAppContext } from '../context'

export default function TableOfCharacters () {
    const context = useAppContext()
    const { data } = context[0]
    
    return (
        <div className="table">
            {data.length && data.map(item => (
                <CellOfCharacter key={ item._id } image={ item.avatar } />
            ))}
        </div>
    )
}