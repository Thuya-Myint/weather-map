import React, { useEffect } from 'react';
import MapComponent from './components/MapComponent';
import CurrentComponent from './components/CurrentComponent'
import { useRecoilValueLoadable, useSetRecoilState, useRecoilState } from 'recoil';
import { getWeatherInformation } from './state/selector';
import { weatherState } from './state/atom';
import { searchState } from './state/atom';
import TemperatureComponent from './components/TemperatureComponent';
import ChangeName from './components/ChangeName';
import 'leaflet/dist/leaflet.css';


const App = () => {
    const setWeather = useSetRecoilState(weatherState)
    const weather = useRecoilValueLoadable(getWeatherInformation)
    const [searching, setSearching] = useRecoilState(searchState);
    useEffect(() => {
        setWeather(weather);
        console.log(weather)
        if (!weather.contents) console.log('not found')
    }, [weather, setWeather])
    return (
        weather?.contents?.error ?
            < div className='w-screen h-screen flex flex-col font-sat justify-center items-center' >
                <div className='text-[2rem] italic'>Sorry, Searched City Not Found!</div>
                <button className='bg-slate-100 border-2 border-slate-300 p-2 rounded-md' onClick={() => window.location.reload()}>Refresh</button>
            </div > :
            <div className='w-screen h-screen bg-black relative overflow-hidden'>
                <MapComponent />
                <CurrentComponent />
                <TemperatureComponent />
                <ChangeName />

                <div className={`w-full h-full absolute top-0 left-0 flex items-center justify-center ${searching ? 'z-40' : 'z-0'} `}>
                    <div className={`transition-all rounded-full bg-black bg-opacity-30 ${searching ? 'w-[3000px] h-[3000px] duration-1000' : 'w-[0px] h-[0px] duration-500'}`}
                        onClick={() => setSearching(false)}>

                    </div>
                </div>
            </div>
    )
}

export default App
