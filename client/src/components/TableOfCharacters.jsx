import React from 'react'
import { useHistory } from "react-router-dom"
import CellOfCharacter from './CellOfCharacter'
import { useEventListener, useAppContext } from '../hooks'
import { updateIndex } from '../actions'

export default function TableOfCharacters () {
    const history = useHistory();
    const [ state, dispatch ] = useAppContext()
    const { data, currentPos } = state

    const SIZE_ROW = 5
    
    const handleKeyDown = (event) => {
        const arrowKeys = [13, 37, 38, 39, 40]
        const { keyCode } = event
        
        if (arrowKeys.includes(keyCode)) {   
            switch(keyCode) {
                case 13: {
                    return startFight()
                }
                
                case 37: {
                    return moveTo(-1)
                }

                case 39: {
                    return moveTo(1)
                }

                case 38: {
                    return moveTo(-SIZE_ROW)
                }

                case 40: {
                    return moveTo(SIZE_ROW)
                }

                default: {
                    return false
                }
            }
        }
    }

    const moveTo = (step) => {
        let newPos

        if (Math.abs(step) === 1) {
            newPos = step > 0 ?
                (currentPos + step > data.length ? 1 : currentPos + 1) :
                (currentPos + step === 0 ? data.length : currentPos - 1)
        } else if (Math.abs(step) === SIZE_ROW) {
            newPos = step > 0 ?
                (currentPos + step <= data.length ? currentPos + step : currentPos) :
                (currentPos + step <= 0 ? currentPos : currentPos + step)
        }

        dispatch(updateIndex(newPos))
    }

    const startFight = () => {
        if (!currentPos) {
            return false
        }

        history.push('/scene')
    }
    
    useEventListener('keydown', handleKeyDown)
    
    return (
        <div className="table">
            {data.length && data.map((item, index) => (
                <CellOfCharacter 
                    key={ item._id } 
                    image={ item.avatar } 
                    active={ index + 1 === currentPos } 
                />
            ))}
        </div>
    )
}