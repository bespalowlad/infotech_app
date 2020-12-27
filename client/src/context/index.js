import React, { useReducer } from 'react'
import { FETCHING_DATA, SUCCESS_RECEIVED_DATA, FAILURE_RECEIVE_DATA,
    UPDATE_INDEX } from '../constants'

const AppContext = React.createContext()

const initialState = {
    isFetching: false,
    hasError: false,
    data: [],
    currentPos: undefined
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
                isFetching: false,
                currentPos: 1
            }
        }

        case FAILURE_RECEIVE_DATA: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }

        case UPDATE_INDEX: {
            return {
                ...state,
                currentPos: action.index
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

export { Provider, AppContext }