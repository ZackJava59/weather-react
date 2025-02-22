import {useDispatch} from "react-redux";
import {getCity} from "../actions/weatherAppAction.js";

const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = e => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (!city) return;
        dispatch(getCity(city, Date.now()));
        e.target.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;