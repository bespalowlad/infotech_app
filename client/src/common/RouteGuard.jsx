import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../hooks'

export default function RouteGuard ({ component: Component, ...rest }) {
    const context = useAppContext()

    return (
        <Route 
            {...rest}
            render={
                () => context[0].currentPos ? <Component /> : <Redirect to="/" />
            }
        />
    )
}