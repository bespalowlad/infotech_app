import React from 'react'
import CellOfCharacter from './CellOfCharacter'
import { useEventListener, useAppContext } from '../hooks'
import { updateXIndex, updateYIndex } from '../actions'

export default function TableOfCharacters () {
    const [ state, dispatch ] = useAppContext()
    const { data, xIndex, yIndex } = state

    const SIZE_ROW = 5
    
    const handleKeyDown = (event) => {
        const arrowKeys = [37, 38, 39, 40]
        const { keyCode } = event
        
        if (arrowKeys.includes(keyCode)) {            
            switch(keyCode) {
                case 37: {
                    return dispatch(updateXIndex(xIndex === 0 ? SIZE_ROW - 1 : xIndex - 1))
                }

                case 39: {
                    const nextIndex = yIndex * SIZE_ROW + xIndex + 1
                    if (!!data[nextIndex]) {
                        return dispatch(updateXIndex(xIndex === SIZE_ROW - 1 ? 0 : xIndex + 1))
                    }
                    return dispatch(updateXIndex(0))
                }

                case 38: {
                    return dispatch(updateYIndex(yIndex === 0 ? Math.floor(data.length / SIZE_ROW) : yIndex - 1))
                }

                case 40: {
                    return dispatch(updateYIndex(yIndex === Math.floor(data.length / SIZE_ROW) ? 0 : yIndex + 1))
                }
            }
        }
    }
    
    useEventListener('keydown', handleKeyDown)
    
    return (
        <div className="table">
            {data.length && data.map((item, index) => (
                <CellOfCharacter 
                    key={ item._id } 
                    image={ item.avatar } 
                    active={ index === yIndex * SIZE_ROW + xIndex } 
                    xIndex={ index % SIZE_ROW }
                    yIndex={ Math.floor(index / SIZE_ROW) }
                />
            ))}
        </div>
    )
}