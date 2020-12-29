import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { TableOfCharacters, CurrentCharacter } from '../components'
import { getCharacters } from '../api'
import { useAppContext } from '../hooks'
import { fetchingData, successReceivedData, failureReceiveData } from '../actions'
import gif from '../assets/images/gif.gif'

export default function Home () {
    const [ isLoading, setIsLoading ] = useState(true)
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
            setIsLoading(false)
        }

        fetchData()
    }, [dispatch])
    
    return (
        <div className="home-page">
            <div className="wrapper">
                {isLoading && (
                    <div className="spinner">
                        <FontAwesomeIcon icon={ faSpinner } color="white" size="4x" spin />
                    </div>
                )}
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