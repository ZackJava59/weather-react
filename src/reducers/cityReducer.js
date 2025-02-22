import {CITY} from "../actions/weatherAppAction.js";


export const defaultState = {
    city: '',
    timeStamp: null,
}

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CITY:
            return {...state, city: action.payload.city, timeStamp: action.payload.timeStamp};
        default:
            return state;
    }
}