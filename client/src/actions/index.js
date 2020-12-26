import { FETCHING_DATA, SUCCESS_RECEIVED_DATA, FAILURE_RECEIVE_DATA } from '../constants'

export const fetchingData = (payload) => ({
    type: FETCHING_DATA,
    payload
})

export const successReceivedData = (data) => ({
    type: SUCCESS_RECEIVED_DATA,
    data
})

export const failureReceiveData = () => ({
    type: FAILURE_RECEIVE_DATA
})