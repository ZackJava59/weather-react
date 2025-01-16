import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useRef, useState} from "react";
import {weather_cache_time} from "../utils/constants.js";

const Data = () => {
        const [city, setCity] = useState(null);
        const lastRequest = useRef({name: null, timeStamp: 0});

        const handleCityChange = (newCity) => {
            const currentTime = Date.now();
            if (newCity.name !== lastRequest.current.name || currentTime - lastRequest.current.timeStamp > weather_cache_time) {
                setCity(newCity);
                lastRequest.current = {...newCity, timeStamp: currentTime};
            }
        };

        return (
            <div className={'col-sm-7 form'}>
                <Form setCity={handleCityChange}/>
                <Weather city={city}/>
            </div>
        );
    }
;

export default Data;