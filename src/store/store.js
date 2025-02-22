import {combineReducers, legacy_createStore as createStore} from "redux";
import {cityReducer} from "../reducers/cityReducer.js";
import {weatherReducer} from "../reducers/weatherReducer.js";
import {messageReducer} from "../reducers/messageReducer.js";

export const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    message: messageReducer,
})

export const store = createStore(rootReducer)