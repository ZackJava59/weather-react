import {PUT_WEATHER} from "../actions/weatherAppAction.js";

export const defaultState = {
    city: '',
    country: '',
    temp: null,
    pressure: null,
    sunset: null,
    cityName: '',
    timeStamp: null
}

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, ...action.payload}
        default:
            return state
    }
}