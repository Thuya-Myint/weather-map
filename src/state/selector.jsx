import { selector } from "recoil";
import { cityState } from "./atom";

const WEATHERAPI = import.meta.env.VITE_WEATHER_API;

export const getWeatherInformation = selector({
    key: 'getWeatherInformation',
    get: async ({ get }) => {
        const city = get(cityState);
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHERAPI}&q=${city}&aqi=yes`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
})
