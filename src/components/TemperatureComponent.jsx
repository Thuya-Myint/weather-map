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
        <div className=' cursor-pointer w-[34px] h-[130px] lg:w-[50px] lg:h-[150px]  z-50 bg-white shadow-gray-300 rounded-md shadow-sm absolute  top-[15%]  left-[10px]  flex flex-col items-center '>
            <div className='bg-slate-100 w-full   rounded-t-md h-full flex items-center justify-center'><LiaTemperatureHighSolid className='text-2xl' /></div>
            <div className={` w-full transition-all h-full duration-300  flex items-center justify-center ${unit && 'bg-black bg-opacity-10 '}`} onClick={toggleUnitState}><TbTemperatureCelsius /></div>
            <div className={`w-full transition-all h-full duration-300  flex items-center justify-center    rounded-b-md ${!unit && 'bg-black bg-opacity-20 '}`} onClick={toggleUnitState}><TbTemperatureFahrenheit /></div>
        </div>
    )
}

export default TemperatureComponent
