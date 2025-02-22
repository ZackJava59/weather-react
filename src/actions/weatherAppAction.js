export const CITY = 'CITY';
export const PUT_WEATHER = 'PUT_WEATHER';
export const PUT_MESSAGE = 'PUT_MESSAGE';

export const getCity = (city, timeStamp) => ({
    type: 'CITY',
    payload: {city, timeStamp}
})

export const putWeather = (weather) => ({
    type: 'PUT_WEATHER',
    payload: weather
})

export const putMessage = (message) => ({
    type: 'PUT_MESSAGE',
    payload: message
})