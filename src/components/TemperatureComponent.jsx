import React from 'react'
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { useRecoilState } from 'recoil';
import { unitState } from '../state/atom';

const TemperatureComponent = () => {
    const [unit, setUnit] = useRecoilState(unitState)
    const toggleUnitState = () => {
        setUnit(!unit)
    }
    return (
        <div className=' cursor-pointer w-[34px] h-[130px] lg:w-[180px] lg:h-[40px]  z-50 bg-white shadow-gray-300 rounded-md shadow-sm absolute lg:top-[2%] top-[15%] lg:left-[60px] left-[10px]  flex lg:flex-row flex-col items-center '>
            <div className='bg-slate-100 lg:w-1/3 w-full lg:rounded-tl-md lg:rounded-bl-md rounded-t-md h-full flex items-center justify-center'><LiaTemperatureHighSolid className='text-2xl' /></div>
            <div className={`lg:w-1/3 w-full transition-all h-full duration-300  flex items-center justify-center ${unit && 'bg-black bg-opacity-10 '}`} onClick={toggleUnitState}><TbTemperatureCelsius /></div>
            <div className={`lg:w-1/3 w-full transition-all h-full duration-300  flex items-center justify-center  lg:rounded-br-md lg:rounded-tr-md rounded-b-md ${!unit && 'bg-black bg-opacity-20 '}`} onClick={toggleUnitState}><TbTemperatureFahrenheit /></div>
        </div>
    )
}

export default TemperatureComponent
