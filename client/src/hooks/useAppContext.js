import { useContext } from 'react'
import { AppContext } from '../context'

export default function useAppContext () {
    const context = useContext(AppContext)
    return context
}