import React, { useEffect, useState } from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchState } from '../state/atom';
import { cityState } from '../state/atom';
import { latLonState } from '../state/atom';
import { weatherState } from '../state/atom';
const ChangeName = () => {
    const [cityIn, setCityIn] = useState('');
    const [search, setSearch] = useRecoilState(searchState);
    const SetCurrentCity = useSetRecoilState(cityState);
    const [coor, setCoor] = useRecoilState(latLonState);
    const weather = useRecoilValue(weatherState);
    useEffect(() => {
        setCoor({
            lat: weather?.contents?.location?.lat,
            lon: weather?.contents?.location?.lon
        })
    }, [weather])
    const handleSearch = () => {
        if (cityIn.trim() === '') return
        SetCurrentCity(cityIn);
        console.log(weather?.contents)

        setSearch(false);
    }
    return (
        <div className=' cursor-pointer w-[710px] h-[50px] z-50 bg-white shadow-gray-300 rounded-md shadow-sm absolute top-[2%] left-[18%]  flex items-center p-1 gap-2 justify-evenly'>
            <div className='w-[10%] h-full flex items-center justify-center bg-black bg-opacity-20 rounded-sm'>
                <MdOutlineScreenSearchDesktop className='text-2xl' />
            </div>
            <div className='w-[70%] h-full flex items-center justify-center'>
                <input value={cityIn} type="text" className='w-full bg-transparent font-sat border-b-2 outline-none p-1' placeholder='Enter City Name to Search?' onChange={(e) => setCityIn(e.target.value)} onFocus={() => setSearch(true)} />
            </div>
            <div className='w-[10%] h-full flex items-center justify-center font-sat'>
                <button className='w-[100%] h-full flex items-center justify-center rounded-md bg-skyBlue' onClick={handleSearch}>Search</button>
            </div>

        </div>
    )
}

export default ChangeName
