const Form = ({setCity}) => {

    const handleClickGetWeather = e => {
        e.preventDefault();
        const cityName = e.target.city.value.trim();
        if (cityName) {
            setCity({name: cityName, timeStamp: Date.now()});
        }
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