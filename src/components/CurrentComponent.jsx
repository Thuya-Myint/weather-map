import React, { useEffect, useState } from 'react'
import { cityState } from '../state/atom'
import { dateState } from '../state/atom'
import { useRecoilValue } from 'recoil'
import { weatherState } from '../state/atom';
import { unitState } from '../state/atom';
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { VscMilestone } from "react-icons/vsc";
import { TbMapPinCheck } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { TbUvIndex } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";
import { RiPinDistanceLine } from "react-icons/ri";
import { TiWeatherWindyCloudy } from "react-icons/ti"
import { MdOutlineDirections } from "react-icons/md";
import { MdSpeed } from "react-icons/md";

const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const CurrentComponent = () => {
    const city = useRecoilValue(cityState);
    const currentDate = useRecoilValue(dateState);
    const weather = useRecoilValue(weatherState);
    const [detail, setDetail] = useState(false);
    const unit = useRecoilValue(unitState);

    useEffect(() => {
        console.log('weather', weather)
    }, [weather])
    const toggleDetails = () => {
        setDetail(!detail)
    }
    return (

        <div className={`transition-all duration-500 ${detail ? 'h-[70vh] ' : 'h-[35vh] '} cursor-pointer w-[30vw] z-50 bg-white shadow-gray-300 rounded-md shadow-sm absolute top-[2%] left-[69%]  p-1`}>

            {
                isEmptyObject(weather) ?
                    'Loading Weather Data . . . .' :
                    <div className='w-full h-full'>
                        <div className='p-2 flex justify-between font-sat text-[1rem] bg-black bg-opacity-20 rounded-sm'>
                            <div className='text-gray-600 flex items-center'><CiCalendarDate className='mr-1' />{currentDate}</div>
                            <div className=' flex items-center'>{city}{", " + weather?.contents?.location?.country}<TbMapPinCheck className='ml-1' /></div>
                        </div>
                        <div className=' flex justify-between font-sat items-center px-2'>
                            <div className='bg-black w-[50px] h-[50px] rounded-full p-2 bg-opacity-20 mt-2'>
                                <img src={weather?.contents?.current?.condition.icon} alt="" className='w-full h-full' />
                            </div>
                            <div>{weather?.contents?.current?.condition.text}</div>
                        </div>
                        <div className='w-full font-sat'>
                            <div className='flex items-center justify-center bg-black p-1 bg-opacity-35 mt-2 rounded-t-sm'>Weather Information </div>
                            <div className='mt-1 flex overflow-hidden bg-black p-2 bg-opacity-10 rounded-b-sm flex-wrap'>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>Actual {unit ? <TbTemperatureCelsius className='' /> : <TbTemperatureFahrenheit className='' />}</div>
                                    <div className='text-center font-semibold'>{unit ? weather?.contents?.current?.temp_c : weather?.contents?.current?.temp_f}</div>
                                </div>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>Wind<VscMilestone className='ml-2' /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.humidity}<span className='font-light ml-1'>MPH</span></div>
                                </div>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>Pressure</div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.pressure_in}<span className='font-light ml-1'></span></div>
                                </div>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>UV<TbUvIndex className='ml-1' /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.uv}</div>
                                </div>

                            </div>
                        </div>



                        <div className={`transition-all duration-500 ${detail ? 'scale-100' : 'scale-0 '} w-full font-sat mt-4 border-b-2 border-black border-opacity-10 `}>
                            <div>Temperature</div>
                            <div className='mt-1 flex overflow-hidden  p-2 rounded-b-sm flex-wrap'>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>Actual {unit ? <TbTemperatureCelsius className='' /> : <TbTemperatureFahrenheit className='' />}</div>
                                    <div className='text-center font-semibold'>{unit ? weather?.contents?.current?.temp_c : weather?.contents?.current?.temp_f}</div>
                                </div>
                                <div className='w-1/4 '>
                                    <div className='flex items-center justify-center'>Comfort {unit ? <TbTemperatureCelsius className='' /> : <TbTemperatureFahrenheit className='' />}</div>
                                    <div className='text-center font-semibold'>{unit ? weather?.contents?.current?.feelslike_c : weather?.contents?.current?.feelslike_f}</div>
                                </div>
                                <div className='w-1/4 '>
                                    <div className='flex items-center justify-center'>Apparent {unit ? <TbTemperatureCelsius className='' /> : <TbTemperatureFahrenheit className='' />}</div>
                                    <div className='text-center font-semibold'>{unit ? weather?.contents?.current?.dewpoint_c : weather?.contents?.current?.dewpoint_f}</div>
                                </div>
                                <div className='w-1/4'>
                                    <div className='flex items-center justify-center'>Heat {unit ? <TbTemperatureCelsius className='' /> : <TbTemperatureFahrenheit className='' />}</div>
                                    <div className='text-center font-semibold'>{unit ? weather?.contents?.current?.heatindex_c : weather?.contents?.current?.heatindex_f}</div>
                                </div>
                            </div>
                        </div>
                        <div className={`transition-all ${detail ? 'scale-100 duration-700' : 'scale-0 duration-300'}  w-full font-sat mt-2  border-black border-opacity-10`}>
                            <div>Others</div>
                            <div className={` mt-1 flex overflow-hidden p-2 gap-1  rounded-b-sm flex-wrap`}>
                                <div className={`w-[32%] bg-slate-100 rounded-sm ${detail ? 'scale-100 duration-1000' : 'scale-0 duration-300'}`}>
                                    <div className='flex items-center justify-center'>Precip <MdOutlineWaterDrop /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.precip_in}</div>
                                </div>
                                <div className={`w-[32%] bg-slate-100 rounded-sm ${detail ? 'scale-100 duration-[1000ms]' : 'scale-0 duration-300'}`}>
                                    <div className='flex items-center justify-center'>Visiable <RiPinDistanceLine /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.vis_km}<span className='font-light ml-1'>km</span></div>
                                </div>
                                <div className={`w-[32%] bg-slate-100 rounded-sm ${detail ? 'scale-100 duration-[1000ms]' : 'scale-0 duration-300'}`}>
                                    <div className='flex items-center justify-center'>Wind<TiWeatherWindyCloudy /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.wind_degree}<span className='font-light ml-1'>deg</span></div>
                                </div>
                                <div className={`w-[32%] bg-slate-100 rounded-sm ${detail ? 'scale-100 duration-[1000ms]' : 'scale-0 duration-300'}`}>
                                    <div className='flex items-center justify-center'>Wind<MdOutlineDirections /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.wind_dir}<span className='font-light ml-1'></span></div>
                                </div>
                                <div className={`w-[32%] bg-slate-100 rounded-sm ${detail ? 'scale-100 duration-[1000ms]' : 'scale-0 duration-300'}`}>
                                    <div className='flex items-center justify-center'>Wind<MdSpeed /></div>
                                    <div className='text-center font-semibold'>{weather?.contents?.current?.wind_kph}<span className='font-light ml-1'>kph</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute bottom-0 p-1 left-0 rounded-b-md font-sat w-full text-center bg-slate-100 `} onClick={toggleDetails}>{detail ? 'Show Brief' : 'Show Details'}</div>
                    </div>

            }


        </div >



    )
}

export default CurrentComponent
