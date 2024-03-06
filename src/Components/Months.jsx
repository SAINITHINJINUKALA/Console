import React from 'react'
import MonthCard from './MonthCard'

function Months() {
    const months=[
        {
            month: "JAN",
            monthNumber:1
        },
        {
            month: "FEB",
            monthNumber:2
        },
        {
            month: "MAR",
            monthNumber:3
        },
        {
            month: "APR",
            monthNumber:4
        },
        {
            month: "MAY",
            monthNumber:5
        },
        {
            month: "JUN",
            monthNumber:6
        },
        {
            month: "JUL",
            monthNumber:7
        },
        {
            month: "AUG",
            monthNumber:8
        },
        {
            month: "SEP",
            monthNumber:9
        },
        {
            month: "OCT",
            monthNumber:10
        },
        {
            month: "NOV",
            monthNumber:11
        },
        {
            month: "DEC",
            monthNumber:12
        }
    ]
  return (
   <>
   <div className=' flex flex-wrap justify-center gap-7'>
    {months.map((i)=>{
        return <MonthCard month={i.month} key={i.monthNumber} />
    })}
   </div>
    
   </>
  )
}

export default Months