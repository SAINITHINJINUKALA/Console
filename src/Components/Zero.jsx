import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
function Zero() {
  const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
  return (
    <div className='mx-15 px-24 py-7 pt-20 font-HedvigLettersSans   '>
        <div className='flex'>
            <img className=" " src="https://console.zerodha.com/static/images/bar-chart.svg" alt="" />
            <span className="text-2xl opacity-50">P&L</span>
        </div>
        <form className='flex space-x-8 mt-5'>
        <div className=" flex  flex-col -space-y-2 ">
                <div className='px-4 py-1 -mb-1 w-fit z-10 bg-white ml-3' ><label>Segment</label></div>
                <select className="w-44 px-4 py-2 border-2 rounded-md text-sm mt-4">
                    <option value="Equity">Equity</option>
                    <option value="Future&Options">Future&Options</option>
                    <option value="Currency">Currency</option>
                    <option value="Commodity">Commodity</option>
                    <option value="Mutual Funds">Mutual Funds</option>
                </select>
        </div>
        
        <div className=" flex flex-col -space-y-2 ">
                <div className='px-4 py-1 -mb-1 w-fit z-10 bg-white ml-3' ><label>Date by Range</label></div>
                <Datepicker
                    value={value} 
                    onChange={handleValueChange}
                    /> 
        </div>
        </form>
        
    </div>
  )
}

export default Zero