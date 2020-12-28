import React, { useState, useEffect } from 'react'
import { Control } from '../common'
import { useEventListener } from '../hooks'
import { faBolt, faEye, faSpider, faParachuteBox, faAllergies } from '@fortawesome/free-solid-svg-icons'

const icons = [faBolt, faEye, faSpider, faParachuteBox, faAllergies]

const combinations = {
    0: {
        c: [1, 1, 1, 0, 0, 0],
        message: 'Райден, осмелишься ли ты пойти против Бога?'
    },
    1: {
        c: [1, 1, 1, 1, 2, 3],
        message: 'Такой талант — и впустую!'
    },
    2: {
        c: [0, 1, 0, 2, 0, 3],
        message: 'Если есть мужество, можно начать всё заново'
    },
    3: {
        c: [0, 0, 0, 2, 3, 4],
        message: 'Тебе стоило бы сменить ход мыслей'
    },
    4: {
        c: [4, 3, 2, 1, 0, 0],
        message: 'Спорим на полтинник, что я выиграю?'
    }
}

const compare = (curr, given) => {
    for (let key in given) {
        const arr = given[key].c
        let isMatch = false

        for(let j = 0; j < arr.length; j++) {
            if (arr[j] === curr[j]) {
                isMatch = true
                continue
            } else {
                isMatch = false
                break
            }
        }

        if (isMatch) return given[key]
    }

    return false
}

export default function ControlBar () {
    const [buttons, setButtons] = useState({
        'q': 0,
        'w': 0,
        'e': 0,
        'r': 0,
        't': 0,
        'y': 0
    })

    useEffect(() => {
        const currentComb = Object.values(buttons)
        const foundComb = compare(currentComb, combinations)

        if (foundComb) {
            alert(foundComb.message)
        }
    }, [buttons])
    
    const handleKeyDown = (event) => {
        const keys = ['q', 'w', 'e', 'r', 't', 'y']
        const key = event.key.toLowerCase()

        if (keys.includes(key)) {
            setButtons(prevState => ({
                ...prevState,
                [key]: (prevState[key] + 1) % icons.length
            }))
        }
    }

    const getIconsByKey = (key) => icons[buttons[key]]
    
    useEventListener('keydown', handleKeyDown)

    return (
        <div className="control-bar">
            <Control icon={ getIconsByKey('q') } />
            <Control icon={ getIconsByKey('w') } /> 
            <Control icon={ getIconsByKey('e') } /> 
            <Control icon={ getIconsByKey('r') } /> 
            <Control icon={ getIconsByKey('t') } />             
            <Control icon={ getIconsByKey('y') } /> 
        </div>
    )
}