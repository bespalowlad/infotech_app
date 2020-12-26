import React, { useEffect } from 'react'
import { TableOfCharacters, CurrentCharacter } from '../components'
import { getCharacters } from '../api'
import { useAppContext } from '../hooks'
import { fetchingData, successReceivedData, failureReceiveData } from '../actions'

export default function Home () {
    const [ state, dispatch ] = useAppContext()

    useEffect(() => {
        dispatch(fetchingData(true))
        const fetchData = async () => {
            try {
                const { data }  = await getCharacters()
                dispatch(successReceivedData(data))
            } catch (err) {
                dispatch(failureReceiveData())
            }
        }

        fetchData()
    }, [dispatch])
    
    return (
        <div className="home-page">
            <h1>Select your fighter</h1>
            <div className="wrapper">
                <CurrentCharacter />
                <TableOfCharacters />
            </div>
        </div>
    )
}