import React, { useReducer } from 'react'
import { FETCHING_DATA, SUCCESS_RECEIVED_DATA, FAILURE_RECEIVE_DATA,
    UPDATE_X_INDEX, UPDATE_Y_INDEX } from '../constants'

const AppContext = React.createContext()

const initialState = {
    isFetching: false,
    hasError: false,
    data: [],
    xIndex: undefined,
    yIndex: undefined
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
                xIndex: 0,
                yIndex: 0
            }
        }

        case FAILURE_RECEIVE_DATA: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }

        case UPDATE_X_INDEX: {
            return {
                ...state,
                xIndex: action.index
            }
        }

        case UPDATE_Y_INDEX: {
            return {
                ...state,
                yIndex: action.index
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