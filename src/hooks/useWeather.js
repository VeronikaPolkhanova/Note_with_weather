import { useState, useEffect } from 'react';

function useWeather() {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a6badb0944d60096f840fa00afb2dc6d')
            .then((response) => {
                return response.json();
            })
            .then((response) => setWeather(response))
            .catch(error => alert(error));
    }, []);
    return weather;
}
export { useWeather };
