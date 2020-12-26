import React, { useReducer, useContext } from 'react'
import { FETCHING_DATA, SUCCESS_RECEIVED_DATA, FAILURE_RECEIVE_DATA } from '../constants'

const AppContext = React.createContext()

const initialState = {
    isFetching: false,
    hasError: false,
    data: []
}

function reducer (state, action) {
    switch(action.type) {
        case FETCHING_DATA: {
            return {
                ...state,
                isFetching: action.payload,
                hasError: false
            }
        }

        case SUCCESS_RECEIVED_DATA: {
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        }

        case FAILURE_RECEIVE_DATA: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }
        
        default: {
            return state
        }
    }
}

function Provider ({ children }) {
    const value = useReducer(reducer, initialState)
    
    return (
        <AppContext.Provider value={ value }>
            { children }
        </AppContext.Provider>
    )
}

function useAppContext () {
    const context = useContext(AppContext)
    return context
}

export { Provider, useAppContext }