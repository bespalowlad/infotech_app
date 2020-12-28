import React, { useEffect } from 'react'
import { TableOfCharacters, CurrentCharacter } from '../components'
import { getCharacters } from '../api'
import { useAppContext } from '../hooks'
import { fetchingData, successReceivedData, failureReceiveData } from '../actions'
import gif from '../assets/images/gif.gif'

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
            <div className="wrapper">
                {state.hasError ? 
                    (<>
                        <h1>Something went wrong, please try again</h1>
                        <img className="gif" src={ gif } alt="Gif"/>
                    </>) :
                    (<>
                        <h1>Select your fighter</h1>
                        <div className="content-wrapper">
                            <CurrentCharacter />
                            <TableOfCharacters />
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}