import {PUT_MESSAGE} from "../actions/weatherAppAction.js";


export const defaultState = {
    message: '',
}

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state
    }
}