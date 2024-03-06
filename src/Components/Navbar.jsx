import React from 'react'

function Navbar() {
  return (
    <div className='flex fixed w-screen  justify-around h-16 items-center font-HedvigLettersSans border-b-2 shadow-md z-20 bg-white'>
        <div className='w-24 cursor-pointer'> 
        <img src="https://console.zerodha.com/static/images/logo.svg" alt="" />
        </div>

        <div >
            <ul className='flex space-x-10 text-[14px] text-[#929191] cursor-pointer'>
                <li className='hover:text-blue-600 '>Dashboard</li>
                <li className='hover:text-blue-600 '>Portfolio</li>
                <li className='hover:text-blue-600 '>Reports</li>
                <li className='hover:text-blue-600 '>Funds</li>
                <li className='hover:text-blue-600 '>Account</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar