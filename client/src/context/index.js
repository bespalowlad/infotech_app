import React, { useReducer, useContext } from 'react'

const AppContext = React.createContext()

const initialState = {
    default: 'default'
}

function reducer (state, action) {
    switch(action.type) {
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