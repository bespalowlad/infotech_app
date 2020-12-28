import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Playground, ControlBar } from '../components'

export default function Scene () {
    const history = useHistory()
    useEffect(() => {
        const timerId = setTimeout(() => {
            history.push('/')
        }, 10000)

        return () => {
            clearTimeout(timerId)
        }
    }, [])
        
    return (
        <div className="scene-page">
            <div className="wrapper">
                <h1>Battle 1</h1>
                <Playground />
                <ControlBar />
            </div>
        </div>
    )
}