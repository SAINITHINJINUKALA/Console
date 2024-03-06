import React from 'react'

function MonthCard(props) {
    let arr=[];
    if (props.month==="JAN" || props.month==="MAR"||props.month==="MAY"||props.month==="JUL"||props.month==="AUG"||props.month==="OCT"||props.month==="DEC"){
        for (let index = 1; index <= 31; index++) {
            arr.push(<div className='bg-[#f4f4f4] rounded-[4px] h-[20px] w-[20px] cursor-pointer hover:border-[1px] border-black text-[10px] text-center py-1 '  key={index}>{index}</div>)
        }
    }
    else if (props.month==="APR" || props.month==="JUN"||props.month==="SEP"||props.month==="NOV"){
        for (let index = 1; index < 31; index++) {
            arr.push(<div className='bg-[#f4f4f4] rounded-[4px] h-[20px] w-[20px] cursor-pointer hover:border-[1px] border-black text-[10px] text-center py-1 ' key={index}>{index}</div>)
        }
    }
    else{
        for (let index = 1; index <= 28; index++) {
            arr.push(<div className='bg-[#f4f4f4] rounded-[4px] h-[20px] w-[20px] cursor-pointer hover:border-[1px] border-black text-[10px] text-center py-1 ' key={index}>{index}</div>)
        }
    }
  return (
    <div className='flex flex-col font-HedvigLetter
    sSans'>
        <span style={{
            fontWeight:600
        }} className='py-2 text-sm text-center font-extralight'>{props.month}</span>
        <div className='flex ml-[3px] mb-2 justify-between '>   
		<span class="text-sm ">S</span>
        <span class="text-sm">M</span>
		<span class="text-sm">T</span>
		<span class="text-sm">W</span>
		<span class="text-sm">T</span>
		<span class="text-sm">F</span>
		<span class="text-sm">S</span>
        </div>
        <div className="grid grid-cols-7  gap-2 w-40 mb-2">{arr}</div>
        </div>
    
  )
}

export default MonthCard