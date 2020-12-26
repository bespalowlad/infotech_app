import { FETCHING_DATA, SUCCESS_RECEIVED_DATA, FAILURE_RECEIVE_DATA,
    UPDATE_X_INDEX, UPDATE_Y_INDEX } from '../constants'

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

export const updateXIndex = (index) => ({
    type: UPDATE_X_INDEX,
    index
})

export const updateYIndex = (index) => ({
    type: UPDATE_Y_INDEX,
    index
})

