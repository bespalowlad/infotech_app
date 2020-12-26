import React from 'react'
import { useAppContext } from '../context'

export default function Scene () {
    const context = useAppContext()
    console.log('context: ', context)
    
    return (
        <div>Home</div>
    )
}