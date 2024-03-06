import React from 'react'

function Summary() {
  return (
    <div className='mx-10 my-10 py-[80px] justify-center bg-slate-200'>
        <section className='flex justify-center space-x-28 ' >
            <div className='flex flex-col'>
            <span> Realised P&L </span>
                <span className='text-2xl mt-2 text-green-500 '>+46387</span>
            </div>
            <div className='flex flex-col'>
            <span>Charges & Taxes</span>
                <div className='text-2xl mt-2'>7836</div>
             </div>
            <div className='flex flex-col'>
            <span>Other credits & debits</span>
                <div className='text-2xl mt-2'>+15.2K</div>
            </div>
            <div className='flex flex-col'>
            <span>Net realised P&L</span>
                <div className='text-2xl mt-2 text-green-500 '>+89232</div>
            </div>
            <div className='flex flex-col'>
            <span>Unrealised P&L</span>
                <div className='text-2xl mt-2 '>+13.7K</div>
            </div>
        </section>
    </div>
  )
}

export default Summary