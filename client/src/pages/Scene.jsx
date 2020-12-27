import React from 'react'
import { Playground, ControlBar } from '../components'

export default function Scene () {    
    return (
        <div className="scene-page">
            <h1>Battle 1</h1>
            <div className="wrapper">
                <Playground />
                <ControlBar />
            </div>
        </div>
    )
}