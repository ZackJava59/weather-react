import {api_key, base_url, weather_cache_time} from "../utils/constants.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {putMessage, putWeather} from "../actions/weatherAppAction.js";

const Weather = () => {
    const {city, timeStamp} = useSelector(state => state.city);
    const weather = useSelector((state) => state.weather);
    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();

    const getWeather = async () => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            dispatch(putWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000,
                cityName: city,
                timeStamp: Date.now()
            }))
            dispatch(putMessage(''));
        } catch (e) {
            dispatch(putMessage(e.message));
        }
    }

    useEffect(() => {
        if (city && !(city === weather.cityName && (timeStamp - weather.timeStamp) < weather_cache_time)) {
            getWeather();
        }
    }, [city, weather]);

    return (
        <div className={'infoWeath'}>
            {!message && weather &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message && <p>{message}</p>}
        </div>
    );


};

export default Weather;